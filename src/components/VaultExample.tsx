import { useEffect, useState } from "react";
import { useContractCall } from "@/hooks/useContractCall";
import { getContractAdapter } from "@/lib/contractAdapter";
import type { NetworkConfig } from "@/types/network";
import { formatAmount } from "@/utils/formatting";

interface VaultExampleProps {
  network: NetworkConfig;
  walletAddress?: string | null;
  onSubmitted: (hash: string, message: string) => void;
}

export function VaultExample({ network, walletAddress, onSubmitted }: VaultExampleProps) {
  const [amount, setAmount] = useState("50");
  const [balance, setBalance] = useState("0");
  const contract = useContractCall({ network, walletAddress });

  useEffect(() => {
    let mounted = true;

    void getContractAdapter()
      .readBalance({ network, walletAddress })
      .then((value) => {
        if (mounted) setBalance(value);
      });

    return () => {
      mounted = false;
    };
  }, [network, walletAddress]);

  async function runVaultAction(action: "deposit" | "withdraw" | "claim") {
    const result =
      action === "deposit"
        ? await contract.depositToVault({ amount })
        : action === "withdraw"
          ? await contract.withdrawFromVault({ amount })
          : await contract.claimRewards();
    onSubmitted(result.hash, result.message);
  }

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-mist p-4">
        <p className="text-sm font-semibold text-slate-600">Mock vault balance</p>
        <p className="mt-1 text-2xl font-bold text-ink">{formatAmount(balance)}</p>
      </div>
      <div>
        <label className="text-sm font-semibold text-slate-700" htmlFor="vault-amount">
          Vault amount
        </label>
        <input
          id="vault-amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-stellar focus:outline-none focus:ring-2 focus:ring-stellar/20"
        />
      </div>
      {contract.error ? <p className="text-sm text-rose-600">{contract.error}</p> : null}
      <div className="grid gap-2 sm:grid-cols-3">
        <button className="rounded-lg bg-ink px-3 py-2 text-sm font-semibold text-white" onClick={() => runVaultAction("deposit")} type="button">
          Deposit
        </button>
        <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700" onClick={() => runVaultAction("withdraw")} type="button">
          Withdraw
        </button>
        <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700" onClick={() => runVaultAction("claim")} type="button">
          Claim rewards
        </button>
      </div>
    </div>
  );
}
