# Architecture

SoroKit is organized around a practical frontend dApp architecture: UI components call hooks, hooks call typed adapters, adapters call either mock implementations or real Soroban infrastructure.

## Frontend Architecture

The Next.js pages are intentionally thin. `src/pages/index.tsx` explains the project, `src/pages/examples.tsx` wires example modules together, and `src/pages/docs.tsx` points contributors to repository documentation.

`src/components` contains reusable dApp UI such as wallet controls, network selection, transaction status, token transfer, and vault actions.

## Component Layer

Components are designed to be reusable in real Soroban dApps:

- `WalletConnectButton` handles connection controls and error display.
- `NetworkSelector` and `NetworkBadge` expose network configuration clearly.
- `TokenTransferForm` shows a realistic action form.
- `VaultExample` demonstrates dashboard-style contract interactions.
- `TransactionStatus` renders lifecycle states and explorer links.

## Hook Layer

Hooks hold stateful behavior:

- `useWallet` manages Freighter availability, connect, disconnect, loading, and errors.
- `useSorobanRpc` checks configured RPC health.
- `useContractCall` wraps adapter methods with loading and error state.
- `useTransactionStatus` tracks submitted hashes and status polling.
- `useMockMode` exposes local mock-mode state for contributors.

## Adapter Layer

The contract adapter is the key boundary. `src/types/contract.ts` defines methods for:

- token transfer
- vault deposit
- vault withdraw
- rewards claim
- balance read
- transaction status

`src/lib/mockAdapter.ts` implements the same interface with realistic asynchronous mock responses. `src/lib/contractAdapter.ts` chooses the mock adapter by default and uses safe placeholders when live mode is requested without real contracts.

## RPC Layer

`src/lib/soroban.ts` owns RPC health checks and placeholder contract-call behavior. Network data comes from `src/utils/networkConfig.ts`.

## Mock Mode

Mock mode exists so contributors can build without real deployed contracts. It returns generated hashes, balances, status transitions, and helpful validation errors.

## Adding Real Contracts

To add real contracts:

1. Add contract IDs through environment variables.
2. Add validation helpers for contract IDs.
3. Replace placeholder calls in `contractAdapter.ts` with real Soroban transaction assembly and submission.
4. Keep mock mode as the default contributor path.
5. Add integration tests around adapter behavior.

TODO: add real deployed Soroban contract examples.
