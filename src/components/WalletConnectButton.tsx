import { AddressDisplay } from "./AddressDisplay";

interface WalletConnectButtonProps {
  address?: string | null;
  isConnected: boolean;
  isLoading: boolean;
  error?: string | null;
  onConnect: () => void | Promise<void>;
  onDisconnect: () => void;
}

export function WalletConnectButton({
  address,
  isConnected,
  isLoading,
  error,
  onConnect,
  onDisconnect
}: WalletConnectButtonProps) {
  return (
    <div className="flex flex-col items-start gap-2 sm:items-end">
      {isConnected ? (
        <div className="flex flex-wrap items-center gap-2">
          <AddressDisplay address={address} />
          <button
            type="button"
            onClick={onDisconnect}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={onConnect}
          disabled={isLoading}
          className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? "Connecting..." : "Connect Freighter"}
        </button>
      )}
      {error ? <p className="max-w-sm text-sm text-rose-600">{error}</p> : null}
    </div>
  );
}
