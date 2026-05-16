# Token Transfer Example

The token transfer example demonstrates a reusable frontend flow for sending an asset through a Soroban contract adapter.

## What It Shows

- recipient input
- amount input
- adapter-driven submission
- pending transaction hash handoff
- validation errors from the adapter

## Adapter Mapping

The form calls:

```ts
transferToken({ to, amount, assetCode }, context)
```

In mock mode, the adapter returns a generated transaction hash and pending status. In a real integration, this method should assemble, sign, submit, and monitor the Soroban transaction.

## Contributor Notes

Good next improvements include address validation, token metadata resolution, saved recipients, and better field-level error messages.
