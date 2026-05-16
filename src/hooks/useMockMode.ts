import { useMemo, useState } from "react";
import { isMockMode } from "@/lib/contractAdapter";

export function useMockMode() {
  const initial = useMemo(() => isMockMode(), []);
  const [enabled, setEnabled] = useState(initial);

  return {
    enabled,
    label: enabled ? "Mock mode enabled" : "Live RPC mode",
    toggle: () => setEnabled((value) => !value),
    setEnabled
  };
}
