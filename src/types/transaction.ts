export type TransactionStatusValue = "idle" | "pending" | "success" | "failed" | "unknown";

export interface TransactionState {
  status: TransactionStatusValue;
  hash?: string;
  message?: string;
  explorerUrl?: string;
  updatedAt?: string;
}
