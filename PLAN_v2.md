# Planara Intelligence Site — Fixes Round 2
## Read fully before changing anything. This is a REORDER + COPY PASS, not a rebuild.

---

## WHAT'S CHANGING AND WHY

The sections are in the wrong narrative order. The page currently shows HOW the technology works before explaining WHAT it delivers. A VP doesn't care about your RAG pipeline until they understand what it does for their team.

The correct story: WHY → WHAT → PROVE IT → HOW → DEPLOY → WHO → START

This means moving existing sections, not rewriting them. The content in each section is mostly fine. The order and some headlines need to change.

---

## NEW SECTION ORDER

### 1. Hero
**No changes.** Keep as-is.

### 2. Problem Stats  
**No changes.** Keep as-is (72% / 61% / $0).

### 3. Generic AI vs Manufacturing Intelligence
**No changes to content.** Keep the side-by-side comparison, keep the "Full context" and "IP" points.

### 4. What It Delivers — MOVE UP (currently section 7)
This section currently sits after the demos. Move it to HERE — right after the generic AI comparison. This is where the reader learns WHAT the three outcomes actually mean.

**Change section label** from `WHAT IT DELIVERS` to `THREE OUTCOMES, ONE PLATFORM`

**Change headline** from "Intelligence for every role in your ecosystem." to **"What your teams actually get."**

**Change subhead** from "One platform serves technicians, dealers, and OEM product teams — each with tools designed for how they actually work." to **"One platform serves three audiences. Each gets intelligence shaped for how they actually work."**

**Keep everything else:** The three tabs (Service Ops / Dealer Network / OEM Intelligence), the workflow steps within each tab, the connected systems, the technical architecture footnote. This is all good content that was just in the wrong place.

### 5. Demo Previews — KEEP IN CURRENT RELATIVE POSITION (after What It Delivers)
Now the reader knows what the three outcomes are. The demos prove it.

**Change section label** from `SEE IT IN ACTION` — keep this, it's fine.

**REMOVE "Three outcomes. One platform." headline.** Replace with **"See it working."**

**Change subhead** to: "Built from real Yamaha F300 documentation. Click through to see how the same intelligence platform serves different users."

Keep both demo preview cards (Service Intelligence / Owner Intelligence) with "Try the live demo →" links. No changes to the cards themselves.

### 6. Platform Architecture — MOVE DOWN (currently section 4)
The reader now knows WHAT the product delivers and has SEEN it working. Now they want to understand HOW.

**Change section label** from `ONE PLATFORM, THREE OUTCOMES` to `HOW IT WORKS`

**Change headline** from "Documentation and telemetry in. Intelligence out." to **"Documentation and telemetry in. Intelligence out."** — actually this headline is fine, keep it.

**Change subhead** to: "The same platform powers all three outcomes. Here's what's underneath."

**Keep the architecture diagram** (Inputs → Intelligence Layer → Products) exactly as-is. Keep the RAG pipeline description. Keep the three product boxes on the right. Keep the tech tags.

**CHANGE the three product boxes** on the right side of the architecture diagram. Currently they just have names and taglines. Since "What It Delivers" has already explained what each outcome does, these boxes should be brief technical descriptions of what each product IS, not what it does for the user:
- **Service Intelligence** — "Structured query interface with telemetry-aware responses, citation tracking, and DMS integration."
- **Owner Intelligence** — "Dealer-branded conversational portal with equipment-specific context and service CTAs."  
- **OEM Intelligence** — "Fleet analytics dashboard surfacing failure patterns, documentation gaps, and product feedback."

These are now technical descriptions for the evaluator who wants to understand the platform, not marketing descriptions for the VP (that happened in section 4).

### 7. Intelligence Feedback Loop — KEEP AFTER ARCHITECTURE
**Rename** from "THE INTELLIGENCE FLYWHEEL" to **"THE INTELLIGENCE LOOP"**

**Redesign the visual.** Currently a numbered linear list (1→2→3→4) with "Cycle repeats" appended. Replace with a circular diagram:
- Four nodes arranged in a circle (or rounded square loop)
- Connected by arrows that form a continuous cycle
- NO numbers (no start/end point)
- Each node has a short label and one-line description

The four nodes:
- **Service interactions generate field data** — "Every query, diagnosis, and repair becomes structured intelligence"
- **OEM identifies patterns** — "Fleet-wide failure patterns, documentation gaps, warranty anomalies"
- **Documentation improves** — "Technical writing teams get data-driven feedback"
- **Better outcomes** — "More accurate answers, fewer misdiagnoses, faster resolution"

Arrows flow continuously between them. No "cycle repeats" text needed — the visual makes it obvious.

**REMOVE** "Deploy as standalone tools or embed via API into existing systems." from this section — that line now belongs in the Two Paths section.

### 8. One Platform, Two Paths
**Keep as-is EXCEPT:**

- **REMOVE** "This demo was built in under 2 weeks from a single owner's manual. No integrations, no IT project, no vendor approvals. A working prototype that proves the value before you commit to anything."
- **CHANGE** "the two demos on this page are examples" → "the demos are examples" (they're on sub-pages now)
- **ADD** "Deploy as standalone tools or embed via API into existing systems." as the section subhead or opening line if it fits naturally.

### 9. Why Planara (Credentials)
**No changes to content.** Ford/Airbus prominent, tech logos below. Keep headline.

### 10. Engagement Model
**No changes to content.** Keep phases without pricing. Keep updated subhead.

### 11. FAQ
**No changes.**

### 12. White Paper CTA
**No changes.** Keep "Read the White Paper" + "Download PDF".

### 13. Footer — MOVE TO VERY END
**"Built for Yamaha Marine. Powered by Planara."** must be the LAST element on the page. Currently it renders between credentials and engagement model. Fix this.

---

## COPY FIXES (apply during reorder)

| Location | Current | Change to |
|----------|---------|-----------|
| Section 4 label | `WHAT IT DELIVERS` | `THREE OUTCOMES, ONE PLATFORM` |
| Section 4 headline | "Intelligence for every role in your ecosystem." | **"What your teams actually get."** |
| Section 4 subhead | "One platform serves technicians, dealers, and OEM product teams — each with tools designed for how they actually work." | **"One platform serves three audiences. Each gets intelligence shaped for how they actually work."** |
| Section 5 headline | "Three outcomes. One platform." | **"See it working."** |
| Section 6 label | `ONE PLATFORM, THREE OUTCOMES` | `HOW IT WORKS` |
| Section 6 subhead | (none) | **"The same platform powers all three outcomes. Here's what's underneath."** |
| Section 6 product boxes | Marketing taglines | Technical descriptions (see above) |
| Section 7 label | `THE INTELLIGENCE FLYWHEEL` | `THE INTELLIGENCE LOOP` |
| Two Paths footnote | "This demo was built in under 2 weeks..." | REMOVE |
| Two Paths Track A | "the two demos on this page" | "the demos" |

---

## IMPLEMENTATION ORDER

1. Reorder sections: move "What It Delivers" to position 4 (after Generic AI comparison, before demos)
2. Move "Platform Architecture" to position 6 (after demos)
3. Apply all copy changes from the table above
4. Redesign the feedback loop as a circular visual (not numbered linear list)
5. Fix footer position (must be last element on page)
6. Commit and push to main

## DO NOT
- Rewrite section content beyond what's specified above
- Remove any sections
- Change the architecture diagram layout (Inputs → Intelligence Layer → Products)
- Change the RAG pipeline description text
- Change the FAQ content
- Change the demo preview cards
- Add new sections
- Add animations (not this pass)
