import { useCallback, useState } from "react";
import { getContractAdapter } from "@/lib/contractAdapter";
import type { NetworkConfig } from "@/types/network";
import type { TransactionState } from "@/types/transaction";

const idleState: TransactionState = {
  status: "idle",
  message: "No transaction submitted yet."
};

export function useTransactionStatus(network?: NetworkConfig) {
  const [transaction, setTransaction] = useState<TransactionState>(idleState);
  const [isPolling, setIsPolling] = useState(false);

  const setPending = useCallback((hash: string, message = "Transaction submitted.") => {
    setTransaction({
      status: "pending",
      hash,
      message,
      updatedAt: new Date().toISOString()
    });
  }, []);

  const checkStatus = useCallback(
    async (hash?: string) => {
      if (!network) return transaction;
      const targetHash = hash || transaction.hash;
      if (!targetHash) return transaction;

      setIsPolling(true);
      try {
        const result = await getContractAdapter().getTransactionStatus(targetHash, { network });
        setTransaction(result);
        return result;
      } finally {
        setIsPolling(false);
      }
    },
    [network, transaction]
  );

  const reset = useCallback(() => setTransaction(idleState), []);

  return {
    transaction,
    isPolling,
    setPending,
    checkStatus,
    reset
  };
}
