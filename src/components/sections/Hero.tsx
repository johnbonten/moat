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
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="animated-gradient absolute inset-0 -z-10" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="flex min-h-[calc(100vh-5rem)] flex-col justify-center py-16">
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-xl font-bold text-background">
              Moat
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            AI-powered growth,{" "}
            <span className="gradient-text">unlocked</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto mb-4 max-w-2xl text-lg text-muted md:text-xl"
          >
            We are a full-stack growth agency led by former tech operators. We
            help startups, scaleups, and enterprises accelerate growth through
            precision, speed, and AI-driven execution.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mx-auto mb-4 max-w-2xl text-lg text-muted md:text-xl"
          >
            Trusted by top venture firms, we build global growth engines that
            scale fast and adapt to change.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mx-auto mb-8 max-w-2xl text-lg font-medium text-foreground md:text-xl"
          >
            Our mission is to bring our partners defensible growth, regardless
            of company size or stage.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get in Touch
            </Button>
            <Button
              onClick={() => scrollToSection("#services")}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              See Our Approach
            </Button>
          </motion.div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16"
        >
          <ClientLogos />
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-foreground/20 p-2"
        >
          <motion.div className="h-2 w-1 rounded-full bg-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
