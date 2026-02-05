"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ClientLogos } from "@/components/ui/ClientLogos";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-white">
      <Container className="flex flex-col items-center justify-center py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex justify-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-foreground text-sm font-semibold text-background">
              Moat
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            AI-powered growth,
            <br />
            <span className="gradient-text">unlocked</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            We are a full-stack growth agency led by former tech operators. We
            help startups, scaleups, and enterprises accelerate growth through
            precision, speed, and AI-driven execution.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mb-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Trusted by top venture firms, we build global growth engines that
            scale fast and adapt to change.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-foreground"
          >
            Our mission is to bring our partners defensible growth, regardless
            of company size or stage.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="primary"
              size="lg"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-24 w-full"
        >
          <ClientLogos />
        </motion.div>
      </Container>
    </section>
  );
}
