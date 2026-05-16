export function formatAmount(value: string | number, symbol = "XLM"): string {
  const parsed = Number(value);
  if (Number.isNaN(parsed)) return `${value} ${symbol}`;
  return `${new Intl.NumberFormat("en", {
    maximumFractionDigits: 7
  }).format(parsed)} ${symbol}`;
}

export function formatDateTime(value?: string): string {
  if (!value) return "Not checked yet";
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}
