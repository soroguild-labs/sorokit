import { useState } from "react";
import { truncateAddress } from "@/utils/address";

interface AddressDisplayProps {
  address?: string | null;
}

export function AddressDisplay({ address }: AddressDisplayProps) {
  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    if (!address || !navigator.clipboard) return;
    await navigator.clipboard.writeText(address);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  if (!address) {
    return <span className="text-sm text-slate-500">No wallet connected</span>;
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
      <span aria-label={`Wallet address ${address}`}>{truncateAddress(address)}</span>
      <button
        type="button"
        onClick={copyAddress}
        className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700 hover:bg-slate-200"
        aria-label="Copy wallet address"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </span>
  );
}
