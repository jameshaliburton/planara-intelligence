# Language sweep — site-update-apr

Sweep target: `intelligence.planara.com` (this repo). Scope: `src/` and `public/`. Date: 2026-04-27.

## Summary

- **Total hits: 75**
- **Category 1 (old positioning): 35**
- **Category 2 (vendor / technique names): 19**
- **Category 3 (unshipped capability claims): 21**

Of these, ~12 are load-bearing (titles, OG metadata, hero, footer brand line, top-of-funnel diagrams, FAQ data-handling answer). The rest are body copy or internal-doc echoes.

Notes on scope:
- `src/data/competitive-landscape.html` is rendered at `/competitive-landscape` (a buyer-facing page) — flagged.
- `public/PLANARA_manufacturing_intelligence_whitepaper.pdf` is the asset itself; the PDF binary text is not editable here, but the **filename** is referenced in 4 places and ships as a public URL — flagged separately.
- All `RAG pipeline`, `chunk`, `embedding`, `semantic search` strings caught by Category 2 are technique-name leakage (per redactor rules), not vendor names.

---

## Category 1 — Old positioning

| File:line | Exact text | Proposed replacement |
|---|---|---|
| `src/app/layout.tsx:21` | `title: "Planara Manufacturing Intelligence"` | `title: "Planara Conduit — Technical Service Intelligence"` |
| `src/app/layout.tsx:25` | `title: "Planara Manufacturing Intelligence"` (OG) | `title: "Planara Conduit"` |
| `src/app/layout.tsx:23` | `description: "...into actionable intelligence for service operations..."` | `description: "...into Technical Service Intelligence (TSI) for service operations..."` |
| `src/components/sections/Hero.tsx:22` | `Planara Manufacturing Intelligence` (kicker) | `Planara Conduit — Technical Service Intelligence` |
| `src/components/sections/Credentials.tsx:53` | `Manufacturing Intelligence` (footer tagline) | `Technical Service Intelligence` |
| `src/components/sections/AIComparison.tsx:77` | `Generic AI vs. Manufacturing Intelligence` (H2) | `Generic AI vs. Technical Service Intelligence` |
| `src/components/sections/Integration.tsx:21` | `...Manufacturing intelligence doesn't end at the answer — it starts there.` | `Technical service intelligence doesn't end at the answer — it starts there.` |
| `src/components/sections/ValueProp.tsx:94` | `Planara Intelligence Platform` (foundation label) | `Planara Conduit — TSI Platform` |
| `src/app/whitepaper/page.tsx:140` | `Planara Manufacturing Intelligence` (header chip) | `Planara Conduit` |
| `src/app/whitepaper/page.tsx:165` | `Planara Manufacturing Intelligence — March 2026` (byline) | `Planara — Technical Service Intelligence — March 2026` |
| `src/app/whitepaper/page.tsx:185` | `...service operations into a single intelligence layer.` | `...service operations into a single TSI platform.` |
| `src/app/whitepaper/page.tsx:289` | `...the intelligence layer connecting these systems is almost entirely absent.` | `...the technical service intelligence connecting these systems is almost entirely absent.` |
| `src/app/whitepaper/page.tsx:448` | `Manufacturing intelligence demands structured, safety-critical output` | `Technical service intelligence demands structured, safety-critical output` |
| `src/app/whitepaper/page.tsx:460-461` | `Manufacturing intelligence requires your documentation, your telemetry...` | `Technical service intelligence requires your documentation, your telemetry...` |
| `src/app/whitepaper/page.tsx:685` | `Organizations evaluating AI-powered manufacturing intelligence...` | `Organizations evaluating AI-powered technical service intelligence...` |
| `src/app/whitepaper/page.tsx:723` | `Manufacturing intelligence is not an all-or-nothing transformation.` | `Technical service intelligence is not an all-or-nothing transformation.` |
| `src/app/whitepaper/page.tsx:866` | `Manufacturing Intelligence` (footer tagline) | `Technical Service Intelligence` |
| `src/app/api/whitepaper/route.ts:64` | `Planara · Manufacturing Intelligence` (email footer) | `Planara · Technical Service Intelligence` |
| `src/components/whitepaper/IntelligenceGapDiagram.tsx:62` | `{/* RIGHT: With intelligence layer */}` (comment) | `{/* RIGHT: With Conduit / TSI */}` |
| `src/components/whitepaper/IntelligenceGapDiagram.tsx:65` | `With Intelligence Layer` (panel label) | `With Conduit` |
| `src/components/whitepaper/IntelligenceGapDiagram.tsx:104` | `{/* Intelligence Layer */}` (comment) | `{/* Conduit */}` |
| `src/components/whitepaper/IntelligenceGapDiagram.tsx:107` | `Intelligence Layer` (diagram label) | `Conduit` |
| `src/components/whitepaper/TwoPathDiagram.tsx:64` | `Intelligence layer embedded via API into existing DMS, service tools...` | `Conduit embedded via API into existing DMS, service tools...` |
| `src/components/whitepaper/ValueChainDiagram.tsx:17` | `opportunity: "Queryable intelligence layer for dealer network"` | `opportunity: "Queryable TSI platform for dealer network"` |
| `src/data/competitive-landscape.html:304` | `...where Planara sits in the manufacturing intelligence ecosystem...` | `...where Planara sits in the technical service intelligence ecosystem...` |
| `src/data/competitive-landscape.html:305` | `Planara Manufacturing Intelligence · March 2026 · Confidential` | `Planara Conduit · March 2026 · Confidential` |
| `src/data/competitive-landscape.html:319` | `Planara is the intelligence layer.` | `Planara is the technical service intelligence layer (Conduit / TSI).` |
| `src/data/competitive-landscape.html:333,375,382` | `<!-- Central intelligence layer -->` / `An intelligence layer tightens every link...` / table header `With intelligence layer` | Replace each with `Conduit` / `Technical service intelligence` per context |
| `src/data/competitive-landscape.html:335` | `PLANARA INTELLIGENCE LAYER` (SVG diagram label) | `PLANARA CONDUIT` |
| `src/data/competitive-landscape.html:416,419` | Multiple occurrences of `intelligence layer` in the resale-asset / mechanism passage | `Conduit` |
| `src/data/competitive-landscape.html:542,702,742,752` | Repeated `intelligence layer` framing across competitive cards | `Conduit` / `TSI platform` |
| `src/data/competitive-landscape.html:813` | `+ Planara Intelligence Layer` (heading) | `+ Planara Conduit` |
| `src/data/competitive-landscape.html:827,875,976,995,997,1012` | `intelligence layer` repeated in narrative | `Conduit` (or `TSI platform` where context demands) |
| `src/data/competitive-landscape.html:1087,1196,1214,1216,1219` | `intelligence layer` in strategic-narrative passages | `Conduit` / `TSI platform` |
| `src/data/competitive-landscape.html:1224` | `Planara Manufacturing Intelligence · Competitive Landscape · March 2026 · Internal & Confidential` | `Planara Conduit · Competitive Landscape · March 2026 · Internal & Confidential` |

