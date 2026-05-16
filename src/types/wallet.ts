export type WalletConnectionState = "idle" | "checking" | "connected" | "disconnected" | "error";

export interface WalletState {
  address: string | null;
  isAvailable: boolean;
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;
  state: WalletConnectionState;
}

export interface FreighterApi {
  isConnected?: () => Promise<boolean>;
  isAllowed?: () => Promise<boolean>;
  requestAccess?: () => Promise<string>;
  getPublicKey?: () => Promise<string>;
}
