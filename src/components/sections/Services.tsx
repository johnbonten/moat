"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "International Growth",
    description:
      "Our belief is that companies who think local early on can develop an early competitive moat and tap into areas of growth.",
    items: [
      "Global expansion strategy",
      "Market prioritization",
      "Launch operations",
      "GTM (Go-to-market)",
      "Product localization",
    ],
  },
  {
    title: "Strategy & Operations",
    description:
      "We help you establish the game you're playing and how to win it. We'll guide and deploy applicable concepts to structure growth.",
    items: [
      "Operating Model",
      "Business Planning",
      "Strategic Projects",
      "Talent acquisition",
      "Fundraising",
    ],
  },
  {
    title: "AI-Driven Execution",
    description:
      "Leverage cutting-edge AI tools and methodologies to accelerate execution, gain insights faster, and stay ahead of competition.",
    items: [
      "AI-powered analytics",
      "Automated workflows",
      "Predictive modeling",
      "Performance optimization",
      "Data-driven decisions",
    ],
  },
  {
    title: "Interim Leadership",
    description:
      "Deploy best-in-class resources as needed. Our network of specialists can fill critical gaps while you build your team.",
    items: [
      "Fractional executives",
      "Project-based leadership",
      "Team building support",
      "Knowledge transfer",
      "Succession planning",
    ],
  },
];

function ServiceCard({
  service,
  isExpanded,
  onToggle,
  index,
}: {
  service: (typeof services)[0];
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-slate-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-muted" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8">
              <p className="mb-6 text-muted">{service.description}</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-foreground" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="border-t border-slate-100 py-32">
      <Container size="narrow">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-muted"
          >
            Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            What we do
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 text-lg leading-relaxed text-muted"
          >
            Consider Moat a true extension of your team. We execute, help teams
            excel, and work side-by-side to fill in the gaps as you move fast.
          </motion.p>
        </div>

        <div className="mx-auto max-w-2xl">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button onClick={scrollToContact} variant="primary">
            Get in Touch
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
