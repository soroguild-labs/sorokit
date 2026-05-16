import type { NetworkConfig, NetworkKey } from "@/types/network";
import { NETWORKS } from "@/utils/networkConfig";
import { NetworkBadge } from "./NetworkBadge";

interface NetworkSelectorProps {
  value: NetworkConfig;
  onChange: (network: NetworkConfig) => void;
}

export function NetworkSelector({ value, onChange }: NetworkSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-slate-700" htmlFor="network">
        Network
      </label>
      <select
        id="network"
        value={value.key}
        onChange={(event) => onChange(NETWORKS[event.target.value as NetworkKey])}
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-stellar focus:outline-none focus:ring-2 focus:ring-stellar/20"
      >
        {Object.values(NETWORKS).map((network) => (
          <option key={network.key} value={network.key}>
            {network.name}
          </option>
        ))}
      </select>
      <NetworkBadge network={value} />
      <p className="break-all text-xs text-slate-500">{value.rpcUrl}</p>
    </div>
  );
}
