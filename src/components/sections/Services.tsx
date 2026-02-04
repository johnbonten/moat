"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Target,
  Zap,
  Users,
  ChevronDown,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const services = [
  {
    icon: Globe,
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
    color: "bg-blue-500",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Target,
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
    color: "bg-purple-500",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
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
    color: "bg-emerald-500",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
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
    color: "bg-amber-500",
    gradient: "from-amber-500 to-orange-500",
  },
];

function ServiceCard({
  service,
  isExpanded,
  onToggle,
}: {
  service: (typeof services)[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-lg"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient}`}
          >
            <service.icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-1 text-sm text-muted line-clamp-1">
              {service.description}
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
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
          >
            <div className="border-t border-slate-100 p-6 pt-4">
              <p className="mb-6 text-muted">{service.description}</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br ${service.gradient}`}
                    >
                      <Check className="h-3 w-3 text-white" />
                    </span>
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
    <section id="services" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          label="Services"
          title="What we do"
          description="Consider Moat a true extension of your team. An attuned, powerful team we would have hired if we were in-house. Whether you are at seed or Series A/B, we execute, help teams to excel and work side-by-side to help you fill in the gaps as you move blazingly fast."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
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
          className="mt-12 text-center"
        >
          <p className="mb-6 text-muted">
            Or{" "}
            <button
              onClick={scrollToContact}
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-blue-500"
            >
              get in touch
            </button>{" "}
            to learn more about our custom offering thanks to our unique network
            of experts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={scrollToContact} variant="primary">
              Get in Touch
            </Button>
            <Button onClick={scrollToContact} variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
