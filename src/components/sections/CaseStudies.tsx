"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const caseStudies = [
  {
    company: "Spotify",
    logo: "Spotify",
    category: "International Growth",
    description:
      "Led international expansion strategy across 15+ markets, driving user acquisition and market penetration.",
    metric: "15+ markets",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    company: "Calm",
    logo: "Calm",
    category: "Commercial Strategy",
    description:
      "Developed and executed go-to-market strategy for B2B wellness solutions, establishing enterprise partnerships.",
    metric: "3x B2B growth",
    gradient: "from-blue-500 to-cyan-500",
    isSerif: true,
  },
  {
    company: "Tinder",
    logo: "tinder",
    category: "Market Expansion",
    description:
      "Supported European market localization and growth strategies, optimizing for regional user behavior.",
    metric: "50M+ users",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    company: "Photoroom",
    logo: "Photoroom",
    category: "Growth Operations",
    description:
      "Built scalable growth operations and analytics infrastructure to support rapid international scaling.",
    metric: "100M+ downloads",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    company: "Netflix",
    logo: "NETFLIX",
    category: "Strategic Advisory",
    description:
      "Provided strategic advisory on content localization and market entry strategies for emerging markets.",
    metric: "Strategic impact",
    gradient: "from-red-500 to-rose-500",
  },
];

const partners = [
  { name: "AMBOSS", logo: "AMBOSS" },
  { name: "Calm", logo: "Calm", isSerif: true },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          label="Case Studies"
          title="Outcomes and results above all else"
          description="A selection of our partnerships with some of the fastest-growing companies in the world."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-xl"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 transition-opacity group-hover:opacity-5`}
              />

              {/* Header */}
              <div className="mb-4 flex items-start justify-between">
                <div
                  className={`text-2xl font-bold ${
                    study.isSerif ? "font-serif italic" : ""
                  }`}
                >
                  {study.logo}
                </div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </motion.div>
              </div>

              {/* Category */}
              <div className="mb-2">
                <span
                  className={`inline-block rounded-full bg-gradient-to-r ${study.gradient} px-3 py-1 text-xs font-medium text-white`}
                >
                  {study.category}
                </span>
              </div>

              {/* Description */}
              <p className="mb-4 text-sm text-muted">{study.description}</p>

              {/* Metric */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs font-medium text-muted">
                  Key metric
                </span>
                <span className="font-semibold">{study.metric}</span>
              </div>

              {/* CTA */}
              <div className="mt-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-medium text-blue-500">
                  Full case study available upon request →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="mb-8 text-sm font-medium uppercase tracking-wider text-muted">
            A selection of our partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                whileHover={{ scale: 1.05 }}
                className={`text-2xl font-semibold text-foreground/40 transition-colors hover:text-foreground/70 ${
                  partner.isSerif ? "font-serif italic" : ""
                }`}
              >
                {partner.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
