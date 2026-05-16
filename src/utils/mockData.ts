import type { TransactionStatusValue } from "@/types/transaction";

export const MOCK_WALLET_ADDRESS = "GBZXN7PIRZGNMHGA2NPTVUPYJMZHPZV7Z4VXNJILZCZ4RTS4SRMKSTTA";
export const MOCK_CONTRACT_ID = "CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2KM";

export function mockTransactionHash(prefix = "mock"): string {
  const random = Math.random().toString(16).slice(2).padEnd(24, "0");
  return `${prefix}_${random}`;
}

export function settleMockStatus(): TransactionStatusValue {
  return Math.random() > 0.08 ? "success" : "failed";
}
