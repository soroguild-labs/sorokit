interface ContractCallCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ContractCallCard({ title, description, children }: ContractCallCardProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-ink">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      </div>
      {children}
    </section>
  );
}
