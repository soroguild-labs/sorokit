export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm text-slate-600 sm:px-6 md:grid-cols-3 lg:px-8">
        <p>
          Built by SoroGuild Labs as contributor-friendly infrastructure for Stellar and Soroban frontend builders.
        </p>
        <p>MIT licensed. Mock-first by default. No secrets, private keys, or deployed contract claims baked in.</p>
        <p>TODO: improve mobile navigation · TODO: add governance interface example · TODO: add analytics dashboard example</p>
      </div>
    </footer>
  );
}
