# SoroKit

[![CI](https://github.com/SoroGuild-Labs/sorokit/actions/workflows/ci.yml/badge.svg)](https://github.com/SoroGuild-Labs/sorokit/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**SoroKit is an open-source starter kit for building Soroban dApps on Stellar with Next.js, React, TypeScript, Tailwind CSS, wallet integration, Soroban RPC helpers, contract adapters, mock mode, tests, CI, and documentation.**

Many Stellar and Soroban developers rebuild the same frontend infrastructure repeatedly: wallet connection, RPC configuration, contract calls, transaction status handling, and starter dashboard UI. SoroKit gives builders a clean, reusable, documented foundation so they can focus on product logic instead of boilerplate.

## Features

- Next.js + React + TypeScript application structure
- Tailwind CSS developer-tool UI
- Freighter wallet connection pattern with safe fallbacks
- Network selector for testnet, futurenet, mainnet placeholder, and local sandbox
- Soroban RPC configuration and health-check helper
- Typed contract adapter interface
- Mock adapter with realistic delays, hashes, balances, statuses, and errors
- Token transfer, vault dashboard, and transaction status examples
- Vitest + React Testing Library test suite
- GitHub Actions CI workflow
- Contributor docs, issue templates, code of conduct, and roadmap

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Stellar SDK
- Vitest
- React Testing Library
- ESLint
- GitHub Actions

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` when you want local overrides.

```bash
NEXT_PUBLIC_SOROKIT_MOCK_MODE=true
NEXT_PUBLIC_STELLAR_NETWORK=testnet
NEXT_PUBLIC_SOROBAN_RPC_URL=https://soroban-testnet.stellar.org
NEXT_PUBLIC_EXPLORER_URL=https://stellar.expert/explorer/testnet
```

## Mock Mode

Mock mode is enabled by default. This lets contributors run the app without a deployed contract, funded wallet, or private key. The mock adapter implements token transfer, vault deposit, vault withdraw, reward claim, balance reads, and transaction status checks with realistic asynchronous responses.

Set `NEXT_PUBLIC_SOROKIT_MOCK_MODE=false` only after adding real deployed Soroban contract IDs and replacing the placeholder adapter calls.

## Wallet Integration

`useWallet` follows the Freighter browser wallet pattern:

- checks whether the wallet API is available
- requests access safely
- stores address, connection, loading, and error state
- disconnects locally
- never crashes if the extension is missing

Future contributors can add more wallet providers behind the same hook shape. TODO: add more wallet providers.

## Soroban RPC

SoroKit includes a network config registry and `useSorobanRpc` hook. In mock mode, health checks return safe local responses. In live mode, the RPC helper posts a `getHealth` request to the configured endpoint.

Contract calls intentionally go through the adapter layer. The starter kit does not pretend to call real contracts when contract IDs are missing. TODO: add real deployed Soroban contract examples.

## Project Structure

```text
src/components   Reusable UI modules
src/hooks        Wallet, RPC, mock mode, transaction, and contract-call hooks
src/lib          Wallet, Stellar, Soroban, contract adapter, and mock adapter code
src/types        Shared TypeScript contracts
src/utils        Formatting, addresses, mock data, and network config
docs             Architecture and contributor documentation
examples         Standalone example notes
tests            Vitest and React Testing Library tests
```

## Example Modules

- `examples/token-transfer` explains the token transfer form and adapter mapping.
- `examples/vault-dashboard` explains deposit, withdraw, balance, and rewards flows.
- `examples/transaction-status` explains lifecycle states and explorer links.

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run test
npm run test:watch
npm run build
```

## Roadmap

Phase 1 covers starter kit fundamentals: Next.js, TypeScript, Tailwind, wallet connection, network selection, RPC config, mock adapter, examples, tests, and docs.

Phase 2 expands contributor-friendly modules: more wallets, improved examples, mobile polish, dark mode, and transaction history.

Phase 3 moves toward ecosystem readiness: deployed Soroban contract examples, governance UI, analytics dashboard, deployment guide, advanced tests, and a contributor issue library.

See [docs/roadmap.md](docs/roadmap.md).

## Contributing

Start with [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/contributor-guide.md](docs/contributor-guide.md). Good first issues should be scoped, testable, and tied to one module. Examples:

- Add contract ID validation helper
- Add persistent network selection
- Add skeleton loaders
- Improve accessibility labels
- Add documentation screenshots

## License

MIT License. See [LICENSE](LICENSE).

## Maintainer Note

SoroKit is intentionally focused. It is not a fake protocol or a giant demo app. The repository is meant to be a clean, approval-ready base that Soroban builders can fork, study, extend, and contribute to.
