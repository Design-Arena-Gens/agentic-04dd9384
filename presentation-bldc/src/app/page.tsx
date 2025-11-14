import { Applications } from "@/components/Applications";
import { Architecture } from "@/components/Architecture";
import { CallToAction } from "@/components/CallToAction";
import { ControlSuite } from "@/components/ControlSuite";
import { Hero } from "@/components/Hero";
import { MotorModel } from "@/components/MotorModel";
import { PerformanceBenchmarks } from "@/components/PerformanceBenchmarks";
import { Roadmap } from "@/components/Roadmap";
import { Section } from "@/components/Section";

const valuePillars = [
  {
    title: "Magnetic Excellence",
    copy: "Optimized pole-slot combination and segmented magnets slash cogging torque, delivering buttery smooth rotation even at <5 rpm.",
    tag: "Surface & Interior PM Hybrid",
  },
  {
    title: "Thermal Intelligence",
    copy: "Embedded RTDs, rotor telemetry, and CFD-informed jacket design maintain thermal headroom for aggressive duty cycles.",
    tag: "Digital Twin Verified",
  },
  {
    title: "Lifecycle Confidence",
    copy: "Predict-before-fail diagnostics integrate directly with fleet management, underpinning warranties and service SLAs.",
    tag: "Edge ML Health",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-20 opacity-45">
        <div className="grid-overlay h-full w-full" />
      </div>
      <main className="relative mx-auto flex max-w-[1200px] flex-col gap-20 pb-32">
        <Hero />
        <ValueNarrative />
        <MotorModelSection />
        <Architecture />
        <ControlSuite />
        <PerformanceBenchmarks />
        <Applications />
        <Roadmap />
        <CallToAction />
      </main>
    </div>
  );
}

function ValueNarrative() {
  return (
    <Section
      eyebrow="Value Narrative"
      title="Delivering a Premium BLDC Experience End-to-End"
      description="An articulate story for stakeholders: technical brilliance paired with commercial pragmatism. Designed for boardroom alignment and engineering team mobilization."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {valuePillars.map((pillar) => (
          <article
            key={pillar.title}
            className="glass-surface relative flex h-full flex-col gap-4 rounded-3xl p-6"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400 shadow-[0_0_0_6px_rgba(99,102,241,0.25)]" />
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-200/70">
                {pillar.tag}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
            <p className="text-sm text-slate-300">{pillar.copy}</p>
            <span className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />
          </article>
        ))}
      </div>
    </Section>
  );
}

function MotorModelSection() {
  return (
    <Section
      eyebrow="Interactive Model"
      title="Field Alignment Digital Twin"
      description="Hands-on visualization of the reference BLDC motor: tune electrical angle, observe stator flux, and interpret phase currents with torque contribution insights."
    >
      <MotorModel />
    </Section>
  );
}
