# Cross-surface consistency: marketing site rebuild (post Conduit / TSI rename)

Audited 2026-04-27 against the brief's canonical positioning, hard rules, and "Definition of done" criteria.

## Surfaces audited

- `/` (homepage) — `src/app/page.tsx` assembling 11 sections — first impression, the whole story in 11 scrolls.
- `/platform` — `src/app/platform/page.tsx` — deep dive for technical buyers; canonical for architecture, deploy modes, role surfaces.
- `/service-leaders` — `src/app/service-leaders/page.tsx` — buyer page for dealer principals / service ops directors.
- `/enterprise` — `src/app/enterprise/page.tsx` — procurement / OEM page.
- `/marine` — `src/app/marine/page.tsx` — reference deployment vertical (richest content).
- `/manufacturing`, `/hvac`, `/heavy-equipment`, `/power-generation` — design-partner verticals, all rendered through `src/components/DesignPartnerLayout.tsx`.
- `/whitepaper` — `src/app/whitepaper/page.tsx` — pre-rebuild long-form, partially scrubbed.
- Section components: `Hero`, `Problem`, `Platform`, `Integration` (Three Outcomes), `AIComparison`, `Differentiators`, `Verticals`, `Proof`, `TheAsk`, `FAQ`, `Footer`, plus `FieldIntelligenceDiagram`.

## Canonical sources (established by this audit)

- Category name → **Hero (`Hero.tsx`)** + `app/layout.tsx`. Canonical: "Technical Service Intelligence" / "TSI". `platform/page.tsx` line 127 is the only place that defines the acronym.
- Product naming → **`Footer.tsx`** + `layout.tsx`. Canonical: full "Planara Conduit" in titles/eyebrows, short "Conduit" in body copy.
- Inputs phrasing → **Hero**. Canonical: "manufacturer manuals, standards, and service bulletins". All three named.
- Output phrasing → **Hero**. Canonical: "cited, safety-validated answers".
- Audience phrasing → **Hero**. Canonical: "the people who service the equipment".
- Learning loop → **`Platform.tsx`** body copy. Canonical: "the next technician gets a better answer than the last one got".
- Prototype timeline → **`Proof.tsx`** + FAQ + `TheAsk` + `/platform` FAQ + `/marine` CTA all agree on **1–2 weeks**. Pilot is **4–8 weeks**. No drift on the marketing site itself; only the whitepaper component `PhaseTimeline.tsx` and `TwoPathDiagram.tsx` use ASCII hyphen "1-2 weeks" — see Visual drift below.
- Vertical labels → `Verticals.tsx` and `Hero.tsx` agree: **"Heavy & agricultural equipment"**. `/platform` Standards table and `/heavy-equipment` body copy diverge — see Contradictions.

---

## Contradictions

### Numbers
None. Prototype timeline (1–2 weeks), pilot timeline (4–8 weeks), engagement-phase numbers are all consistent across `Proof.tsx`, `FAQ.tsx`, `TheAsk.tsx`, `/platform` FAQ, `/marine` CTA. The whitepaper still cites 30-industry McKinsey, $141B IoT, 1.9M unfilled — those are sourced market stats and don't conflict with the rebuild's product claims.

### Terminology — "Heavy equipment" vs "Heavy & agricultural equipment" vs "Heavy and ag"
Same concept, **four different surface names** in rendered copy:

| Surface | Term used |
| --- | --- |
| `Hero.tsx:8` (homepage chip) | "Heavy & agricultural equipment" |
| `Verticals.tsx:34` (homepage card) | "Heavy & agricultural equipment" |
| `heavy-equipment/page.tsx:15` (vertical label) | "Heavy & agricultural equipment" |
| `heavy-equipment/page.tsx:17` headline | "Conduit for dealer-network OEMs and the bays they answer to." (label is invisible in the headline) |
| `heavy-equipment/page.tsx:22` body | "Heavy and ag equipment runs on a stack of standards…" |
| `heavy-equipment/page.tsx:24,29` body | "A heavy-equipment service manual…" / "A heavy-equipment Conduit deployment…" |
| `platform/page.tsx:456,463,477` (Standards table chips) | "Heavy equipment" |
| `whitepaper/page.tsx:425` | "Heavy equipment manufacturers like Caterpillar…" |

