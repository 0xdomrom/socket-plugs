import { ChainSlug } from "@socket.tech/dl-core";
import { Tokens } from "./tokens";

export const ExistingTokenAddresses: {
  [key in ChainSlug]?: { [key in Tokens]?: string };
} = {
  [ChainSlug.MAINNET]: {
    [Tokens.USDC]: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    [Tokens.USDT]: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    [Tokens.WETH]: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    [Tokens.WBTC]: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    [Tokens.SNX]: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
    [Tokens.WSTETH]: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
    [Tokens.DAI]: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    [Tokens.ETH]: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    [Tokens.WEETH]: "0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee",
    [Tokens.RSWETH]: "0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0",
    [Tokens.RSETH]: "0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7",
    [Tokens.SUSDE]: "0x9d39a5de30e57443bff2a8307a4256c8797a3497",
  },
  [ChainSlug.OPTIMISM]: {
    [Tokens.USDC]: "0x8e0b7e6062272B5eF4524250bFFF8e5Bd3497757",
    [Tokens.USDCE]: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
    [Tokens.USDT]: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
    [Tokens.WETH]: "0x4200000000000000000000000000000000000006",
    [Tokens.WBTC]: "0x68f180fcce6836688e9084f035309e29bf0a2095",
    [Tokens.SNX]: "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
    [Tokens.WSTETH]: "0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb",
    [Tokens.DAI]: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    [Tokens.ETH]: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    [Tokens.RSETH]: "0x87eEE96D50Fb761AD85B1c982d28A042169d61b1",
    [Tokens.SUSDE]: "0x211cc4dd073734da055fbf44a2b4667d5e5fe5d2",
  },
  [ChainSlug.POLYGON_MAINNET]: {
    [Tokens.USDC]: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
    [Tokens.USDCE]: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    [Tokens.FUD]: "0x403e967b044d4be25170310157cb1a4bf10bdd0f",
    [Tokens.FOMO]: "0x44a6e0be76e1d9620a7f76588e4509fe4fa8e8c8",
    [Tokens.ALPHA]: "0x6a3E7C3c6EF65Ee26975b12293cA1AAD7e1dAeD2",
    [Tokens.KEK]: "0x42E5E06EF5b90Fe15F853F59299Fc96259209c5C",
    [Tokens.GLTR]: "0x3801C3B3B5c98F88a9c9005966AA96aa440B9Afc",
    [Tokens.USDT]: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    [Tokens.DAI]: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    [Tokens.WETH]: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    [Tokens.WBTC]: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    [Tokens.WETH]: "0x4200000000000000000000000000000000000006",
  },
  [ChainSlug.BASE]: {
    [Tokens.USDC]: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    [Tokens.WETH]: "0x4200000000000000000000000000000000000006",
    [Tokens.WSTETH]: "0xc1cba3fcea344f92d9239c08c0568f6f2f0ee452",
    [Tokens.DAI]: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    [Tokens.ETH]: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    [Tokens.WEETH]: "0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A",
    [Tokens.RSETH]: "0xEDfa23602D0EC14714057867A78d01e94176BEA0",
    [Tokens.SUSDE]: "0x211cc4dd073734da055fbf44a2b4667d5e5fe5d2",
  },
  [ChainSlug.ARBITRUM]: {
    [Tokens.USDC]: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    [Tokens.USDCE]: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
    [Tokens.USDT]: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    [Tokens.WETH]: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    [Tokens.WBTC]: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
    [Tokens.WSTETH]: "0x5979D7b546E38E414F7E9822514be443A4800529",
    [Tokens.DAI]: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    [Tokens.ETH]: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    [Tokens.MTK]: "0x094553F42B44Ea1492b0dcA5f4134F23f45db742",
    [Tokens.STIME]: "0x17AfF554423D2C40A1BBF51b443E9d43dd8AE1eb",
    [Tokens.WEETH]: "0x35751007a407ca6feffe80b3cb397736d2cf4dbe",
    [Tokens.RSETH]: "0x4186BFC76E2E237523CBC30FD220FE055156b41F",
    [Tokens.SUSDE]: "0x211cc4dd073734da055fbf44a2b4667d5e5fe5d2",
  },
  [ChainSlug.MODE]: {
    [Tokens.WEETH]: "0x04c0599ae5a44757c0af6f9ec3b93da8976c150a",
    [Tokens.RSETH]: "0xe7903B1F75C534Dd8159b313d92cDCfbC62cB3Cd",
    [Tokens.SUSDE]: "0x211cc4dd073734da055fbf44a2b4667d5e5fe5d2",
  },
  [ChainSlug.BLAST]: {
    [Tokens.WEETH]: "0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A",
    [Tokens.RSETH]: "0xe7903b1f75c534dd8159b313d92cdcfbc62cb3cd",
    [Tokens.SUSDE]: "0x211cc4dd073734da055fbf44a2b4667d5e5fe5d2",
  },
  [ChainSlug.ARBITRUM_SEPOLIA]: {
    [Tokens.USDC]: "0x8537307810fC40F4073A12a38554D4Ff78EfFf41",
    [Tokens.USDT]: "0x66DFb9987C36c4be232156e70B085f664367599A",
    [Tokens.DAI]: "0x9a573B27D7298c6E2f4d2D4a41c37A0C8AF6accA",
    [Tokens.WETH]: "0x565810cbfa3Cf1390963E5aFa2fB953795686339",
    [Tokens.ETH]: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    [Tokens.MTK]: "0x094553F42B44Ea1492b0dcA5f4134F23f45db742",
    [Tokens.WBTC]: "0x1019958C2BD43B882a4e1349337a32Ef9563FC4D",
    // Dummy tokens
    [Tokens.WEETH]: "0xE0AcE05Ded5f3653aB0caAAf19E458DAb2E824F2",
    [Tokens.RSETH]: "0x8C4516853074c4Bb3bA921fE9e714aC322F7081C",
    [Tokens.SUSDE]: "0xE820506a947396C20fA852AFc17CDf234b76e9a0",
  },
  [ChainSlug.SEPOLIA]: {
    [Tokens.USDC]: "0x565810cbfa3Cf1390963E5aFa2fB953795686339",
    [Tokens.USDT]: "0xB4130e87A180b9448286B291331aEe8A9C154A3A",
    [Tokens.DAI]: "0x255745E5C7Ae620b7f523F5E4A0Ead37660EC5d6",
    // [Tokens.WETH]: "0xE67ABDA0D43f7AC8f37876bBF00D1DFadbB93aaa", // actual weth
    [Tokens.WETH]: "0x771d1Ae208377453D478dF08BbC38034F72aC833", // dummy token
    [Tokens.WBTC]: "0x94BEff5da6201cB2C8F489196FD970B3DF5aA32A",
    [Tokens.ETH]: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    // Dummy tokens
    [Tokens.WEETH]: "0x07243151E40CDD44e8C2DFC513f74218F92dE337",
    [Tokens.RSWETH]: "0x04DFA269467fDDDae51F65B9b21C835bDb1A1f55",
    // Lyra tokenized subaccount shares
    [Tokens.WEETHC]: "0x87c9744413d2c0F93231Def99025119099a7c287",
    [Tokens.RSWETHC]: "0x59d46ac60A9B0dB2211df832a46f58c9C1263BBf",
  },
  [ChainSlug.AEVO_TESTNET]: {
    [Tokens.USDC]: "0x4D435C00E09034ec2113F63088CCD0be0a0fd06e",
  },
  [ChainSlug.OPTIMISM_SEPOLIA]: {
    [Tokens.USDC]: "0x6D290609b3F5F02D52F28d97C75a443ED8564cBf",
    [Tokens.USDT]: "0x2d1abA6FaBAe80bF5C1C9EA433AAe9030E07CB22",
    [Tokens.DAI]: "0xDC0258dc3dB980090E97EbF4f1FD9Cc3C5AD5894",
    [Tokens.WETH]: "0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3",
    [Tokens.ETH]: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    [Tokens.WBTC]: "0xfC5CC93d85861ac82d89fc2D3e56315540E9C8A7",
    // Dummy tokens
    [Tokens.WEETH]: "0x8467d28492bB13cC964C49Fcc2fCA8A8B478836E",
    [Tokens.RSWETH]: "0x0b3639A094854796E3b236DB08646ffd21C0B1B2",
    [Tokens.RSETH]: "0xE11D1F74C0FC6c4Fe45BEAD7daB6CC8044C234C8",
    // Lyra tokenized subaccount shares
    [Tokens.WEETHC]: "0xfe051Cc322F5124e53cA89611dD0c9a32F350a1C",
    [Tokens.RSWETHC]: "0x51741cbDcd28e770729f1c98d02Ab41E565A5960",
    [Tokens.SUSDE]: "0xe21739C53fa561c5334Efd45c6cC3DB9ca99B5C3",
  },
  [ChainSlug.AEVO_TESTNET]: {
    [Tokens.USDC]: "0x4D435C00E09034ec2113F63088CCD0be0a0fd06e",
  },
  [ChainSlug.LYRA_TESTNET]: {
    [Tokens.USDC]: "0xe80F2a02398BBf1ab2C9cc52caD1978159c215BD",
    [Tokens.WBTC]: "0xF1493F3602Ab0fC576375a20D7E4B4714DB4422d",
    [Tokens.WETH]: "0x3a34565D81156cF0B1b9bC5f14FD00333bcf6B93",
    [Tokens.USDT]: "0x0fd4d2dEc9c5830516176e5A1ee552f9431A1b09",
    [Tokens.SNX]: "0x751FD1d1B327D6d842cD57CAAEABf581836cFF5F",
    [Tokens.WSTETH]: "0x37Db2a7cFb832442861F0053db422bDEA20DE847",
    // Deposit tokens
    [Tokens.WEETH]: "0x7ef0873bBf91B8Ecac22c0e9466b17c6Cc14B1bd",
    [Tokens.RSWETH]: "0xa7456213A5c081F53fEb3A4F64b88A4637Bf3028",
    [Tokens.RSETH]: "0xc3ad6f6E0940df79e12b30F307109fc4Ec2ED7D0",
    [Tokens.SUSDE]: "0xd87d41f1e4d8b48F3cA18faFc1069b18F9c15B9d",
    // Vault tokens
    [Tokens.WEETHC]: "0x79AC9B13810D31066Be547EdA46C40264b39397D",
    [Tokens.RSWETHC]: "0x797Db58F4c6611253e92B9a3260E3Cc9C69430a5",
    [Tokens.RSETHC]: "0xD9f47BEBEe03C90855c209e06f884fa0551c1fDd",
    [Tokens.SUSDEBULL]: "0x4BAC0257C1a5be3814653789C6e60afF2F5f1DaD",
    [Tokens.WEETHBULL]: "0xfdb2a80b21Ed2D6D738e2a4221931A343675382A",
    [Tokens.WEETHCS]: "0x4900D5BbB97cea689C301E1805837a78eeBD8573"
  },
  [ChainSlug.LYRA]: {
    [Tokens.USDC]: "0x6879287835A86F50f784313dBEd5E5cCC5bb8481",
    [Tokens.WBTC]: "0x9b80ab732a6F1030326Af0014f106E12C4Db18EC",
    [Tokens.WETH]: "0x15CEcd5190A43C7798dD2058308781D0662e678E",
    [Tokens.USDT]: "0x954bE1803546150bfd887c9ff70fd221F2F505d3",
    [Tokens.SNX]: "0xE4e6F3feeAD9C3714F3c9380F91CB56E04F7297E",
    [Tokens.WSTETH]: "0xdf77b286eDa539CCb6326e9eDB86aa69D83108a5",
    // Deposit tokens
    [Tokens.WEETH]: "0x7B35b4c05a90Ea5f311AeC815BE4148b446a68a2",
    [Tokens.RSWETH]: "0xC419959850d49166C2d5250Ee89ff9910679D8c8",
    [Tokens.RSETH]: "0xc47e2E800a9184cFbD274AC1eeCcCDF942715dB7",
    [Tokens.SUSDE]: "0xb82d12742c3728a14eaa43ebe1c0d32bb62216eb",
    // Vault tokens
    [Tokens.WEETHC]: "0xec68928bd83B2E52fF5A8e8c215B6ea72879F521",
    [Tokens.RSWETHC]: "0x5bbef94dcee8f087D5146d2815bC4955C76B2794",
    [Tokens.RSETHC]: "0xd35bb8582809b4BDa4F8bCCE1bde48559f63eCbf",
    [Tokens.SUSDEBULL]: "0x0b4eD379da8eF4FCF06F697c5782CA7b4c3E505E",
  },
};
