import Image from 'next/image'

const services = [
  {
    title: 'Retail Fixture Installation',
    desc: 'Nationwide fixture deployment, gondola systems, architectural millwork, and white-glove retail execution.',
  },
  {
    title: 'Graphics & Vinyl Installation',
    desc: 'SEG graphics, architectural vinyl, wall wraps, experiential branding, and premium finish applications.',
  },
  {
    title: 'National Rollouts',
    desc: 'Technology-driven multi-site deployments with real-time reporting and centralized project management.',
  },
  {
    title: 'Experiential Environments',
    desc: 'Retail activations, showroom environments, pop-ups, and branded consumer experiences.',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <Image
              src="/images/graphics-install.png"
              alt="Installer applying architectural vinyl graphics in a retail showroom"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-heading text-sm uppercase tracking-[0.32em] text-muted-foreground">
              Core Services
            </p>
            <h2 className="font-heading mt-5 text-balance text-4xl font-bold uppercase leading-[0.98] tracking-tight md:text-6xl">
              Premium Retail Environment Execution.
            </h2>

            <div className="mt-10 divide-y divide-border border-y border-border">
              {services.map((service, i) => (
                <div key={service.title} className="flex gap-5 py-6">
                  <span className="font-heading text-lg leading-none text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl font-medium uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
