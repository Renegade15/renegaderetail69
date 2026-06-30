import Image from 'next/image'
import SiteHeader from '../../components/site-header'
import SiteFooter from '../../components/site-footer'
import PageHero from '../../components/page-hero'
import ContactCta from '../../components/contact-cta'

export const metadata = {
  title: 'Services | Renegade Retail Co.',
  description:
    'Retail fixture installation, graphics and vinyl, national rollouts, and experiential environments executed nationwide.',
}

const services = [
  {
    num: '01',
    title: 'Retail Fixture Installation',
    img: '/images/project-fixtures.png',
    desc: 'White-glove deployment of retail fixtures, gondola systems, and architectural millwork. Our self-performing crews handle everything from a single flagship to multi-store programs.',
    points: [
      'Gondola and shelving systems',
      'Architectural millwork and casework',
      'Custom display fixtures',
      'Assembly, leveling, and final merchandising-ready setup',
    ],
  },
  {
    num: '02',
    title: 'Graphics & Vinyl Installation',
    img: '/images/graphics-install.png',
    desc: 'Precision graphics programs that bring brand environments to life. SEG fabric, architectural vinyl, wall wraps, and experiential branding with a premium finish.',
    points: [
      'SEG fabric graphics and lightboxes',
      'Architectural and window vinyl',
      'Large-format wall wraps',
      'Experiential and dimensional branding',
    ],
  },
  {
    num: '03',
    title: 'National Rollouts',
    img: '/images/project-rollout.png',
    desc: 'Technology-driven multi-site deployments with centralized project management and real-time reporting, so brands can scale execution without losing visibility or quality.',
    points: [
      'Centralized program management',
      'Real-time site-by-site reporting',
      'Standardized quality across markets',
      'Logistics, scheduling, and field coordination',
    ],
  },
  {
    num: '04',
    title: 'Experiential Environments',
    img: '/images/project-showroom.png',
    desc: 'Retail activations, branded showrooms, and pop-up environments engineered to create memorable, high-impact consumer experiences.',
    points: [
      'Showroom and flagship environments',
      'Retail activations and pop-ups',
      'Branded consumer experiences',
      'Fast-turn modular builds',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main id="top">
      <SiteHeader />

      <PageHero
        eyebrow="What We Do"
        title="Full-Scope Retail Environment Execution."
        description="From a single fixture install to a nationwide rollout, we self-perform the work that puts brands in front of customers."
      />

      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          {services.map((service, i) => (
            <section
              key={service.num}
              className={`grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center ${
                i !== services.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden border border-border ${
                  i % 2 === 1 ? 'lg:order-last' : ''
                }`}
              >
                <Image
                  src={service.img || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-heading text-lg text-muted-foreground">
                  {service.num}
                </span>
                <h2 className="font-heading mt-3 text-balance text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
                  {service.title}
                </h2>
                <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
                <ul className="mt-8 divide-y divide-border border-y border-border">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 py-3 text-sm uppercase tracking-[0.12em]"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>

      <ContactCta />
      <SiteFooter />
    </main>
  )
}
