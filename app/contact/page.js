import SiteHeader from '../../components/site-header'
import SiteFooter from '../../components/site-footer'
import PageHero from '../../components/page-hero'
import ContactForm from '../../components/contact-form'

export const metadata = {
  title: 'Contact | Renegade Contracting Co.',
  description:
    'Start a retail buildout, fixture install, graphics program, or national rollout with Renegade Contracting Co.',
}

const details = [
  { label: 'Email', value: 'projects@renegadecontracting.com', href: 'mailto:projects@renegadecontracting.com' },
  { label: 'Phone', value: '(000) 000-0000', href: 'tel:+10000000000' },
  { label: 'Based', value: 'East Coast USA' },
  { label: 'Coverage', value: 'Nationwide Execution' },
]

export default function ContactPage() {
  return (
    <main id="top">
      <SiteHeader />

      <PageHero
        eyebrow="Get a Bid"
        title="Let's Build Your Next Environment."
        description="Tell us about your project and our team will follow up to scope the work, timeline, and rollout plan."
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight">
              Reach the Crew
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Prefer to talk directly? Use the details below, or send the form and
              we will route your inquiry to the right project lead.
            </p>

            <dl className="mt-10 divide-y divide-border border-y border-border">
              {details.map((d) => (
                <div key={d.label} className="flex items-center justify-between gap-4 py-4">
                  <dt className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {d.label}
                  </dt>
                  <dd className="text-right font-medium">
                    {d.href ? (
                      <a href={d.href} className="transition-opacity hover:opacity-70">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border border-border bg-background p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
