import { renderHook, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useMockMode } from "@/hooks/useMockMode";

describe("useMockMode", () => {
  it("starts enabled by default and can toggle", () => {
    const { result } = renderHook(() => useMockMode());

    expect(result.current.enabled).toBe(true);
    expect(result.current.label).toBe("Mock mode enabled");

    act(() => result.current.toggle());
    expect(result.current.enabled).toBe(false);
    expect(result.current.label).toBe("Live RPC mode");
  });
});
