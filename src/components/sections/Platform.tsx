export function Platform() {
  return (
    <section id="platform" className="py-24 md:py-32 bg-planara-navy">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          Documentation and telemetry in.
          <br />
          Intelligence out.
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mb-16 leading-relaxed">
          The same platform powers all three outcomes. Here&apos;s what&apos;s underneath.
        </p>

        {/* SVG Architecture Diagram */}
        <div className="overflow-x-auto -mx-6 px-6">
          <svg
            viewBox="0 0 1200 520"
            className="w-full min-w-[900px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Architecture diagram showing data flow from documentation and telemetry through the Planara RAG pipeline to three intelligence products"
          >
            {/* ── INPUT NODES (left) ── */}

            {/* Documentation node */}
            <rect x="20" y="100" width="170" height="80" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
            {/* FileDoc icon placeholder — simple doc shape */}
            <rect x="40" y="122" width="14" height="18" rx="2" stroke="#43CED6" strokeWidth="1.5" fill="none" />
            <line x1="44" y1="130" x2="50" y2="130" stroke="#43CED6" strokeWidth="1" opacity="0.6" />
            <line x1="44" y1="134" x2="50" y2="134" stroke="#43CED6" strokeWidth="1" opacity="0.6" />
            <text x="62" y="134" fill="white" fontSize="13" fontWeight="600" fontFamily="var(--font-sans)">Documentation</text>
            <text x="40" y="160" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="var(--font-mono)">Manuals · Bulletins · Diagrams</text>

            {/* Telemetry node */}
            <rect x="20" y="320" width="170" height="80" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
            {/* Broadcast icon placeholder — signal arcs */}
            <circle cx="47" cy="352" r="4" stroke="#43CED6" strokeWidth="1.5" fill="none" />
            <path d="M37 342 a14 14 0 0 1 20 0" stroke="#43CED6" strokeWidth="1" fill="none" opacity="0.5" />
            <path d="M33 338 a20 20 0 0 1 28 0" stroke="#43CED6" strokeWidth="1" fill="none" opacity="0.3" />
            <text x="62" y="356" fill="white" fontSize="13" fontWeight="600" fontFamily="var(--font-sans)">Telemetry</text>
            <text x="40" y="380" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="var(--font-mono)">Hours · Pressure · Temp · Fuel</text>

            {/* ── INPUT → PIPELINE PATHS ── */}

            {/* Doc → pipeline */}
            <path
              d="M190 140 L260 140 Q280 140 280 160 L280 240 Q280 250 290 250 L330 250"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              fill="none"
            />
            {/* Telemetry → pipeline */}
            <path
              d="M190 360 L260 360 Q280 360 280 340 L280 260 Q280 250 290 250 L330 250"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              fill="none"
            />

            {/* ── PROCESSING PIPELINE (center) ── */}

            {/* Pipeline pills with connecting lines */}
            {/* Animated connecting lines between pills */}
            <line x1="452" y1="250" x2="480" y2="250" stroke="rgba(67,206,214,0.25)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "dash-flow 1s linear infinite" }} />
            <line x1="612" y1="250" x2="640" y2="250" stroke="rgba(67,206,214,0.25)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "dash-flow 1s linear infinite" }} />
            <line x1="772" y1="250" x2="800" y2="250" stroke="rgba(67,206,214,0.25)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "dash-flow 1s linear infinite" }} />

            {/* Row 1 of pipeline: Doc parsing → Chunking → Semantic search */}
            <PipelinePill x={330} y={232} label="Doc parsing" />
            <line x1="451" y1="250" x2="479" y2="250" stroke="rgba(67,206,214,0.2)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "dash-flow 1s linear infinite" }} />
            <PipelinePill x={480} y={232} label="Chunking" />
            <line x1="577" y1="250" x2="629" y2="250" stroke="rgba(67,206,214,0.2)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "dash-flow 1s linear infinite" }} />
            <PipelinePill x={630} y={232} label="Semantic search" />

            {/* Row 2: Telemetry fusion → Citation tracking → Structured output */}
            <PipelinePill x={330} y={280} label="Telemetry fusion" />
            <line x1="466" y1="298" x2="479" y2="298" stroke="rgba(67,206,214,0.2)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "dash-flow 1s linear infinite" }} />
            <PipelinePill x={480} y={280} label="Citation tracking" />
            <line x1="612" y1="298" x2="629" y2="298" stroke="rgba(67,206,214,0.2)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "dash-flow 1s linear infinite" }} />
            <PipelinePill x={630} y={280} label="Structured output" />

            {/* Pipeline bracket / label */}
            <text x="530" y="210" fill="rgba(67,206,214,0.5)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.1em">PLANARA RAG PIPELINE</text>

            {/* ── PIPELINE → OUTPUT PATHS ── */}

            {/* Pipeline → Service Intelligence */}
            <path
              d="M765 250 L850 250 Q870 250 870 230 L870 148"
              stroke="rgba(67,206,214,0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
              style={{ animation: "dash-flow 1s linear infinite" }}
            />
            {/* Pipeline → Owner Intelligence */}
            <path
              d="M765 260 L870 260"
              stroke="rgba(67,206,214,0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
              style={{ animation: "dash-flow 1s linear infinite" }}
            />
            {/* Pipeline → OEM Intelligence */}
            <path
              d="M765 270 L850 270 Q870 270 870 290 L870 370"
              stroke="rgba(67,206,214,0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
              style={{ animation: "dash-flow 1s linear infinite" }}
            />

            {/* ── OUTPUT NODES (right) ── */}

            {/* Service Intelligence */}
            <rect x="870" y="90" width="300" height="58" rx="6" stroke="rgba(67,206,214,0.35)" strokeWidth="1" fill="rgba(67,206,214,0.04)" />
            {/* Wrench icon */}
            <circle cx="894" cy="119" r="8" stroke="#43CED6" strokeWidth="1" fill="none" opacity="0.5" />
            <line x1="890" y1="115" x2="898" y2="123" stroke="#43CED6" strokeWidth="1.5" opacity="0.8" />
            <text x="912" y="115" fill="white" fontSize="13" fontWeight="600" fontFamily="var(--font-sans)">Service Intelligence</text>
            <text x="912" y="133" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="var(--font-mono)">Telemetry-aware · Citation-backed</text>

            {/* Owner Intelligence */}
            <rect x="870" y="230" width="300" height="58" rx="6" stroke="rgba(67,206,214,0.35)" strokeWidth="1" fill="rgba(67,206,214,0.04)" />
            {/* Anchor icon */}
            <circle cx="894" cy="255" r="4" stroke="#43CED6" strokeWidth="1.5" fill="none" opacity="0.8" />
            <line x1="894" y1="259" x2="894" y2="268" stroke="#43CED6" strokeWidth="1.5" opacity="0.6" />
            <text x="912" y="255" fill="white" fontSize="13" fontWeight="600" fontFamily="var(--font-sans)">Owner Intelligence</text>
            <text x="912" y="273" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="var(--font-mono)">Dealer-branded · Conversational</text>

            {/* OEM Intelligence */}
            <rect x="870" y="370" width="300" height="58" rx="6" stroke="rgba(67,206,214,0.35)" strokeWidth="1" fill="rgba(67,206,214,0.04)" />
            {/* Chart icon */}
            <line x1="886" y1="407" x2="886" y2="391" stroke="#43CED6" strokeWidth="1.5" opacity="0.6" />
            <line x1="893" y1="407" x2="893" y2="395" stroke="#43CED6" strokeWidth="1.5" opacity="0.8" />
            <line x1="900" y1="407" x2="900" y2="388" stroke="#43CED6" strokeWidth="1.5" opacity="0.6" />
            <text x="912" y="395" fill="white" fontSize="13" fontWeight="600" fontFamily="var(--font-sans)">OEM Intelligence</text>
            <text x="912" y="413" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="var(--font-mono)">Fleet analytics · Failure patterns</text>

            {/* ── FEEDBACK LOOP ── */}
            <path
              d="M1020 428 L1020 480 Q1020 500 1000 500 L120 500 Q100 500 100 480 L100 180"
              stroke="rgba(67,206,214,0.15)"
              strokeWidth="1"
              strokeDasharray="6 4"
              fill="none"
            />
            {/* Arrow head at top of feedback loop */}
            <polygon points="96,184 100,174 104,184" fill="rgba(67,206,214,0.15)" />
            <text x="560" y="496" fill="rgba(67,206,214,0.3)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">OEM insights improve documentation</text>
          </svg>
        </div>
      </div>
    </section>
  );
}

function PipelinePill({ x, y, label }: { x: number; y: number; label: string }) {
  const width = Math.max(label.length * 8.5 + 20, 100);
  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height="36"
        rx="18"
        stroke="rgba(67,206,214,0.3)"
        strokeWidth="1"
        fill="rgba(67,206,214,0.05)"
      />
      <text
        x={x + width / 2}
        y={y + 22}
        fill="rgba(255,255,255,0.7)"
        fontSize="11"
        fontFamily="var(--font-mono)"
        textAnchor="middle"
      >
        {label}
      </text>
    </>
  );
}