**Resolution.** Canonical is "Heavy & agricultural equipment" (per `Verticals.tsx`). Update `platform/page.tsx` Standards table chips to match. The colloquial "heavy and ag" / "heavy-equipment" inside body prose is fine if the canonical label appears in the H1 / nav, but the H1 on `/heavy-equipment` is "Conduit for dealer-network OEMs and the bays they answer to" — the label only appears in the eyebrow. Recommend tightening so the eyebrow reads the canonical label, then prose can relax.

### Terminology — "intelligence" outputs in `FieldIntelligenceDiagram`
The canonical architecture SVG (used on both homepage `Platform.tsx` and `/platform` Architecture section) labels the three outputs **"Service Intelligence" / "Owner Intelligence" / "OEM Intelligence"** (`FieldIntelligenceDiagram.tsx:102/108/115`). Nowhere in body copy across any surface are these three terms used as named product modules. The diagram introduces three product terms the prospect will not see again. This is silent terminology drift on a high-attention surface.

**Resolution.** Either (a) introduce these three terms in copy ("Conduit produces three role-specific surfaces: Service Intelligence for technicians, Owner Intelligence for owners, OEM Intelligence for product teams") on at least the homepage and `/platform`, or (b) rename them in the SVG to "For technicians / For owners / For OEMs" so the diagram matches the body copy elsewhere. Option (b) is simpler and matches the rest of the site's voice.

### Terminology — "Planara Service Intelligence" inside the right-hand panel of AIComparison
`AIComparison.tsx:125` labels the Conduit answer pane "Planara Service Intelligence". Every other surface calls the product "Conduit" or "Planara Conduit". The H2 above the panel is "Generic AI vs. Technical Service Intelligence" (the category, correct). The panel label should be "Planara Conduit" — matching `Footer`, `Hero`, `/platform`, and the verticals.

### Persona / scope
- Homepage `Integration` Three Outcomes uses **"Manufacturer product teams"** (`Integration.tsx:30`).
- `/platform` Roles uses **"OEM product team"** (`platform/page.tsx:250`).
- `Differentiators.tsx` switches register and talks about "the OEM" and "the manufacturer" interchangeably.
- `Proof.tsx:43` says "marine OEMs and a global manufacturing operator."

These are aligned in spirit but the prospect will see "OEM" and "manufacturer" used as if they're different things across two scrolls. **Resolution.** Pick one in product-team labels (recommend "OEM" since it's shorter and matches `/platform` Roles, the `OEM Intelligence` SVG output, and the verticals' service-ops-director framing). Update `Integration.tsx:30` to "OEM product teams" for consistency.

### Vertical "status" framing on Verticals card vs Marine page
`Verticals.tsx` shows Marine as `"Reference deployment"` and the other four as `"Design partner"`. `/marine` then describes itself as the reference deployment ("The reference deployment is built on the Yamaha F300 corpus"). Consistent. The four design-partner pages all use `DesignPartnerLayout` and consistently label themselves design-partner pages. No drift here — flag as **clean**.

---

## Vocabulary leakage

### Banned terms found in rendered copy (all on `/whitepaper` and its components)

