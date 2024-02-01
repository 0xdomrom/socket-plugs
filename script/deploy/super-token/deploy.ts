import { config as dotenvConfig } from "dotenv";
dotenvConfig();

import { Contract, Wallet } from "ethers";
import { ChainSlug, getAddresses } from "@socket.tech/dl-core";
import { DeployParams, getInstance } from "../../helpers/utils";
import {
  SuperTokenContracts,
  SuperTokenChainAddresses,
  SuperTokenAddresses,
} from "../../../src";
import { getSignerFromChainSlug, overrides } from "../../helpers/networks";

import { config } from "./config";
import {
  getSuperTokenProjectAddresses,
  superTokenDeploymentsPath,
  storeSuperTokenAddresses,
  getOrDeployContract,
} from "./utils";
import { getMode } from "../../constants/config";

export interface ReturnObj {
  allDeployed: boolean;
  deployedAddresses: SuperTokenChainAddresses;
}

/**
 * Deploys contracts for all networks
 */
export const main = async () => {
  try {
    let addresses: SuperTokenAddresses;
    try {
      addresses = await getSuperTokenProjectAddresses(
        config.projectName.toLowerCase()
      );
    } catch (error) {
      addresses = {} as SuperTokenAddresses;
    }

    const vaultChains = Object.keys(config.vaultTokens);
    await Promise.all(
      [...vaultChains].map(async (chain: string) => {
        const chainSlug = parseInt(chain) as ChainSlug;
        const signer = getSignerFromChainSlug(chainSlug);

        let allDeployed = false;
        let chainAddresses: SuperTokenChainAddresses = addresses[chainSlug]
          ? (addresses[chainSlug] as SuperTokenChainAddresses)
          : ({} as SuperTokenChainAddresses);

        while (!allDeployed) {
          const results: ReturnObj = await deploy(
            false,
            signer,
            chainSlug,
            chainAddresses,
            getSocketAddress(chainSlug)
          );

          allDeployed = results.allDeployed;
          chainAddresses = results.deployedAddresses;
        }
      })
    );

    await Promise.all(
      [...config.superTokenChains].map(async (chainSlug: ChainSlug) => {
        let allDeployed = false;
        const signer = getSignerFromChainSlug(chainSlug);

        let chainAddresses: SuperTokenChainAddresses = addresses[chainSlug]
          ? (addresses[chainSlug] as SuperTokenChainAddresses)
          : ({} as SuperTokenChainAddresses);

        while (!allDeployed) {
          const results: ReturnObj = await deploy(
            true,
            signer,
            chainSlug,
            chainAddresses,
            getSocketAddress(chainSlug)
          );

          allDeployed = results.allDeployed;
          chainAddresses = results.deployedAddresses;
        }
      })
    );
  } catch (error) {
    console.log("Error in deploying contracts", error);
  }
};

/**
 * Deploys network-independent contracts
 */
const deploy = async (
  isSuperTokenChain: boolean,
  socketSigner: Wallet,
  chainSlug: number,
  deployedAddresses: SuperTokenChainAddresses,
  socketAddress: string
): Promise<ReturnObj> => {
  let allDeployed = false;

  let deployUtils: DeployParams = {
    addresses: deployedAddresses,
    signer: socketSigner,
    currentChainSlug: chainSlug,
  };

  try {
    deployUtils = await deployPlug(deployUtils, socketAddress);
    deployUtils = await deployExecutionHelper(deployUtils);

    let superToken;
    if (isSuperTokenChain) {
      deployUtils = await deploySuperToken(deployUtils);
      superToken = deployUtils.addresses[SuperTokenContracts.SuperToken];
    } else {
      if (
        !config.vaultTokens[chainSlug] &&
        !config.vaultTokens[chainSlug].token
      )
        throw new Error("Token not found!");
      deployUtils.addresses[SuperTokenContracts.NonSuperToken] =
        config.vaultTokens[chainSlug].token;

      deployUtils = await deployVault(deployUtils);
      superToken = deployUtils.addresses[SuperTokenContracts.SuperTokenVault];
    }

    await setSuperTokenOrVault(superToken, deployUtils);

    allDeployed = true;
    console.log(deployUtils.addresses);
    console.log("Contracts deployed!");
  } catch (error) {
    console.log(
      `Error in deploying setup contracts for ${deployUtils.currentChainSlug}`,
      error
    );
  }

  await storeSuperTokenAddresses(
    deployUtils.addresses as SuperTokenChainAddresses,
    deployUtils.currentChainSlug,
    `${getMode()}_${config.projectName.toLowerCase()}_addresses.json`,
    superTokenDeploymentsPath
  );
  return {
    allDeployed,
    deployedAddresses: deployUtils.addresses as SuperTokenChainAddresses,
  };
};

