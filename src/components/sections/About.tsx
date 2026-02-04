"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function About() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div>
            <SectionHeading
              label="About"
              title="Supercharging international growth"
              align="left"
              className="mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-muted"
            >
              <p>
                Trusted by the most respective early-stage ventures and
                fastest-growing start-ups, we do one thing better: Scaling your
                business globally, faster, more efficient—all led by real
                experts.
              </p>
              <p>
                We work with founders, executives, and investors to design and
                execute strategies that drive sustainable, defensible growth.
                Our expertise spans growth, marketing, strategy, operations, and
                interim leadership.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="primary"
              >
                Let&apos;s work together
              </Button>
              <Button
                onClick={() => scrollToSection("#services")}
                variant="ghost"
              >
                Services →
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-4"
          >
            {[
              {
                title: "About",
                description: "Get to know the team behind Moat",
                color: "bg-blue-500",
                href: "#team",
              },
              {
                title: "Services",
                description: "Premium strategic and executional support and guidance",
                color: "bg-foreground",
                href: "#services",
              },
              {
                title: "Resources",
                description:
                  "Sharpen your know-how with guides, playbooks & case studies",
                color: "bg-rose-400",
                href: "#case-studies",
              },
              {
                title: "FAQs",
                description: "The most asked questions",
                color: "bg-amber-400",
                href: "#faq",
              },
            ].map((card, index) => (
              <motion.button
                key={card.title}
                onClick={() => scrollToSection(card.href)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, x: 4 }}
                className={`${card.color} group flex items-center justify-between rounded-xl p-6 text-left text-white transition-all`}
              >
                <div>
                  <h3 className="mb-1 text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm text-white/80">{card.description}</p>
                </div>
                <span className="text-xl opacity-60 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
