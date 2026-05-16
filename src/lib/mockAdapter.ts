import type {
  ContractActionContext,
  ContractAdapter,
  ContractResult,
  TokenTransferInput,
  VaultAmountInput
} from "@/types/contract";
import type { TransactionState } from "@/types/transaction";
import { getExplorerTransactionUrl } from "@/utils/networkConfig";
import { mockTransactionHash, settleMockStatus } from "@/utils/mockData";

function delay(ms = 550): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function validateAmount(amount: string): void {
  const parsed = Number(amount);
  if (!amount || Number.isNaN(parsed) || parsed <= 0) {
    throw new Error("Enter an amount greater than zero.");
  }
}

async function mockResult(message: string): Promise<ContractResult> {
  await delay();
  return {
    hash: mockTransactionHash("sorokit"),
    status: "pending",
    message
  };
}

export const mockContractAdapter: ContractAdapter = {
  async transferToken(input: TokenTransferInput) {
    validateAmount(input.amount);
    if (!input.to) throw new Error("Recipient address is required.");
    return mockResult(`Mock ${input.assetCode || "XLM"} transfer submitted.`);
  },

  async depositToVault(input: VaultAmountInput) {
    validateAmount(input.amount);
    return mockResult("Mock vault deposit submitted.");
  },

  async withdrawFromVault(input: VaultAmountInput) {
    validateAmount(input.amount);
    return mockResult("Mock vault withdrawal submitted.");
  },

  async claimRewards() {
    return mockResult("Mock rewards claim submitted.");
  },

  async readBalance() {
    await delay(250);
    return "1242.7391";
  },

  async getTransactionStatus(hash: string, context: ContractActionContext): Promise<TransactionState> {
    await delay(450);
    const status = settleMockStatus();
    return {
      hash,
      status,
      message: status === "success" ? "Mock transaction confirmed." : "Mock transaction failed. Try again.",
      explorerUrl: getExplorerTransactionUrl(context.network, hash),
      updatedAt: new Date().toISOString()
    };
  }
};