const setSuperTokenOrVault = async (
  superToken: string,
  deployParams: DeployParams
) => {
  try {
    let socketPlug: Contract = await getInstance(
      SuperTokenContracts.SocketPlug,
      deployParams.addresses[SuperTokenContracts.SocketPlug]
    );

    socketPlug = socketPlug.connect(deployParams.signer);
    const contractState = await socketPlug.tokenOrVault__();
    console.log(
      `contract state: ${contractState}, superToken: ${superToken}, ${deployParams.currentChainSlug}`
    );
    if (contractState.toLowerCase() === superToken.toLowerCase()) {
      console.log("Token already set!");
      return;
    }

    let tx = await socketPlug.setSuperTokenOrVault(superToken, {
      ...overrides[deployParams.currentChainSlug],
    });
    console.log(deployParams.currentChainSlug, tx.hash);
    await tx.wait();

    console.log("Initialized Socket plug!");
  } catch (error) {
    console.log("Error in deploying chain contracts", error);
  }
};

const deployPlug = async (
  deployParams: DeployParams,
  socketAddress: string
): Promise<DeployParams> => {
  try {
    if (deployParams.addresses[SuperTokenContracts.SocketPlug])
      return deployParams;

    const socketPlug: Contract = await getOrDeployContract(
      SuperTokenContracts.SocketPlug,
      "contracts/supertoken/plugs/SocketPlug.sol",
      [socketAddress, config.owner, deployParams.currentChainSlug],
      deployParams,
      `${getMode()}_${config.projectName.toLowerCase()}`
    );

    deployParams.addresses[SuperTokenContracts.SocketPlug] = socketPlug.address;
    console.log(deployParams.addresses);
    console.log("Chain Contracts deployed!");
  } catch (error) {
    console.log("Error in deploying chain contracts", error);
  }
  return deployParams;
};

const deployExecutionHelper = async (
  deployParams: DeployParams
): Promise<DeployParams> => {
  try {
    if (deployParams.addresses[SuperTokenContracts.ExecutionHelper])
      return deployParams;

    const executionHelper: Contract = await getOrDeployContract(
      SuperTokenContracts.ExecutionHelper,
      "contracts/supertoken/ExecutionHelper.sol",
      [],
      deployParams,
      `${getMode()}_${config.projectName.toLowerCase()}`
    );

    deployParams.addresses[SuperTokenContracts.ExecutionHelper] =
      executionHelper.address;
    console.log(deployParams.addresses);
    console.log("ExecutionHelper Contract deployed!");
  } catch (error) {
    console.log("Error in deploying chain contracts", error);
  }
  return deployParams;
};

const deploySuperToken = async (
  deployParams: DeployParams
): Promise<DeployParams> => {
  try {
    if (
      deployParams.addresses &&
      deployParams.addresses[SuperTokenContracts.SuperToken]
    )
      return deployParams;

    const superToken: Contract = await getOrDeployContract(
      SuperTokenContracts.SuperToken,
      "contracts/supertoken/SuperToken.sol",
      [
        config.tokenName,
        config.tokenSymbol,
        config.tokenDecimal,
        config.initialSupplyOwner,
        config.owner,
        config.initialSupply,
        deployParams.addresses[SuperTokenContracts.SocketPlug],
        deployParams.addresses[SuperTokenContracts.ExecutionHelper],
      ],
      deployParams,
      `${getMode()}_${config.projectName.toLowerCase()}`
    );
    deployParams.addresses[SuperTokenContracts.SuperToken] = superToken.address;
    console.log(deployParams.addresses);
    console.log("Chain Contracts deployed!");
  } catch (error) {
    console.log("Error in deploying chain contracts", error);
  }
  return deployParams;
};

const deployVault = async (
  deployParams: DeployParams
): Promise<DeployParams> => {
  console.log("deploying vault.......");

  if (
    deployParams.addresses &&
    deployParams.addresses[SuperTokenContracts.SuperTokenVault]
  )
    return deployParams;

  try {
    if (!deployParams.addresses[SuperTokenContracts.NonSuperToken])
      throw new Error("Token not found on chain");

    const vault: Contract = await getOrDeployContract(
      SuperTokenContracts.SuperTokenVault,
      "contracts/supertoken/SuperTokenVault.sol",
      [
        deployParams.addresses[SuperTokenContracts.NonSuperToken],
        config.owner,
        deployParams.addresses[SuperTokenContracts.SocketPlug],
        deployParams.addresses[SuperTokenContracts.ExecutionHelper],
      ],
      deployParams,
      `${getMode()}_${config.projectName.toLowerCase()}`
    );
    deployParams.addresses[SuperTokenContracts.SuperTokenVault] = vault.address;

    console.log(deployParams.addresses);
    console.log("Chain Contracts deployed!");
  } catch (error) {
    console.log("Error in deploying chain contracts", error);
  }
  return deployParams;
};

const getSocketAddress = (chain: ChainSlug) => {
  return getAddresses(chain, getMode()).Socket;
};
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });