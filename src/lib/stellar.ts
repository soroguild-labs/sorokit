import { Networks } from "@stellar/stellar-sdk";
import type { NetworkConfig } from "@/types/network";

export function resolveSdkNetworkPassphrase(network: NetworkConfig): string {
  if (network.key === "mainnet") return Networks.PUBLIC;
  if (network.key === "testnet") return Networks.TESTNET;
  return network.passphrase;
}

export function isMainnet(network: NetworkConfig): boolean {
  return network.key === "mainnet";
}
