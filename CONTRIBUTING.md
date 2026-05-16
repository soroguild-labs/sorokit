# Contributing to SoroKit

Welcome. SoroKit is built for contributors who want to help Stellar and Soroban frontend developers move faster.

## Local Setup

```bash
npm install
npm run dev
```

Run checks before opening a pull request:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Project Structure

- `src/components`: reusable UI modules
- `src/hooks`: React hooks for wallet, RPC, transaction, mock mode, and contract actions
- `src/lib`: adapter, wallet, Stellar, and Soroban utilities
- `src/types`: shared TypeScript interfaces
- `src/utils`: formatting, network config, mock data, and address helpers
- `docs`: architecture, usage, and contributor documentation
- `examples`: focused example explanations
- `tests`: component and hook tests

## Picking Issues

Choose issues that have clear acceptance criteria. If the scope is unclear, ask for clarification before building. Good first contributions should usually touch one component, one hook, one doc page, or one adapter behavior.

## Branch Naming

Use short descriptive names:

- `feature/dark-mode`
- `fix/wallet-error-state`
- `docs/rpc-guide`
- `test/contract-adapter`

## Commit Style

Use concise imperative commits:

- `Add transaction history placeholder`
- `Fix wallet unavailable error state`
- `Document local sandbox setup`

## Pull Request Checklist

- The change is scoped to the issue.
- TypeScript passes.
- Tests are added or updated when behavior changes.
- Documentation is updated when developer workflow changes.
- UI changes remain responsive and accessible.
- No private keys, secrets, or real user data are committed.

## Testing Expectations

Add React Testing Library tests for visible component behavior. Add hook tests for state transitions and error handling. Mock browser wallet APIs and network calls instead of relying on live services.

## Documentation Expectations

Developer-facing changes should update docs. New examples should include:

- purpose
- files involved
- adapter methods used
- mock mode behavior
- path to replace with real contracts

## Code Quality

Prefer small typed modules, clear names, and adapter boundaries. Avoid large fake protocol logic. SoroKit should stay focused on frontend infrastructure that real Soroban dApp teams can reuse.