(The competitive-landscape page contains 24+ instances of `intelligence layer` — counted as 18 distinct rows above; the rest are within the same paragraphs and resolve via search-and-replace.)

No literal `Field Intelligence Layer` / `FIL` strings found in this repo. Confirmed clean for that token specifically.

---

## Category 2 — Vendor / technique names

| File:line | Exact text | Category | Proposed replacement |
|---|---|---|---|
| `src/components/sections/Platform.tsx:25` | `aria-label="Architecture diagram showing data flow from documentation and telemetry through the Planara RAG pipeline to three intelligence products"` | technique | `aria-label="Architecture diagram showing how Conduit turns documentation and telemetry into three intelligence products"` |
| `src/components/sections/Platform.tsx:72` | `{/* Row 1 of pipeline: Doc parsing → Chunking → Semantic search */}` | technique (comment) | `{/* Row 1: Doc parsing → Indexing → Retrieval */}` |
| `src/components/sections/Platform.tsx:75` | `<PipelinePill ... label="Chunking" />` | technique (visible) | `label="Indexing"` |
| `src/components/sections/Platform.tsx:77` | `<PipelinePill ... label="Semantic search" />` | technique (visible) | `label="Retrieval"` |
| `src/components/sections/Platform.tsx:87` | `PLANARA RAG PIPELINE` (SVG bracket label) | technique (visible) | `PLANARA CONDUIT` |
| `src/components/sections/Integration.tsx:24` | `"RAG pipeline searches manuals, cross-references live engine data from Siren Marine"` | technique | `"Conduit searches manuals and cross-references live engine data from Siren Marine"` |
| `src/components/sections/Integration.tsx:160` | `Document parsing, chunking, and semantic embedding. Contextual retrieval with telemetry fusion. Citation-tracked responses with structured output for UI rendering.` | technique (4 hits in one block) | `Document ingestion, indexing, and contextual retrieval with telemetry fusion. Citation-tracked responses with structured output for UI rendering.` |
| `src/components/sections/ValueProp.tsx:97` | `RAG Pipeline · Doc Ingestion · Telemetry · Multi-model` (foundation chip) | technique | `Conduit · Doc Ingestion · Telemetry · Multi-model` |
| `src/components/whitepaper/TwoPathDiagram.tsx:99-100` | `Same documentation pipeline. Same telemetry connections. Same RAG architecture.` | technique | `Same documentation pipeline. Same telemetry connections. Same Conduit architecture.` |
| `src/app/whitepaper/page.tsx:706` | `...the same documentation pipeline, the same telemetry connections, the same RAG architecture.` | technique | `...the same documentation pipeline, the same telemetry connections, the same Conduit architecture.` |
| `src/app/api/owner/query/route.ts:15` | `// In production: forward to RAG pipeline` | technique (code comment, NOT user-facing) | `// In production: forward to Conduit query handler` (low priority) |
| `src/app/api/service/query/route.ts:15` | `// In production: forward to RAG pipeline` | technique (code comment) | same as above |
| `src/data/owner-queries.ts:70` | `* Simple keyword matching — in production this is the RAG pipeline.` | technique (JS-doc comment) | `* Simple keyword matching — in production this is Conduit.` |
| `src/data/service-queries.ts:6` | `* the RAG pipeline — here they're hardcoded...` | technique (JS-doc) | `* Conduit — here they're hardcoded...` |
| `src/data/service-queries.ts:382` | `* Simple keyword matching — in production this is the RAG pipeline.` | technique (JS-doc) | `* Conduit` |
| `src/data/competitive-landscape.html:965` | `...won't build domain-specific documentation intelligence. Their engineering teams don't do RAG pipelines.` | technique (visible on /competitive-landscape) | `...won't build domain-specific technical service intelligence. Their engineering teams don't build retrieval systems at this fidelity.` |
| `src/data/competitive-landscape.html:999` | `If our RAG pipeline produces consistently better structured output...` | technique | `If Conduit produces consistently better structured output...` |
| `src/data/competitive-landscape.html:1030` | `<text ...>Documentation RAG</text>` (SVG label) | technique | `Documentation indexing` |
| `src/data/competitive-landscape.html:1219` | `The moat isn't the RAG pipeline — that's commodity infrastructure.` | technique | `The moat isn't the retrieval pipeline — that's commodity infrastructure.` (or `Conduit's plumbing` — depends on pose) |

