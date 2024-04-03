import { Contract, Wallet } from "ethers";

import { ChainSlug } from "@socket.tech/dl-core";
import { getInstance, execute } from "../helpers";
import {
  Connectors,
  HookContracts,
  Tokens,
  SBTokenAddresses,
  STTokenAddresses,
} from "../../src";
import { getSocketOwner } from "../constants/config";
import { LIMIT_UPDATER_ROLE } from "../constants/roles";
import {
  checkAndGrantRole,
  getHookContract,
  updateLimitsAndPoolId,
} from "../helpers/common";

export const configureHooks = async (
  chain: ChainSlug,
  token: Tokens,
  bridgeContract: Contract,
  socketSigner: Wallet,
  siblingSlugs: ChainSlug[],
  connectors: Connectors,
  addr: SBTokenAddresses | STTokenAddresses
) => {
  let { hookContract, hookContractName } = await getHookContract(
    chain,
    token,
    addr
  );
  if (hookContractName === HookContracts.LimitExecutionHook) {
    await setHookInExecutionHelper(chain, socketSigner, hookContract, addr);
  }
  await setHookInBridge(chain, bridgeContract, hookContract);

  if (
    [HookContracts.LimitHook, HookContracts.LimitExecutionHook].includes(
      hookContractName as HookContracts
    )
  ) {
    await setLimitUpdaterRole(chain, hookContract);

    await updateLimitsAndPoolId(
      chain,
      token,
      siblingSlugs,
      addr,
      connectors,
      hookContract
    );
  }
};

export const setLimitUpdaterRole = async (
  chain: ChainSlug,
  hookContract: Contract
) => {
  await checkAndGrantRole(
    chain,
    hookContract,
    "limit updater",
    LIMIT_UPDATER_ROLE,
    getSocketOwner()
  );
};

export const setHookInBridge = async (
  chain: ChainSlug,
  bridgeContract: Contract,
  hookContract: Contract
) => {
  let storedHookAddress = await bridgeContract.hook__();
  if (storedHookAddress === hookContract.address) {
    console.log(`✔   Hook already set on Bridge for chain ${chain}`);
    return;
  }
  await execute(
    bridgeContract,
    "updateHook",
    [hookContract.address, false],
    chain
  );
};

export const setHookInExecutionHelper = async (
  chain: ChainSlug,
  socketSigner: Wallet,
  hookContract: Contract,
  addr: SBTokenAddresses | STTokenAddresses
) => {
  let executionHelperContract = await getInstance(
    HookContracts.ExecutionHelper,
    addr[HookContracts.ExecutionHelper]
  );
  executionHelperContract = executionHelperContract.connect(socketSigner);

  let storedHookAddress = await executionHelperContract.hook();
  if (storedHookAddress === hookContract.address) {
    console.log(`✔   Hook already set on Execution Helper for chain ${chain}`);
    return;
  }
  await execute(
    executionHelperContract,
    "setHook",
    [hookContract.address],
    chain
  );
};
