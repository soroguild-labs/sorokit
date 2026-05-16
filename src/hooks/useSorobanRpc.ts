import { useCallback, useState } from "react";
import { checkRpcHealth, type RpcHealth } from "@/lib/soroban";
import type { NetworkConfig } from "@/types/network";

export function useSorobanRpc(network: NetworkConfig) {
  const [health, setHealth] = useState<RpcHealth | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkHealth = useCallback(async () => {
    setIsChecking(true);
    setError(null);

    try {
      const result = await checkRpcHealth(network);
      setHealth(result);
      return result;
    } catch (rpcError) {
      const message = rpcError instanceof Error ? rpcError.message : "Unable to check RPC health.";
      setError(message);
      throw rpcError;
    } finally {
      setIsChecking(false);
    }
  }, [network]);

  return {
    health,
    isChecking,
    error,
    checkHealth
  };
}
