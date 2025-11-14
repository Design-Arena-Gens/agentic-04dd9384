import { Section } from "./Section";

const milestones = [
  {
    phase: "Concept Validation",
    timeline: "Weeks 0-4",
    focus: [
      "Motor sizing study, load cases, transient duty cycle definition",
      "Rapid magnetic FEA sweep with sensitivity analysis on pole-slot combinations",
      "Digital twin calibration against reference platform for baseline comparison",
    ],
  },
  {
    phase: "Prototype Execution",
    timeline: "Weeks 5-12",
    focus: [
      "CNC stator lamination tooling, magnet segmentation procurement",
      "Inverter board spin with redundant sensing and EMI containment design",
      "Bring-up lab: torque dyno, thermal soak, vibration + acoustic signature tuning",
    ],
  },
  {
    phase: "Production Scaling",
    timeline: "Weeks 13-24",
    focus: [
      "Automated winding and resin impregnation line setup with inline QA vision",
      "Firmware hardening with compliance (ISO 26262 / DO-178C subset where needed)",
      "Predictive maintenance data lake integration with fleet OTA capability",
    ],
  },
];

export function Roadmap() {
  return (
    <Section
      id="roadmap"
      eyebrow="Adoption Path"
      title="Launch Roadmap to Production-Ready BLDC Platform"
      description="A disciplined rollout that keeps risk low while accelerating learnings. The plan below meets both engineering validation and business readiness checkpoints."
    >
      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-sky-500 via-blue-500/50 to-transparent md:block" />
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.phase}
              className="glass-surface relative rounded-3xl border border-white/10 p-6 md:pl-16"
            >
              <div className="absolute -left-[10px] top-8 hidden h-5 w-5 rounded-full border border-sky-300 bg-sky-400/50 shadow-[0_0_0_6px_rgba(56,189,248,0.15)] md:block" />
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <h3 className="text-lg font-semibold text-white">
                  {milestone.phase}
                </h3>
                <p className="rounded-full border border-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200/80">
                  {milestone.timeline}
                </p>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {milestone.focus.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
