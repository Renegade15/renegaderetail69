import SiteHeader from '../components/site-header'
import Hero from '../components/hero'
import Capabilities from '../components/capabilities'
import Services from '../components/services'
import Technology from '../components/technology'
import ContactCta from '../components/contact-cta'
import SiteFooter from '../components/site-footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Capabilities />
        <Services />
        <Technology />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}
