import { Section } from "./Section";

const applications = [
  {
    title: "Autonomous Robotics",
    context:
      "6-axis manipulator joints for surgical robotics with 0.02° positioning accuracy and sterile-room acceptable acoustic profile.",
    value: "15% faster cycle time vs. incumbent frameless servo solution.",
  },
  {
    title: "Premium Micro-Mobility",
    context:
      "High-end e-bike platform targeting 2.2× torque density with regenerative braking and silent hill-climb performance.",
    value: "Range increases by 18% while maintaining sub-4 kg drive unit.",
  },
  {
    title: "UAV Propulsion",
    context:
      "VTOL tilt-rotor requiring burst thrust and low vibration to stabilize LiDAR payloads during rapid transitions.",
    value: "Delivers 12% more hover thrust with 40% reduction in maintenance.",
  },
];

export function Applications() {
  return (
    <Section
      eyebrow="Use Cases"
      title="Where the BLDC Blueprint Wins Immediately"
      description="Optimized for mission-critical mobility and automation scenarios that demand high torque bandwidth, stellar efficiency, and predictive health monitoring."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {applications.map((app) => (
          <article
            key={app.title}
            className="glass-surface relative flex h-full flex-col gap-4 rounded-3xl p-6"
          >
            <h3 className="text-lg font-semibold text-white">{app.title}</h3>
            <p className="text-sm text-slate-300">{app.context}</p>
            <div className="mt-auto flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_0_6px_rgba(56,189,248,0.25)]" />
              <p>{app.value}</p>
            </div>
            <span className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />
          </article>
        ))}
      </div>
    </Section>
  );
}
