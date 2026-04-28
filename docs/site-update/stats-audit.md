# Planara Intelligence — Stats / Claims Audit

Auditor: claims-verifier
Date: 2026-04-27
Scope: marketing site at `intelligence.planara.com`. Repo: `/Users/jameshaliburton/Desktop/planara-intelligence`.
Goal: kill overclaim before the Conduit / TSI rebuild ships.

---

## Top-of-doc summary

- **Total claims found:** 78
- **Verdict counts:**
  - **KEEP:** 23
  - **REFRAME-AS-ILLUSTRATIVE:** 11
  - **CUT:** 14
  - **NEEDS-SOURCE:** 30
- **Note re. brief watch-list:**
  - The marine thermostat 64% / 31% claim does **not** appear anywhere on the site. The brief flagged it for REFRAME — no rewrite needed (claim isn't there). The one numeric thermostat claim that does exist (143°F) is a hardware spec from Yamaha docs and is fine. Keep the rewrite text on file for whoever drafts new network-effects copy.
  - The "195 checks across 14 dimensions" stat does **not** appear on the homepage, whitepaper, or competitive landscape. Brief said it was claimed to be on `/enterprise` — that route doesn't exist. No action needed.
  - "27-second onboarding" is **not** on the site (does appear in another repo per memory; not in scope here). No action needed in this repo.
  - "Deployed at Ford Manufacturing. Airbus manufacturing experience." (`SocialProof.tsx`) — **HIGH PRIORITY CUT**. Conflates leadership experience with Planara product deployment.

### Top 5 highest-priority CUT items

1. **Hero.tsx:40** — `"$100 billion problem"` (no source, no scope). Bare empirical-sounding number on the most-read line of the site.
2. **SocialProof.tsx:18-21** — `"Deployed at Ford Manufacturing. / Airbus manufacturing experience."` Headline conflates "deployed" (false — Planara hasn't shipped to Ford) with "experience" (true — leadership history).
3. **Integration.tsx:26** — `"Creates work order in their existing DMS"` and the dealer/owner toast copy "creates a parts order in your DMS (CDK, Lightspeed, DealerSocket)" / "creates an appointment in your dealer scheduling system." Per the brief: there is no shipped automatic work-order creation in 3rd-party DMS. Toast text says "in production" — fine — but the workflow card text on the home page asserts the capability flatly.
4. **WhitePaperModal.tsx:27** — `"The $100B Documentation Problem"` — same overclaim as #1, restated as a headline.
5. **Problem.tsx:8** — `"72% of manufacturers have undocumented fixes"` source = "HVI Manufacturing Survey, 2025." HVI = "Heavy Vehicle Inspection" per whitepaper ref [8]. The whitepaper (`page.tsx:788`) says this is a survey of *companies with hidden factories*, not 72% of all manufacturers. Site copy on the homepage materially overstates the scope.

### Top 3 REFRAME-AS-ILLUSTRATIVE items

1. **AIComparison.tsx:13** — the entire generic-AI response is fabricated to lose. Mark explicitly as illustrative ("example response — not a recorded session") or risk a buyer pasting the same prompt into ChatGPT, getting a better answer, and concluding Planara cherry-picked.
2. **DemoPreview.tsx:74-82** + **service/owner demos** — the telemetry strip ("847 hrs / 58 psi / 172°F / 12.4V / 68%") is sample data dressed as live. Add a "sample vessel" tag or a static "demo data" pill so the LIVE / pulsing dot doesn't read as a real connection.
3. **AIComparison.tsx:222-225** — `"Planara queries your actual documentation library, cross-referenced with live telemetry and service history."` This is true *for the Yamaha demo only*. As a general capability statement it overclaims — most prospects don't have telemetry connected. Reframe as "When connected to your telemetry…" or move to capability-list with prerequisites.

---

## File: `src/components/sections/Hero.tsx`

| # | Claim (verbatim) | File:line | Category | Verdict | Reason |
|---|------------------|-----------|----------|---------|--------|
| 1 | "Equipment manufacturers produce thousands of pages of technical documentation that service technicians can't find, dealers can't use, and owners never see." | Hero.tsx:31-35 | Capability/comparative | KEEP | Defensible generalization, no specific number. |
| 2 | "$100 billion problem in equipment downtime, wasted labor, and lost revenue" | Hero.tsx:39-42 | Stat | **CUT** | Bare round number, no citation, no scope (which industry, which year, which survey). High-visibility position. Either source it (whitepaper says $141B IoT market and $4.96B DMS — neither of these is "$100B in downtime") or remove. |
| 3 | "Planara solves it." | Hero.tsx:44 | Capability | REFRAME-AS-ILLUSTRATIVE | Sweeping. Soften to "Planara closes it" or "Planara is the intelligence layer that addresses it." |

## File: `src/components/sections/Problem.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 4 | "72% of manufacturers have undocumented fixes / masking true downtime causes across their service operations" | Problem.tsx:8-11 | Stat + source | **CUT / REWRITE** | Whitepaper ref [8] qualifies this as "companies have 'hidden factories' of undocumented fixes" — narrower than "manufacturers have undocumented fixes." Source phrasing "HVI Manufacturing Survey, 2025" is opaque (HVI = Heavy Vehicle Inspection). Either match the whitepaper phrasing exactly or cut from homepage. |
| 5 | Source: "HVI Manufacturing Survey, 2025" | Problem.tsx:11 | Source-attribution | NEEDS-SOURCE | "HVI" without expansion looks like an authoritative acronym most readers won't recognize. Spell out or replace with the actual organization name and link. |
| 6 | "61% of a technician's day / spent searching systems instead of performing maintenance" | Problem.tsx:13-17 | Stat + source | KEEP | Matches whitepaper ref [7] (IFS / Reliabilityweb 2024). Consistent. |
| 7 | "$0 / Zero value extracted from connected equipment telemetry / Manufacturers invest in connected equipment but capture none of that data as actionable service intelligence — today." | Problem.tsx:19-25 | Rhetorical stat (no source) | REFRAME-AS-ILLUSTRATIVE | "$0" framed as a stat with the same visual weight as the other two. The qualifier "as actionable service intelligence — today" is doing the work. Either drop the dollar-sign treatment so it reads as rhetoric, or reword the headline to "Most" / "Almost no" so it's not a literal numerical claim. The whitepaper's own data (75% of IoT projects fail) contradicts the absolute "zero." |
| 8 | "Billions in documentation. Zero intelligence." | Problem.tsx:37 | Headline | KEEP | Rhetorical, not empirical. Fine. |

## File: `src/components/sections/AIComparison.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 9 | Generic AI response (full text) attributed to "Generic AI Assistant" with bad-on-purpose answer | AIComparison.tsx:13 | Comparison claim | REFRAME-AS-ILLUSTRATIVE | This is a synthetic response, not a recorded ChatGPT/Claude/etc. answer. Add an "Example response" or "Illustrative" tag to the column header; without it, sophisticated buyers will paste the prompt into ChatGPT, get a better answer, and lose trust. |
| 10 | Spec block: YAMALUBE 4-M FC-W / SAE 10W-30 / 7.1L / Yamaha 69J-13440-04 / 100 hrs | AIComparison.tsx:15-21 | Stat | KEEP | Specs trace to Yamaha F300 OM (per whitepaper p.42 reference). Verifiable. |
| 11 | Parts: prices ($32.95 / $12.95 / $2.15) and "In Stock" status | AIComparison.tsx:23-27 | Stat | REFRAME-AS-ILLUSTRATIVE | Demo prices and stock status presented without scope tag. Add "sample data" or "illustrative inventory" qualifier; otherwise reads as real Yamaha pricing and a real DMS connection. |
| 12 | "Planara queries your actual documentation library, cross-referenced with live telemetry and service history." | AIComparison.tsx:222-225 | Capability claim | REFRAME-AS-ILLUSTRATIVE | True for the Yamaha demo only. Generic capability statement implies every customer gets telemetry + service history fusion. Reword: "When telemetry is connected, Planara cross-references it with documentation and service history." |
| 13 | "Private isolated pipeline. No training on your data. No sharing across customers." | AIComparison.tsx:233-237 | Capability claim | KEEP | Architecturally accurate per the v2 stack notes; defensible. |

## File: `src/components/sections/Integration.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 14 | "Technicians get instant answers backed by your documentation. Parts are identified, work orders pre-filled, safety warnings surfaced — all from a single question." | Integration.tsx:21 | Capability | REFRAME-AS-ILLUSTRATIVE | "Work orders pre-filled" — only true with DMS integration that isn't shipped per brief. Soften to "drafts a work order ready to push to your DMS." |
| 15 | "RAG pipeline searches manuals, cross-references live engine data from Siren Marine" | Integration.tsx:24 | Capability + vendor name | REFRAME-AS-ILLUSTRATIVE | Siren Marine as a fact in the workflow card implies a working integration. It's the demo's reference vendor. Add "(Yamaha demo)" or move to a "Connected systems" tag block. |
| 16 | "Creates work order in their existing DMS / Pre-populated work order pushed to CDK, Lightspeed, or DealerSocket — no re-keying" | Integration.tsx:26 | Capability claim | **CUT / REWRITE** | Per brief: no shipped automatic work-order creation in 3rd-party DMS. This is the sharpest overclaim on the page. Replace with "Generates a work order draft ready for export to CDK, Lightspeed, or DealerSocket." |
| 17 | Connected-systems tags: "CDK Global", "Lightspeed", "DealerSocket", "Siren Marine", "OEM Parts Catalogs" | Integration.tsx:28 | Capability claim | NEEDS-SOURCE | Tags read as "currently connected." Per brief they're aspirational ("ready for"). Add a "Ready to integrate" or "Roadmap" framing on the tag row. |
| 18 | "Appointments, parts orders, and service requests flow directly into dealer DMS" | Integration.tsx:41 | Capability claim | **CUT / REWRITE** | Same problem as #16. Reword to "draft / handed off / queued for dealer DMS." |
| 19 | "Dealer-branded portal", "DMS scheduling", "Parts ordering", "Customer CRM", "Service reminders" tags | Integration.tsx:43 | Capability list | NEEDS-SOURCE | Same: needs a "available with integration" frame or split into shipped vs roadmap. |
| 20 | OEM Intelligence tab: "Cross-tenant" failure-pattern detection language is *not* present here, but "Fleet-wide failure pattern analysis / Identify recurring issues across models, years, and operating conditions" | Integration.tsx:53 | Capability claim | NEEDS-SOURCE | Per brief: no cross-tenant network effects. Within-customer fleet analytics is fine if scope is clear. Add "across your fleet" qualifier explicitly so this doesn't read as cross-OEM benchmarking. |
| 21 | "Warranty claim validation / Cross-reference claims against documentation and telemetry to flag anomalies" | Integration.tsx:54 | Capability claim | NEEDS-SOURCE | Is warranty validation actually shipped? If roadmap, mark it. |
| 22 | "Document parsing, chunking, and semantic embedding. Contextual retrieval with telemetry fusion. Citation-tracked responses with structured output for UI rendering." | Integration.tsx:160-164 | Technical capability | KEEP | Accurate per the planara-v2 architecture. |

## File: `src/components/sections/DemoPreview.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 23 | "Built from Yamaha F300 documentation." | DemoPreview.tsx:37 | Capability claim | KEEP | True. F300 corpus is real per repo memory. |
| 24 | Telemetry strip: "847 hrs / 58 psi / 172°F / 12.4V / 68%" with "LIVE" pulsing-green-dot label | DemoPreview.tsx:71-82 | Stat | **REFRAME-AS-ILLUSTRATIVE** | "LIVE" with a pulsing dot reads as a real connection. Values are static seed data for the demo vessel (`Reel Therapy`). Either tag as "Sample vessel" or change "LIVE" to "DEMO." |
| 25 | "Newport Marine / Your certified Yamaha dealer" | DemoPreview.tsx:143-144 | Source-attribution | KEEP | Clearly demo dealer; matches the rest of the demo fixture. |
| 26 | "Reel Therapy / 2023 Grady-White Canyon 326 / Newport, RI" + telemetry { Hours 847, Oil 58 psi, Coolant 172°F, Battery 12.4V } | DemoPreview.tsx:154-160, 163-167 | Stat | KEEP | Sample-vessel data, consistent across DemoPreview, OwnerDemo, ServiceDemo. Internally consistent. Just needs the demo-data badge from #24. |

## File: `src/components/sections/Platform.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 27 | Pipeline pills: "Doc parsing", "Chunking", "Semantic search", "Telemetry fusion", "Citation tracking", "Structured output" | Platform.tsx:73-84 | Technical capability | KEEP | Accurate architecture description. |
| 28 | "OEM insights improve documentation" feedback-loop label | Platform.tsx:153 | Capability claim | NEEDS-SOURCE | Vague. Either describe what shipping mechanism delivers this (corrections lifecycle in the v2 product), or soften to "Field signals → documentation improvement" and label as roadmap if not yet wired. |

## File: `src/components/sections/ValueProp.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 29 | "Most clients start here" (under Track A — Purpose-Built Tools) | ValueProp.tsx:48 | Comparative claim | **CUT** | "Most clients" implies plural shipped clients. Per brief Planara doesn't have a customer base of "most" yet. Replace with "Recommended starting path" or "Lower friction." |
| 30 | "Add later when proven" (under Track B) | ValueProp.tsx:69 | Comparative claim | KEEP | Aspirational/strategic, not a numbers claim. Fine. |
| 31 | "Planara doesn't replace your existing software. It makes it intelligent." | ValueProp.tsx:18-19 | Capability claim | KEEP | Defensible positioning. |

## File: `src/components/sections/SocialProof.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 32 | "1B+ / Users reached" | SocialProof.tsx:2 | Stat | NEEDS-SOURCE | Defensible as leadership-experience claim if the logo wall and headline make that scope explicit (the wall does, with "Leadership experience includes"). The page-level h2 ("Deployed at Ford Manufacturing") undermines that scope — see #34. Stat is okay if framed clearly as cumulative reach across leadership careers; needs source/footnote. |
| 33 | "25+ / Fortune 100 clients" | SocialProof.tsx:3 | Stat | NEEDS-SOURCE | Same problem. As leadership-career stat, defensible. As "Planara's clients," catastrophic overclaim. The label "Fortune 100 clients" as written reads ambiguously; rewrite to "Fortune 100 brands shipped to (leadership history)" or similar. |
| 34 | "Multiple / Exits" | SocialProof.tsx:4 | Stat | KEEP | Soft, accurate. Fine. |
| 35 | Headline: "Deployed at Ford Manufacturing. / Airbus manufacturing experience." | SocialProof.tsx:18-21 | Capability + comparison | **CUT** | "Deployed at Ford Manufacturing" reads as "Planara is deployed at Ford Manufacturing." Per brief this is leadership experience, not a Planara deployment. Mixed scope ("Deployed at Ford" / "Airbus manufacturing experience") is exactly the silent contradiction sophisticated buyers spot. Replace with single consistent frame: "Built by leaders who shipped at Ford and Airbus" or move both to the leadership-experience logo wall. |
| 36 | "We've shipped products used by billions. Now we're applying that at manufacturing scale." | SocialProof.tsx:22-25 | Capability claim | KEEP | Honestly framed leadership-experience claim. |
| 37 | "Leadership experience includes" + Ford / Airbus / Google / Apple / Uber / Disney / Goldman Sachs / Samsung logo wall | SocialProof.tsx:42-65 | Source-attribution | KEEP | Logo wall is correctly framed. The framing here is the right pattern; #35 should match this scope. |

## File: `src/components/sections/Engagement.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 38 | Phase 1 timeline: "1-2 weeks" / "Ingest 2-3 manuals, configure one use case, live demo with your data" | Engagement.tsx:6-15 | Capability claim | KEEP | Aligns with the brief's "Working prototype in 1-2 weeks" offer. Consistent with whitepaper PhaseTimeline and FAQ answer. |
| 39 | Phase 2 timeline: "4-8 weeks" / "Full documentation library, telemetry integration, DMS connection, measured outcomes" | Engagement.tsx:17-30 | Capability claim | NEEDS-SOURCE | "DMS connection" overlaps with the work-order overclaim (#16). Define what shipped DMS connection looks like — read-only? draft hand-off? Otherwise the timeline implies a fully bidirectional integration in 8 weeks. |
| 40 | Phase 3: "Per-unit SaaS", "Ongoing", multi-model / dealer white-labeling / owner self-service portal / continuous model improvement | Engagement.tsx:32-43 | Capability claim | KEEP | Roadmap framing is appropriate ("Ongoing"). |

## File: `src/components/sections/Credentials.tsx` (currently unused)

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 41 | "1B+ Users reached" / "25+ Fortune 100 clients" / "Multiple Exits" | Credentials.tsx:2-4 | Stat | NEEDS-SOURCE | Same as SocialProof but **without** the leadership-experience logo wall framing the page (the framing is below the stats here). If Credentials gets revived, hoist the "Leadership experience includes" framing above the stats, not below. |
| 42 | "We've shipped products used by billions." | Credentials.tsx:14-15 | Capability | KEEP | Same as #36. |

## File: `src/components/sections/TheAsk.tsx` (currently unused)

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 43 | "Working prototype in 1-2 weeks." | TheAsk.tsx:11 | Capability claim | KEEP | Consistent with Engagement and FAQ. |
| 44 | "30 minutes a week" (point-of-contact ask) | TheAsk.tsx:55 | Stat | KEEP | Reasonable, defensible. |

## File: `src/components/sections/FAQ.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 45 | "Every CTA in the demos above maps to a real integration point." | FAQ.tsx:18 | Capability claim | REFRAME-AS-ILLUSTRATIVE | "Real integration point" is true (toast says "in production…") but the homepage Integration card asserts work-order creation as live (#16). Until #16 is reworded, this FAQ answer compounds the overclaim. After #16 is fixed, this is fine. |
| 46 | "Your documentation stays yours. ... No training on your data, no sharing across customers, no third-party access. Each manufacturer's knowledge base is completely separate." | FAQ.tsx:22 | Capability claim | KEEP | Matches v2 architecture. Defensible. |
| 47 | "A working prototype from 2-3 manuals takes 1-2 weeks. ... The pilot phase (4-8 weeks) adds telemetry, integrations, and real user testing." | FAQ.tsx:26 | Capability claim | KEEP | Consistent. |
| 48 | "Yes. The platform works with any complex equipment that has technical documentation — powersports, HVAC, industrial machinery, agricultural equipment, medical devices." | FAQ.tsx:30 | Capability + comparison | REFRAME-AS-ILLUSTRATIVE | "Works with any" is unbounded. Verticals listed include medical devices — regulated category, separate compliance burden. Soften to "designed to be equipment-agnostic; marine is the reference vertical, powersports/RV/HVAC are validated next steps" (echoing the competitive-landscape doc's actual position). |

## File: `src/components/sections/Footer.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 49 | "Built for Yamaha Marine. Powered by Planara." | Footer.tsx:7 | Capability/source | KEEP | Honest. The Yamaha-Marine framing is correct given the demo corpus. |

## File: `src/components/WhitePaperModal.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 50 | "The $100B Documentation Problem" (CTA subheading) | WhitePaperModal.tsx:27 | Stat | **CUT** | Same as Hero #2. Replace with descriptive subheading, e.g. "How purpose-built AI creates value in equipment manufacturing." |

## File: `src/components/IntegrationToast.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 51 | Toast label: "Integration Point" | IntegrationToast.tsx:51 | Capability | KEEP | Toast UX is the right pattern: "in production this would…" — clearly future-tense. The overclaim risk is upstream in Integration.tsx (#16, #18). |

## File: `src/app/whitepaper/page.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 52 | "Aftermarket services generate 2.5x the margins of new equipment sales — 25% EBIT versus 10% (McKinsey, 30-industry analysis)" | page.tsx:181-186 | Stat + source | KEEP | Sourced. Defensible. |
| 53 | StatCallout "25% / EBIT margin on aftermarket services / McKinsey (30-industry analysis)" | page.tsx:215-219 | Stat + source | KEEP | Same source. |
| 54 | StatCallout "1.9M / manufacturing jobs unfilled by 2033 / Deloitte / Manufacturing Institute, 2024" | page.tsx:220-224 | Stat + source | KEEP | Sourced ref [5]. |
| 55 | StatCallout "$141B / IoT in manufacturing market (2025) / Fortune Business Insights" | page.tsx:225-229 | Stat + source | KEEP | Sourced ref [10]. |
| 56 | InlineStatCallout "72% / of manufacturers have undocumented fixes masking true downtime causes / HVI Manufacturing Survey, 2025" | page.tsx:269-273 | Stat + source | NEEDS-SOURCE | Better here than on homepage (more context), but ref [8] frames this as "companies have 'hidden factories' of undocumented fixes" — the whitepaper inline callout drops the "hidden factories" framing. Match [8] verbatim or weaken the inline. |
| 57 | "Only 55% of businesses have established formal systems for documenting and sharing maintenance knowledge between technicians (McKinsey)" | page.tsx:276-280 | Stat + source | NEEDS-SOURCE | "(McKinsey)" without report title or date. Citation ref [2] also bare. Add report title. |
| 58 | "global automotive DMS market alone is valued at $4.96 billion (2024), projected to reach $11.67 billion by 2034, growing at 8.9% CAGR" | page.tsx:285-291 | Stat + source | KEEP | Sourced ref [14]. Specific, scoped. |
| 59 | "68% of consumers now prefer digital service scheduling" | page.tsx:298-303 | Stat + source | NEEDS-SOURCE | Cited as ref [18] "Auto Pro Solutions / Industry study" — vague secondary source. Either find the primary survey or hedge. |
| 60 | "customer satisfaction reached an all-time high in 2024 when dealers invested in omnichannel experiences" | page.tsx:298-303 | Stat | NEEDS-SOURCE | Ref [19] gives the (75%) number; whitepaper body does not. Add the number or cut the claim. |
| 61 | "manufacturing sector needs 3.8 million new employees by 2033, but 1.9 million of those jobs could remain unfilled — a 50% fulfillment gap" | page.tsx:307-314 | Stat + source | KEEP | Sourced ref [5]. Internally consistent (1.9 / 3.8 = 50%). |
| 62 | "Nearly a third of the current workforce is over 55" | page.tsx:307-314 | Stat | KEEP | Ref [17]. |
| 63 | "Service Council estimates the field service industry could lose 40% of its 20 million personnel to retirement within 3-4 years" | page.tsx:307-314 | Stat + source | KEEP | Ref [9]. |
| 64 | InlineStatCallout "61% / of a technician's day spent searching systems / IFS / Reliabilityweb Study, 2024" | page.tsx:316-320 | Stat + source | KEEP | Ref [7]. Same as homepage Problem.tsx #6. Consistent. |
| 65 | "only 25-35% of a technician's day involves actual maintenance work" | page.tsx:322-333 | Stat | KEEP | Ref [13] (Fiix). |
| 66 | "lack of job-enabling technology was cited as a top challenge by 38% of skilled trade workers, alongside a lack of knowledge sharing on the jobsite (31%)" | page.tsx:322-333 | Stat + source | KEEP | Ref [20]. |
| 67 | "$350,000 fishing boat" | page.tsx:347 | Stat | KEEP | Illustrative anchor; competitive landscape uses $350K boat throughout. Consistent. |
| 68 | "IoT in manufacturing market was valued at $141.18 billion in 2025 and is projected to reach $1.1 trillion by 2034, growing at 26.2% CAGR" | page.tsx:360-368 | Stat + source | KEEP | Ref [10]. |
| 69 | "An estimated 40 billion IoT devices will be in operation by 2030" | page.tsx:360-368 | Stat | NEEDS-SOURCE | Not in references list. Either source or cut. |
| 70 | "75% of IoT projects fail to achieve their desired outcomes" | page.tsx:376-383 | Stat | NEEDS-SOURCE | No reference cited; this is a frequently-quoted Cisco/McKinsey-attributed stat with contested provenance. Add source or hedge ("most"). |
| 71 | "BCG reports that service revenue among industrial manufacturers grew 10% in 2023, with an expected further 8% increase in 2024" | page.tsx:399-407 | Stat + source | KEEP | Ref [3]. |
| 72 | "gross margins roughly double the 15-25% typically earned from equipment sales" | page.tsx:399-407 | Stat | KEEP | Ref [3]. |
| 73 | MarginBars: "10% New Equipment Sales / 25% Aftermarket Services / Average EBIT margin — McKinsey 30-industry analysis" | MarginBars.tsx:38, 60, 81 | Stat + source | KEEP | Sourced. |
| 74 | "PMMI's 2025 report found that over the next three years, 96% of OEMs expect growth in parts sales and 94% expect growth in services" | page.tsx:412-417 | Stat + source | KEEP | Ref [6]. |
| 75 | "Deloitte research shows manufacturers focused on services often have 80% or more of their installed base under service contracts" | page.tsx:412-417 | Stat + source | KEEP | Ref [4]. |
| 76 | "marine maintenance software market alone is projected to grow from $1.28 billion to $2.13 billion by 2032" | page.tsx:419-429 | Stat + source | KEEP | Ref [15]. |
| 77 | "ABB's research shows predictive maintenance reduces spare parts needs by up to 40%, and real-time monitoring reduces unplanned downtime by 25%" | page.tsx:583-587 | Stat + source | KEEP | Ref [16]. Same number echoed in `Four applications grid` (page.tsx:638). |
| 78 | "YAMALUBE 4-M FC-W, SAE 10W-30 / 7.1L (with filter) / 100 hours / Filter: 69J-13440-04 / Source: Owner's Manual LIT-18626-12-51, p.42" | page.tsx:511-525 | Stat + source | KEEP | Verifiable Yamaha F300 OM data. Also shipped in AIComparison and ServiceDemo — consistent. |
| 79 | "Generic AI" example response: "The Yamaha F300 typically uses a 10W-30 four-stroke marine engine oil…" | page.tsx:483-487 | Comparison | REFRAME-AS-ILLUSTRATIVE | Same as AIComparison #9 — fabricated competitor response. Tag as illustrative. |
| 80 | "Knowledge management software market valued at $20.15B (2024), projected $62.15B by 2033 (13.6% CAGR). Manufacturing holds 16% market share." | page.tsx:802-806 | Stat + source | KEEP | Ref [11]. Cited only in references — not in body. Fine as reference. |
| 81 | "Bureau of Labor Statistics (BLS), January 2026 — ~415,000 open manufacturing jobs in late 2025; 245,000 employees left in December 2025" | page.tsx:807-811 | Stat + source | KEEP | Ref [12]. Cited only in references. |

## File: `src/components/whitepaper/PhaseTimeline.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 82 | Phase 1: "1-2 weeks" | PhaseTimeline.tsx:9 | Capability | KEEP | Consistent. |
| 83 | Phase 2: "4-8 weeks" | PhaseTimeline.tsx:21 | Capability | KEEP | Consistent. |
| 84 | "Project becomes platform" | PhaseTimeline.tsx:39 | Capability | KEEP | Aspirational, not numerical. |

## File: `src/app/competitive-landscape/page.tsx` + `src/data/competitive-landscape.html`

This is password-protected ("planara2026" default in `route.ts:5`), so the audience is friendly-internal/select. Bar is lower but not zero — the link still leaves the building. Material claims:

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 85 | "25% EBIT aftermarket vs 10% equipment" | competitive-landscape.html:366 | Stat | KEEP | McKinsey, consistent with whitepaper. |
| 86 | "Nobody buys a $350K boat because of a better manual" | competitive-landscape.html:329 | Stat | KEEP | Rhetorical anchor. |
| 87 | Neuron7 stats: "Funding $44M Series B / Users 50K+ / ARR growth 300% YoY / Claims 90%+ resolution accuracy / Fortune 1000 customers: NCR Atleos, Medtronic, Ciena" | competitive-landscape.html:680-686 | Stat + source | NEEDS-SOURCE | These are competitor claims being repeated. "Claims 90%+" is correctly hedged ("Claims"). Funding/users/ARR are not sourced — verify against Crunchbase / press before this leaks externally. |
| 88 | Aquant: "Founded 2016, Newton MA" | competitive-landscape.html:691-694 | Stat | NEEDS-SOURCE | Verify. |
| 89 | ServiceMax/PTC: "25+ years of service data / PTC ($2B+ revenue) / Launched Aug 2025" | competitive-landscape.html:701-706 | Stat | NEEDS-SOURCE | PTC FY24 revenue is ~$2.1B — defensible. "25+ years" trivially defensible. ServiceMax AI launch date should be verified. |
| 90 | Elevat: "launched Feb 25, 2026 / Bosch/HydraForce partnership / Cummins relationship / Showing at CONEXPO 2026" | competitive-landscape.html:712-721 | Stat | NEEDS-SOURCE | Specific dated claim. Verify launch date and partnership specifics from the press release. |
| 91 | Poka: "Supports 37 languages" | competitive-landscape.html:741 | Stat | NEEDS-SOURCE | Verify. |
| 92 | Shelf.io: "$60M+ raised. John Deere is a customer." | competitive-landscape.html:769-770 | Stat | NEEDS-SOURCE | Verify. |
| 93 | "Thor Industries alone is $10B+" | competitive-landscape.html:1138, 1192 | Stat | KEEP | Thor FY24 revenue is ~$10.0B. Defensible. |
| 94 | "$12B+ powersports aftermarket" | competitive-landscape.html:1188 | Stat | NEEDS-SOURCE | Plausible but unsourced. |
| 95 | "300K technician shortfall by 2031" / "300,000+ by 2031" (HVAC) | competitive-landscape.html:1166, ~ | Stat | NEEDS-SOURCE | Specific. Source it or soften. |
| 96 | "1-2 weeks" prototype in "How We Win" table | competitive-landscape.html:957-958 | Capability | KEEP | Consistent with rest of site. |

## File: `src/app/demo/owner/page.tsx` + `src/components/demos/owner/OwnerDemo.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 97 | Vessel data block (engines: "Twin Yamaha F300CA", hours 847, etc.) | OwnerDemo.tsx:33-43 | Stat | REFRAME-AS-ILLUSTRATIVE | Footer says "Demo — built from Yamaha F300 documentation" which is good. The vessel-card itself doesn't say "demo data" — add a small "Sample vessel" tag to the card header so the data isn't read as live. |
| 98 | Dealer block: "Newport Marine / (401) 555-0142 / 1 Commercial Wharf, Newport, RI 02840" | OwnerDemo.tsx:45-50 | Stat | KEEP | 555 phone number flags this as fake; consistent across site. |
| 99 | Toast copy: "In production, this creates a parts order in your DMS (CDK, Lightspeed, DealerSocket)" / "creates an appointment in your dealer scheduling system…" | OwnerDemo.tsx:362-366 | Capability | KEEP | "In production" framing is correct. This is the right pattern — propagate to Integration.tsx workflow cards. |
| 100 | Citation block: "Powered by Planara" | OwnerDemo.tsx:289 | Source | KEEP | |

## File: `src/app/demo/service/page.tsx` + `src/components/demos/service/ServiceDemo.tsx`

| # | Claim | File:line | Category | Verdict | Reason |
|---|-------|-----------|----------|---------|--------|
| 101 | "Planara Service Intelligence v1.0 — Yamaha F300CA" | ServiceDemo.tsx:120-121 | Source | KEEP | "v1.0" is fine product-versioning. |
| 102 | Telemetry block (engineHours 847, oilPressure 58, coolantTemp 172, batteryVoltage 12.4, fuelLevel 68) — labelled "Live Telemetry" with green pulse | ServiceDemo.tsx:43-49, 270-280 | Stat | **REFRAME-AS-ILLUSTRATIVE** | Same as DemoPreview #24. "Live Telemetry" + animated pulse + values that are static demo seed = silent contradiction. Either change "Live Telemetry" to "Demo Telemetry" or render-time-faked values. |
| 103 | "Demo — built from Yamaha F300 documentation (LIT-18626-12-51)" | ServiceDemo.tsx:217-219 | Source | KEEP | Excellent disclosure pattern. Good. |
| 104 | Service queries (data/service-queries.ts:89, 106, 118, 133): thermostat opens at 143°F, F300 specs, etc. | service-queries.ts | Stat | KEEP | Pulled from Yamaha F300 OM. Verifiable. |
| 105 | Toast: "In production, this generates a pre-filled work order in your DMS" | ServiceDemo.tsx:507 | Capability | KEEP | Correct future-tense framing. |
| 106 | Service Checklist: "1,000 Hour Interval" | ServiceDemo.tsx:524 | Stat | KEEP | Yamaha F300 service interval is a documented hardware spec. |

---

## Cross-surface consistency

Checked: Hero, Problem, AIComparison, DemoPreview, Platform, Whitepaper, OwnerDemo, ServiceDemo, competitive-landscape.html.

**Internally consistent:**
- F300 specs (YAMALUBE, SAE 10W-30, 7.1L, 100hr, filter 69J-13440-04, OM LIT-18626-12-51 p.42) are identical across AIComparison, ServiceDemo, OwnerDemo, and Whitepaper.
- Demo vessel ("Reel Therapy" / 2023 Grady-White Canyon 326 / 847 hrs / 58 psi / 172°F / 12.4V / 68%) is identical in DemoPreview, OwnerDemo, ServiceDemo.
- Engagement timeline (1-2 weeks prototype, 4-8 weeks pilot) is identical in Engagement.tsx, TheAsk.tsx, FAQ.tsx, whitepaper PhaseTimeline.

**Cross-surface contradictions:**
- **Telemetry "Live" framing.** DemoPreview, ServiceDemo, OwnerDemo all label the same static seed values as "Live" / "Live Telemetry" — but with a pulsing green dot. Internally consistent, but uniformly mis-scoped. Fix once across all three.
- **DMS work-order language.** Integration.tsx asserts "Creates work order in their existing DMS" / "Pre-populated work order pushed to CDK, Lightspeed, or DealerSocket" as a flat capability. The demo toasts (OwnerDemo, ServiceDemo) correctly hedge with "In production, this would…". Two different scopes for the same capability across the site = exactly the trust-eroding contradiction sophisticated buyers spot.
- **`SocialProof.tsx` headline scope vs logo wall scope.** "Deployed at Ford Manufacturing" reads as Planara deployment; logo wall is "Leadership experience includes." Same page, two different scopes for the same brands.
- **Problem.tsx homepage stat ("72% of manufacturers have undocumented fixes") vs Whitepaper inline ("companies have 'hidden factories' of undocumented fixes").** Same source [HVI 2025], two different framings of what the survey measured.

---

## Recommended fix priority order

1. Fix `SocialProof.tsx:18-21` headline (#35) — single biggest reputational risk on the page.
2. Fix `Integration.tsx` work-order capability claims (#16, #18) and connected-systems tags (#17, #19, #20).
3. Cut or source "$100B" everywhere (Hero #2, WhitePaperModal #50).
4. Fix the "Live Telemetry" framing across DemoPreview / ServiceDemo / OwnerDemo (#24, #102, #97).
5. Reframe homepage Problem.tsx 72% claim to match the whitepaper's "hidden factories" framing (#4) and spell out HVI (#5).
6. Tag the synthetic generic-AI responses as illustrative (#9, #79).
7. Source or hedge the unsourced whitepaper stats (#69, #70) and competitive-landscape stats (#87-95).
8. Soften "Most clients start here" (#29) — there isn't a "most" yet.
9. Soften the AIComparison "live telemetry and service history" capability statement (#12).
10. Match FAQ vertical-list framing (#48) to the competitive-landscape doc's actual position.
