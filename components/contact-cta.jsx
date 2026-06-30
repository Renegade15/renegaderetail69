export default function ContactCta() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 py-28 text-center md:py-36">
        <p className="font-heading text-sm uppercase tracking-[0.32em] text-primary-foreground/60">
          Ready to Scale?
        </p>
        <h2 className="font-heading mx-auto mt-6 max-w-3xl text-balance text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
          Your Retail Environment Deserves Better Execution.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/70">
          Whether you need nationwide rollout support, premium graphics installation,
          or white-glove fixture deployment, our team is built to execute
          high-visibility retail projects at scale.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:projects@renegaderetail.com"
            className="font-heading bg-background px-8 py-4 text-sm uppercase tracking-[0.2em] text-foreground transition-opacity hover:opacity-90"
          >
            Start a Project
          </a>
          <a
            href="tel:+10000000000"
            className="font-heading border border-primary-foreground/30 px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Call the Team
          </a>
        </div>
      </div>
    </section>
  )
}