| File:line | Exact text | Severity |
| --- | --- | --- |
| `app/whitepaper/page.tsx:140` | `Planara Manufacturing Intelligence` (top-nav eyebrow) | REGRESSION |
| `app/whitepaper/page.tsx:165` | `Planara Manufacturing Intelligence — March 2026` (hero subtitle) | REGRESSION |
| `app/whitepaper/page.tsx:185` | `…service operations into a single intelligence layer.` | REGRESSION |
| `app/whitepaper/page.tsx:289` | `…the intelligence layer connecting these systems is almost entirely absent.` | REGRESSION |
| `app/whitepaper/page.tsx:685` | `…AI-powered manufacturing intelligence…` | REGRESSION |
| `app/whitepaper/page.tsx:866` | `Manufacturing Intelligence` (footer tagline) | REGRESSION |
| `components/whitepaper/IntelligenceGapDiagram.tsx:65` | Diagram heading: `With Intelligence Layer` | REGRESSION |
| `components/whitepaper/IntelligenceGapDiagram.tsx:107` | Diagram label: `Intelligence Layer` | REGRESSION |
| `components/whitepaper/ValueChainDiagram.tsx:17` | Card body: `Queryable intelligence layer for dealer network` | REGRESSION |
| `components/whitepaper/TwoPathDiagram.tsx:64` | `Intelligence layer embedded via API into existing DMS…` | REGRESSION |
| `components/whitepaper/TwoPathDiagram.tsx:96` | Label: `Planara Intelligence Platform` | REGRESSION (introduces a fourth product name) |
| `components/sections/Differentiators.tsx:12` | Card title: `Closed-loop field intelligence` | REGRESSION ("field intelligence") |
| `app/api/whitepaper/route.ts:64` | Email signature: `Planara · Manufacturing Intelligence` | REGRESSION (will land in inboxes) |

### AI vendor names
**No leakage.** Grep for Gemini / Claude / Anthropic / OpenRouter / Cohere / Pinecone / Supabase / Docling / Langfuse / DeepEval / LangGraph / HyDE / BM25 across all rendered `.tsx` returned zero matches. Clean.

### "Coming soon"
**No leakage.** Zero matches on rendered surfaces. Clean.

### DMS auto-write claims
- `whitepaper/page.tsx:691,698` and `TwoPathDiagram.tsx:64` mention `CDK, Lightspeed, DealerSocket` and "embedded intelligence via API into existing DMS" — these are framed as a future "Path B" / market-context, not a Conduit capability. Borderline acceptable but reads as overclaim once you remember the rule. **Recommend** softening Path B copy to "API embedding into your existing dealer software stack" and dropping the named DMS vendors here. Named DMS vendors live in `components/demos/owner/OwnerDemo.tsx` and `components/demos/service/ServiceDemo.tsx` integration-toast strings — those are demo-only stubs (clearly framed "In production, this creates…") and acceptable inside the demo sandbox.

### Cross-tenant / network-effect claims
- `service-leaders/page.tsx:77` (table row): *"every tech in the network gets the corrected answer the next time they ask."*
- `service-leaders/page.tsx:534` (correction-management screenshot caption): *"Every tech in the network gets the correction next time they ask."*
- `Differentiators.tsx:5` title: **"Manufacturer-to-network distribution"** + body: *"Conduit deploys at the OEM and reaches every dealer, every technician, every vessel — from one source of truth."*
- `Differentiators.tsx:24` title: **"Network resolution analytics"** + body: *"What questions are dealers asking? … Conduit surfaces the patterns the OEM has never seen…"*

These read as cross-tenant network effects on a casual scroll. The `/platform` page (Correction Pipeline) and `/enterprise` page (Procurement table) explicitly contradict this: **"Single-tenant loop, by design. Corrections improve the dealership that made them. They don't flow to other tenants…"** (`platform/page.tsx:429-434`) and **"There is no shared index across tenants, no cross-tenant training, and no shared model fine-tuned on customer data."** (`enterprise/page.tsx:687`).

**Hard contradiction.** The homepage and service-leaders page imply cross-network learning. The platform and enterprise pages explicitly deny it. A buyer who reads the homepage and then opens the Procurement section will spot this in 30 seconds.

**Resolution.**
1. `service-leaders/page.tsx:77 + 534`: change "every tech in the network" → "every tech in your shop" (tenant-scoped). The whole comparison-table item is inside-shop scope; this is a one-word fix.
2. `Differentiators.tsx:5`: rename "Manufacturer-to-network distribution" to "OEM-to-dealer distribution" or "One source of truth across your dealer network" — and rewrite the body so it's clear distribution = the OEM tenant pushes its corpus to its own dealer namespace, not cross-customer pollination. Currently the sentence "Conduit deploys at the OEM and reaches every dealer" is accurate but reads like the dealers are sharing data — they aren't.
3. `Differentiators.tsx:24` "Network resolution analytics" — same fix. "Network" here means "the OEM's own dealer network", not Planara's customer base. Rename to "Dealer-network resolution analytics" or "Within-tenant analytics across the dealer network."

