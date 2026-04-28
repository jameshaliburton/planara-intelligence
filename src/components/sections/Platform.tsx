import { FieldIntelligenceDiagram } from "@/components/FieldIntelligenceDiagram";

export function Platform() {
  return (
    <section id="platform" className="py-16 md:py-22 bg-planara-navy">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          What Conduit is
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          Manuals, standards, and bulletins, in.
          <br />
          Cited, safety-validated answers, out.
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mb-16 leading-relaxed">
          Conduit ingests the authoritative documentation a manufacturer already
          owns — manuals, standards, service bulletins — and resolves every
          question against a retrieved page. Every answer is sourced. Every
          warning is preserved. The next technician gets a better answer than
          the last one got.
        </p>

        <FieldIntelligenceDiagram />
      </div>
    </section>
  );
}
