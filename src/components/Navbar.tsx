import Link from "next/link";
import type { NetworkConfig } from "@/types/network";
import { NetworkBadge } from "./NetworkBadge";
import { WalletConnectButton } from "./WalletConnectButton";

interface NavbarProps {
  network: NetworkConfig;
  wallet: {
    address: string | null;
    isConnected: boolean;
    isLoading: boolean;
    error: string | null;
    connect: () => void | Promise<void>;
    disconnect: () => void;
  };
}

export function Navbar({ network, wallet }: NavbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/" className="text-xl font-black tracking-tight text-ink">
            SoroKit
          </Link>
          <div className="hidden sm:block">
            <NetworkBadge network={network} />
          </div>
          <div className="flex gap-3 text-sm font-semibold text-slate-600">
            <Link href="/examples" className="hover:text-ink">
              Examples
            </Link>
            <Link href="/docs" className="hover:text-ink">
              Docs
            </Link>
          </div>
        </div>
        <WalletConnectButton
          address={wallet.address}
          isConnected={wallet.isConnected}
          isLoading={wallet.isLoading}
          error={wallet.error}
          onConnect={wallet.connect}
          onDisconnect={wallet.disconnect}
        />
      </nav>
    </header>
  );
}
