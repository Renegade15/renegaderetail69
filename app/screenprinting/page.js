import Image from 'next/image'
import SiteHeader from '../../components/site-header'
import SiteFooter from '../../components/site-footer'
import PageHero from '../../components/page-hero'
import ContactCta from '../../components/contact-cta'

export const metadata = {
  title: 'Renegade Screenprinting | Renegade Retail Co.',
  description:
    'Quality small to medium batch screen printing and embroidery for local and regional brands and retailers. Custom apparel, uniforms, headwear, and branded merch decorated in-house.',
}

const capabilities = [
  {
    num: '01',
    title: 'Screen Printing',
    img: '/images/screenprint-press.png',
    desc: 'Quality-first screen printing built for small to medium batch runs. We obsess over the details local and regional brands actually care about — crisp registration, true colors, and a hand that lasts wash after wash.',
    points: [
      'Small to medium batch specialists',
      'Plastisol, water-based, and discharge inks',
      'Custom Pantone color matching',
      'Soft-hand prints made to last',
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
        description="Quality small to medium batch screen printing and embroidery for local and regional brands and retailers. The same renegade standard that builds the store now outfits the people in it."
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-border">
            <Image
              src="/images/screenprint-hero.png"
              alt="Renegade Screenprinting shop floor with screen printing press"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="font-heading text-sm uppercase tracking-[0.32em] text-muted-foreground">
              Built for Local & Regional Brands
            </p>
            <h2 className="font-heading mt-5 text-balance text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
              Quality Over Quantity, Every Run.
            </h2>
            <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Renegade Screenprinting is our in-house decoration division built
                for small to medium batch work. We print and stitch every job
                ourselves &mdash; no brokered orders, no offshore production, no
                cutting corners to chase volume.
              </p>
              <p>
                We&apos;re the shop local and regional brands and retailers call
                when the print has to be right. Tight runs, real attention to
                detail, and a finished piece that looks as good as the brand
                behind it.
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
