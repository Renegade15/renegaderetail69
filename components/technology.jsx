const features = [
  {
    title: 'Live Reporting Dashboards',
    desc: 'Centralized rollout dashboards give you status on every site, in real time.',
  },
  {
    title: 'Digital QC Workflows',
    desc: 'Structured quality control checklists enforce spec on every install.',
  },
  {
    title: 'Field Photo Verification',
    desc: 'Time-stamped, geo-tagged photos confirm completion before crews leave.',
  },
  {
    title: 'Freight & Asset Tracking',
    desc: 'Track fixtures and materials from dock to floor across all locations.',
  },
]

export default function Technology() {
  return (
    <section id="technology" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="font-heading text-sm uppercase tracking-[0.32em] text-muted-foreground">
            Technology & Visibility
          </p>
          <h2 className="font-heading mt-5 text-balance text-4xl font-bold uppercase leading-[0.98] tracking-tight md:text-6xl">
            Real-Time Visibility for Every Project.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Our systems provide live reporting, digital QC workflows, real-time field
            photo verification, freight tracking, and centralized rollout dashboards,
            so you always know exactly where every site stands.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="bg-surface p-8 md:p-10">
              <h3 className="font-heading text-2xl font-medium uppercase tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
