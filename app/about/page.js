import Image from 'next/image'
import SiteHeader from '../../components/site-header'
import SiteFooter from '../../components/site-footer'
import PageHero from '../../components/page-hero'
import InHouseCrew from '../../components/in-house-crew'
import ContactCta from '../../components/contact-cta'

export const metadata = {
  title: 'About | Renegade Retail Co.',
  description:
    'From action-sports roots to nationwide retail execution. Meet the crew behind Renegade Retail Co.',
}

const values = [
  {
    title: 'Built Rugged',
    desc: 'We come from an action-sports background where execution is everything. That same grit drives every install, every rollout, every site.',
  },
  {
    title: 'Own the Outcome',
    desc: 'We do not hand off problems. From first walk-through to final punch list, our crews own the result and stand behind the work.',
  },
  {
    title: 'Scale Without Slipping',
    desc: 'Single flagship or 400-store national rollout, our process holds the same standard of quality everywhere we deploy.',
  },
  {
    title: 'Visibility First',
    desc: 'Real-time reporting and transparent project management mean you always know exactly where every site stands.',
  },
]

const milestones = [
  { year: '2018', label: 'Founded on the East Coast' },
  { year: '2,500+', label: 'Installs completed' },
  { year: '18', label: 'States served' },
  { year: '100%', label: 'Self-performing crews' },
]

export default function AboutPage() {
  return (
    <main id="top">
      <SiteHeader />

      <PageHero
        eyebrow="Who We Are"
        title="From Renegade Roots To Retail Execution."
        description="We started in the action-sports world, where reputation is earned through performance under pressure. Today we bring that same renegade discipline to commercial retail contracting and project management nationwide."
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-border">
            <Image
              src="/images/about-crew.png"
              alt="Renegade Retail installation crew on a retail buildout site"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-heading text-sm uppercase tracking-[0.32em] text-muted-foreground">
              Our Story
            </p>
            <h2 className="font-heading mt-5 text-balance text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
              Same Renegade DNA. Bigger Arena.
            </h2>
            <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <p>
                The Renegade name was built on the water &mdash; engineering and riding
                gear that had to survive real abuse. That obsession with durability,
                precision, and doing things the hard right way never left us.
              </p>
              <p>
                We took those instincts and pointed them at a new challenge:
                executing high-visibility retail environments for national brands.
                Fixtures, graphics, millwork, rollouts &mdash; the kind of work where
                the details are seen by millions of customers.
              </p>
              <p>
                We are a self-performing contractor. That means our own crews,
                our own standards, and accountability that does not get lost in a
                chain of subcontractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {milestones.map((m) => (
              <div key={m.label} className="text-center md:text-left">
                <p className="font-heading text-4xl font-bold uppercase tracking-tight md:text-6xl">
                  {m.year}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="font-heading text-sm uppercase tracking-[0.32em] text-muted-foreground">
            What Drives Us
          </p>
          <h2 className="font-heading mt-5 max-w-3xl text-balance text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
            The Standards We Refuse To Compromise.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="bg-background p-8 md:p-10">
                <h3 className="font-heading text-2xl font-medium uppercase tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InHouseCrew />

      <ContactCta />
      <SiteFooter />
    </main>
  )
}
