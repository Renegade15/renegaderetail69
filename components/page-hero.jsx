export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:pb-24 md:pt-44">
        {eyebrow && (
          <p className="font-heading text-sm uppercase tracking-[0.32em] text-muted-foreground">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading mt-5 max-w-4xl text-balance text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