**No vendor names found** (Gemini / Claude / Anthropic / OpenRouter / Cohere / Pinecone / Supabase / Docling / Langfuse / DeepEval / LangGraph / HyDE / BM25 / GPT / OpenAI). Public site is clean on that axis. The only non-vendor leakage is `RAG`, `chunk(ing)`, `embedding`, `semantic search` — all technique names that should collapse into the Conduit value-frame.

`vectorEffect="non-scaling-stroke"` at `ValueChainDiagram.tsx:49` is an SVG attribute, **keep** — it's not a vendor reference.

---

## Category 3 — Unshipped capability claims

| File:line | Exact text | Issue | Proposed replacement |
|---|---|---|---|
| `src/components/sections/Integration.tsx:21` | `Parts are identified, work orders pre-filled, safety warnings surfaced — all from a single question.` | Implies auto-create work orders in DMS (not shipped) | `Parts are identified, draft work orders prepared for the technician to confirm, safety warnings surfaced — all from a single question.` (or DELETE work-order clause) |
| `src/components/sections/Integration.tsx:25` | `{ step: "Surfaces parts with live inventory", detail: "Relevant parts identified with real-time stock from your existing catalog system" }` | Live inventory not shipped | `{ step: "Surfaces relevant parts", detail: "Parts identified from manufacturer documentation; ready to integrate with your catalog system." }` |
| `src/components/sections/Integration.tsx:26` | `{ step: "Creates work order in their existing DMS", detail: "Pre-populated work order pushed to CDK, Lightspeed, or DealerSocket — no re-keying" }` | Auto-create in DMS not shipped | `{ step: "Hands off to your DMS", detail: "Conduit prepares the work-order content. Ready for integration with CDK, Lightspeed, or DealerSocket." }` |
| `src/components/sections/Integration.tsx:28` | `integrations: ["CDK Global", "Lightspeed", "DealerSocket", "Siren Marine", "OEM Parts Catalogs"]` | Listed as live integrations | Reframe section header: `Ready to integrate with` (not `Connects to`) |
| `src/components/sections/Integration.tsx:41` | `Appointments, parts orders, and service requests flow directly into dealer DMS` | Live DMS write-back not shipped | `Appointments, parts orders, and service requests are prepared for the dealer's DMS workflow.` |
| `src/components/sections/Integration.tsx:43` | `integrations: ["Dealer-branded portal", "DMS scheduling", "Parts ordering", "Customer CRM", "Service reminders"]` | Same — reframe as `Ready to integrate with` | (header change only) |
| `src/components/sections/FAQ.tsx:18` | `...connects via API to dealer management systems (CDK, Lightspeed, DealerSocket), parts ordering, service scheduling, and work order systems. Every CTA in the demos above maps to a real integration point.` | Implies live connections | `...is designed to integrate via API with dealer management systems (CDK, Lightspeed, DealerSocket) and parts/service systems. The CTAs in the demo show where those integrations attach.` |
| `src/components/sections/FAQ.tsx:22` | `No training on your data, no sharing across customers, no third-party access.` | "no sharing across customers" is fine; just verify no implied cross-tenant learning elsewhere | KEEP (this is the correct framing) |
| `src/components/sections/AIComparison.tsx:235-236` | `Private isolated pipeline. No training on your data. No sharing across customers.` | KEEP — this is correct framing (denies cross-tenant) | KEEP |
| `src/components/sections/Engagement.tsx:36` | `"Scale across models, dealers, and customers. Revenue-generating for the dealer network."` | "across customers" reads ambiguously — could imply cross-tenant; in context (Platform phase) it means multi-tenancy | Tighten: `"Scale across models, dealers, and tenants. Revenue-generating for the dealer network."` |
| `src/components/demos/owner/OwnerDemo.tsx:362` | `schedule: "In production, this creates an appointment in your dealer scheduling system (CDK, Lightspeed, DealerSocket)"` | Toast text — already framed as "in production" but still names DMS auto-write | `"In production, this hands off to your dealer scheduling system. Ready to integrate with CDK, Lightspeed, DealerSocket."` |
| `src/components/demos/owner/OwnerDemo.tsx:364` | `order: "In production, this creates a parts order in your DMS (CDK, Lightspeed, DealerSocket)"` | Same | `"In production, this prepares a parts order for handoff to your DMS."` |
| `src/components/demos/service/ServiceDemo.tsx:488` | `showIntegrationToast("In production, this creates a parts order in your DMS (CDK, Lightspeed, DealerSocket)")` | Same | Same as above |
| `src/components/demos/service/ServiceDemo.tsx:507` | `showIntegrationToast("In production, this generates a pre-filled work order in your DMS")` | Same | `"In production, this prepares a draft work order for your DMS."` |
| `src/components/whitepaper/IntelligenceGapDiagram.tsx:119` | `Pre-populated work order` (bullet) | Same | `Draft work order ready for handoff` |
| `src/app/whitepaper/page.tsx:579-580` | `...identifies required parts, checks inventory availability, and pre-populates a work order.` | Inventory + auto work order claim | `...identifies required parts and prepares a draft work order for the technician.` (delete the "checks inventory" clause unless integration is real) |
| `src/app/whitepaper/page.tsx:636` | `"Telemetry-triggered service alerts with pre-populated work orders and parts identification"` | Same | `"Telemetry-triggered service alerts with draft work-order content and parts identification"` |
| `src/components/sections/SocialProof.tsx:7-8` | `prominentLogos = ["Ford", "Airbus"]; otherLogos = ["Google", "Apple", ...]` | These are leadership-experience logos, **but** the H2 above reads `Deployed at Ford Manufacturing. / Airbus manufacturing experience.` — the second line is correct, the first reads as if Planara is deployed at Ford | **Delete H2 line 18 (`Deployed at Ford Manufacturing.`)** OR rewrite to `J's team has shipped at Ford Manufacturing scale.` Keep the logo wall + `Leadership experience includes` framing on lines 41-44 — that's already correctly framed. |
| `src/components/sections/SocialProof.tsx:18` | `Deployed at Ford Manufacturing.` (H2) | Reads as Planara customer claim | DELETE this line; lead with `Leadership experience includes…` |
| `src/components/sections/SocialProof.tsx:23-24` | `We've shipped products used by billions. Now we're applying that at manufacturing scale.` | OK if SocialProof is repositioned — but verify it's "we" (the team), not "Planara has shipped" | KEEP, with header rewrite above |
| `src/components/sections/Credentials.tsx:35` | `["Google", "Apple", "Uber", "Disney", "Goldman Sachs", "Samsung"]` under `Leadership experience includes` | Already correctly framed (line 32) | KEEP |

