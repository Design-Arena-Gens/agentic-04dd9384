import Link from "next/link";

const highlights = [
  { label: "Torque Ripple", value: "<1.5%", detail: "with FOC algorithm" },
  { label: "Peak Efficiency", value: "95%", detail: "at 8k rpm" },
  { label: "Power Density", value: "5.2 kW/kg", detail: "liquid cooled" },
];

export function Hero() {
  return (
    <section className="relative isolate mx-auto mb-24 mt-16 flex w-full max-w-6xl flex-col gap-16 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 px-8 py-14 shadow-[0_45px_90px_-45px_rgba(59,130,246,0.45)] backdrop-blur-[28px] md:flex-row md:items-center md:px-14 md:py-18">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="grid-overlay absolute inset-0 opacity-40" />
        <div className="absolute -left-32 -top-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-28 right-[-10%] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="flex-1 space-y-6 text-balance">
        <p className="font-mono text-xs uppercase tracking-[0.6em] text-sky-200">
          Signature Engineering Briefing
        </p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
          Brushless DC Motor Blueprint for Ultra-Responsive Motion
        </h1>
        <p className="max-w-xl text-base text-slate-200 sm:text-lg">
          Dive into an end-to-end executive presentation covering BLDC motor
          architecture, electromagnetic modeling, advanced commutation control,
          and deployment economics—designed for teams targeting world-class
          dynamic performance with manufacturing readiness in mind.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#architecture"
            className="rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.01] hover:shadow-blue-500/35"
          >
            Explore Motor Architecture
          </Link>
          <Link
            href="#roadmap"
            className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:bg-white/10"
          >
            Implementation Roadmap
          </Link>
        </div>
      </div>

      <div className="grid flex-1 gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="glass-surface relative flex flex-col items-center rounded-3xl px-6 py-6 text-center text-slate-100"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-sky-200/70">
              {item.label}
            </span>
            <p className="mt-4 text-3xl font-bold">{item.value}</p>
            <p className="mt-3 text-xs text-slate-300">{item.detail}</p>
            <span className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />
          </div>
        ))}
      </div>
    </section>
  );
}
