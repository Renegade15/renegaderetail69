import Image from 'next/image'
import SiteHeader from '../../components/site-header'
import SiteFooter from '../../components/site-footer'
import PageHero from '../../components/page-hero'
import ContactCta from '../../components/contact-cta'

export const metadata = {
  title: 'Projects | Renegade Retail Co.',
  description:
    'A look at retail buildouts, fixture installs, graphics, and national rollouts executed by Renegade Retail Co.',
}

const projects = [
  {
    img: '/images/project-storefront.png',
    title: 'Flagship Storefront Buildout',
    category: 'Retail Construction',
    location: 'New York, NY',
    span: 'lg:col-span-2',
    ratio: 'aspect-[16/9]',
  },
  {
    img: '/images/project-fixtures.png',
    title: 'Custom Fixture Deployment',
    category: 'Fixture Installation',
    location: 'Chicago, IL',
    span: '',
    ratio: 'aspect-[4/5]',
  },
  {
    img: '/images/project-showroom.png',
    title: 'Branded Showroom Environment',
    category: 'Experiential',
    location: 'Los Angeles, CA',
    span: '',
    ratio: 'aspect-[4/5]',
  },
  {
    img: '/images/project-popup.png',
    title: 'National Pop-Up Activation',
    category: 'Experiential',
    location: 'Multi-Market',
    span: '',
    ratio: 'aspect-[4/5]',
  },
  {
    img: '/images/project-rollout.png',
    title: '120-Store Signage Rollout',
    category: 'National Rollout',
    location: 'Nationwide',
    span: '',
    ratio: 'aspect-[4/5]',
  },
  {
    img: '/images/graphics-install.png',
    title: 'Architectural Vinyl Program',
    category: 'Graphics & Vinyl',
    location: 'Miami, FL',
    span: 'lg:col-span-2',
    ratio: 'aspect-[16/9]',
  },
]

export default function ProjectsPage() {
  return (
    <main id="top">
      <SiteHeader />

      <PageHero
        eyebrow="Selected Work"
        title="Retail Environments Built To Be Seen."
        description="A sample of the fixture installs, graphics programs, showrooms, and national rollouts our crews have executed for high-visibility brands."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`group ${project.span}`}
              >
                <div
                  className={`relative ${project.ratio} overflow-hidden border border-border`}
                >
                  <Image
                    src={project.img || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-heading text-xl font-medium uppercase tracking-tight md:text-2xl">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      {project.location}
                    </p>
                  </div>
                  <span className="font-heading whitespace-nowrap border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {project.category}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  )
}
