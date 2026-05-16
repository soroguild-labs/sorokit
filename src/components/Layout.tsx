import { useState } from "react";
import { useWallet } from "@/hooks/useWallet";
import type { NetworkConfig } from "@/types/network";
import { getDefaultNetwork } from "@/utils/networkConfig";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  const [network] = useState<NetworkConfig>(getDefaultNetwork());
  const wallet = useWallet();

  return (
    <div className="min-h-screen bg-slate-50 text-ink">
      <Navbar network={network} wallet={wallet} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
