import { getProjectAddresses } from "../helpers";
import { ethers } from "ethers";
import { getProviderFromChainSlug } from "../helpers/networks";
import { ERC20__factory } from "../../typechain-types";
import { tokenDecimals } from "../../src/enums";
import { getHookContract } from "../helpers/common";

export const main = async () => {

  try {
    const addresses = getProjectAddresses();
    for (const chain of Object.keys(addresses)) {
      console.log(`\nChecking addresses for chain ${chain}`);

      for (const token of Object.keys(addresses[chain])) {
        if (!addresses[chain][token].Controller) continue;

        const hookContract = (await getHookContract(chain as any, token as any, addresses[chain][token])).hookContract;

        let toUpdate = [];

        console.log(`\nChecking addresses for token ${token} hook ${hookContract.address}`);

        for (const connectorChain of Object.keys(addresses[chain][token].connectors)) {
          const connector = addresses[chain][token].connectors[connectorChain]["FAST"];

          const poolId = await hookContract.functions.connectorPoolIds(connector);
          const limit = await hookContract.functions.poolLockedAmounts(poolId[0]);

          const limit_f = +(ethers.utils.formatUnits(limit[0], tokenDecimals[token]));

          console.log(`${connectorChain} limit: ${limit_f}`)

          // get the amount locked in the vault for that connector
          const vaultAddr = addresses[connectorChain][token].Vault;
          const tokenAddress = addresses[connectorChain][token].NonMintableToken;

          const tokenContract = ERC20__factory.connect(
            tokenAddress,
            getProviderFromChainSlug(+connectorChain)
          );
          const vaultBalance = await tokenContract.balanceOf(vaultAddr);
          const balance_f = +(ethers.utils.formatUnits(vaultBalance, tokenDecimals[token]));
          console.log(`Amount locked ${balance_f}`)

          if (Math.abs(limit_f - balance_f) > 0.01) {
            console.log(`Mismatching balances for connector ${connectorChain} token ${token} poolId ${poolId[0]}`);

            toUpdate.push(
              [poolId[0], vaultBalance]
            )
          }
        }

        if (toUpdate.length > 0) {
          console.log(`// ${chain}\n_call(${hookContract.address}, hex"${(await hookContract.populateTransaction["updatePoolLockedAmounts"](
            toUpdate.map(([x, _]) => x), toUpdate.map(([_, x]) => x)
          )).data.slice(2)}");`)
        }
      }
    }
  } catch (error) {
    console.error("Error while checking vault balances", error);
  }
};

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
