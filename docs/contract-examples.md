# Contract Examples

SoroKit ships three focused example modules that map to reusable contract adapter methods.

## Token Transfer

`TokenTransferForm` calls:

```ts
adapter.transferToken({ to, amount, assetCode }, context)
```

The mock adapter validates the amount and recipient, waits briefly, and returns a pending transaction hash.

## Vault Dashboard

`VaultExample` calls:

- `readBalance`
- `depositToVault`
- `withdrawFromVault`
- `claimRewards`

This models common dashboard flows without inventing a large protocol.

## Transaction Status

`TransactionStatus` renders:

- idle
- pending
- success
- failed
- unknown

`useTransactionStatus` asks the adapter for the latest status and includes explorer links when the selected network supports them.

## Adapter Interface

The adapter interface is defined in `src/types/contract.ts`. Real contracts should implement the same interface so UI modules do not need to know whether they are using mocks or deployed Soroban contracts.
