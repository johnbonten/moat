"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";

const faqs = [
  {
    question: "What makes Moat different?",
    answer:
      "We combine deep operational experience from top tech companies like Spotify with cutting-edge AI tools. Our team executes alongside you, bringing strategic thinking and hands-on implementation.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "Startups (Seed to Series A), scale-ups (Series B to D), and enterprises. Our clients range from early-stage founders to established companies expanding internationally.",
  },
  {
    question: "What is your AI-first approach?",
    answer:
      "We leverage AI across all engagements—from market research and competitive analysis to growth experimentation and performance optimization.",
  },
  {
    question: "How do engagements work?",
    answer:
      "Every engagement starts with discovery to understand your challenges. We then design a tailored strategy and work alongside your team to execute it.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "We can typically begin within 1-2 weeks. The first step is a 30-minute introductory call to assess fit and discuss your specific needs.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-neutral-50 py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold text-black sm:text-4xl">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border-b border-neutral-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="font-medium text-black">{faq.question}</span>
                <Plus
                  className={`h-5 w-5 text-neutral-400 transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="pb-5 text-neutral-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
