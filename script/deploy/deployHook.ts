import { Contract } from "ethers";
import { getOwner, isSuperToken } from "../constants/config";
import { getOrDeploy } from "../helpers";
import { Hooks, HookContracts, DeployParams } from "../../src";
import { getBridgeContract } from "../helpers/common";

export const deployHookContracts = async (
  useConnnectorPools: boolean,
  deployParams: DeployParams
) => {
  const hookType = deployParams.hookType;
  if (!hookType) return deployParams;

  let contractName: string = "";
  let path: string;
  let args: any[] = [];

  let bridgeContract: Contract, bridgeAddress: string;

  // no use of connectorPools for superToken
  useConnnectorPools = isSuperToken() ? false : useConnnectorPools;

  bridgeContract = await getBridgeContract(
    deployParams.currentChainSlug,
    deployParams.currentToken,
    deployParams.addresses
  );
  bridgeAddress = bridgeContract.address;

  if (hookType == Hooks.LIMIT_HOOK) {
    contractName = HookContracts.LimitHook;
    args = [
      getOwner(),
      bridgeAddress,
      useConnnectorPools, // useControllerPools
    ];
    path = `contracts/hooks/${contractName}.sol`;
  } else if (hookType == Hooks.LIMIT_EXECUTION_HOOK) {
    contractName = HookContracts.LimitExecutionHook;
    deployParams = await deployExecutionHelper(deployParams);
    args = [
      getOwner(),
      bridgeAddress,
      deployParams.addresses[HookContracts.ExecutionHelper],
      useConnnectorPools, // useControllerPools
    ];
    path = `contracts/hooks/${contractName}.sol`;
  } else if (hookType == Hooks.LYRA_TSA_DEPOSIT_HOOK) {
    contractName = HookContracts.LyraTSADepositHook;
    args = [
      getOwner(),
      bridgeAddress,
      useConnnectorPools, // useControllerPools
    ];
    path = `contracts/hooks/lyra/LyraTSAHooks.sol`;
  } else if (hookType == Hooks.LYRA_TSA_WITHDRAW_HOOK) {
    contractName = HookContracts.LyraTSAWithdrawHook;
    args = [
      getOwner(),
      bridgeAddress,
      useConnnectorPools, // useControllerPools
    ];
    path = `contracts/hooks/lyra/LyraTSAHooks.sol`;
  } else if (hookType == Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK) {
    contractName = HookContracts.LyraTSAShareHandlerDepositHook;
    args = [
      getOwner(),
      bridgeAddress,
      useConnnectorPools, // useControllerPools
    ];
    path = `contracts/hooks/lyra/LyraTSAShareHandlerHooks.sol`;
  } else if (hookType == Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK) {
    contractName = HookContracts.LyraTSAShareHandlerWithdrawHook;
    args = [
      getOwner(),
      bridgeAddress,
      useConnnectorPools, // useControllerPools
    ];
    path = `contracts/hooks/lyra/LyraTSAShareHandlerHooks.sol`;
  }

  if (!contractName) return deployParams;

  const hookContract: Contract = await getOrDeploy(
    contractName,
    path,
    args,
    deployParams
  );
  deployParams.addresses[contractName] = hookContract.address;

  // console.log(deployParams.addresses);
  console.log(deployParams.currentChainSlug, "Hook Contracts deployed! ✔");

  return deployParams;
};

const deployExecutionHelper = async (deployParams: DeployParams) => {
  let contractName = HookContracts.ExecutionHelper;
  let path = `contracts/hooks/plugins/${contractName}.sol`;

  const executionHelperContract: Contract = await getOrDeploy(
    contractName,
    path,
    [getOwner()],
    deployParams
  );
  deployParams.addresses[contractName] = executionHelperContract.address;
  return deployParams;
};
