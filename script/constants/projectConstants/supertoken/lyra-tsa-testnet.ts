import {
  ChainSlug,
  DeploymentMode,
  IntegrationTypes,
} from "@socket.tech/dl-core";
import { Hooks, ProjectConstants } from "../../../../src";
import { Tokens } from "../../../../src/enums";
import { getOwner } from "../../config";

export const pc: ProjectConstants = {
  [DeploymentMode.PROD]: {
    [Tokens.WEETHC]: {
      vaultChains: [ChainSlug.LYRA_TESTNET],
      controllerChains: [
        ChainSlug.ARBITRUM_SEPOLIA,
        ChainSlug.OPTIMISM_SEPOLIA,
      ],
      superTokenInfo: {
        name: "Wrapped eETH Covered Call",
        symbol: "weETHC",
        decimals: 18,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      } as any, // set fields as undefined so token isn't deployed
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
        },
      },
    },
    [Tokens.RSWETHC]: {
      vaultChains: [ChainSlug.LYRA_TESTNET],
      controllerChains: [ChainSlug.ARBITRUM_SEPOLIA],
      superTokenInfo: {
        name: "rswETH Covered Call",
        symbol: "rswETHC",
        decimals: 18,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      } as any, // set fields as undefined so token isn't deployed
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
        },
      },
    },
    [Tokens.RSETHC]: {
      vaultChains: [ChainSlug.LYRA_TESTNET],
      controllerChains: [
        ChainSlug.ARBITRUM_SEPOLIA,
        ChainSlug.OPTIMISM_SEPOLIA,
      ],
      superTokenInfo: {
        name: "rsETH Covered Call",
        symbol: "rsETHC",
        decimals: 18,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      } as any, // set fields as undefined so token isn't deployed
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
        },
      },
    },
    [Tokens.SUSDEBULL]: {
      vaultChains: [ChainSlug.LYRA_TESTNET],
      controllerChains: [
        ChainSlug.ARBITRUM_SEPOLIA,
        ChainSlug.OPTIMISM_SEPOLIA,
      ],
      superTokenInfo: {
        name: "Staked USDe Bull",
        symbol: "sUSDeBULL",
        decimals: 18,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      } as any, // set fields as undefined so token isn't deployed
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
              poolCount: 1,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
              poolCount: 1,
            },
          },
        },
      },
    },
    [Tokens.WEETHBULL]: {
      vaultChains: [ChainSlug.LYRA_TESTNET],
      controllerChains: [
        ChainSlug.ARBITRUM_SEPOLIA,
        ChainSlug.OPTIMISM_SEPOLIA,
      ],
      superTokenInfo: {
        name: "Wrapped eETH Bull",
        symbol: "weETHBULL",
        decimals: 18,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      } as any, // set fields as undefined so token isn't deployed
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
        },
      },
    },
    [Tokens.WEETHCS]: {
      vaultChains: [ChainSlug.LYRA_TESTNET],
      controllerChains: [
        ChainSlug.ARBITRUM_SEPOLIA,
        ChainSlug.OPTIMISM_SEPOLIA,
      ],
      superTokenInfo: {
        name: "Wrapped eETH Covered Call Spread",
        symbol: "weETHCS",
        decimals: 18,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      } as any, // set fields as undefined so token isn't deployed
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
        },
      },
    },
    [Tokens.LBTCCS]: {
      vaultChains: [ChainSlug.LYRA_TESTNET],
      controllerChains: [
        ChainSlug.ARBITRUM_SEPOLIA,
        ChainSlug.OPTIMISM_SEPOLIA,
      ],
      superTokenInfo: {
        name: "LBTC Covered Call Spread",
        symbol: "LBTCCS",
        decimals: 8,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      } as any, // set fields as undefined so token isn't deployed
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
        },
      },
    },
    [Tokens.LBTCPS]: {
      vaultChains: [ChainSlug.LYRA_TESTNET],
      controllerChains: [
        ChainSlug.ARBITRUM_SEPOLIA,
        ChainSlug.OPTIMISM_SEPOLIA,
      ],
      superTokenInfo: {
        name: "LBTC Bull Put Spread",
        symbol: "LBTCPS",
        decimals: 8,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      } as any, // set fields as undefined so token isn't deployed
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
        },
      },
    },
    [Tokens.WEETHB]: {
      vaultChains: [ChainSlug.LYRA_TESTNET],
      controllerChains: [
        ChainSlug.ARBITRUM_SEPOLIA,
        ChainSlug.OPTIMISM_SEPOLIA,
      ],
      superTokenInfo: {
        name: "Wrapped eETH Bull Trade",
        symbol: "weETHB",
        decimals: 18,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      } as any, // set fields as undefined so token isn't deployed
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
        },
      },
    },
    [Tokens.LBTCB]: {
      vaultChains: [ChainSlug.LYRA_TESTNET],
      controllerChains: [
        ChainSlug.ARBITRUM_SEPOLIA,
        ChainSlug.OPTIMISM_SEPOLIA,
      ],
      superTokenInfo: {
        name: "LBTC Basis Trade",
        symbol: "LBTCB",
        decimals: 8,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      } as any, // set fields as undefined so token isn't deployed
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
        },
      },
    },
  },
};
