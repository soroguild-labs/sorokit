# Soroban RPC

SoroKit includes a small RPC helper layer for network-aware frontend development.

## Network Config

Networks are defined in `src/utils/networkConfig.ts`:

- testnet
- futurenet
- mainnet placeholder
- local sandbox

Each config includes name, passphrase, RPC URL, explorer URL, and a status label.

## RPC URLs

The default testnet URL comes from `.env.example`:

```bash
NEXT_PUBLIC_SOROBAN_RPC_URL=https://soroban-testnet.stellar.org
```

Local sandbox uses:

```bash
http://localhost:8000/soroban/rpc
```

## Health Checks

`checkRpcHealth` posts a JSON-RPC `getHealth` request when live mode is enabled. In mock mode, it returns a safe local health response so contributors can keep working offline.

## Contract Calls

Contract calls should go through `ContractAdapter`. The starter kit deliberately uses placeholders for live contract calls until deployed contracts are configured.

## Safe Placeholder Setup

If `NEXT_PUBLIC_SOROKIT_MOCK_MODE=false` and no contract ID is configured, adapter calls throw a clear error:

```text
No contract ID configured. SoroKit uses mock mode until you add deployed Soroban contracts.
```

This prevents the repo from pretending to perform real on-chain work.
