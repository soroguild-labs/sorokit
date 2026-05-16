import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl">
          <Image src="/sorokit-mark.svg" alt="SoroKit mark" width={64} height={64} className="mb-6 rounded-lg shadow-sm" />
          <p className="text-sm font-bold uppercase tracking-wide text-stellar">SoroGuild Labs open-source starter kit</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-6xl">SoroKit</h1>
          <p className="mt-5 text-xl leading-8 text-slate-650">
            A production-minded Next.js starter kit for building Soroban dApps on Stellar without rebuilding wallet
            connection, RPC configuration, contract adapters, transaction status handling, and dashboard UI from scratch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/examples" className="rounded-lg bg-ink px-5 py-3 font-semibold text-white shadow-sm hover:bg-slate-800">
              Explore examples
            </Link>
            <Link href="/docs" className="rounded-lg border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">
              Read docs
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-950 p-5 font-mono text-sm text-slate-100 shadow-soft">
          <div className="mb-4 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amberline" />
            <span className="h-3 w-3 rounded-full bg-signal" />
          </div>
          <pre className="whitespace-pre-wrap leading-7">{`const adapter = getContractAdapter();

await adapter.transferToken({
  to: recipient,
  amount: "25",
  assetCode: "XLM"
}, {
  network,
  walletAddress
});

// Mock mode keeps contributors moving.
// Real contracts plug in through the adapter layer.`}</pre>
        </div>
      </div>
    </section>
  );
}
