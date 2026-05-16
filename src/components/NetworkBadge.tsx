import type { NetworkConfig } from "@/types/network";

const statusStyles: Record<NetworkConfig["status"], string> = {
  recommended: "border-signal/30 bg-signal/10 text-signal",
  experimental: "border-amberline/40 bg-amberline/10 text-amberline",
  placeholder: "border-slate-300 bg-slate-100 text-slate-600",
  local: "border-stellar/30 bg-stellar/10 text-stellar"
};

export function NetworkBadge({ network }: { network: NetworkConfig }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[network.status]}`}>
      {network.name} · {network.statusLabel}
    </span>
  );
}
