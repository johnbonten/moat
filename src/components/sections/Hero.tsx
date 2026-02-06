"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const clients = ["Spotify", "Calm", "Tinder", "Photoroom", "Netflix"];

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-white">
      <Container className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-base font-semibold text-white">
            Moat
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 max-w-3xl text-center text-5xl font-semibold leading-tight tracking-tight text-black sm:text-6xl lg:text-7xl"
        >
          AI-powered growth,
          <br />
          unlocked
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 max-w-2xl text-center text-lg leading-relaxed text-neutral-600"
        >
          We are a full-stack growth agency led by former tech operators. We help
          startups, scaleups, and enterprises accelerate growth through precision,
          speed, and AI-driven execution.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-6 max-w-2xl text-center text-lg leading-relaxed text-neutral-600"
        >
          Trusted by top venture firms, we build global growth engines that scale
          fast and adapt to change.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12 max-w-2xl text-center text-lg leading-relaxed text-black"
        >
          Our mission is to bring our partners defensible growth, regardless of
          company size or stage.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Button
            onClick={() => scrollToSection("#contact")}
            variant="primary"
            size="lg"
          >
            Get in Touch
          </Button>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 w-full max-w-3xl"
        >
          <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-neutral-400">
            We have grown some of the fastest-growing companies in the world
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clients.map((client) => (
              <span
                key={client}
                className="text-lg font-semibold text-neutral-300 transition-colors hover:text-neutral-500"
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
