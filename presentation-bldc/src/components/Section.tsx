import { PropsWithChildren, ReactNode } from "react";

interface SectionProps extends PropsWithChildren {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  id?: string;
}

export function Section({
  eyebrow,
  title,
  description,
  children,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative mx-auto mb-20 max-w-6xl scroll-mt-32 px-6 sm:px-10 lg:px-0"
    >
      <div className="glass-surface relative overflow-hidden rounded-3xl p-8 sm:p-12">
        <div className="grid gap-6 sm:grid-cols-5 sm:gap-10">
          <header className="sm:col-span-2">
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              {title}
            </h2>
            {description && (
              <div className="mt-4 text-sm/6 text-slate-300 sm:text-base/7">
                {description}
              </div>
            )}
          </header>
          <div className="sm:col-span-3">{children}</div>
        </div>
        <span className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" />
        <span className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/5 via-transparent to-white/0 opacity-40" />
      </div>
    </section>
  );
}
