# Planara Intelligence Site — Restructure Plan
## CRITICAL: Read this entire document before making any changes.

---

## STEP 0: ROLLBACK

The previous restructure broke the page narrative. Before implementing anything below:

1. Use `git log --oneline` to identify the commit BEFORE the restructure began (the last good state had: hero, problem stats, architecture diagram with RAG pipeline, inline demos, integration tabs, two paths section, engagement model, the ask, credentials, FAQ, footer)
2. Roll back to that commit on a new branch: `git checkout -b restructure-v2 <commit-hash>`
3. Verify the page renders correctly at localhost
4. Then apply the changes below incrementally, committing after each major section

If you cannot identify the right commit, look for the one that still has the "ONE PLATFORM, TWO PRODUCTS" section with the full RAG pipeline description and the Inputs → Intelligence Layer → Products architecture diagram.

---

## THE NARRATIVE ARC

The page tells this story in order:
1. Here's the problem (hero + stats)
2. Why generic AI doesn't solve it (comparison)
3. Here's how Planara solves it (architecture + RAG pipeline)
4. See it working (demo previews → standalone demo pages)
5. What it delivers for each role (integration tabs)
6. How we deploy it (two paths)
7. Who we are (credentials)
8. How to start (engagement model)
9. Common objections (FAQ)

Every section should flow into the next. No orphaned sections. No section should feel like it was dropped onto the page independently.

---

## SECTION-BY-SECTION CHANGES

### 1. Hero
**Keep exactly as-is.** "Nobody reads the manual." with both CTAs:
- "See how it works" (scrolls to demos)
- "Read the white paper" (links to /whitepaper — for now links to PDF, will update when /whitepaper page is built)

### 2. Problem Stats
**Keep exactly as-is.** 72% / 61% / $0 with sources.
FIX: If these are currently broken or missing, restore them. There should be no blank white space between the hero and the next section.

### 3. Generic AI vs Manufacturing Intelligence — NEW SECTION
Add this section BETWEEN the problem stats and the architecture section.

Section label: `NOT ANOTHER CHATBOT`
Headline: **"Generic AI vs. Manufacturing Intelligence"**
Subhead: "Same question. Radically different output."

Side-by-side comparison showing the same query ("What oil does the F300 require?"):
- **Left: Generic AI Assistant** — shows a hedging paragraph response ("Based on my training data, Yamaha outboard motors typically use...")
- **Right: Planara Service Intelligence** — shows structured output: spec table, safety warning, parts list with SKUs and prices, citation to source document

Below the comparison, two key points:
- **Full context, not general knowledge.** Planara queries your actual documentation library, cross-referenced with live telemetry and service history. Generic AI draws from public training data.
- **Your IP stays yours.** Private isolated pipeline. No training on your data. No sharing across customers.

This section sets up WHY you need purpose-built. The next section shows HOW.

### 4. One Platform, Three Outcomes — EVOLVED FROM EXISTING
Section label: `ONE PLATFORM, THREE OUTCOMES`
Headline: **"Documentation and telemetry in. Intelligence out."**

**KEEP the existing architecture diagram layout:** Inputs (left) → Intelligence Layer (center) → Products (right)

**KEEP the full RAG pipeline description in the Intelligence Layer card.** Only change: DELETE the first sentence ("Generic AI tools return paragraphs.") since that positioning now lives in its own section above. Everything else stays — document parsing, semantic search, telemetry fusion, citation tracking, structured output description.

**CHANGE the Products column:** Instead of two products, show three:
- **Service Intelligence** — For technicians and service operations. Dense, procedural, safety-first.
- **Owner Intelligence** — For owners and dealers. Conversational, actionable, white-labeled. (was "Owner & Dealer Portal")
- **OEM Intelligence** — For product and documentation teams. Fleet-wide patterns, documentation gaps, quality feedback loop. (NEW)

**ADD a cyclical visual element** below or integrated into the architecture diagram showing the flywheel:
- Service interactions generate field data →
- OEM Intelligence identifies patterns and gaps →
- Documentation improves →
- Better owner and service outcomes →
- (cycle repeats)

This can be a simple labeled flow underneath the main diagram, not a decorative triangle. It should use actual words and arrows that communicate the data flow. Think information design, not abstract art.

**ADD a single line** at the bottom of this section: "Deploy as standalone tools or embed via API into existing systems." This folds in the two-paths concept without needing a full section for it yet.

### 5. Demo Previews — REPLACES INLINE DEMOS
Section label: `SEE IT IN ACTION`
Headline: **"Three outcomes. One platform."**
Subhead: "Built from real Yamaha F300 documentation. Try the live demos to see how the same intelligence serves different users."

Two preview cards side by side:

**Left card — Service Intelligence:**
- Dark background, app chrome frame (traffic light dots, title bar "Planara Service Intelligence v1.0 — Yamaha F300CA")
- Show the telemetry bar and search input with query chips in initial state (no response loaded)
- Below the card: "Service Intelligence" heading, one-line description, "Try the live demo →" link to /demo/service

**Right card — Owner Intelligence:**
- Light background, show the Newport Marine dealer header, vessel info, telemetry, and query chips in initial state
- Below the card: "Owner Intelligence" heading, one-line description, "Try the live demo →" link to /demo/owner

