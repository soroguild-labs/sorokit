import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useTransactionStatus } from "@/hooks/useTransactionStatus";
import { NETWORKS } from "@/utils/networkConfig";

describe("useTransactionStatus", () => {
  it("sets a transaction to pending", () => {
    const { result } = renderHook(() => useTransactionStatus(NETWORKS.testnet));

    act(() => result.current.setPending("sorokit_hash", "Submitted"));

    expect(result.current.transaction.status).toBe("pending");
    expect(result.current.transaction.hash).toBe("sorokit_hash");
    expect(result.current.transaction.message).toBe("Submitted");
  });

  it("checks status through the adapter", async () => {
    const { result } = renderHook(() => useTransactionStatus(NETWORKS.testnet));

    act(() => result.current.setPending("sorokit_hash"));

    await act(async () => {
      await result.current.checkStatus("sorokit_hash");
    });

    expect(["success", "failed"]).toContain(result.current.transaction.status);
    expect(result.current.transaction.hash).toBe("sorokit_hash");
  });
});
