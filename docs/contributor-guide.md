# Contributor Guide

## Picking Issues

Choose scoped issues with clear acceptance criteria. Good first issues usually improve one component, one hook, one doc page, or one adapter utility.

## Branch Naming

Use:

- `feature/name`
- `fix/name`
- `docs/name`
- `test/name`

Examples:

- `feature/persistent-network-selection`
- `fix/freighter-unavailable-message`
- `docs/vercel-deployment`

## Commit Style

Use concise imperative commits:

- `Add address book component`
- `Improve RPC error examples`
- `Test transaction status retry`

## PR Checklist

- Code is typed and focused.
- UI remains responsive.
- New behavior has tests.
- Docs are updated.
- `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build` pass.
- No secrets or private keys are committed.

## Testing Expectations

Use React Testing Library for components and hook tests for stateful behavior. Mock Freighter and RPC calls. Avoid live network dependencies in unit tests.

## Documentation Expectations

If a change affects how developers build, configure, run, or extend SoroKit, update the docs in the same pull request.