No `coming soon` strings found. No "learns across all customers" / cross-tenant learning claims found — the only "across customers" usage is in **denial** form (FAQ + AIComparison both say "no sharing across customers"), which is the correct posture.

---

## Special cases & judgment calls

1. **Whitepaper PDF filename.** `public/PLANARA_manufacturing_intelligence_whitepaper.pdf` is referenced from 4 source files (`src/app/whitepaper/page.tsx:112`, `src/app/api/whitepaper/route.ts:34`, `src/components/whitepaper/StickyHeader.tsx:30`, `src/components/WhitePaperModal.tsx:38`). The PDF binary text inside the file cannot be edited from this sweep, but the **public URL** carries the old positioning into the buyer's downloads folder. Recommend: rename to `Planara_Conduit_Intelligence_Gap_Whitepaper.pdf` (matches the email's `filename:` field at `route.ts:71`, which already uses `Planara_Intelligence_Gap_Whitepaper.pdf`). Update all 4 references and add a redirect for the old URL if it's been shared.

2. **The whitepaper's title is not "Manufacturing Intelligence" — it's "The Intelligence Gap."** The whitepaper's H1 is OK as-is; the chrome around it (header chip, byline, footer tagline) is what needs the swap. The thesis name "intelligence gap" is a useful narrative term, not a positioning claim — recommend KEEP that phrase even though it contains the word "intelligence."

