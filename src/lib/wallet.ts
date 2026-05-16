import type { FreighterApi } from "@/types/wallet";

declare global {
  interface Window {
    freighterApi?: FreighterApi;
  }
}

export function getFreighterApi(): FreighterApi | null {
  if (typeof window === "undefined") return null;
  return window.freighterApi ?? null;
}

export function hasFreighter(): boolean {
  return Boolean(getFreighterApi());
}

export async function requestFreighterAccess(): Promise<string> {
  const api = getFreighterApi();
  if (!api) {
    throw new Error("Freighter wallet was not detected. Install Freighter or continue in mock mode.");
  }

  if (api.requestAccess) {
    return api.requestAccess();
  }

  if (api.getPublicKey) {
    return api.getPublicKey();
  }

  throw new Error("Freighter API is available, but it does not expose an access method.");
}
