import {
  ChainSlug,
  DeploymentMode,
  IntegrationTypes,
} from "@socket.tech/dl-core";
import { Hooks, ProjectConstants } from "../../../../src";
import { Tokens } from "../../../../src/enums";

export const pc: ProjectConstants = {
  [DeploymentMode.PROD]: {
    [Tokens.WEETH]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [
        ChainSlug.MAINNET,
        ChainSlug.ARBITRUM,
        ChainSlug.BASE,
        ChainSlug.BLAST,
        ChainSlug.MODE,
      ],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
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
    [Tokens.RSWETH]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [ChainSlug.MAINNET],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
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
        },
      },
    },
    [Tokens.RSETH]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [
        ChainSlug.MAINNET,
        ChainSlug.ARBITRUM,
        ChainSlug.BASE,
        ChainSlug.OPTIMISM,
        ChainSlug.BLAST,
        ChainSlug.MODE,
      ],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
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
    [Tokens.SUSDE]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [
        ChainSlug.MAINNET,
        ChainSlug.ARBITRUM,
        ChainSlug.BASE,
        ChainSlug.OPTIMISM,
        ChainSlug.BLAST,
        ChainSlug.MODE,
      ],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
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
    [Tokens.USDE]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [
        ChainSlug.MAINNET,
        ChainSlug.ARBITRUM,
        ChainSlug.BASE,
        ChainSlug.OPTIMISM,
      ],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
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
        },
      },
    },
    [Tokens.DAI]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [
        ChainSlug.MAINNET,
        ChainSlug.ARBITRUM,
        ChainSlug.BASE,
        ChainSlug.OPTIMISM,
      ],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
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
        },
      },
    },
    [Tokens.SDAI]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [ChainSlug.MAINNET, ChainSlug.BASE, ChainSlug.OPTIMISM],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
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
        },
      },
    },
    [Tokens.PYUSD]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [ChainSlug.MAINNET],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
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
        },
      },
    },
    [Tokens.LBTC]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [ChainSlug.MAINNET, ChainSlug.BASE],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
          [ChainSlug.BASE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.CBBTC]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [ChainSlug.MAINNET, ChainSlug.BASE],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
          [ChainSlug.BASE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.EBTC]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [ChainSlug.MAINNET],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.OP]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [ChainSlug.OPTIMISM],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "5000000",
              receivingLimit: "5000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "5000000",
              receivingLimit: "5000000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.SOLVBTC]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [ChainSlug.MAINNET, ChainSlug.BASE, ChainSlug.ARBITRUM],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000",
              receivingLimit: "1000",
              poolCount: 0,
            },
          },
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000",
              receivingLimit: "1000",
              poolCount: 0,
            },
          },
          [ChainSlug.BASE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000",
              receivingLimit: "1000",
              poolCount: 0,
            },
          },
          [ChainSlug.ARBITRUM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000",
              receivingLimit: "1000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.SOLVBTCBBN]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [ChainSlug.MAINNET, ChainSlug.BASE, ChainSlug.ARBITRUM],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000",
              receivingLimit: "1000",
              poolCount: 0,
            },
          },
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000",
              receivingLimit: "1000",
              poolCount: 0,
            },
          },
          [ChainSlug.BASE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000",
              receivingLimit: "1000",
              poolCount: 0,
            },
          },
          [ChainSlug.ARBITRUM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000",
              receivingLimit: "1000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.DEUSD]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [ChainSlug.MAINNET],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "5000000",
              receivingLimit: "5000000",
              poolCount: 0,
            },
          },
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "5000000",
              receivingLimit: "5000000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.OLAS]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [
        ChainSlug.MAINNET,
        ChainSlug.ARBITRUM,
        ChainSlug.OPTIMISM,
        ChainSlug.BASE,
      ],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },

          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
          [ChainSlug.ARBITRUM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
          [ChainSlug.BASE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.AAVE]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [
        ChainSlug.MAINNET,
        ChainSlug.BASE,
        ChainSlug.ARBITRUM,
        ChainSlug.OPTIMISM,
      ],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },

          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
          [ChainSlug.BASE]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
          [ChainSlug.ARBITRUM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.MUSD]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [ChainSlug.MAINNET],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },

          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.HYPE]: {
      controllerChains: [ChainSlug.LYRA],
      vaultChains: [ChainSlug.HYPEREVM],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },

          [ChainSlug.HYPEREVM]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
        },
      },
    },
  },
};
