# Homepage Rebuild — Component Mapping

Source of truth for the homepage rebuild. Maps the 14 existing section components (12 rendered + 2 orphaned on disk) to the target 9-section structure.

Target structure:

1. Hero — TSI H1 + subhead + vertical selector + iPad screenshot
2. Problem
3. What Conduit is — TSI definition paragraph + architecture diagram
4. Three Outcomes / Three Audiences — 3 cards w/ inline product screenshots
5. AIComparison
6. What Makes Conduit Different — 4 differentiator bullets
7. Verticals — 5-card vertical selector
8. Proof — Credentials + SocialProof + Engagement + WhitePaperCTA collapsed
9. CTA + FAQ (4 max) + Footer

---

## A. Mapping table — 14 existing components

| # | Component | File | Verdict | Notes / edits required |
|---|---|---|---|---|
| 1 | `Hero` | `src/components/sections/Hero.tsx` | **REPLACE** | File path stays. Contents fully rewritten: TSI H1, subhead (folds in "Why Now" copy from cuts), vertical selector control, iPad product screenshot. Drop "$100B problem" wording in favor of TSI framing. Remove "See how it works" / "Read the white paper" CTAs unless brief specifies. |
| 2 | `Problem` | `src/components/sections/Problem.tsx` | **KEEP-WITH-EDITS** | Layout + 3-stat grid stays. Light language sweep to align with TSI vocabulary. Optionally absorb a "Why Now" sentence in the section subhead. |
| 3 | `AIComparison` | `src/components/sections/AIComparison.tsx` | **KEEP-AS-IS** | Strong section, brief explicitly says keep. Language sweep only (Yamaha/F300 references are fine for now — vertical selector controls broader framing). |
| 4 | `Integration` | `src/components/sections/Integration.tsx` | **REPLACE** | Tabbed Service / Dealer / OEM block becomes the new "Three Outcomes / Three Audiences" section: 3 cards (not tabs) with inline product screenshots per audience. Reuse the copy already written in the `tabs` array (headline, description, flow). Rename export to `ThreeOutcomes` or repurpose under same filename. |
| 5 | `DemoPreview` | `src/components/sections/DemoPreview.tsx` | **MERGE-INTO-Integration** (new ThreeOutcomes) | The two mock product chrome panels (`Service Intelligence`, `Owner Intelligence`) become the inline product screenshots for the 3-outcomes cards. After merge, delete the file. The OEM card needs a third visual — note as gotcha (no OEM mock currently exists). |
| 6 | `Platform` | `src/components/sections/Platform.tsx` | **KEEP-WITH-EDITS** | Repurpose as "What Conduit is" (section 3). The big SVG architecture diagram is the centerpiece — keep it. Strip the "How It Works" eyebrow + "Documentation and telemetry in. Intelligence out." H2; replace with TSI-definition paragraph per brief. Rename export to `WhatConduitIs` or keep `Platform` and just rewrite header copy. |
| 7 | `WhitePaperCTA` (inline div in `page.tsx`, imported from `@/components/WhitePaperModal`) | `src/components/WhitePaperModal.tsx` | **MERGE-INTO-Proof** | The CTA block currently sandwiched between Platform and ValueProp gets folded into the new Proof section as one row alongside leadership-experience text line + key stats. Component itself (`WhitePaperCTA`) likely stays exported — just call it from inside `Proof.tsx`. |
| 8 | `ValueProp` | `src/components/sections/ValueProp.tsx` | **DELETE** | "Track A / Track B — Build what you need. Integrate when you can." Not in target structure. The "Service Network Distribution 4-card" cut from the brief is the spiritual cousin; this section is also covered by the architecture diagram + Three Outcomes. Remove from disk and from `page.tsx`. |
| 9 | `SocialProof` | `src/components/sections/SocialProof.tsx` | **MERGE-INTO-Proof** | Stats (1B+, 25+, Multiple) keep. Logo wall (Ford, Airbus prominent + 6 others) collapses to a single text line per brief: "Leadership experience: Ford, Airbus, Google, Apple, Uber, Disney, Goldman Sachs, Samsung." Delete the file once `Proof.tsx` lifts the relevant content. |
| 10 | `Engagement` | `src/components/sections/Engagement.tsx` | **MERGE-INTO-Proof** | 3-phase model (Prototype / Pilot / Platform) folds into Proof as a compact row or tertiary block. Could also become a tighter 1-line-per-phase strip. Delete the file after lift. |
| 11 | `FAQ` | `src/components/sections/FAQ.tsx` | **KEEP-WITH-EDITS** | Trim from 6 questions to 4 (brief: "FAQ 4 questions max"). Suggested keepers: ChatGPT/Copilot, knowledge-base difference, data security, time-to-results. Drop the dealer-software and beyond-marine questions (covered elsewhere by Verticals + What Makes Different). |
| 12 | `Footer` | `src/components/sections/Footer.tsx` | **KEEP-WITH-EDITS** | Update tagline from "Built for Yamaha Marine. Powered by Planara." to vertical-agnostic copy now that Verticals section exists. |
| 13 | `Credentials` | `src/components/sections/Credentials.tsx` | **DELETE** | Orphan on disk (not imported in `page.tsx`). 100% duplicated by `SocialProof`. Delete the file. |
| 14 | `TheAsk` | `src/components/sections/TheAsk.tsx` | **KEEP-WITH-EDITS** *(or **MERGE-INTO-CTA**)* | Orphan on disk. Repurpose as the standalone CTA block in section 9 ("CTA + FAQ + Footer"). Re-import into `page.tsx`. Either keep filename `TheAsk.tsx` or rename to `CTA.tsx`. Recommend renaming for clarity. |

