import type { NetworkConfig, NetworkKey } from "@/types/network";

export const NETWORKS: Record<NetworkKey, NetworkConfig> = {
  testnet: {
    key: "testnet",
    name: "Testnet",
    passphrase: "Test SDF Network ; September 2015",
    rpcUrl: process.env.NEXT_PUBLIC_SOROBAN_RPC_URL || "https://soroban-testnet.stellar.org",
    explorerUrl: process.env.NEXT_PUBLIC_EXPLORER_URL || "https://stellar.expert/explorer/testnet",
    statusLabel: "Recommended for contributors",
    status: "recommended"
  },
  futurenet: {
    key: "futurenet",
    name: "Futurenet",
    passphrase: "Test SDF Future Network ; October 2022",
    rpcUrl: "https://rpc-futurenet.stellar.org",
    explorerUrl: "https://stellar.expert/explorer/futurenet",
    statusLabel: "Experimental",
    status: "experimental"
  },
  mainnet: {
    key: "mainnet",
    name: "Mainnet",
    passphrase: "Public Global Stellar Network ; September 2015",
    rpcUrl: "https://mainnet.sorobanrpc.com",
    explorerUrl: "https://stellar.expert/explorer/public",
    statusLabel: "Placeholder only",
    status: "placeholder"
  },
  local: {
    key: "local",
    name: "Local Sandbox",
    passphrase: "Standalone Network ; February 2017",
    rpcUrl: "http://localhost:8000/soroban/rpc",
    explorerUrl: "http://localhost:8000",
    statusLabel: "Local development",
    status: "local"
  }
};

export function getDefaultNetwork(): NetworkConfig {
  const envNetwork = process.env.NEXT_PUBLIC_STELLAR_NETWORK as NetworkKey | undefined;
  return envNetwork && NETWORKS[envNetwork] ? NETWORKS[envNetwork] : NETWORKS.testnet;
}

export function getExplorerTransactionUrl(network: NetworkConfig, hash?: string): string | undefined {
  if (!hash) return undefined;
  if (network.key === "local") return undefined;
  return `${network.explorerUrl}/tx/${hash}`;
}
