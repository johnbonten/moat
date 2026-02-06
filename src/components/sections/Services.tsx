"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const services = [
  {
    title: "International Growth",
    description: "Global expansion strategy, market prioritization, launch operations, and product localization.",
  },
  {
    title: "Strategy & Operations",
    description: "Operating model design, business planning, strategic projects, and talent acquisition.",
  },
  {
    title: "AI-Driven Execution",
    description: "AI-powered analytics, automated workflows, predictive modeling, and data-driven decisions.",
  },
  {
    title: "Interim Leadership",
    description: "Fractional executives, project-based leadership, team building, and knowledge transfer.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-neutral-50 py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold text-black sm:text-4xl">
            What we do
          </h2>
          <p className="text-lg text-neutral-600">
            Consider Moat a true extension of your team. We execute, help teams
            excel, and work side-by-side to fill in the gaps as you move fast.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-white p-8"
            >
              <h3 className="mb-3 text-xl font-semibold text-black">
                {service.title}
              </h3>
              <p className="text-neutral-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
