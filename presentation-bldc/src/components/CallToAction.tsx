export function CallToAction() {
  return (
    <section className="mx-auto mb-24 max-w-5xl px-6 sm:px-10">
      <div className="glass-surface relative overflow-hidden rounded-[2.5rem] px-8 py-12 sm:px-14 sm:py-16">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-24 top-10 h-60 w-60 rounded-full bg-sky-400/30 blur-3xl" />
          <div className="absolute bottom-0 right-[-20%] h-72 w-72 rounded-full bg-purple-400/20 blur-[120px]" />
        </div>
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.6em] text-sky-200/80">
              Execution Readiness
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Let’s tailor the BLDC blueprint to your product line.
            </h2>
            <p className="mt-4 text-base text-slate-200">
              We align with your mechanical constraints, supply chain, and
              regulatory landscape to stand up a motor program that delivers
              premium torque density, longevity, and serviceability.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:partnerships@bldc-masterclass.com"
              className="rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.01]"
            >
              Schedule Executive Briefing
            </a>
            <a
              href="#architecture"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-white/35 hover:bg-white/10"
            >
              Review Technical Stack
            </a>
          </div>
        </div>
        <span className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/10" />
      </div>
    </section>
  );
}
