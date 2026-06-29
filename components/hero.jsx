import Image from 'next/image'

const stats = [
  { value: '48', label: 'State Coverage' },
  { value: '5,000+', label: 'Installs Completed' },
  { value: '15 Min', label: 'PM Response Standard' },
  { value: '24/7', label: 'Rollout Support' },
]

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-buildout.png"
          alt="Crew installing fixtures during a commercial retail buildout"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="inline-flex items-center gap-2 border border-border bg-background/40 px-4 py-2">
          <span className="h-1.5 w-1.5 bg-foreground" />
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-surface-foreground">
            Commercial Retail Execution Since 2018
          </span>
        </div>

        <h1 className="font-heading mt-8 max-w-4xl text-balance text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          We Build Retail.
          <br />
          <span className="text-muted-foreground">No Excuses.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-surface-foreground md:text-xl">
          Renegade Contracting delivers rugged, white-glove commercial buildouts,
          fixture and graphics installation, and nationwide rollouts, powered by
          relentless project management and real-time field visibility.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="font-heading bg-primary px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Schedule a Consultation
          </a>
          <a
            href="#services"
            className="font-heading border border-border bg-background/40 px-8 py-4 text-sm uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-muted"
          >
            View Capabilities
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background/80 p-6">
              <dt className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                {stat.value}
              </dt>
              <dd className="mt-2 font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
