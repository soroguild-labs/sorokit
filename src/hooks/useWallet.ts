import { useCallback, useEffect, useState } from "react";
import { hasFreighter, requestFreighterAccess } from "@/lib/wallet";
import type { WalletState } from "@/types/wallet";

const initialState: WalletState = {
  address: null,
  isAvailable: false,
  isConnected: false,
  isLoading: false,
  error: null,
  state: "idle"
};

export function useWallet() {
  const [wallet, setWallet] = useState<WalletState>(initialState);

  const checkAvailability = useCallback(() => {
    const isAvailable = hasFreighter();
    setWallet((current) => ({
      ...current,
      isAvailable,
      state: isAvailable ? "disconnected" : "idle",
      error: isAvailable ? null : "Freighter wallet was not detected. You can still use SoroKit in mock mode."
    }));
    return isAvailable;
  }, []);

  useEffect(() => {
    checkAvailability();
  }, [checkAvailability]);

  const connect = useCallback(async () => {
    setWallet((current) => ({ ...current, isLoading: true, error: null, state: "checking" }));

    try {
      const address = await requestFreighterAccess();
      setWallet({
        address,
        isAvailable: true,
        isConnected: true,
        isLoading: false,
        error: null,
        state: "connected"
      });
    } catch (error) {
      setWallet((current) => ({
        ...current,
        address: null,
        isConnected: false,
        isLoading: false,
        error: error instanceof Error ? error.message : "Unable to connect wallet.",
        state: "error"
      }));
    }
  }, []);

  const disconnect = useCallback(() => {
    setWallet((current) => ({
      ...current,
      address: null,
      isConnected: false,
      isLoading: false,
      error: null,
      state: "disconnected"
    }));
  }, []);

  return {
    ...wallet,
    connect,
    disconnect,
    checkAvailability
  };
}
