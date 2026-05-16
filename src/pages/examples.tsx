import { useState } from "react";
import { ContractCallCard } from "@/components/ContractCallCard";
import { NetworkSelector } from "@/components/NetworkSelector";
import { TokenTransferForm } from "@/components/TokenTransferForm";
import { TransactionStatus } from "@/components/TransactionStatus";
import { VaultExample } from "@/components/VaultExample";
import { useSorobanRpc } from "@/hooks/useSorobanRpc";
import { useTransactionStatus } from "@/hooks/useTransactionStatus";
import { useWallet } from "@/hooks/useWallet";
import type { NetworkConfig } from "@/types/network";
import { getDefaultNetwork } from "@/utils/networkConfig";

export default function ExamplesPage() {
  const [network, setNetwork] = useState<NetworkConfig>(getDefaultNetwork());
  const wallet = useWallet();
  const rpc = useSorobanRpc(network);
  const transaction = useTransactionStatus(network);

  function handleSubmitted(hash: string, message: string) {
    transaction.setPending(hash, message);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wide text-stellar">Mock-first dApp workflows</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-ink">Examples</h1>
        <p className="mt-4 leading-7 text-slate-600">
          These examples run in mock mode by default and mirror the adapter shape you would use for deployed Soroban
          contracts. They are meant to be copied, extended, tested, and replaced module by module.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="space-y-6">
          <ContractCallCard title="Network setup" description="Select a target network and check the configured RPC endpoint.">
            <NetworkSelector value={network} onChange={setNetwork} />
            <button
              type="button"
              onClick={() => void rpc.checkHealth()}
              className="mt-4 w-full rounded-lg bg-ink px-4 py-2 font-semibold text-white"
            >
              {rpc.isChecking ? "Checking..." : "Check RPC health"}
            </button>
            {rpc.health ? <p className="mt-3 text-sm text-signal">{rpc.health.message}</p> : null}
            {rpc.error ? <p className="mt-3 text-sm text-rose-600">{rpc.error}</p> : null}
          </ContractCallCard>
        </aside>
        <div className="grid gap-6 xl:grid-cols-2">
          <ContractCallCard title="Token transfer" description="Submit a typed token transfer through the contract adapter.">
            <TokenTransferForm network={network} walletAddress={wallet.address} onSubmitted={handleSubmitted} />
          </ContractCallCard>
          <ContractCallCard title="Vault dashboard" description="Deposit, withdraw, claim rewards, and read a mock balance.">
            <VaultExample network={network} walletAddress={wallet.address} onSubmitted={handleSubmitted} />
          </ContractCallCard>
          <div className="xl:col-span-2">
            <ContractCallCard title="Transaction status" description="Track the current transaction lifecycle and retry status checks.">
              <TransactionStatus
                transaction={transaction.transaction}
                isPolling={transaction.isPolling}
                onRetry={() => void transaction.checkStatus()}
              />
            </ContractCallCard>
          </div>
        </div>
      </div>
    </section>
  );
}
