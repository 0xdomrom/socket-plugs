import { BigNumber, Contract, utils } from "ethers";

import { getSignerFromChainSlug, overrides } from "../../../helpers/networks";
import {
  ChainSlug,
  SuperTokenChainAddresses,
  SuperTokenContracts,
} from "../../../../src";
import { config } from "../config";
import { getSuperTokenProjectAddresses } from "../utils";
import { getSocket, getInstance } from "./utils";

export const srcChain = ChainSlug.ARBITRUM_SEPOLIA;
export const dstChain = ChainSlug.SEPOLIA;
export const gasLimit = 500_000;
export const amount = utils.parseUnits("1", config.tokenDecimal);

export const main = async () => {
  try {
    const addresses = await getSuperTokenProjectAddresses(
      config.projectName.toLowerCase()
    );

    const srcAddresses: SuperTokenChainAddresses | undefined =
      addresses[srcChain];
    const dstAddresses: SuperTokenChainAddresses | undefined =
      addresses[dstChain];
    if (!srcAddresses || !dstAddresses)
      throw new Error("chain addresses not found");

    const tokenAddr = srcAddresses[SuperTokenContracts.SuperToken];
    if (!tokenAddr) throw new Error("Some contract addresses missing");

    const socketSigner = getSignerFromChainSlug(srcChain);

    const tokenContract: Contract = (
      await getInstance(SuperTokenContracts.SuperToken, tokenAddr)
    ).connect(socketSigner);

    const limit: BigNumber = await tokenContract.getCurrentSendingLimit(
      dstChain
    );
    if (limit.lt(amount)) throw new Error(`Exceeding max limit ${limit}`);

    // deposit
    console.log(`depositing ${amount} to app chain from ${srcChain}`);

    const socket: Contract = getSocket(srcChain, socketSigner);
    const value = await socket.getMinFees(
      gasLimit,
      100,
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      dstChain,
      srcAddresses[SuperTokenContracts.SocketPlug]
    );

    const depositTx = await tokenContract.bridge(
      socketSigner.address,
      dstChain,
      amount,
      gasLimit,
      "0x",
      "0x",
      { ...overrides[srcChain], value }
    );
    console.log("Tokens deposited: ", depositTx.hash);
    console.log(
      `Track message here: https://prod.dlapi.socket.tech/messages-from-tx?srcChainSlug=${srcChain}&srcTxHash=${depositTx.hash}`
    );
    await depositTx.wait();
  } catch (error) {
    console.log("Error while sending transaction", error);
  }
};

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
