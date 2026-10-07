# PublicLogic Connection Governance

Status: Organization-wide doctrine  
Applies to: PublicLogic products, instances, adapters, connectors, imports, projections, and governed external actions

## Doctrine

PublicLogic does not make interoperability safe by copying all external data into one platform. It makes interoperability governable by preserving object identity, authority, custody, lineage, evidence, connection health, and decision state across tools.

> **Connect records, not clouds.**

> **Connections are governed dependencies, not integrations.**

## Canonical rules

1. **One object. One authority.** Authority is assigned to the specific object, not universally to a vendor or data type.
2. **Projection is not duplication.** A provider-backed object shown through another client remains the same object when identity is preserved.
3. **Visibility is not custody.** Search, mounting, indexing, or display does not transfer custody.
4. **Sync is not authority.** Technical synchronization does not grant authority to approve, close, delete, or supersede governed work.
5. **Derivatives keep lineage.** Copies, exports, conversions, summaries, and generated artifacts retain their source relationship.
6. **Protocol first, brand second.** Contracts describe the actual mechanism and its guarantees, not merely the vendor names.
7. **Evidence, reliability, and authority are independent.** Each is assessed and recorded separately.
8. **Connections age.** Verification has a date; dependencies can degrade, become at risk, and retire.
9. **Open assumptions remain visible.** Uncertainty is not converted into silent truth.
10. **Consequential uncertainty produces HOLD.** A write does not proceed merely because a technical API permits it.

## Connection Contract

A material connection should be able to state:

| Dimension | Required question |
|---|---|
| Identity | What external object or capability is this? |
| Source | Where did PJ/PublicLogic learn of it? |
| Surface | Where is it being displayed or acted upon? |
| Mechanism | API, webhook, Exchange, ICS, CalDAV, mount, import, export, manual capture, or other? |
| Direction | Inbound, outbound, bidirectional, subscription, or snapshot? |
| Authority | Where is the object authoritative now? |
| Custody | Who holds the source object and any governed copy? |
| Evidence | What supports the claimed connection behavior? |
| Reliability | Is the dependency healthy enough for the intended use? |
| Action posture | Observe, Reference, Import, Create, Update, Delete, Govern, or HOLD? |
| Lifecycle | Discovered, Documented, Tested, Healthy, Degraded, At Risk, or Retired? |
| Clock | When was it verified, when is review due, and is a known change approaching? |
| Fallback | What is the safe alternate path? |
| Assumptions | What remains unresolved and what actions does that constrain? |

A contract describes the dependency. It does not duplicate the external object.

## Lifecycle

~~~text
DISCOVERED
    ↓
DOCUMENTED
    ↓
TESTED
    ↓
HEALTHY
    ↓
DEGRADED / AT_RISK
    ↓
RETIRED
~~~

Historical bindings and evidence remain available after retirement. Retirement prohibits new governed reliance on the connection; it does not erase history.

## Connection Watch

Material dependencies should support a small dependency clock:

- last verified;
- last successful observation or write;
- next review;
- known change or retirement date;
- unresolved assumptions;
- fallback readiness.

Connection Watch is a governance primitive. It does not imply that every connection has continuous automated monitoring.

## Assumption rule

An assumption that could materially change identity, authority, custody, destructive-write behavior, or proof quality is a governed object.

Until resolved, its safe posture must be explicit.

~~~text
OPEN ASSUMPTION
→ affected connection / CaseSpace / action
→ current evidence
→ owner or verification path
→ safe behavior
→ HOLD when consequential
~~~

## Provider neutrality

An implementation may configure one provider as a personal front door, another as an organizational authority surface, and another as a collaboration system. Those roles are instance configuration, not universal PublicLogic truth.

PublicLogic doctrine is portable across Microsoft, Google, Apple, GitHub, SharePoint, booking systems, municipal software, file stores, and future providers because authority attaches to objects and governed relationships rather than brands.

## Fail-closed external action

Before a consequential external write, the runtime must establish:

1. target identity;
2. permitted authoritative destination;
3. actor and authority;
4. mechanism and write posture;
5. sufficient connection health;
6. no material unresolved assumption;
7. required post-action observation or evidence.

If any required condition is unresolved, the correct outcome is HOLD.

> **PJ does not send what it is not ready to govern.**

## Continuity test

A compliant PublicLogic case survives:

- a connector replacement;
- a provider migration;
- a UI replacement;
- an automation failure;
- a personnel handoff;
- a protocol retirement.

The source systems may change. The authority trace, evidence, decisions, lineage, and custody history must not disappear with them.
