# Wallet Integration

SoroKit uses a safe Freighter wallet integration pattern. The browser extension is optional, and missing wallet APIs should never crash the app.

## Freighter Concept

Freighter exposes wallet APIs in the browser. SoroKit checks for `window.freighterApi`, then requests access when the user clicks connect.

## `useWallet`

`useWallet` manages:

- wallet address
- availability
- connected state
- loading state
- error state
- connect
- disconnect
- availability checks

If Freighter is unavailable, the hook returns a helpful error and the app remains usable in mock mode.

## Adding More Providers

Future wallet providers should be added behind a provider interface rather than directly inside UI components.

Suggested path:

1. Create a provider abstraction in `src/lib/wallet.ts`.
2. Add provider-specific access methods.
3. Extend `useWallet` to select a provider.
4. Add tests for unavailable, rejected, and successful connection states.

TODO: add more wallet providers.

## Error States

Handle these cases explicitly:

- extension missing
- user rejects connection
- wallet API changes shape
- wallet returns no public key
- provider disconnects or refreshes
