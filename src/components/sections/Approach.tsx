"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, market, and goals. Understanding your unique challenges is the foundation of our partnership.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We design a tailored growth strategy combining our expertise, AI-driven insights, and proven frameworks.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "We work alongside your team to implement strategies with precision, speed, and continuous optimization.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We build systems and processes that enable sustainable growth, ensuring your success extends beyond our engagement.",
  },
];

export function Approach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="approach"
      ref={containerRef}
      className="relative overflow-hidden bg-foreground py-24 text-background md:py-32"
    >
      {/* Background decoration */}
      <motion.div
        style={{ y }}
        className="absolute -right-40 top-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute -left-40 bottom-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl"
      />

      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Content */}
          <div>
            <SectionHeading
              label="Our Approach"
              title="Never too early, pan-European focus"
              align="left"
              className="mb-8 [&_h2]:text-background [&_p]:text-background/70 [&_span]:text-background/50"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-background/80">
                Led by Spotify Alum, John Bonten, we bring broad insights, deep
                thinking and superior returns.
              </p>
              <p className="text-background/70">
                We&apos;re seasoned start-up strategists & operators with
                specialization in SaaS, Consumer and Platform businesses.
              </p>
              <p className="text-background/70">
                Our core team is completed by our unique (alumni) network of
                specialists who bring deep expertise in specific domains.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <Button
                onClick={() => scrollToSection("#team")}
                variant="secondary"
                size="lg"
              >
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Process Steps */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-5 top-0 w-px bg-background/20 lg:left-6" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-14 lg:pl-16"
                >
                  {/* Step number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-bold lg:h-12 lg:w-12"
                  >
                    {step.number}
                  </motion.div>

                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-background/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