### Customer-logo framing
`Proof.tsx:62-65` reads:

```
Team experience includes
Ford · Airbus · Google · Apple · Uber · Disney · Goldman Sachs · Samsung
```

Framed as **leadership experience**. Compliant.

---

## Tone drift

Voice baseline: J's. Direct, no-bullshit, structured. Short clauses. Specific over generic. Empathy via specificity, not adjectives.

### Worst 3 examples (off-voice)

1. **`/whitepaper` (entire surface).** Pre-rebuild copy. Reads as long-form analyst report — paragraphs of soft generalities ("Aftermarket services generate 2.5x the margins…", "Companies closing this gap are winning…", "The pattern is consistent: connect the equipment, then connect the intelligence."). McKinsey/BCG/Deloitte stat barrage. Tone is consultant, not founder. The product name is wrong (`Planara Manufacturing Intelligence`), the category words are wrong (`intelligence layer` everywhere), and the voice doesn't match anything else on the site. **Recommendation.** Either rewrite to match the rebuild, hide it behind a paywall/NDA gate, or replace with a 1-page thesis post that points at the canonical pages.

2. **`Differentiators.tsx`.** Card titles read like a 2019 marketing deck: "Manufacturer-to-network distribution", "Closed-loop field intelligence", "Zero-hallucination architecture", "Network resolution analytics". The voice on `/service-leaders` is "Walks to the office. Pulls the binder. Wrong year." — concrete, specific, in-the-bay. The voice on `Differentiators` is abstract noun-stack. Worst offender on the homepage. **Recommendation.** Rewrite each title to a concrete claim ("One library, every dealer", "Corrections improve the next answer", "Cited or it doesn't ship", "See what your dealers are actually asking"). Bonus: this also kills the "field intelligence" vocabulary leak.

3. **`/enterprise` Procurement section (`PROCUREMENT_ROWS`).** Reads procurement-grade, which is *correct* for the audience — but it's the only surface that does. The rest of the site is in J's voice. Buyer who lands on `/enterprise` first feels like they're on a different company's site. **Recommendation.** Keep procurement language inside the rows but lead the section with a J-voice sentence the buyer recognizes ("Your security team will read this. Send it to them."). Currently the H2 is "The questions your security and legal teams will ask." — close, but the kicker / body that follows reads as standard SaaS procurement page, not J.

### Smaller drift to flag
- `Proof.tsx` "Built by people who've shipped at scale" — direct. Good.
- `TheAsk.tsx` — clean, in voice.
- `/marine` Thermostat Example uses *"in some cases the actual root cause is the tell-tale water passage"* — reads slightly hedged after "Illustrative — not a recorded statistic" eyebrow. Acceptable, but the eyebrow undercuts the example. Consider: keep the eyebrow, drop the "in some cases" and just state the pattern.

---

## Visual language inconsistencies

1. **Eyebrow color across dark vs light sections.** Dark sections use `text-planara-teal` for the kicker. Light sections use `text-planara-muted`. Consistent within each background — clean. **No issue.**

2. **Section padding.** Most sections use `py-16 md:py-22`. `/platform` uses `py-20 md:py-24`. Tiny but visible step-up on `/platform` vs the homepage. **Recommendation.** Standardize on `py-16 md:py-22` site-wide unless there's a hierarchy reason for the platform deep-dive to be roomier.

3. **Hyphen vs en-dash in timelines.**
   - Homepage `Proof.tsx`, FAQ, TheAsk, `/marine` CTA, `/platform` FAQ all use **en-dash**: `1–2 weeks`, `4–8 weeks`, `2–3 manuals`.
   - `components/whitepaper/PhaseTimeline.tsx:9,21` uses **ASCII hyphen**: `1-2 weeks`, `4-8 weeks`.
   - `components/whitepaper/TwoPathDiagram.tsx:31` same: `1-2 weeks`.
   The whitepaper renders next to the rebuild copy if the prospect opens both. Standardize on en-dash.

4. **`FieldIntelligenceDiagram` SVG accent.** Output box labels use the teal accent for category labels — consistent with the rest of the site. Pipeline pills use teal at low opacity. Good. **No issue beyond the terminology drift flagged in Contradictions.**

