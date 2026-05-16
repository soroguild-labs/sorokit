import type { NetworkConfig } from "./network";
import type { TransactionState } from "./transaction";

export interface ContractActionContext {
  network: NetworkConfig;
  walletAddress?: string | null;
  contractId?: string;
}

export interface TokenTransferInput {
  to: string;
  amount: string;
  assetCode?: string;
}

export interface VaultAmountInput {
  amount: string;
}

export interface ContractResult {
  hash: string;
  status: TransactionState["status"];
  message: string;
}

export interface ContractAdapter {
  transferToken(input: TokenTransferInput, context: ContractActionContext): Promise<ContractResult>;
  depositToVault(input: VaultAmountInput, context: ContractActionContext): Promise<ContractResult>;
  withdrawFromVault(input: VaultAmountInput, context: ContractActionContext): Promise<ContractResult>;
  claimRewards(context: ContractActionContext): Promise<ContractResult>;
  readBalance(context: ContractActionContext): Promise<string>;
  getTransactionStatus(hash: string, context: ContractActionContext): Promise<TransactionState>;
}
