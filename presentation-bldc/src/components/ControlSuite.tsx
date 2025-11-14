import { Section } from "./Section";

const strategies = [
  {
    name: "Dynamic Field-Oriented Control",
    metrics: [
      { label: "Torque Rise", value: "2.5 ms" },
      { label: "Bandwidth", value: "1.2 kHz" },
      { label: "Max Ripple", value: "1.5%" },
    ],
    summary:
      "Flux weakening extends speed range by 32% while adaptive PI tuning maintains zero-crossing smoothness under rapid load variation.",
  },
  {
    name: "Sensor Fusion Observer",
    metrics: [
      { label: "Angle Error", value: "0.18° RMS" },
      { label: "Latency", value: "48 μs" },
      { label: "Fallback", value: "Sensorless" },
    ],
    summary:
      "Hybrid resolver and flux linkage estimation ensures continuity through EMI bursts or degraded Hall sensors.",
  },
  {
    name: "Predictive Diagnostics",
    metrics: [
      { label: "Failure Lead Time", value: "21 days" },
      { label: "Detection Accuracy", value: "97.2%" },
      { label: "Coverage", value: "14 modes" },
    ],
    summary:
      "Edge ML monitors vibration harmonics, PWM duty anomalies, and phase balance to flag mis-timing, bearing wear, and demagnetization.",
  },
];

export function ControlSuite() {
  return (
    <Section
      eyebrow="Control Suite"
      title="Intelligent Commutation & Monitoring Playbook"
      description={
        <>
          Accelerate response, suppress acoustic signatures, and maintain
          performance headroom with an integrated control suite. Built on servo
          lineage and adapted for modern robotics and mobility platforms.
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {strategies.map((strategy) => (
          <article
            key={strategy.name}
            className="glass-surface relative flex h-full flex-col gap-6 rounded-3xl p-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-slate-50">
                {strategy.name}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{strategy.summary}</p>
            </div>
            <dl className="grid gap-3 text-sm text-slate-200">
              {strategy.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-300">
                    {metric.label}
                  </dt>
                  <dd className="text-base font-bold text-white">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
            <span className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />
          </article>
        ))}
      </div>
    </Section>
  );
}
