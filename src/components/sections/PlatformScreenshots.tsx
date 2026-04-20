import Image from "next/image";

const screenshots = [
  {
    title: "Technician Intelligence",
    caption: "Streaming AI responses with structured procedures, follow-up questions, and citation-backed answers.",
    src: "/screenshots/technician-chat.png",
  },
  {
    title: "Service Manager Dashboard",
    caption: "KPIs, resolution rates, technician adoption, and knowledge gap identification across the dealer network.",
    src: "/screenshots/backoffice-overview.png",
  },
  {
    title: "Job Queue",
    caption: "Work orders with AI-generated diagnostic summaries — technicians know what they're walking into.",
    src: "/screenshots/job-queue.png",
  },
  {
    title: "Guided Repair",
    caption: "Step-by-step procedures with inline diagrams, torque specs, and safety warnings from the service manual.",
    src: "/screenshots/procedure-repair.png",
  },
  {
    title: "Repair Verification",
    caption: "Structured checklists ensure every step is completed and documented before closing the work order.",
    src: "/screenshots/verification-complete.png",
  },
  {
    title: "Compliance Management",
    caption: "Industry safety standards (ABYC, USCG) automatically surface alongside OEM procedures.",
    src: "/screenshots/compliance-ckl.png",
  },
];

export function PlatformScreenshots() {
  return (
    <section className="py-16 md:py-22 bg-planara-navy">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          The Product
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          Real product. Real screenshots.
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-16 leading-relaxed">
          This is what your team will actually use — not mockups, not wireframes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {screenshots.map((shot) => (
            <div key={shot.title} className="bg-planara-navy p-1">
              <div className="relative aspect-[16/10] overflow-hidden bg-black/30">
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white mb-1">
                  {shot.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  {shot.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