5. **Eyebrow capitalization.** Most sections use `uppercase tracking-wider` plus sentence-case label ("Three outcomes", "Common questions", "What enterprise gets"). `FAQ.tsx:38` says "Common Questions" (Title Case). One-off inconsistency. **Fix:** lowercase to "Common questions".

6. **NavBar pattern.** `/service-leaders`, `/enterprise` use a consistent NavBar component pattern. `/marine` uses a `TopNav`. `DesignPartnerLayout` uses a `TopNav`. `/platform` has no top nav (unusual). Homepage hero has no nav. **Recommendation.** `/platform` is the deepest page — needs a back-to-home affordance like `/service-leaders` and `/enterprise` have.

7. **CTA button styling drift.** Most CTAs are `bg-planara-teal text-planara-dark`. `TheAsk.tsx:64` uses `bg-planara-dark text-white`. `/marine` MarineCTA also uses `bg-planara-dark`. The homepage TheAsk thus has a dark button on a white section — visually distinct from the teal CTA pattern that dominates everywhere else. Either intentional emphasis (it's the final ask) or drift. **Recommendation.** Decide and document.

---

## Three-bracket framing audit

The brief allows ONE "three" framing site-wide ("Three outcomes" on the homepage, currently in `Integration.tsx`). Found instances of "three X" across pages:

| Surface | Count | Where |
| --- | --- | --- |
| Homepage `Integration.tsx` | 2 | "Three outcomes" eyebrow + "Three audiences. One platform." H2 — the **allowed one**. |
| Homepage `TheAsk.tsx:15` | 1 | "We need three things:" — counted (numbered 1/2/3 list follows). |
| `/platform` `Inputs` section | 2 | "Three inputs. One output." + body "Three inputs". |
| `/platform` `Architecture` section | 1 | "Documentation in. Three audiences out." |
| `/platform` `ArchitectureBox` "Three ways to deploy" | 2 | Eyebrow + section heading. |
| `/platform` aria-label on SVG | 1 | "…cited answers for three audiences". |
| `/service-leaders` Hero | 1 | "Three problems you deal with every week." |
| `/service-leaders` Problems section | 1 | "The three problems" eyebrow. |
| `/service-leaders` Screenshots H2 | 1 | "The three views you'll live in." |
| `/marine` WhyMarineFits | 1 | "Three things make marine the right place…" |
| `/enterprise` Deployment section | 1 | "Three ways Conduit lands inside your operation." |
| `DesignPartnerLayout` WhyFits intro | 1 | "Three things make this vertical a fit…" — **renders on all 4 design-partner pages** (multiplier: 4). |

**Total**: ~16 distinct "three X" framings across the site, plus 4 inherited via DesignPartnerLayout = effectively **20 instances** the prospect can hit.

This is a regression. The buyer's pattern recognition will register "everything Planara does comes in threes" — which (a) feels formulaic and (b) makes the homepage "Three outcomes" framing weightless because it's not unique.

**Resolution priority** (kill these first):
1. `/platform` "Three inputs. One output." — rename to "Manuals, standards, bulletins. One output." (drops the count, keeps the structure).
2. `/platform` "Three ways to deploy" — rename to "Deployment paths" or "Pick the surface."
3. `DesignPartnerLayout` "Three things make this vertical a fit" — rename to "Why this vertical fits the pattern" (drops the count). This is highest-leverage because it kills 4 instances at once.
4. `/service-leaders` "Three problems / The three problems / The three views" — keep the H1 "Three problems you deal with every week" (it's the page promise) but drop "The three problems" eyebrow ("The problems") and rename "The three views you'll live in" to "The views you'll live in".
5. `/enterprise` "Three ways Conduit lands inside your operation" — rename to "How Conduit lands inside your operation."
6. `/marine` "Three things make marine the right place" — rewrite as "What makes marine the right place to prove this out."

After these edits, "Three outcomes" on the homepage stands alone as the site-wide three-framing.

---

## Capability overclaims

1. **`Differentiators.tsx:18` "Zero-hallucination architecture"** — overclaim. The site elsewhere correctly hedges: confidence tier (verified / informed / uncertain), abstention when the library doesn't have it. "Zero-hallucination" is a marketing absolute we cannot defend in a procurement Q&A. **Fix.** "Cited or it doesn't ship" or "Sourced answers, scored confidence."

2. **`Proof.tsx:43`** *"We're in active conversations with marine OEMs and a global manufacturing operator."* Defensible if true today. Verify before launch — this is a falsifiable claim a sophisticated buyer can probe ("which ones?").

3. **`/marine` Thermostat Example.** Now correctly framed as "Illustrative — not a recorded statistic" (`marine/page.tsx:407`). Good. Was the worst offender pre-rebuild; current state is acceptable.

4. **`Differentiators.tsx:24` "Network resolution analytics"** — see cross-tenant section. The capability is real but the framing implies cross-customer learning. Overclaim by implication.

5. **Homepage `Integration.tsx:23-24` (Owner Mock body):** *"…routes every relevant conversation back to the dealership for booking, parts, or follow-up."* Read literally, "every relevant conversation" is overclaim. Soften to "routes the relevant conversation back to the dealership."

6. **`Platform.tsx` body** *"every warning is preserved"* — supportable if we preserve safety language verbatim, which we do per the brief and per the FieldIntelligenceDiagram pipeline. Acceptable; flagged for verification.

7. **`/whitepaper` "Predictive Service Operations" section** describes a capability ("system alerts the dealer and owner 6 weeks ahead, identifies required parts, checks inventory availability, and pre-populates a work order") that does not exist as a Conduit feature today. The whitepaper frames it as the category — but a buyer lands on this page from `Proof.tsx` and reads it as Planara's capability claim. **Hard overclaim** unless rewritten.

---

## Sequence issues (buyer journey)

Expected flow: homepage → Verticals card → vertical page → demo → `/platform` → `/enterprise` or `/service-leaders` → CTA.

1. **Homepage → `/marine`:** Hero promises "manufacturer manuals, standards, and service bulletins". Marine page reframes as "owner's manual, service manual, and the technical service bulletins that update them" — different, narrower phrasing. Standards drop out of the marine intro. Buyer expecting standards (just promised on the homepage) doesn't see them again until `WhyMarineFits` section. **Fix.** Marine hero should mention all three input categories to match the homepage promise.

2. **Homepage Three Outcomes → `/platform` Roles:** Three Outcomes shows three audiences (technician, dealer service ops, manufacturer product team). `/platform` Roles shows **five** (field technician, service writer, service leader, OEM product, ops director). Buyer learns "three" then immediately learns "five". The expansion is fine but should be acknowledged: the platform page should call out "the three on the homepage, plus two more here" or similar. Currently it just lands as a different number.

3. **Homepage Differentiators → `/platform` Standards:** Differentiators says "zero-hallucination architecture". `/platform` Standards talks about ABYC/ANSI/OSHA/etc. with no mention of how confidence is communicated. The "Under the hood" architecture pillar **does** name "Confidence scoring" (verified / informed / uncertain). Buyer who reads "zero hallucination" on the homepage then sees "confidence tier" terminology two pages later may catch the contradiction. Fixing the overclaim above resolves this.

4. **`/service-leaders` → `/enterprise`:** Both pages have a NavBar that cross-links. Both call the product "Planara Conduit" in the back-link. Consistent. Good.

5. **`/platform` → CTA:** `/platform` PlatformFAQ has CTAs to `/demo/service` and `mailto:hello@planara.com`. No back-link to homepage or sibling pages. Dead end. **Fix.** Add NavBar with cross-links matching the `/service-leaders` and `/enterprise` pattern.

6. **Email address drift across CTAs.**
   - Homepage `TheAsk.tsx:64` → `eric@planara.com`.
   - All other surfaces (Hero, Footer, `/platform`, `/marine`, `/service-leaders`, `/enterprise`) → `hello@planara.com`.
   - All design-partner verticals → `pilots@planara.com` (also a different inbox).
   Three different inboxes for "talk to us" CTAs. The first two are likely intentional (founder email vs general). Three is muddled. **Resolution.** Either standardize to one inbox per CTA type and document (e.g., `hello@` for general inquiries, `pilots@` for design-partner applications, drop `eric@` from the public site or move it behind a "talk to the founder" framing). Currently a buyer who pings `eric@` from `TheAsk` then `hello@` from the Footer doesn't know if they reached the same place.

---

## Disposition

- **Hard contradictions (ship-blocking): 4**
  1. `/whitepaper` and its diagram components carry the banned product name (`Planara Manufacturing Intelligence`) and category vocabulary (`intelligence layer`, `field intelligence`, `Planara Intelligence Platform`) — 13 leak points.
  2. Cross-tenant overclaims on homepage `Differentiators` and `/service-leaders` directly contradict `/platform` Correction Pipeline and `/enterprise` Procurement table.
  3. `Differentiators.tsx:18` "Zero-hallucination architecture" — undefendable absolute.
  4. `/whitepaper` Predictive Service Operations describes capabilities Conduit doesn't ship.

- **Soft drift (pre-launch clean-up): ~14**
  - "Heavy & ag" / "Heavy equipment" / "Heavy and ag" — 3+ surfaces.
  - `FieldIntelligenceDiagram` introduces three product names ("Service Intelligence" / "Owner Intelligence" / "OEM Intelligence") never used in body copy.
  - `AIComparison.tsx:125` panel mislabeled "Planara Service Intelligence" instead of "Planara Conduit".
  - Three-framing repetition (~20 instances site-wide vs the allowed 1).
  - "Common Questions" Title Case on `FAQ.tsx`.
  - ASCII hyphen "1-2 weeks" in whitepaper components vs en-dash everywhere else.
  - Three different CTA inboxes (`hello@`, `pilots@`, `eric@`).
  - Section padding mismatch (`py-16` vs `py-20`).
  - `/platform` missing NavBar.
  - `/marine` hero drops "standards" from the input promise.
  - "Manufacturer product teams" vs "OEM product team" on adjacent sections.
  - Owner mock overclaim ("every relevant conversation").
  - `TheAsk` dark button vs site-wide teal CTA.
  - `/whitepaper` overall tone divergence (consultant vs founder).

- **Canonical-source decisions needed: 5**
  1. Heavy-equipment vertical: pick the canonical label and apply.
  2. The three audience modules in `FieldIntelligenceDiagram`: name them everywhere or drop the names from the SVG.
  3. CTA inbox routing: define which inbox owns which CTA type.
  4. "Three" framing budget: keep the one (`Three outcomes`), kill or reword the rest.
  5. `/whitepaper` disposition: rewrite, hide, or replace.

---

## Definition of done — meets / does not meet

| Brief criterion | Status |
| --- | --- |
| Banned vocabulary removed from rendered copy | **Does not meet.** 13 leak points on `/whitepaper` and its components, plus `Differentiators.tsx` "field intelligence". |
| AI vendor names removed | **Meets.** Zero matches across all surfaces. |
| No DMS auto-write claims on rendered marketing | **Meets** (named DMS only in clearly-stubbed demo toasts and whitepaper Path-B framing — borderline; soften the latter). |
| No cross-tenant network-effect claims | **Does not meet.** Homepage `Differentiators` and `/service-leaders` imply cross-network learning that `/platform` and `/enterprise` explicitly deny. |
| No "coming soon" copy | **Meets.** |
| Customer logos framed as leadership experience | **Meets.** `Proof.tsx:62` is correctly framed. |
| Canonical positioning consistent (TSI / Conduit / inputs / output / audience / loop) | **Mostly meets.** Hero, Footer, layout, `/platform`, verticals all align. Drift in `AIComparison` panel label and `FieldIntelligenceDiagram` output names. |
| Visual / spacing / icon weights consistent | **Mostly meets.** Section-padding step-up on `/platform`, hyphen drift in whitepaper components, one Title Case eyebrow. |
| Three-framing budget = 1 | **Does not meet.** ~20 instances. |

**Net: the rebuild does NOT yet meet the Definition of Done.** Four ship-blocking contradictions need resolution before launch — primarily the `/whitepaper` vocabulary cleanup and the homepage cross-tenant implication. The rest is pre-launch polish.
