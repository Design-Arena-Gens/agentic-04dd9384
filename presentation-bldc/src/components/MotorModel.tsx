"use client";

import { useMemo, useState } from "react";

type Phase = {
  name: string;
  offset: number;
  color: string;
};

const phases: Phase[] = [
  { name: "Phase A", offset: 0, color: "#38bdf8" },
  { name: "Phase B", offset: -120, color: "#c084fc" },
  { name: "Phase C", offset: 120, color: "#f472b6" },
];

const rotorPolePairs = 7;

function degToRad(angle: number) {
  return (angle * Math.PI) / 180;
}

function polarToCartesian(cx: number, cy: number, radius: number, angle: number) {
  const rad = degToRad(angle - 90);
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

function describeArc(
  cx: number,
  cy: number,
  radius: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const sweep = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    sweep,
    0,
    end.x,
    end.y,
  ].join(" ");
}

export function MotorModel() {
  const [electricalAngle, setElectricalAngle] = useState(45);

  const phaseCurrents = useMemo(
    () =>
      phases.map((phase) => ({
        ...phase,
        current: Math.cos(degToRad(electricalAngle - phase.offset)),
      })),
    [electricalAngle],
  );

  const poleMechanicalAngle = electricalAngle / rotorPolePairs;

  const statorSegments = useMemo(() => {
    const segments: { start: number; end: number; color: string }[] = [];
    phases.forEach((phase) => {
      const coils = 4;
      const slotSpan = 360 / (phases.length * coils);
      for (let i = 0; i < coils; i++) {
        const baseAngle = phase.offset + i * (360 / phases.length);
        segments.push({
          start: baseAngle - slotSpan / 2,
          end: baseAngle + slotSpan / 2,
          color: phase.color,
        });
      }
    });
    return segments;
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="glass-surface relative mx-auto w-full max-w-[380px] rounded-3xl p-6">
          <svg
            viewBox="0 0 320 320"
            className="h-full w-full"
            role="img"
            aria-label="BLDC cross-section"
          >
            <defs>
              <radialGradient id="rotorCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#020617" />
                <stop offset="100%" stopColor="#0f172a" />
              </radialGradient>
              <linearGradient id="shaft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
            </defs>
            <circle
              cx="160"
              cy="160"
              r="150"
              fill="none"
              stroke="rgba(148,163,184,0.35)"
              strokeWidth="1"
              strokeDasharray="6 8"
            />
            {statorSegments.map((seg, idx) => (
              <path
                key={idx}
                d={describeArc(160, 160, 128, seg.start, seg.end)}
                stroke={seg.color}
                strokeWidth="18"
                strokeLinecap="round"
                fill="none"
                opacity={0.65}
              />
            ))}
            <circle cx="160" cy="160" r="90" fill="url(#rotorCore)" />
            <circle
              cx="160"
              cy="160"
              r="64"
              fill="#020617"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2"
            />
            <g
              style={{
                transformOrigin: "160px 160px",
                transform: `rotate(${poleMechanicalAngle}deg)`,
              }}
            >
              <rect
                x="155"
                y="90"
                width="10"
                height="40"
                rx="5"
                fill="#38bdf8"
                opacity={0.9}
              />
              <rect
                x="155"
                y="190"
                width="10"
                height="40"
                rx="5"
                fill="#f472b6"
                opacity={0.9}
              />
              <line
                x1="160"
                y1="160"
                x2="160"
                y2="70"
                stroke="rgba(226,232,240,0.9)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="160" cy="160" r="8" fill="url(#shaft)" />
              <circle cx="160" cy="160" r="4" fill="#cbd5f5" />
            </g>

            <circle
              cx="160"
              cy="160"
              r="150"
              fill="none"
              stroke="rgba(148,163,184,0.25)"
              strokeWidth="0.7"
            />
          </svg>
          <div className="mt-4 space-y-1 text-center text-xs font-medium uppercase tracking-[0.35em] text-slate-300">
            <p>7 Pole-Pair Interior PM Rotor · 12 Slot Distributed Winding</p>
            <p>Vector-Aligned Field Orientation</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Digital Twin Alignment Model
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Adjust the electrical angle to visualize magnetic field
                alignment between stator phases and rotor poles. The model
                tracks real-time current commands for a field-oriented control
                (FOC) loop, revealing torque generation and cogging mitigation.
              </p>
            </div>
            <div>
              <label
                htmlFor="angle"
                className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.4em] text-slate-200/70"
              >
                Electrical angle <span>{electricalAngle.toFixed(0)}°</span>
              </label>
              <input
                id="angle"
                type="range"
                min={0}
                max={360}
                value={electricalAngle}
                onChange={(event) => setElectricalAngle(Number(event.target.value))}
                className="mt-2 w-full accent-sky-400"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {phaseCurrents.map((phase) => (
              <div
                key={phase.name}
                className="glass-surface relative rounded-2xl p-4 text-slate-100"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-slate-200/70">
                  {phase.name}
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  {phase.current >= 0 ? "+" : "-"}
                  {Math.abs(phase.current).toFixed(2)} I<sub>max</sub>
                </p>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${Math.min(Math.abs(phase.current) * 100, 100)}%`,
                      background: phase.color,
                    }}
                  />
                </div>
                <p className="mt-3 text-[0.7rem] text-slate-300">
                  Phase lead angle {phase.offset}° · Contributes{" "}
                  {(phase.current * Math.cos(degToRad(phase.offset))).toFixed(2)}{" "}
                  pu torque
                </p>
                <span className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 md:grid-cols-3">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-200">
            Analytical Insights
          </h4>
          <p className="mt-2 text-slate-300">
            The visualization reflects a paired electromagnetic and mechanical
            representation, enabling engineers to calibrate FEA datasets against
            real-time inverter telemetry and d-q axis observers.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-200">
            Model Fidelity
          </h4>
          <p className="mt-2 text-slate-300">
            Includes saturation-aware copper loss estimation, harmonic torque
            ripple ({`<`}1.5%) and acoustic noise suppression using randomized PWM
            carriers.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-200">
            Deployment Fit
          </h4>
          <p className="mt-2 text-slate-300">
            Ideal for robotics joints, unmanned aerial propulsion, premium e-bike
            powertrains, and surgical tooling requiring immediate torque
            response with high reliability.
          </p>
        </div>
      </div>
    </div>
  );
}
