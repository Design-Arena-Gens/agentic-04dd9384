import { Section } from "./Section";

const layers = [
  {
    title: "Electromechanical Core",
    bullets: [
      "Aerospace grade NeFeB magnets with segmented surface mount bridging; skewed 0.8° to cancel cogging",
      "Hairpin distributed windings, 0.32 fill factor, vacuum pressure impregnated for thermal stability",
      "Custom laminated stator stack, 0.19 mm electrical steel, laser cut with interlocking wedges",
    ],
  },
  {
    title: "Power Electronics",
    bullets: [
      "SiC MOSFET 3-phase inverter, 48 kHz switching with spread spectrum noise shaping",
      "Synchronous buck pre-regulation delivering ultra-flat DC bus for regen stability",
      "Smart gate drivers with cycle-by-cycle desaturation and SOA monitoring",
    ],
  },
  {
    title: "Control Firmware",
    bullets: [
      "Field oriented control with adaptive gain scheduling aligned to temperature and loading",
      "Kalman filtered observer combining high-resolution Hall and flux-sensor readings",
      "Edge ML anomaly detection (multi-axis vibration + phase currents) for predictive maintenance",
    ],
  },
];

export function Architecture() {
  return (
    <Section
      id="architecture"
      eyebrow="System Stack"
      title="Layered BLDC Architecture for Precision Torque Delivery"
      description={
        <>
          Each layer is engineered to maintain field alignment and thermal margin
          while delivering premium responsiveness. The stack below is validated
          through digital twin simulation, then productionized with automated QA
          gates.
        </>
      }
    >
      <div className="grid gap-6">
        {layers.map((layer) => (
          <div
            key={layer.title}
            className="glass-surface relative overflow-hidden rounded-3xl p-6"
          >
            <h3 className="text-lg font-semibold text-white">{layer.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {layer.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-sky-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <span className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />
          </div>
        ))}
      </div>
    </Section>
  );
}
