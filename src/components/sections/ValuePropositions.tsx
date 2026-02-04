"use client";

import { motion } from "framer-motion";
import { Rocket, TrendingUp, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const propositions = [
  {
    icon: Rocket,
    title: "Startups",
    subtitle: "Seed to Series A",
    description:
      "Rapid validation, growth frameworks, and go-to-market strategies designed to get you from zero to one.",
    benefits: [
      "Product-market fit validation",
      "Initial GTM strategy",
      "Growth experimentation",
      "Investor-ready metrics",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Scale-ups",
    subtitle: "Series B to D",
    description:
      "International expansion, operational excellence, and sustainable growth systems that scale with you.",
    benefits: [
      "International expansion",
      "Operational scaling",
      "Team structure design",
      "Revenue optimization",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Building2,
    title: "Enterprises",
    subtitle: "Corporate & Public",
    description:
      "Transformation initiatives, innovation programs, and strategic advisory for established organizations.",
    benefits: [
      "Digital transformation",
      "Innovation programs",
      "Strategic partnerships",
      "Market repositioning",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
];

export function ValuePropositions() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <Container>
        <SectionHeading
          label="Who We Serve"
          title="Tailored growth for every stage"
          description="Whether you're validating product-market fit or expanding globally, we adapt our approach to match your unique challenges and opportunities."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {propositions.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
            >
              {/* Gradient accent line */}
              <div
                className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${prop.gradient}`}
              />

              {/* Icon */}
              <motion.div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${prop.gradient}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <prop.icon className="h-7 w-7 text-white" />
              </motion.div>

              {/* Content */}
              <div className="mb-2 text-sm font-medium text-muted">
                {prop.subtitle}
              </div>
              <h3 className="mb-3 text-2xl font-bold">{prop.title}</h3>
              <p className="mb-6 text-muted">{prop.description}</p>

              {/* Benefits */}
              <ul className="space-y-2">
                {prop.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${prop.gradient}`}
                    />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Hover effect */}
              <div
                className={`absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${prop.gradient} opacity-0 blur-3xl transition-opacity group-hover:opacity-10`}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
