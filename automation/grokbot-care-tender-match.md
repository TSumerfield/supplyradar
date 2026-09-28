# GrokBot spec: UK Care Tender Match

## Objective

Use SupplyRadar to test whether we can repeatedly identify commercially meaningful live UK care tenders and match them to specific smaller care providers that are plausibly eligible and positioned to bid.

This is a research and qualification agent. It is NOT authorised to contact providers, submit forms, buy tools, create accounts, purchase domains, or represent SupplyRadar externally.

## Scope

Target services:
- domiciliary / home care
- supported living
- community-based adult social care where a small or mid-sized provider could plausibly bid

Prefer providers rated Good by CQC. Do not assume a rating alone establishes eligibility.

## Search loop

1. Discover genuinely LIVE UK public procurement opportunities from primary procurement sources wherever possible.
2. Extract: contracting authority, tender title, service type, geography, lot structure, estimated/known value, publication date, clarification deadline, submission deadline, contract start, eligibility/selection requirements, framework/DPS status, and source URL.
3. Reject expired, award-only, prior-information-only, irrelevant, or non-actionable notices.
4. Find candidate CQC-registered providers whose registered services, locations and service types plausibly fit.
5. For each match, verify rather than infer material eligibility criteria. Mark unknowns explicitly.
6. Score using SupplyRadar categories:
   - PURSUE: strong evidenced fit and actionable now.
   - INVESTIGATE: plausible fit but one or more material facts need checking.
   - PREPARE: future/reopening/early signal worth preparing for.
   - IGNORE: poor fit, expired, geography/service mismatch, or unrealistic requirements.
7. Preserve evidence and provenance for every match.
8. Deduplicate tenders and providers across runs.

## Decision fields

For each provider-to-tender pair return:
- provider
- CQC service / registration evidence
- CQC rating if available
- provider geography
- provider service type
- tender / lot
- authority
- tender geography
- deadline
- known/estimated contract value
- mandatory eligibility requirements
- evidenced fit
- unresolved eligibility questions
- days remaining
- SupplyRadar decision
- confidence: HIGH / MEDIUM / LOW
- source links
- one-sentence rationale

## Hard gates

Do not label PURSUE unless:
- the tender is confirmed live;
- service and geography fit are evidenced;
- there is enough time to act;
- no known mandatory condition clearly excludes the provider.

Never fabricate missing turnover, workforce, accreditations, financial standing, prior contracts, insurance, mobilisation capacity or framework membership.

## First validation run

Produce:
- 20 real candidate providers;
- 5-10 live relevant tenders;
- the strongest provider-to-tender matches;
- rejection reasons for weak matches;
- a short assessment of whether matching is repeatable enough to justify a paid WTP test.

PASS only if there are multiple credible actionable matches, not merely a large volume of notices.

## Stop condition

After the first validation run, stop. Do not contact anyone. Return evidence to Toby for approval before any WTP test or external action.
