import Link from "next/link";

const docs = [
  ["Architecture", "/docs/architecture.md", "Component, hook, adapter, and RPC layers."],
  ["Getting started", "/docs/getting-started.md", "Install, configure, run, test, and switch mock mode."],
  ["Wallet integration", "/docs/wallet-integration.md", "Freighter patterns and future wallet provider notes."],
  ["Soroban RPC", "/docs/soroban-rpc.md", "Network config, health checks, and safe placeholders."],
  ["Contract examples", "/docs/contract-examples.md", "Token transfer, vault, and transaction status modules."],
  ["Contributor guide", "/docs/contributor-guide.md", "Issue selection, branch naming, PR checklist, and docs expectations."],
  ["Roadmap", "/docs/roadmap.md", "MVP, contributor expansion, and ecosystem readiness phases."]
];

export default function DocsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wide text-stellar">Documentation</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-ink">Build Soroban dApps from a maintained foundation</h1>
        <p className="mt-4 leading-7 text-slate-600">
          SoroKit docs explain the architecture, local workflow, wallet integration, RPC helpers, mock adapter, and
          contribution standards. In a GitHub repo, these links open the markdown files directly.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {docs.map(([title, href, description]) => (
          <Link key={href} href={href} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:border-stellar/40">
            <h2 className="text-lg font-bold text-ink">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </Link>
        ))}
      </div>
      <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-ink">Local commands</h2>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-100">{`npm install
npm run dev
npm run test
npm run typecheck
npm run build`}</pre>
      </div>
    </section>
  );
}
