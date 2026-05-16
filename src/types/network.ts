export type NetworkKey = "testnet" | "futurenet" | "mainnet" | "local";

export type NetworkStatus = "recommended" | "experimental" | "placeholder" | "local";

export interface NetworkConfig {
  key: NetworkKey;
  name: string;
  passphrase: string;
  rpcUrl: string;
  explorerUrl: string;
  statusLabel: string;
  status: NetworkStatus;
}
