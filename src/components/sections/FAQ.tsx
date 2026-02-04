"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "What makes Moat different?",
    answer:
      "We combine deep operational experience from top tech companies like Spotify with cutting-edge AI tools and methodologies. Our team doesn't just advise—we execute alongside you, bringing a unique blend of strategic thinking and hands-on implementation that accelerates growth.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "We work with startups (Seed to Series A), scale-ups (Series B to D), and enterprises. Our clients range from early-stage founders validating product-market fit to established companies expanding internationally. We've supported companies like Spotify, Calm, Tinder, and Photoroom.",
  },
  {
    question: "What is your AI-first approach?",
    answer:
      "We leverage AI across all our engagements—from market research and competitive analysis to growth experimentation and performance optimization. This allows us to move faster, generate deeper insights, and deliver results that traditional approaches can't match.",
  },
  {
    question: "How do engagements work?",
    answer:
      "Every engagement starts with a discovery phase to understand your unique challenges and goals. We then design a tailored strategy and work alongside your team to execute it. Engagements can range from short-term strategic projects to ongoing advisory relationships.",
  },
  {
    question: "What are your rates/pricing models?",
    answer:
      "We offer flexible pricing models including project-based fees, monthly retainers, and success-based arrangements. Pricing depends on scope, complexity, and engagement duration. We're happy to discuss options during an initial consultation.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "We can typically begin within 1-2 weeks of initial contact. For urgent needs, we can often accommodate faster timelines. The first step is a 30-minute introductory call to assess fit and discuss your specific needs.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we offer various ongoing support models including monthly advisory relationships, quarterly strategic reviews, and on-demand consultation. Many of our clients maintain long-term partnerships as their needs evolve.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-slate-200"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-blue-500"
      >
        <span className="pr-8 text-lg font-medium">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-100"
        >
          {isOpen ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-6 pr-16 text-muted">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-50 py-24 md:py-32">
      <Container size="narrow">
        <SectionHeading
          label="FAQ"
          title="The most asked questions"
          description="Everything you need to know about working with Moat. Can't find the answer you're looking for? Get in touch with our team."
        />

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
