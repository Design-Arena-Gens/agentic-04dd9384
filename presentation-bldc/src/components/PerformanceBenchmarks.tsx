import { Section } from "./Section";

const benchmarks = [
  {
    label: "Peak Torque",
    hero: "182 Nm",
    detail: "@ 400 Arms, liquid cooled, 2.6× overload for 10 s",
  },
  {
    label: "Efficiency Map",
    hero: "95%+",
    detail: "7,200–11,400 rpm plateau, iso-loss contour optimized",
  },
  {
    label: "Thermal Ceiling",
    hero: "165°C",
    detail: "Class H insulation, active coolant jacket, ΔT 28°C",
  },
  {
    label: "Acoustic Noise",
    hero: "63 dBA",
    detail: "At 1 m, 9k rpm with randomized PWM carriers",
  },
];

const chartData = [
  { speed: 0, torque: 180, efficiency: 0.86 },
  { speed: 2000, torque: 178, efficiency: 0.9 },
  { speed: 4000, torque: 160, efficiency: 0.93 },
  { speed: 6000, torque: 148, efficiency: 0.95 },
  { speed: 8000, torque: 118, efficiency: 0.94 },
  { speed: 10000, torque: 90, efficiency: 0.92 },
  { speed: 12000, torque: 70, efficiency: 0.88 },
];

export function PerformanceBenchmarks() {
  const maxTorque = Math.max(...chartData.map((p) => p.torque));
  return (
    <Section
      eyebrow="Benchmarking"
      title="Validated BLDC Performance Envelope"
      description="Derived from dynamometer sweeps and thermal chamber testing. Efficiency contours align with 3D electromagnetic FEA and CFD co-sim outputs, ensuring digital twin fidelity."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-surface relative rounded-3xl p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-200/70">
            Torque & Efficiency Map
          </h3>
          <div className="relative mt-6 h-64 w-full">
            <svg viewBox="0 0 420 240" className="h-full w-full">
              <defs>
                <linearGradient id="efficiencyGradient" x1="0" x2="1" y1="1" y2="0">
                  <stop offset="0%" stopColor="rgba(56,189,248,0.15)" />
                  <stop offset="100%" stopColor="rgba(129,140,248,0.55)" />
                </linearGradient>
              </defs>
              <rect
                x={0}
                y={0}
                width={420}
                height={240}
                rx={24}
                fill="rgba(15,23,42,0.45)"
              />
              <g transform="translate(36,24)">
                <rect
                  x={0}
                  y={0}
                  width={348}
                  height={192}
                  fill="url(#efficiencyGradient)"
                  rx={20}
                />
                {/* grid */}
                {[0, 1, 2, 3, 4].map((index) => (
                  <line
                    key={`h-${index}`}
                    x1={0}
                    x2={348}
                    y1={index * (192 / 4)}
                    y2={index * (192 / 4)}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth={1}
                    strokeDasharray="4 6"
                  />
                ))}
                {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                  <line
                    key={`v-${index}`}
                    y1={0}
                    y2={192}
                    x1={index * (348 / 6)}
                    x2={index * (348 / 6)}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth={1}
                    strokeDasharray="4 6"
                  />
                ))}

                <polyline
                  fill="none"
                  stroke="#f472b6"
                  strokeWidth={3}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  points={chartData
                    .map((point) => {
                      const x = (point.speed / 12000) * 348;
                      const y = (1 - point.torque / maxTorque) * 192;
                      return `${x},${y}`;
                    })
                    .join(" ")}
                />

                {chartData.map((point) => {
                  const x = (point.speed / 12000) * 348;
                  const y = (1 - point.torque / maxTorque) * 192;
                  return (
                    <g key={point.speed} transform={`translate(${x},${y})`}>
                      <circle r={6} fill="#f472b6" />
                      <circle r={3} fill="#0f172a" />
                      <text
                        x={0}
                        y={-14}
                        fill="rgba(226,232,240,0.9)"
                        fontSize="12"
                        textAnchor="middle"
                      >
                        {(point.efficiency * 100).toFixed(1)}%
                      </text>
                    </g>
                  );
                })}
              </g>
              <text
                x={210}
                y={228}
                fill="rgba(148,163,184,0.85)"
                fontSize="12"
                textAnchor="middle"
              >
                Rotor Speed (rpm)
              </text>
              <text
                x={10}
                y={120}
                transform="rotate(-90 10 120)"
                fill="rgba(148,163,184,0.85)"
                fontSize="12"
                textAnchor="middle"
              >
                Torque (Nm)
              </text>
            </svg>
          </div>
          <span className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />
        </div>
        <div className="grid gap-6">
          {benchmarks.map((benchmark) => (
            <div
              key={benchmark.label}
              className="glass-surface relative rounded-3xl p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                {benchmark.label}
              </p>
              <p className="mt-3 text-3xl font-bold text-white">
                {benchmark.hero}
              </p>
              <p className="mt-2 text-sm text-slate-300">{benchmark.detail}</p>
              <span className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