These cards should look like miniature screenshots of the real product, making you want to click through. Subtle hover effect (lift + shadow).

### 6. What It Delivers — KEEP AND TIGHTEN
Section label: `WHAT IT DELIVERS`
Headline: **"Intelligence for every role in your ecosystem."**

**Keep the three tabs:** Service Ops / Dealer Network / OEM Intelligence
**Keep the content** within each tab (workflow steps, descriptions).
**Tighten copy** if possible but don't gut it — this section answers "what does this do for MY team specifically" for each buyer persona.

### 7. One Platform, Two Paths — KEEP AND RENAME
Section label: `ONE PLATFORM, TWO PATHS` (was "Two Paths, One Platform" — flip for consistency)

**Keep this section.** It's real product strategy. Buyers need to understand standalone vs embedded deployment.

Keep Track A (Purpose-Built Tools) and Track B (Embedded Intelligence) with descriptions.
Keep "Most clients start here" indicator on Track A.
Keep the footnote: "This demo was built in under 2 weeks from a single owner's manual."

### 8. Why Planara — MOVE AND UPDATE
**Move this section** to appear right BEFORE the engagement model (per feedback).

**Update the headline and content:**
Headline: **"Deployed at Ford Manufacturing. Airbus manufacturing experience."**
Subhead: "We've shipped products used by billions. Now we're applying that at manufacturing scale."

Stats: Keep 1B+ users / 25+ Fortune 100 / Multiple exits.

Logo wall: **Ford and Airbus on the first row, larger/bolder.** Google, Apple, Uber, Disney, Goldman Sachs, Samsung on second row, slightly smaller/lighter.

### 9. Engagement Model — REMOVE ALL PRICING
Section label: `ENGAGEMENT MODEL`
Headline: **"Start with proof. Scale with confidence."**

**REMOVE:** "No multi-year contracts. No six-figure pilots to prove the concept."
**REPLACE with:** "We build a working prototype from your documentation to prove the value before you commit."

Three phases:
- **Phase 1: Prototype** — "1-2 weeks" (NO "free" — let Eric negotiate). Working prototype from your documentation. Ingest 2-3 manuals, configure one use case, live demo with your data.
- **Phase 2: Pilot** — "4-8 weeks" (NO price). Production deployment with real users. Full documentation library, telemetry integration, DMS connection, measured outcomes.
- **Phase 3: Platform** — "Ongoing" (keep "Per-unit SaaS"). Scale across models, dealers, customers. Dealer white-labeling, owner self-service portal, continuous model improvement.

### 10. FAQ — KEEP AS-IS
All 6 questions, accordion behavior, same position.

### 11. White Paper CTA
Keep the "Download White Paper" card near the engagement model.
When /whitepaper web page is built, change to "Read the White Paper" linking there, with PDF as secondary download option.

### 12. Footer
**"Built for Yamaha Marine. Powered by Planara."**
"Other equipment lines? hello@planara.com"
© 2026 Planara. All rights reserved.

**REMOVE any "Let's Talk" CTA.**

---

## SUB-PAGES

### /demo/service — Full-page Service Intelligence Demo
- Dark background, full-screen app chrome frame
- All query chips and typed responses working
- Telemetry bar at top
- "← Back to overview" link top-left
- Bottom bar: "Demo — built from Yamaha F300 documentation (LIT-18626-12-51)" | "Vessel: Reel Therapy — 2023 Canyon 326"
- Integration point toasts on Order/Schedule buttons — these MUST be visible (fixed position, bottom-center, 3 second duration)

### /demo/owner — Full-page Owner Intelligence Demo
- Light background, full-screen
- Newport Marine dealer header, vessel info, telemetry
- All query chips and responses working
- Dealer card with address, hours, map/call buttons
- "← Back to overview" link top-left
- "Powered by Planara" subtle bottom-right
- Integration point toasts on action buttons

### /whitepaper — White Paper as Web Page (BUILD LATER)
Not in this pass. Keep PDF for now. Build as a follow-up task.

---

## WHAT NOT TO CHANGE
- Hero copy and both CTAs
- Problem stats content and sources
- Demo functionality (query chips, responses, telemetry, parts lists, system diagrams)
- FAQ questions and answers
- The core RAG pipeline description (minus one sentence)

## IMPLEMENTATION ORDER
1. Rollback to last good commit
2. Rename "Owner & Dealer Portal" → "Owner Intelligence" everywhere
3. Add Generic AI vs Manufacturing Intelligence section after problem stats
4. Update architecture diagram: remove one sentence from RAG pipeline, add OEM Intelligence as third product, add cyclical flywheel visual
5. Replace inline demos with preview cards linking to /demo/service and /demo/owner
6. Create /demo/service and /demo/owner as standalone pages
7. Rename "Two Paths" → "One Platform, Two Paths"
8. Move credentials section before engagement model, update with Ford/Airbus
9. Remove all pricing from engagement model
10. Remove "The Ask" section
11. Remove "Let's Talk" CTA
12. Update footer
13. Fix any spacing/rendering bugs
14. Commit and push to main

## DO NOT
- Remove or gut the RAG pipeline description
- Replace the architecture diagram with abstract decorative visuals
- Remove the "Two Paths" section entirely
- Add animations before the structure is right
- Add pricing or "free" language
- Create sections that don't connect to what comes before and after them
