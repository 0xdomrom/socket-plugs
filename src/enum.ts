export enum Hooks {
  NO_HOOK = "NO_HOOK",
  LIMIT_HOOK = "LIMIT_HOOK",
  LIMIT_EXECUTION_HOOK = "LIMIT_EXECUTION_HOOK",
  YIELD_LIMIT_EXECUTION_HOOK = "YIELD_LIMIT_EXECUTION_HOOK",
  LYRA_TSA_DEPOSIT_HOOK = "LYRA_TSA_DEPOSIT_HOOK",
  LYRA_TSA_WITHDRAW_HOOK = "LYRA_TSA_WITHDRAW_HOOK",
  LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK = "LYRA_TSA_SHARE_HANDLER_DEPOSIT_HOOK",
  LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK = "LYRA_TSA_SHARE_HANDLER_WITHDRAW_HOOK",
  // CONTROLLER_YIELD_LIMIT_EXECUTION_HOOK = "CONTROLLER_YIELD_LIMIT_EXECUTION_HOOK",
  // VAULT_YIELD_LIMIT_EXECUTION_HOOK = "VAULT_YIELD_LIMIT_EXECUTION_HOOK",
}

export enum ProjectType {
  SUPERBRIDGE = "superbridge",
  SUPERTOKEN = "supertoken",
}

export enum CommonContracts {
  Vault = "Vault",
  Controller = "Controller",
  NonMintableToken = "NonMintableToken",
}

export enum TokenContracts {
  NonMintableToken = "NonMintableToken",
  MintableToken = "MintableToken",
  SuperToken = "SuperToken",
}

export enum SuperBridgeContracts {
  MintableToken = "MintableToken",
  NonMintableToken = "NonMintableToken",
  Vault = "Vault",
  Controller = "Controller",
  FiatTokenV2_1_Controller = "FiatTokenV2_1_Controller",
  ExchangeRate = "ExchangeRate",
  ConnectorPlug = "ConnectorPlug",
}

export enum HookContracts {
  LimitHook = "LimitHook",
  LimitExecutionHook = "LimitExecutionHook",
  ControllerYieldLimitExecutionHook = "Controller_YieldLimitExecHook",
  VaultYieldLimitExecutionHook = "Vault_YieldLimitExecHook",
  ExecutionHelper = "ExecutionHelper",
  LyraTSADepositHook = "LyraTSADepositHook",
  LyraTSAWithdrawHook = "LyraTSAWithdrawHook",
  LyraTSAShareHandlerDepositHook = "LyraTSAShareHandlerDepositHook",
  LyraTSAShareHandlerWithdrawHook = "LyraTSAShareHandlerWithdrawHook",
}
export enum SuperTokenContracts {
  NonSuperToken = "NonSuperToken",
  SuperToken = "SuperToken",
}
