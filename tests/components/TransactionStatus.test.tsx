import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { TransactionStatus } from "@/components/TransactionStatus";

describe("TransactionStatus", () => {
  it("renders transaction details and retry action", async () => {
    const onRetry = vi.fn();
    render(
      <TransactionStatus
        transaction={{
          status: "pending",
          hash: "sorokit_123",
          message: "Submitted",
          explorerUrl: "https://stellar.expert/explorer/testnet/tx/sorokit_123",
          updatedAt: "2026-05-16T10:00:00.000Z"
        }}
        onRetry={onRetry}
      />
    );

    expect(screen.getByText("pending")).toBeInTheDocument();
    expect(screen.getByText("sorokit_123")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open explorer/i })).toHaveAttribute("href", expect.stringContaining("sorokit_123"));

    await userEvent.click(screen.getByRole("button", { name: /check status/i }));
    expect(onRetry).toHaveBeenCalled();
  });
});
