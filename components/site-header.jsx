'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Screenprinting', href: '/screenprinting' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/renegade-logo.png"
            alt="Renegade Retail badge logo"
            width={48}
            height={48}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-xl font-bold uppercase tracking-[0.18em]">
              Renegade
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.34em] text-muted-foreground">
              Retail Co.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-sm uppercase tracking-[0.2em] text-surface-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-heading text-sm uppercase tracking-[0.2em] bg-primary px-5 py-2.5 text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get a Bid
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border border-border md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-heading py-2 text-base uppercase tracking-[0.2em] text-surface-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="font-heading mt-2 bg-primary px-5 py-3 text-center text-base uppercase tracking-[0.2em] text-primary-foreground"
            >
              Get a Bid
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
