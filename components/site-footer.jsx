import Image from 'next/image'

export default function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col items-center gap-8 border-b border-border pb-10 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/renegade-logo.png"
              alt="Renegade Contracting badge logo"
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-lg font-bold uppercase tracking-[0.18em]">
                Renegade
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.34em] text-muted-foreground">
                Contracting Co.
              </span>
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {['Capabilities', 'Services', 'Technology', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-heading text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-center text-sm text-muted-foreground md:flex-row md:justify-between md:text-left">
          <p>&copy; {new Date().getFullYear()} Renegade Contracting Co. All rights reserved.</p>
          <p className="font-heading uppercase tracking-[0.2em]">East Coast USA &middot; Nationwide Execution</p>
        </div>
      </div>
    </footer>
  )
}
