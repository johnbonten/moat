"use client";

import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-xs font-semibold text-white">
            Moat
          </div>

          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@moat.agency"
              className="transition-colors hover:text-black"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-neutral-400">
          © 2025. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
