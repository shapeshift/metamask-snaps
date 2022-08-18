import { ChainId } from "@shapeshiftoss/caip";
import {
  BinanceSignTx,
  BTCGetAddress,
  BTCSignMessage,
  BTCSignTx,
  BTCVerifyMessage,
  CosmosSignTx,
  ETHSignMessage,
  ETHSignTx,
  ETHVerifyMessage,
} from "@shapeshiftoss/hdwallet-core";

export interface HelloRequest {
  method: "hello";
  params: undefined;
}

export interface GetAddressRequest {
  method: "get_address";
  params: {
    chainId: ChainId;
    derivationPath: number;
  };
}

export interface BCHGetAddressRequest {
  method: "bch_getAddress";
  params: BTCGetAddress;
}

export interface BCHSignTransactionRequest {
  method: "bch_signTransaction";
  params: {
    transaction: BTCSignTx;
  };
}

export interface BCHSignMessageRequest {
  method: "bch_signMessage";
  params: {
    message: BTCSignMessage;
  };
}

export interface BCHVerifyMessageRequest {
  method: "bch_verifyMessage";
  params: {
    message: BTCVerifyMessage;
  };
}

export interface BinanceGetAddressRequest {
  method: "binance_getAddress";
  params: undefined;
}
export interface BinanceSignTransactionRequest {
  method: "binance_signTransaction";
  params: {
    transaction: BinanceSignTx;
  };
}

export interface BTCGetAddressRequest {
  method: "btc_getAddress";
  params: BTCGetAddress;
}

export interface BTCSignTransactionRequest {
  method: "btc_signTransaction";
  params: {
    transaction: BTCSignTx;
  };
}

export interface BTCSignMessageRequest {
  method: "btc_signMessage";
  params: {
    message: BTCSignMessage;
  };
}

export interface BTCVerifyMessageRequest {
  method: "btc_verifyMessage";
  params: {
    message: BTCVerifyMessage;
  };
}

export interface CosmosGetAddressRequest {
  method: "cosmos_getAddress";
  params: undefined;
}
export interface CosmosSignTransactionRequest {
  method: "cosmos_signTransaction";
  params: {
    transaction: CosmosSignTx;
  };
}

export interface DogeGetAddressRequest {
  method: "doge_getAddress";
  params: BTCGetAddress;
}

export interface DogeSignTransactionRequest {
  method: "doge_signTransaction";
  params: {
    transaction: BTCSignTx;
  };
}

export interface DogeSignMessageRequest {
  method: "doge_signMessage";
  params: {
    message: BTCSignMessage;
  };
}

export interface DogeVerifyMessageRequest {
  method: "doge_verifyMessage";
  params: {
    message: BTCVerifyMessage;
  };
}

export interface ETHGetAddressRequest {
  method: "eth_getAddress";
  params: undefined;
}

export interface ETHSignMessageRequest {
  method: "eth_signMessage";
  params: {
    message: ETHSignMessage;
  };
}

export interface ETHSignTransactionRequest {
  method: "eth_signTransaction";
  params: {
    transaction: ETHSignTx;
  };
}

export interface ETHVerifyMessageRequest {
  method: "eth_verifyMessage";
  params: {
    message: ETHVerifyMessage;
  };
}

export interface LTCGetAddressRequest {
  method: "ltc_getAddress";
  params: BTCGetAddress;
}

export interface LTCSignTransactionRequest {
  method: "ltc_signTransaction";
  params: {
    transaction: BTCSignTx;
  };
}

export interface LTCSignMessageRequest {
  method: "ltc_signMessage";
  params: {
    message: BTCSignMessage;
  };
}

export interface LTCVerifyMessageRequest {
  method: "ltc_verifyMessage";
  params: {
    message: BTCVerifyMessage;
  };
}

export interface ThorchainGetAddressRequest {
  method: "thorchain_getAddress";
  params: undefined;
}
export interface ThorchainSignTransactionRequest {
  method: "thorchain_signTransaction";
  params: {
    transaction: CosmosSignTx;
  };
}

export type MetaMaskRPCRequest =
  | HelloRequest
  | GetAddressRequest
  | BCHGetAddressRequest
  | BCHSignTransactionRequest
  | BCHSignMessageRequest
  | BCHVerifyMessageRequest
  | BinanceGetAddressRequest
  | BinanceSignTransactionRequest
  | BTCGetAddressRequest
  | BTCSignTransactionRequest
  | BTCSignMessageRequest
  | BTCVerifyMessageRequest
  | CosmosGetAddressRequest
  | CosmosSignTransactionRequest
  | DogeGetAddressRequest
  | DogeSignTransactionRequest
  | DogeSignMessageRequest
  | DogeVerifyMessageRequest
  | ETHGetAddressRequest
  | ETHSignMessageRequest
  | ETHSignTransactionRequest
  | ETHVerifyMessageRequest
  | LTCGetAddressRequest
  | LTCSignTransactionRequest
  | LTCSignMessageRequest
  | LTCVerifyMessageRequest
  | ThorchainGetAddressRequest
  | ThorchainSignTransactionRequest;
