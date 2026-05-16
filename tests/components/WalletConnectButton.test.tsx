import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { WalletConnectButton } from "@/components/WalletConnectButton";

describe("WalletConnectButton", () => {
  it("calls connect when disconnected", async () => {
    const onConnect = vi.fn();
    render(
      <WalletConnectButton
        isConnected={false}
        isLoading={false}
        error={null}
        onConnect={onConnect}
        onDisconnect={vi.fn()}
      />
    );

    await userEvent.click(screen.getByRole("button", { name: /connect freighter/i }));
    expect(onConnect).toHaveBeenCalled();
  });

  it("shows connected address and disconnect action", async () => {
    const onDisconnect = vi.fn();
    render(
      <WalletConnectButton
        address="GBZXN7PIRZGNMHGA2NPTVUPYJMZHPZV7Z4VXNJILZCZ4RTS4SRMKSTTA"
        isConnected
        isLoading={false}
        error={null}
        onConnect={vi.fn()}
        onDisconnect={onDisconnect}
      />
    );

    await userEvent.click(screen.getByRole("button", { name: /disconnect/i }));
    expect(onDisconnect).toHaveBeenCalled();
  });

  it("renders helpful wallet errors", () => {
    render(
      <WalletConnectButton
        isConnected={false}
        isLoading={false}
        error="Freighter wallet was not detected."
        onConnect={vi.fn()}
        onDisconnect={vi.fn()}
      />
    );

    expect(screen.getByText("Freighter wallet was not detected.")).toBeInTheDocument();
  });
});
