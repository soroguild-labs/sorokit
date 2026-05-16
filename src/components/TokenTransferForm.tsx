import { FormEvent, useState } from "react";
import { useContractCall } from "@/hooks/useContractCall";
import type { NetworkConfig } from "@/types/network";
import { DEFAULT_ASSET_CODE } from "@/utils/constants";

interface TokenTransferFormProps {
  network: NetworkConfig;
  walletAddress?: string | null;
  onSubmitted: (hash: string, message: string) => void;
}

export function TokenTransferForm({ network, walletAddress, onSubmitted }: TokenTransferFormProps) {
  const [to, setTo] = useState("GBZXN7PIRZGNMHGA2NPTVUPYJMZHPZV7Z4VXNJILZCZ4RTS4SRMKSTTA");
  const [amount, setAmount] = useState("25");
  const contract = useContractCall({ network, walletAddress });

  async function submitTransfer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = await contract.transferToken({ to, amount, assetCode: DEFAULT_ASSET_CODE });
    onSubmitted(result.hash, result.message);
  }

  return (
    <form onSubmit={submitTransfer} className="space-y-4">
      <div>
        <label className="text-sm font-semibold text-slate-700" htmlFor="recipient">
          Recipient
        </label>
        <input
          id="recipient"
          value={to}
          onChange={(event) => setTo(event.target.value)}
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-stellar focus:outline-none focus:ring-2 focus:ring-stellar/20"
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-slate-700" htmlFor="amount">
          Amount
        </label>
        <input
          id="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-stellar focus:outline-none focus:ring-2 focus:ring-stellar/20"
        />
      </div>
      {contract.error ? <p className="text-sm text-rose-600">{contract.error}</p> : null}
      <button
        type="submit"
        disabled={contract.isSubmitting}
        className="w-full rounded-lg bg-stellar px-4 py-2 font-semibold text-white shadow-sm hover:bg-blue-600 disabled:opacity-60"
      >
        {contract.isSubmitting ? "Submitting..." : "Submit mock transfer"}
      </button>
    </form>
  );
}
