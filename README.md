# SupplyRadar site

Static site served by Vercel (auto-deploys from `main`). Canonical host: https://www.supplyradar.co.uk (apex 308-redirects to www).

- `/` Supply Check (single paid product, £295) + enquiry form with source attribution (hidden fields).
- `/privacy/`, `/terms/` trust pages (terms are DRAFT).
- `/tenders/muga/` bounded secondary experiment (do not expand).

Enquiry capture: the form posts to a FormSubmit alias (public form id) that emails hello@supplyradar.co.uk; on failure it falls back to a pre-filled email.

Internal buyer-signal files (radar, signals, sources, queue) were removed from the public site on 2026-10-04; copies are in the Wealth OS SoT (`venture/supplyradar/archive_site_internal_2026-10-04/`). Do not add internal files to this repo root: everything here is public.
