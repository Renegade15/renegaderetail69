import Image from 'next/image'
import Link from 'next/link'

export default function InHouseCrew({ showCta = false }) {
  return (
    <section className="border-b border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="font-heading text-sm uppercase tracking-[0.32em] text-background/60">
            In-House Crew
          </p>
          <h2 className="font-heading mt-5 text-balance text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
            Renegade Contracting Solutions.
          </h2>
          <div className="mt-6 space-y-5 text-pretty leading-relaxed text-background/70">
            <p>
              Every install we deliver is handled by Renegade Contracting
              Solutions &mdash; our dedicated, self-performing field crew. No
              rotating subcontractors, no diluted accountability. The people on
              your site work for us and answer to the same renegade standard.
            </p>
            <p>
              From fixture sets and millwork to graphics and full national
              rollouts, our crews are trained in-house, equipped for the work,
              and deployed nationwide so quality never depends on who happened to
              be available locally.
            </p>
          </div>
          <ul className="mt-8 grid gap-px overflow-hidden border border-background/20 bg-background/20 sm:grid-cols-2">
            {[
              '100% self-performing',
              'Trained & equipped in-house',
              'Nationwide deployment',
              'Single point of accountability',
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 bg-foreground px-5 py-4 text-sm uppercase tracking-[0.12em]"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          {showCta && (
            <Link
              href="/about"
              className="font-heading mt-8 inline-block border border-background/40 px-8 py-4 text-sm uppercase tracking-[0.2em] text-background transition-colors hover:bg-background hover:text-foreground"
            >
              Meet the Crew
            </Link>
          )}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-background/20 lg:order-last">
          <Image
            src="/images/contracting-solutions-crew.png"
            alt="Renegade Contracting Solutions in-house crew installing retail fixtures and graphics"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
