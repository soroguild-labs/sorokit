import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { NetworkSelector } from "@/components/NetworkSelector";
import { NETWORKS } from "@/utils/networkConfig";

describe("NetworkSelector", () => {
  it("calls onChange with the selected network config", async () => {
    const onChange = vi.fn();
    render(<NetworkSelector value={NETWORKS.testnet} onChange={onChange} />);

    await userEvent.selectOptions(screen.getByLabelText(/network/i), "local");
    expect(onChange).toHaveBeenCalledWith(NETWORKS.local);
  });
});
