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
      vaultChains: [ChainSlug.LYRA],
      controllerChains: [
        ChainSlug.MAINNET,
        ChainSlug.ARBITRUM,
        ChainSlug.BASE,
        ChainSlug.BLAST,
        ChainSlug.MODE,
      ],
      superTokenInfo: {
        name: "Wrapped eETH Covered Call",
        symbol: "weETHC",
        decimals: 18,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      }, // set fields as undefined so token isn't deployed
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        // hookType: Hooks.LYRA_TSA_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.ARBITRUM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
          [ChainSlug.BASE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
          [ChainSlug.BLAST]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 1,
            },
          },
          [ChainSlug.MODE]: {
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
      vaultChains: [ChainSlug.LYRA],
      controllerChains: [ChainSlug.MAINNET],
      superTokenInfo: {
        name: "rswETH Covered Call",
        symbol: "rswETHC",
        decimals: 18,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      }, // set fields as undefined so token isn't deployed
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.MAINNET]: {
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
      vaultChains: [ChainSlug.LYRA],
      controllerChains: [
        ChainSlug.MAINNET,
        ChainSlug.ARBITRUM,
        ChainSlug.BASE,
        ChainSlug.OPTIMISM,
        ChainSlug.BLAST,
        ChainSlug.MODE,
      ],
      superTokenInfo: {
        name: "rsETH Covered Call",
        symbol: "rsETHC",
        decimals: 18,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      },
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 0,
            },
          },
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 0,
            },
          },
          [ChainSlug.ARBITRUM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 0,
            },
          },
          [ChainSlug.BASE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 0,
            },
          },
          [ChainSlug.BLAST]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 0,
            },
          },
          [ChainSlug.MODE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.SUSDEBULL]: {
      vaultChains: [ChainSlug.LYRA],
      controllerChains: [
        ChainSlug.MAINNET,
        ChainSlug.ARBITRUM,
        ChainSlug.BASE,
        ChainSlug.OPTIMISM,
        ChainSlug.BLAST,
        ChainSlug.MODE,
      ],
      superTokenInfo: {
        name: "Staked USDe Bull",
        symbol: "sUSDeBULL",
        decimals: 18,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      } as any,
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
              poolCount: 0,
            },
          },
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
              poolCount: 0,
            },
          },
          [ChainSlug.ARBITRUM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
              poolCount: 0,
            },
          },
          [ChainSlug.BASE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
              poolCount: 0,
            },
          },
          [ChainSlug.BLAST]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
              poolCount: 0,
            },
          },
          [ChainSlug.MODE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.WEETHBULL]: {
      vaultChains: [ChainSlug.LYRA],
      controllerChains: [
        ChainSlug.MAINNET,
        ChainSlug.ARBITRUM,
        ChainSlug.BASE,
        ChainSlug.BLAST,
        ChainSlug.MODE,
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
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.ARBITRUM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.BASE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.BLAST]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.MODE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
        },
      },
    },
    [Tokens.WEETHCS]: {
      vaultChains: [ChainSlug.LYRA],
      controllerChains: [
        ChainSlug.MAINNET,
        ChainSlug.ARBITRUM,
        ChainSlug.BASE,
        ChainSlug.BLAST,
        ChainSlug.MODE,
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
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.ARBITRUM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.BASE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.BLAST]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.MODE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
        },
      },
    },
    [Tokens.WEETHB]: {
      vaultChains: [ChainSlug.LYRA],
      controllerChains: [ChainSlug.MAINNET, ChainSlug.ARBITRUM, ChainSlug.BASE],
      superTokenInfo: {
        name: "Basis traded weETH",
        symbol: "bweETH",
        decimals: 18,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      } as any, // set fields as undefined so token isn't deployed
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.ARBITRUM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
          [ChainSlug.BASE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000",
              receivingLimit: "1000000",
            },
          },
        },
      },
    },
    [Tokens.LBTCCS]: {
      vaultChains: [ChainSlug.LYRA],
      controllerChains: [ChainSlug.MAINNET, ChainSlug.BASE],
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
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
            },
          },
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 1,
            },
          },
          [ChainSlug.BASE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 1,
            },
          },
        },
      },
    },
    [Tokens.LBTCPS]: {
      vaultChains: [ChainSlug.LYRA],
      controllerChains: [ChainSlug.MAINNET],
      superTokenInfo: {
        name: "LBTC Covered Put Spread",
        symbol: "LBTCPS",
        decimals: 8,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      } as any, // set fields as undefined so token isn't deployed
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
            },
          },
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 1,
            },
          },
          [ChainSlug.BASE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 1,
            },
          },
        },
      },
    },
    [Tokens.LBTCB]: {
      vaultChains: [ChainSlug.LYRA],
      controllerChains: [ChainSlug.MAINNET, ChainSlug.BASE],
      superTokenInfo: {
        name: "Basis traded LBTC",
        symbol: "bLBTC",
        decimals: 8,
        initialSupplyOwner: "0x0000000000000000000000000000000000000000",
        owner: getOwner(),
        initialSupply: "0",
      } as any, // set fields as undefined so token isn't deployed
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_WITHDRAW_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
            },
          },
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 1,
            },
          },
          [ChainSlug.BASE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 1,
            },
          },
        },
      },
    },
  },
};
