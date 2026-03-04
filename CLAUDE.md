# Planara Manufacturing Intelligence

## What This Is
A pitch site with two embedded interactive demos for selling Planara's Manufacturing Intelligence platform to Yamaha Marine, Grady-White, and their dealer network. The page IS the pitch.

## Architecture
- Next.js 14+ App Router
- Tailwind CSS with Planara design tokens
- Two self-contained demo components (Service Intelligence + Owner Portal)
- API route stubs matching real RAG pipeline response shapes
- Deployable to Vercel

## Design System — Planara Brand
Source of truth: https://www.planara.com

Colors:
- Dark/Primary: #131820
- Navy: #0F1729
- Teal accent: #43CED6
- Blue CTA: #2E95F5
- Muted text: #627084
- Light bg: #F8FAFC
- Border: #E2E5EA

Typography: Match planara.com. Headlines bold, tight letter-spacing. Body clean, generous line-height.

Principles: Dark sections for emphasis, light for content. Left-aligned. No stock photos. No abstract AI imagery. Must feel like an extension of planara.com.

## Page Structure

### 1. Hero
"Nobody reads the manual." The $100B problem. Planara solves it.

### 2. The Problem
- 70% of equipment downtime from incomplete knowledge
- 30% of tech time searching for information
- $0 value from connected equipment telemetry

### 3. One Platform, Two Products
Architecture diagram: Doc ingestion -> Intelligence layer (+ telemetry) -> Service ops + Consumer/dealer interface

### 4. Service Intelligence Demo (embedded, full-width)
B2B product for service technicians. Dense, utilitarian, information-forward. Telemetry bar, system diagrams (cooling, lubrication), procedural responses with safety warnings, parts ordering stubs, work order CTAs, service history, manual citations.

### 5. Owner & Dealer Portal Demo (embedded, full-width)
Consumer product, white-labeled for dealers. COMPLETELY DIFFERENT visual language from service demo. Warm, premium feel for $350K+ boat owners. Dealer-branded header, vessel card with telemetry, conversational responses, action buttons (schedule, call, order), dealer CTA cards, "powered by Planara" branding.

### 6. Integration & Technology
Siren Marine (telemetry), Dealer Management Systems (CDK, Lightspeed, DealerSocket), parts ordering, work orders, RAG pipeline architecture.

### 7. Engagement Model
Prototype (1-2 weeks, free) -> Pilot (4-8 weeks, $25-50K) -> Platform (ongoing, per-unit SaaS)

### 8. The Ask
2-3 manuals, one use case, one point of contact. Working prototype in 1-2 weeks.

### 9. Planara Credentials
1B+ users, 25+ Fortune 100, multiple exits. Logo wall.

## Demo Data — All Real Yamaha F300 Specs
From actual Yamaha F300 Owner's Manual (LIT-18626-12-51):
- Oil: YAMALUBE 4-M FC-W, SAE 10W-30, 7.1L capacity
- Spark plugs: NGK LFR6A-11, gap 1.0-1.1mm
- Thermostat: opens at 143F (61.5C)
- Compression: 171 psi, max variance 14.2 psi
- Gear oil: API GL-5 SAE 80W-90, 1.04L
- Idle: 650-750 RPM, WOT: 5000-6000 RPM

Telemetry (Siren Marine shape): Engine hours 847 (approaching 1000-hr service), oil pressure 58 psi, coolant 172F, battery 12.4V, fuel 68%

Vessel: 2023 Grady-White Canyon 326, twin F300CA, Newport Shipyard RI
Dealer: Newport Marine (fictional example)

## API Route Stubs
Build so demos call local API routes returning hardcoded responses in the EXACT shape the real RAG pipeline will use. Swap URLs later, not UI.

POST /api/service/query -> { safety?, citations[], content[] }
POST /api/owner/query -> { text, citation?, tip?, action? }
GET /api/telemetry/:vesselId -> { engineHours, oilPressure, coolantTemp, batteryVoltage, fuelLevel }
GET /api/vessel/:vesselId -> { name, builder, year, engines }
GET /api/parts/lookup -> { partNumber, name, price, inStock, qty }
GET /api/service-history/:vesselId -> [{ date, hours, type, items[], cost }]

## Golden Path Queries

Service mode:
1. "What oil does the F300 require?" -> spec table + lubrication diagram + parts card
2. "Engine overheating at low RPM" -> safety warning + cooling diagram + diagnostic procedure + parts + work order CTA
3. "Winterization procedure" -> safety warning + 7-step procedure + parts + telemetry note
4. "When is my next service due?" -> service checklist + parts + service history + work order CTA

Owner mode:
1. "When is my next service due?" -> hours remaining + schedule CTA + dealer card
2. "What oil does my engine need?" -> plain language + order CTA
3. "How do I winterize?" -> overview + bundle tip + schedule CTA
4. "What does the warning light mean?" -> conditions + call dealer CTA

## Critical Rules
- Two demos MUST feel like different products. Different visual weight, interaction patterns, emotional register.
- Every CTA is an integration stub. Label clearly in code.
- Subtle "Demo — built from Yamaha F300 documentation" label on each demo.
- Section anchors on every section for deep-linking.
- Mobile-responsive.
- Performance matters. No heavy libraries.
