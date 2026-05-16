import type { ContractAdapter } from "@/types/contract";
import { placeholderContractCall } from "./soroban";
import { mockContractAdapter } from "./mockAdapter";

export function isMockMode(): boolean {
  return process.env.NEXT_PUBLIC_SOROKIT_MOCK_MODE !== "false";
}

export function getContractAdapter(): ContractAdapter {
  if (isMockMode()) return mockContractAdapter;

  return {
    async transferToken(_input, context) {
      return placeholderContractCall(context.contractId);
    },
    async depositToVault(_input, context) {
      return placeholderContractCall(context.contractId);
    },
    async withdrawFromVault(_input, context) {
      return placeholderContractCall(context.contractId);
    },
    async claimRewards(context) {
      return placeholderContractCall(context.contractId);
    },
    async readBalance(context) {
      return placeholderContractCall(context.contractId);
    },
    async getTransactionStatus(_hash, context) {
      return placeholderContractCall(context.contractId);
    }
  };
}
