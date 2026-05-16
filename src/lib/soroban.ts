import type { NetworkConfig } from "@/types/network";

export interface RpcHealth {
  ok: boolean;
  network: string;
  rpcUrl: string;
  ledger?: number;
  message: string;
}

export async function checkRpcHealth(network: NetworkConfig): Promise<RpcHealth> {
  if (process.env.NEXT_PUBLIC_SOROKIT_MOCK_MODE !== "false") {
    return {
      ok: true,
      network: network.name,
      rpcUrl: network.rpcUrl,
      ledger: 489233,
      message: "Mock mode health check succeeded."
    };
  }

  const response = await fetch(network.rpcUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: "sorokit-health",
      method: "getHealth"
    })
  });

  if (!response.ok) {
    throw new Error(`RPC health check failed with HTTP ${response.status}.`);
  }

  const body = (await response.json()) as { result?: { status?: string; latestLedger?: number } };

  return {
    ok: body.result?.status === "healthy",
    network: network.name,
    rpcUrl: network.rpcUrl,
    ledger: body.result?.latestLedger,
    message: body.result?.status || "RPC responded without a status."
  };
}

export async function placeholderContractCall(contractId?: string): Promise<never> {
  if (!contractId) {
    throw new Error("No contract ID configured. SoroKit uses mock mode until you add deployed Soroban contracts.");
  }

  // TODO: add real deployed Soroban contract examples
  throw new Error("Real contract calls are intentionally disabled in the starter adapter until a contract is configured.");
}
