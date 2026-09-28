# SupplyRadar

SupplyRadar is a validation experiment for a personalised commercial-intelligence service for specialist suppliers selling into UK education.

## Proposition

**Know which opportunities are worth pursuing.**

Rather than sending generic tender alerts, SupplyRadar scores and explains opportunities against a supplier's actual products, services, geography and likely contract fit.

Current output categories:

- PURSUE
- INVESTIGATE
- PREPARE
- IGNORE
- MISSED / WATCH

The longer-term hypothesis is that **Re-Tender Radar** can learn buyer, incumbent, award, contract and expiry cycles so suppliers can prepare before the next procurement window.

## Validation rule

This is an experiment, not yet a full product.

Do not add dashboards, accounts, pricing infrastructure or a backend until customer evidence earns it.

The next meaningful signal is a supplier asking to receive the Radar regularly or showing willingness to pay.

## Stack

- Static landing page
- GitHub source control
- Vercel hosting
- Domain: supplyradar.co.uk


## Care-provider opportunity experiment

SupplyRadar also runs a bounded validation experiment for UK homecare and supported-living procurement.

The experiment tests whether public procurement signals can be matched to specific smaller care providers early and accurately enough to create commercial value.

Flow:

`LIVE CARE TENDERS -> PROVIDER FIT -> ELIGIBILITY -> PURSUE / INVESTIGATE / PREPARE / IGNORE -> HUMAN REVIEW`

This is not a separate brand or product. No provider outreach, bid submission, paid tooling, domain purchase, or customer contact is authorised by this experiment.

### Pre-test gate

A run only passes the pre-test when it produces:
- at least 20 real candidate providers;
- 5-10 genuinely live relevant tenders;
- evidence-backed provider-to-tender matches;
- enough lead time for a provider to act;
- source provenance for every material claim.

Only a passed pre-test can be considered for a willingness-to-pay test.
