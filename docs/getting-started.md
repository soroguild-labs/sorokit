# Getting Started

## Installation

```bash
npm install
```

## Environment Setup

Copy `.env.example` to `.env.local` if you want local overrides.

```bash
NEXT_PUBLIC_SOROKIT_MOCK_MODE=true
NEXT_PUBLIC_STELLAR_NETWORK=testnet
NEXT_PUBLIC_SOROBAN_RPC_URL=https://soroban-testnet.stellar.org
NEXT_PUBLIC_EXPLORER_URL=https://stellar.expert/explorer/testnet
```

## Run the Dev Server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Run Tests

```bash
npm run test
```

Use watch mode while developing:

```bash
npm run test:watch
```

## Typecheck and Build

```bash
npm run typecheck
npm run build
```

## Mock Mode

Mock mode is enabled when `NEXT_PUBLIC_SOROKIT_MOCK_MODE=true` or when the variable is omitted. It lets contributors use token transfer, vault, and transaction examples without deployed contracts.

To test live-mode placeholders:

```bash
NEXT_PUBLIC_SOROKIT_MOCK_MODE=false
```

Live mode currently fails safely unless real contract IDs and adapter implementations are added.
