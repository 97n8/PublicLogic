# PublicLogic

PublicLogic builds governance infrastructure that lets work survive tools, handoffs, personnel changes, and system migrations without surrendering authority or custody to a new all-owning platform.

## Architecture position

PublicLogic systems are designed around a simple boundary:

> **One place to start. Not one place that owns everything.**

Existing systems may remain authoritative for mail, files, calendars, source control, records, provider workflows, or other domain objects. PublicLogic preserves the governed relationship between those objects: identity, authority, evidence, lineage, decisions, holds, outcomes, custody, and transfer.

The core connection doctrine is:

- **Connect records, not clouds.**
- **One object. One authority.**
- **Projection is not duplication.**
- **Visibility is not custody.**
- **Sync is not authority.**
- **Derivatives keep lineage.**
- **Connections are governed dependencies, not integrations.**
- **HOLD before an uncertain consequential write.**

See [CONNECTION_GOVERNANCE.md](CONNECTION_GOVERNANCE.md) for the organization-wide connection contract.

## Product relationship

PuddleJumper is the governed continuity and execution runtime that applies these principles to live work and CaseSpaces.

VAULT provides authority and governance policy boundaries.

ARCHIEVE preserves durable evidence, custody, closure, and transfer.

Provider systems remain external systems of record or action where appropriate. PublicLogic does not require them to surrender object authority merely because a record is visible or governable through PublicLogic.

## Governing design test

A PublicLogic implementation should still be intelligible and defensible when a provider, connector, interface, employee, or automation changes.

If the case only survives while one specific tool survives, the architecture is incomplete.
