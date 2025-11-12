import hre from "hardhat";
import fs from "fs";

import { getProjectAddresses, verify } from "../helpers/deployUtils";
import {
  ChainSlug,
  ChainSlugToKey as ChainSlugToHardhatKey,
} from "@socket.tech/dl-core";
import { getVerificationPath } from "../helpers/utils";
import { getTokens } from "../constants";
import { SBTokenAddresses } from "../../src";

export type VerifyParams = {
  [chain in ChainSlug]?: VerifyArgs[];
};
type VerifyArgs = [string, string, string, any[]];

function flattenObjAndGetAddresses(addrs: object): Set<string> {
  const addrSet = new Set<string>();
  for (const entry of Object.entries(addrs)) {
    if (typeof entry[1] === "object") {
      const additionalSet = flattenObjAndGetAddresses(entry[1]);
      additionalSet.forEach((addr) => addrSet.add(addr));
    } else if (typeof entry[1] === "string" && entry[1].startsWith("0x")) {
      addrSet.add(entry[1] as string);
    }
  }
  return addrSet;
}

/**
 * Deploys network-independent socket contracts
 */
export const main = async () => {
  try {
    const path = getVerificationPath();
    const addresses = getProjectAddresses() as SBTokenAddresses;
    if (!fs.existsSync(path)) {
      throw new Error("addresses.json not found");
    }
    let verificationParams: VerifyParams = JSON.parse(
      fs.readFileSync(path, "utf-8")
    );

    const chains: ChainSlug[] = Object.keys(verificationParams).map((c) =>
      Number(c)
    );

    console.log("Chains array:", chains);
    if (!chains) {
      console.log("No chains found, exiting.");
      return;
    }

    for (let chainIndex = 0; chainIndex < chains.length; chainIndex++) {
      console.log(`Verifying contracts for chain ${chains[chainIndex]}...`);

      const chain = chains[chainIndex];
      // hre.changeNetwork(ChainSlugToHardhatKey[chain]);
      if (hre.network.name !== ChainSlugToHardhatKey[chain]) {
        console.log(
          `Skipping verification for chain ${chain} as the network param does not match.`
        );
        continue;
      }
      const chainParams: VerifyArgs[] | undefined = verificationParams[chain];
      if (!chainParams) continue;

      const tokens = getTokens();
      const tokenAddrs = new Set();
      for (const k of Object.keys(addresses[chain])) {
        if (tokens.includes(k as any)) {
          const addrSet = flattenObjAndGetAddresses(addresses[chain][k]);
          addrSet.forEach((addr) => tokenAddrs.add(addr.toLowerCase()));
        }
      }

      if (chainParams.length) {
        const len = chainParams.length;
        for (let index = 0; index < len!; index++)
          if (tokenAddrs.has(chainParams[index][0].toLowerCase())) {
            await verify(...chainParams[index]);
          } else {
            console.log(
              `Skipping verification for contract at address ${chainParams[index][0]} as it is not in the deployed token addresses.`
            );
          }
      }
    }
  } catch (error) {
    console.log("Error in contract verification", error);
  }
};

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
