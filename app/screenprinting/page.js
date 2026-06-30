import Image from 'next/image'
import SiteHeader from '../../components/site-header'
import SiteFooter from '../../components/site-footer'
import PageHero from '../../components/page-hero'
import ContactCta from '../../components/contact-cta'

export const metadata = {
  title: 'Renegade Screenprinting | Renegade Retail Co.',
  description:
    'In-house screen printing and embroidery for retail branding. Custom apparel, uniforms, headwear, and branded merchandise produced and decorated under one roof.',
}

const capabilities = [
  {
    num: '01',
    title: 'Screen Printing',
    img: '/images/screenprint-press.png',
    desc: 'High-volume, full-color screen printing on apparel and soft goods. Automatic presses deliver crisp, durable prints at retail scale with consistent color across every run.',
    points: [
      'Automatic multi-color presses',
      'Plastisol, water-based, and discharge inks',
      'Custom Pantone color matching',
      'Short runs to large production volumes',
    ],
  },
  {
    num: '02',
    title: 'Embroidery',
    img: '/images/embroidery-machine.png',
    desc: 'Multi-head commercial embroidery for a premium, textured finish. Ideal for staff uniforms, headwear, and elevated branded merchandise that needs to hold up to daily wear.',
    points: [
      'Multi-head production embroidery',
      'Caps, polos, jackets, and bags',
      'Custom digitizing of logos and marks',
      'Tackle twill and 3D puff options',
    ],
  },
  {
    num: '03',
    title: 'Retail Branding & Merch',
    img: '/images/branded-apparel.png',
    desc: 'Turnkey branded merchandise programs that extend a brand from the sales floor onto the people wearing it. We design, produce, and decorate it all in-house.',
    points: [
      'Branded staff uniforms and workwear',
      'In-store retail merch and giveaways',
      'Custom tags, labels, and packaging',
      'Kitting, fulfillment, and reorders',
    ],
  },
]

export default function ScreenprintingPage() {
  return (
    <main id="top">
      <SiteHeader />

      <PageHero
        eyebrow="In-House Decoration"
        title="Renegade Screenprinting."
        description="Screen printing, embroidery, and retail branding produced under our own roof. The same renegade standard that builds the store now outfits the people in it."
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-border">
            <Image
              src="/images/screenprint-hero.png"
              alt="Renegade Screenprinting shop floor with automatic screen printing press"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="font-heading text-sm uppercase tracking-[0.32em] text-muted-foreground">
              One Roof, Full Control
            </p>
            <h2 className="font-heading mt-5 text-balance text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
              Branding That Goes Beyond the Walls.
            </h2>
            <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Renegade Screenprinting is our in-house decoration division. We
                print and stitch every job ourselves &mdash; no brokered orders,
                no waiting on outside vendors, no surprises on quality or
                timeline.
              </p>
              <p>
                Because it lives alongside our fixture and graphics crews, your
                retail buildout and your branded apparel ship to the same
                standard, on the same schedule, from the same team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          {capabilities.map((cap, i) => (
            <section
              key={cap.num}
              className={`grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center ${
                i !== capabilities.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden border border-border ${
                  i % 2 === 1 ? 'lg:order-last' : ''
                }`}
              >
                <Image
                  src={cap.img || '/placeholder.svg'}
                  alt={cap.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-heading text-lg text-muted-foreground">
                  {cap.num}
                </span>
                <h2 className="font-heading mt-3 text-balance text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
                  {cap.title}
                </h2>
                <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                  {cap.desc}
                </p>
                <ul className="mt-8 divide-y divide-border border-y border-border">
                  {cap.points.map((point) => (
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
