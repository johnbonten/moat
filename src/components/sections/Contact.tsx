"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold text-black sm:text-4xl">
            Get in touch
          </h2>
          <p className="mb-12 text-lg text-neutral-600">
            Ready to accelerate your growth? Let&apos;s talk about how we can help.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="mx-auto max-w-md space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-black placeholder-neutral-400 focus:border-black focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-black placeholder-neutral-400 focus:border-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-black placeholder-neutral-400 focus:border-black focus:outline-none"
          />
          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            required
            className="w-full resize-none rounded-lg border border-neutral-200 px-4 py-3 text-black placeholder-neutral-400 focus:border-black focus:outline-none"
          />

          <Button type="submit" variant="primary" size="lg" className="w-full">
            {isSubmitted ? "Message sent!" : "Send message"}
          </Button>

          <p className="text-center text-sm text-neutral-500">
            We typically respond within 24 hours
          </p>
        </motion.form>
      </Container>
    </section>
  );
}
