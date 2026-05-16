import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";

const features = [
  {
    title: "Wallet integration",
    description: "A safe Freighter wallet pattern with availability checks, loading states, errors, disconnect support, and testable hooks."
  },
  {
    title: "Soroban RPC helpers",
    description: "Network configuration, RPC health checks, explorer links, and clear placeholders for real contract calls."
  },
  {
    title: "Adapter-first contracts",
    description: "A typed adapter interface for token transfers, vault actions, balances, rewards, and transaction status."
  },
  {
    title: "Mock mode by default",
    description: "Contributors can run the app, demo flows, and write UI changes without deployed contracts or private keys."
  },
  {
    title: "Polished starter UI",
    description: "Reusable React components for dashboard-style dApps: forms, status cards, badges, network selectors, and wallet controls."
  },
  {
    title: "Contributor-ready repo",
    description: "Tests, CI, docs, issue templates, roadmap, code of conduct, and a practical contributor guide are included."
  }
];

const modules = [
  "Token transfer form mapped to a reusable contract adapter",
  "Vault dashboard with deposit, withdraw, balance, and rewards actions",
  "Transaction status UI for idle, pending, success, failed, and unknown states"
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-tight text-ink">Why SoroKit exists</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Many Stellar and Soroban developers rebuild the same frontend infrastructure repeatedly: wallet connection,
            RPC configuration, contract calls, transaction status handling, and starter dashboard UI. SoroKit gives builders
            a clean, reusable, documented foundation so they can focus on product logic instead of boilerplate.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </section>
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-ink">Example modules</h2>
            <p className="mt-4 leading-7 text-slate-600">
              The examples are deliberately focused: enough structure to be reusable, but not a fake protocol pretending
              to be production infrastructure.
            </p>
          </div>
          <div className="grid gap-3">
            {modules.map((module) => (
              <div key={module} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                {module}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-ink p-8 text-white shadow-soft">
          <h2 className="text-3xl font-black">Built for contributors</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-200">
            SoroKit is ready for ecosystem-style open-source work: scoped issue templates, docs for the architecture,
            tests for critical UI and hooks, and TODO markers for natural contribution paths.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/docs" className="rounded-lg bg-white px-5 py-3 font-semibold text-ink hover:bg-slate-100">
              Contributor docs
            </Link>
            <Link href="/examples" className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10">
              Run mock examples
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
