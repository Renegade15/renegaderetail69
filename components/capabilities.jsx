const differentiators = [
  'Real-Time Project Visibility',
  'White-Glove Execution Standards',
  'Dedicated Rollout PM Teams',
  'Certified National Installer Network',
  'Same-Day Closeout Reporting',
  'Luxury-Level Graphics Precision',
  'Rapid Deployment Capability',
  'Technology-Driven Operations',
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="font-heading text-sm uppercase tracking-[0.32em] text-muted-foreground">
            Why Renegade
          </p>
          <h2 className="font-heading mt-5 text-balance text-4xl font-bold uppercase leading-[0.98] tracking-tight md:text-6xl">
            Built for Enterprise Retail Execution.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            We are not just installers. We are a technology-driven retail execution
            partner built to manage complex rollouts, premium environments, and
            high-visibility programs nationwide, on time and on spec.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => (
            <li key={item} className="group bg-surface p-8 transition-colors hover:bg-muted">
              <span className="font-heading text-sm tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-heading mt-4 text-xl font-medium uppercase leading-tight tracking-tight">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
