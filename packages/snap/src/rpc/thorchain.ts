import {
  bip32ToAddressNList,
  CosmosSignedTx as ThorchainSignedTx,
  CosmosSignTx as ThorchainSignTx,
  slip44ByCoin,
} from "@shapeshiftoss/hdwallet-core";

import { logger } from "../lib/logger";
import { getHDWalletNativeSigner } from "./common";

const moduleLogger = logger.child({
  namespace: ["Snap", "RPC", "Thorchain.ts"],
});

export const thorchainGetAddress = async (
  account = 0,
  addressIndex = 0
): Promise<string> => {
  try {
    const signer = await getHDWalletNativeSigner("Thorchain");
    if (signer === null) {
      throw new Error("Could not initialize Thorchain signer");
    }
    const address = await signer.cosmosGetAddress({
      addressNList: bip32ToAddressNList(
        `m/44'/${slip44ByCoin("Thorchain")}'/${account}'/0/${addressIndex}`
      ),
      showDisplay: false,
    });
    if (address === null) {
      throw new Error("Address generation failed");
    }
    return address;
  } catch (error) {
    moduleLogger.error({ fn: "thorchainGetAddress" }, error);
    throw error;
  }
};

export const thorchainSignTransaction = async (
  transaction: ThorchainSignTx
): Promise<ThorchainSignedTx> => {
  try {
    const signer = await getHDWalletNativeSigner("Thorchain");
    if (signer === null) {
      throw new Error("Could not initialize Cosmos signer");
    }
    const signedTransaction = await signer.cosmosSignTx(transaction);
    if (signedTransaction === null) {
      throw new Error("Transaction signing failed");
    }
    return signedTransaction;
  } catch (error) {
    moduleLogger.error(transaction, { fn: "thorchainSignTransaction" }, error);
    throw error;
  }
};
