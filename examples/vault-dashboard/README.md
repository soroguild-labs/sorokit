# Vault Dashboard Example

The vault dashboard example models a common dApp workflow: read a balance, deposit, withdraw, and claim rewards.

## Flows

- `readBalance` returns a display balance.
- `depositToVault` submits a deposit amount.
- `withdrawFromVault` submits a withdrawal amount.
- `claimRewards` submits a rewards claim.

## Why It Exists

Many Soroban frontends need dashboard-style contract interactions. This example gives contributors a practical pattern without inventing a large fake protocol.

## Contributor Notes

Future improvements could add transaction history, skeleton loaders, strategy metadata, and real deployed contract examples.
