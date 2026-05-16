export function truncateAddress(address?: string | null, leading = 6, trailing = 6): string {
  if (!address) return "No address";
  if (address.length <= leading + trailing + 3) return address;
  return `${address.slice(0, leading)}...${address.slice(-trailing)}`;
}

export function isLikelyStellarAddress(address: string): boolean {
  return /^G[A-Z0-9]{55}$/.test(address);
}
