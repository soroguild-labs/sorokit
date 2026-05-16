# Transaction Status Example

The transaction status example explains how SoroKit models lifecycle feedback after a contract action.

## States

- `idle`: no transaction has been submitted
- `pending`: transaction hash exists and confirmation is not final
- `success`: transaction confirmed
- `failed`: transaction failed
- `unknown`: status could not be determined

## UI Behavior

The status component displays a badge, message, transaction hash, timestamp, explorer link when available, and retry action where sensible.

## Contributor Notes

Future work should add polling intervals, backoff, persisted history, and RPC-specific error examples.