---

## B. New components to scaffold

Filenames are proposals. Reuse existing names where the role lines up with what the file already does.

| New section | Proposed filename | Role | Reuses |
|---|---|---|---|
| 3. What Conduit is | `Platform.tsx` (rewrite in place) | TSI-definition paragraph + architecture SVG | Existing `Platform.tsx` SVG, rewritten header copy |
| 4. Three Outcomes / Three Audiences | `Integration.tsx` (rewrite in place) | 3 audience cards with inline product screenshots | `Integration.tsx` tab content + `DemoPreview.tsx` mock chrome |
| 6. What Makes Conduit Different | `Differentiators.tsx` (NEW) | 4-bullet list: manufacturer-to-network distribution, closed-loop field intelligence, zero-hallucination architecture, network resolution analytics | Net new |
| 7. Verticals | `Verticals.tsx` (NEW) | 5-card vertical selector (marine + 4 others) | Net new — likely shares a vertex of state with Hero's vertical selector if the latter is wired interactively |
| 8. Proof | `Proof.tsx` (NEW) | Stats + leadership experience (single text line) + engagement phases + white-paper CTA | Imports `WhitePaperCTA` from `@/components/WhitePaperModal`, lifts stats from `SocialProof`, lifts phases from `Engagement` |
| 9. CTA | `TheAsk.tsx` (re-render existing) **or** `CTA.tsx` (rename) | Standalone CTA block above FAQ | Existing `TheAsk.tsx` |

Decision points to confirm before scaffolding:
- Hero's "vertical selector" — is it a UI control that filters Hero copy/screenshot, or just a visual chip row? Treat as visual until told otherwise.
- Verticals 5-card data — assume marine is current vertical; the other 4 need confirmed names before building (likely powersports, HVAC, industrial machinery, agricultural — pulled from existing FAQ "beyond marine" answer).
- OEM card visual for ThreeOutcomes — no existing mock chrome; needs a screenshot or new mock built.

---

## C. Final `src/app/page.tsx` after rebuild

```tsx
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform"; // What Conduit is
import { Integration } from "@/components/sections/Integration"; // Three Outcomes
import { AIComparison } from "@/components/sections/AIComparison";
import { Differentiators } from "@/components/sections/Differentiators";
import { Verticals } from "@/components/sections/Verticals";
import { Proof } from "@/components/sections/Proof";
import { TheAsk } from "@/components/sections/TheAsk"; // CTA
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Platform />
      <Integration />
      <AIComparison />
      <Differentiators />
      <Verticals />
      <Proof />
      <TheAsk />
      <FAQ />
      <Footer />
    </main>
  );
}
```

9 visible sections + Footer, matching brief.

Files removed from disk: `ValueProp.tsx`, `Credentials.tsx`, `DemoPreview.tsx`, `SocialProof.tsx`, `Engagement.tsx`.
Files added: `Differentiators.tsx`, `Verticals.tsx`, `Proof.tsx`.
Files rewritten in place: `Hero.tsx`, `Platform.tsx`, `Integration.tsx`.
Files lightly edited: `Problem.tsx`, `AIComparison.tsx`, `FAQ.tsx`, `Footer.tsx`, `TheAsk.tsx`.

---

## Gotchas

1. **`WhitePaperCTA` import path is `@/components/WhitePaperModal`, not under `sections/`.** When folding into `Proof.tsx`, keep that import path; don't move the file.
2. **`Integration.tsx` tabs vs cards.** Current implementation is stateful (tabbed). Target is 3 cards visible at once. Rewrite is a real rewrite, not a tweak.
3. **`DemoPreview` mocks are dark-themed.** They were designed against `bg-planara-light` parent. When lifted into Integration cards, verify contrast — Integration currently uses `bg-white`.
4. **Three Outcomes needs an OEM visual.** Service + Owner mocks exist in `DemoPreview`. OEM intelligence has no mock chrome — needs design or reuse of an analytics screenshot.
5. **Hero CTAs.** Current Hero links to `#platform` and `/whitepaper`. After Platform repurposes, the `#platform` anchor still works but means something different ("What Conduit is" instead of "How it works"). Update CTA labels accordingly or remove.
6. **`Footer` tagline is Yamaha-specific.** "Built for Yamaha Marine" must change once the site goes vertical-agnostic.
7. **`SocialProof` has both prominent (Ford, Airbus) and other logos in a grid.** Brief says single text line — collapse both groups, don't keep the visual distinction.
8. **Two stat blocks duplicated.** `Credentials.tsx` and `SocialProof.tsx` have identical `stats` arrays. After `Proof.tsx` is built, both originals get deleted — no duplication remains.
9. **`Platform.tsx` SVG min-width is 900px (`min-w-[900px]`).** Already mobile-imperfect (horizontal scroll). Worth flagging as a future fix when repurposing as section 3.
10. **The brief cut "Field Intelligence Loop" diagram and says it moves to `/platform` page.** No such page exists yet (`src/app/platform/` doesn't exist). Not blocking for homepage rebuild but flag for follow-up.
