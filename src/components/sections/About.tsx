"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function About() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="border-t border-slate-100 py-32">
      <Container size="narrow">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-muted"
          >
            About
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Supercharging international growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-lg leading-relaxed text-muted"
          >
            Trusted by the most respected early-stage ventures and
            fastest-growing startups, we do one thing better: scaling your
            business globally, faster, more efficiently—all led by real experts.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 text-lg leading-relaxed text-muted"
          >
            We work with founders, executives, and investors to design and
            execute strategies that drive sustainable, defensible growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button onClick={() => scrollToSection("#contact")} variant="primary">
              Let&apos;s work together
            </Button>
            <Button onClick={() => scrollToSection("#services")} variant="ghost">
              Services →
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