3. **`src/data/competitive-landscape.html` is rendered at a public URL** (`/competitive-landscape`) per `src/app/competitive-landscape/page.tsx`. It contains 24+ instances of `intelligence layer` plus DMS / RAG / vendor-adjacent framing. This is a long, internal-strategy-flavored doc that's been published. Two options for J: (a) global find/replace `intelligence layer` → `Conduit` and ship as-is, or (b) take it offline / move behind auth until rewritten. Flagging because the volume of edits is large and the doc reads as internal strategy, not buyer marketing.

4. **`Planara Intelligence Platform` in `ValueProp.tsx:94` and `TwoPathDiagram.tsx:96`.** Different from "Intelligence Layer." Two ways to read this: (a) "Intelligence Platform" is generic enough to keep, (b) it still anchors to old positioning. Recommend: replace with `Planara Conduit` for consistency, but flagging as a judgment call.

5. **`Owner Intelligence` / `Service Intelligence` / `OEM Intelligence`** in `Platform.tsx:123, 131, 140`. These are product-pillar names, not positioning. They work under the new "Technical Service Intelligence" parent. KEEP, but consider whether OEM pillar should be renamed to `OEM Insights` to avoid stacking three "Intelligence" labels visually.

6. **`Manufacturing intelligence ecosystem`** in `competitive-landscape.html:304`. This is industry-level framing, not Planara's category. Could legitimately stay as a description of the market Planara plays in. Soft KEEP — but if the rebrand is asserting TSI as the category, replace.

7. **`across customers` in `Engagement.tsx:36`**. Context is the Platform engagement phase (per-unit SaaS, multi-tenant scale). Not a cross-tenant network-effect claim — but the word "customers" is ambiguous. Tighten to "tenants" to remove any reading as cross-customer learning.

8. **Whitepaper PDF body text** contains the same old positioning in a non-editable binary asset. Out of scope for this code sweep but should be regenerated from source before the rebrand ships, otherwise the email attachment + download link both leak the old name.

9. **`Field Intelligence` / `FIL`** — not present in this repo. Confirmed clean. (May exist in adjacent Planara repos; this sweep only covers `planara-intelligence`.)

10. **Vendor names** — confirmed zero hits across `Gemini|Claude|Anthropic|OpenRouter|Cohere|Pinecone|Supabase|Docling|Langfuse|DeepEval|LangGraph|HyDE|BM25|GPT|OpenAI`. The Category 2 section is entirely technique-name leakage (RAG, chunk, embedding, semantic search), which is still buyer-facing leakage and should still be scrubbed per redactor rules.
