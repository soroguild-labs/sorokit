import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { AddressDisplay } from "@/components/AddressDisplay";

const address = "GBZXN7PIRZGNMHGA2NPTVUPYJMZHPZV7Z4VXNJILZCZ4RTS4SRMKSTTA";

describe("AddressDisplay", () => {
  it("renders an empty state", () => {
    render(<AddressDisplay address={null} />);
    expect(screen.getByText("No wallet connected")).toBeInTheDocument();
  });

  it("truncates and copies a Stellar address", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });

    render(<AddressDisplay address={address} />);
    expect(screen.getByLabelText(`Wallet address ${address}`)).toHaveTextContent("GBZXN7...MKSTTA");

    await userEvent.click(screen.getByRole("button", { name: /copy wallet address/i }));
    expect(writeText).toHaveBeenCalledWith(address);
    expect(screen.getByText("Copied")).toBeInTheDocument();
  });
});
