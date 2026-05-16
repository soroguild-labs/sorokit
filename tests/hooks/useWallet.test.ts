import { act, renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useWallet } from "@/hooks/useWallet";
import type { FreighterApi } from "@/types/wallet";

const address = "GBZXN7PIRZGNMHGA2NPTVUPYJMZHPZV7Z4VXNJILZCZ4RTS4SRMKSTTA";

function setFreighter(api?: FreighterApi) {
  window.freighterApi = api;
}

describe("useWallet", () => {
  it("reports a helpful error when Freighter is unavailable", async () => {
    setFreighter(undefined);
    const { result } = renderHook(() => useWallet());

    await waitFor(() => expect(result.current.error).toMatch(/not detected/i));
    expect(result.current.isAvailable).toBe(false);
  });

  it("connects and disconnects with Freighter", async () => {
    setFreighter({ requestAccess: async () => address });
    const { result } = renderHook(() => useWallet());

    await act(async () => {
      await result.current.connect();
    });

    expect(result.current.address).toBe(address);
    expect(result.current.isConnected).toBe(true);

    act(() => result.current.disconnect());
    expect(result.current.address).toBeNull();
    expect(result.current.isConnected).toBe(false);
  });
});
