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
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.RSWETH]: {
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.RSETH]: {
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.SUSDE]: {
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
              poolCount: 0,
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
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
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
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
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
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
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
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
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000",
              receivingLimit: "1000000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
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
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "10000000",
              receivingLimit: "10000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "10000000",
              receivingLimit: "10000000",
              poolCount: 0,
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "10000000",
              receivingLimit: "10000000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.CBBTC]: {
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "10000000",
              receivingLimit: "10000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "10000000",
              receivingLimit: "10000000",
              poolCount: 0,
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "10000000",
              receivingLimit: "10000000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.EBTC]: {
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "10000000",
              receivingLimit: "10000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "10000000",
              receivingLimit: "10000000",
              poolCount: 0,
            },
          },
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "10000000",
              receivingLimit: "10000000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.OP]: {
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.SOLVBTC]: {
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.SOLVBTCBBN]: {
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.DEUSD]: {
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000",
              receivingLimit: "100000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.OLAS]: {
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
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
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
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
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
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
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },

          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },
        },
      },
    },
    [Tokens.PUFETH]: {
      controllerChains: [ChainSlug.LYRA_TESTNET],
      vaultChains: [ChainSlug.OPTIMISM_SEPOLIA],
      hook: {
        hookType: Hooks.LYRA_TSA_SHAREHANDLER_DEPOSIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.LYRA_TESTNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "100000000",
              receivingLimit: "100000000",
              poolCount: 0,
            },
          },

          [ChainSlug.OPTIMISM_SEPOLIA]: {
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
