"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Spotify", logo: "Spotify" },
  { name: "Calm", logo: "Calm" },
  { name: "Tinder", logo: "tinder" },
  { name: "Photoroom", logo: "Photoroom" },
  { name: "Netflix", logo: "NETFLIX" },
];

export function ClientLogos() {
  return (
    <div className="overflow-hidden py-8">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted"
      >
        We have grown some of the fastest-growing companies in the world
      </motion.p>
      <div className="relative">
        <div className="flex animate-ticker">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="mx-8 flex min-w-[150px] items-center justify-center px-4"
            >
              <span className="whitespace-nowrap text-xl font-semibold text-foreground/40 transition-colors hover:text-foreground/70">
                {client.logo === "Calm" ? (
                  <span className="font-serif italic">{client.logo}</span>
                ) : client.logo === "tinder" ? (
                  <span className="flex items-center gap-1">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M16.5 11.5c0 2.75-2.25 5-5 5s-5-2.25-5-5c0-1.5.67-2.83 1.73-3.73-.05.5-.02.95.15 1.52.15.5.58.96 1.12 1.11.55.15 1.09-.04 1.41-.44.5-.62.59-1.49.59-2.21 0-1.24-.34-2.5-1-3.5 2.25.91 4 3.32 4 5.75 0 .83-.25 1.6-.67 2.25.42-.38.67-.92.67-1.5 0-.98-.67-1.82-1.58-2.08.58.82.91 1.82.91 2.83 0 2.75-2.25 5-5 5s-5-2.25-5-5c0-2.43 1.75-4.84 4-5.75-.66 1-1 2.26-1 3.5 0 .72.09 1.59.59 2.21.32.4.86.59 1.41.44.54-.15.97-.61 1.12-1.11.17-.57.2-1.02.15-1.52 1.06.9 1.73 2.23 1.73 3.73z" />
                    </svg>
                    tinder
                  </span>
                ) : (
                  client.logo
                )}
              </span>
            </div>
          ))}
        </div>
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  );
}
