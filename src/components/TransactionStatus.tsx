import type { TransactionState } from "@/types/transaction";
import { formatDateTime } from "@/utils/formatting";

interface TransactionStatusProps {
  transaction: TransactionState;
  isPolling?: boolean;
  onRetry?: () => void;
}

const styles: Record<TransactionState["status"], string> = {
  idle: "bg-slate-100 text-slate-600",
  pending: "bg-amberline/15 text-amberline",
  success: "bg-signal/15 text-signal",
  failed: "bg-rose-100 text-rose-700",
  unknown: "bg-slate-200 text-slate-700"
};

export function TransactionStatus({ transaction, isPolling = false, onRetry }: TransactionStatusProps) {
  const canRetry = transaction.status === "failed" || transaction.status === "unknown" || transaction.status === "pending";

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${styles[transaction.status]}`}>
          {transaction.status}
        </span>
        <span className="text-xs text-slate-500">{formatDateTime(transaction.updatedAt)}</span>
      </div>
      <p className="mt-3 text-sm text-slate-700">{transaction.message}</p>
      {transaction.hash ? <p className="mt-3 break-all font-mono text-xs text-slate-500">{transaction.hash}</p> : null}
      <div className="mt-4 flex flex-wrap gap-2">
        {transaction.explorerUrl ? (
          <a
            href={transaction.explorerUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Open explorer
          </a>
        ) : null}
        {canRetry && onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            disabled={isPolling}
            className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white disabled:opacity-60"
          >
            {isPolling ? "Checking..." : "Check status"}
          </button>
        ) : null}
      </div>
    </div>
  );
}
