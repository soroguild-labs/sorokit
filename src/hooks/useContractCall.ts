import { useCallback, useState } from "react";
import { getContractAdapter } from "@/lib/contractAdapter";
import type { ContractActionContext, ContractResult, TokenTransferInput, VaultAmountInput } from "@/types/contract";

export function useContractCall(context: ContractActionContext) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastResult, setLastResult] = useState<ContractResult | null>(null);

  const run = useCallback(async (operation: () => Promise<ContractResult>) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const result = await operation();
      setLastResult(result);
      return result;
    } catch (contractError) {
      const message = contractError instanceof Error ? contractError.message : "Contract action failed.";
      setError(message);
      throw contractError;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const adapter = getContractAdapter();

  return {
    isSubmitting,
    error,
    lastResult,
    transferToken: (input: TokenTransferInput) => run(() => adapter.transferToken(input, context)),
    depositToVault: (input: VaultAmountInput) => run(() => adapter.depositToVault(input, context)),
    withdrawFromVault: (input: VaultAmountInput) => run(() => adapter.withdrawFromVault(input, context)),
    claimRewards: () => run(() => adapter.claimRewards(context)),
    readBalance: () => adapter.readBalance(context)
  };
}
