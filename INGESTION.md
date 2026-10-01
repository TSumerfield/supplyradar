# Buyer Signal Ingestion

SupplyRadar treats declared purchasing intent as the raw material.

## Flow
collector -> raw-signals.json -> build-signals.js -> signals.json -> radar.html

## Minimum evidence
A signal must identify a real purchasing/sourcing need and a source URL. Prefer a stated budget, quantity, current spend, delivery requirement, or recurring procurement pattern.

## Scoring
The compiler weights recency, explicit intent, transaction-value tier, repeat potential, China fit, contactability and compliance complexity. Scores prioritise review; they are not a substitute for commercial judgement.

## States
NEW -> QUALIFIED -> CONTACT -> BRIEF -> SUPPLY CHECK -> QUOTE -> WON
REJECT is terminal unless new evidence changes the case.

## Collector contract
Collectors may be manual research, APIs, scrapers or third-party services. They must output the raw-signals.json schema. The rest of SupplyRadar should not depend on any one collection provider.
