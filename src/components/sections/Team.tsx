"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function Team() {
  return (
    <section id="team" className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold text-black sm:text-4xl">
            The team at Moat
          </h2>
          <p className="mb-12 text-lg text-neutral-600">
            Global at heart, we&apos;re a small collective of premium business talent
            who&apos;ve all been part of highly transformative and successful startups.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-md rounded-2xl bg-neutral-50 p-8 text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-black text-2xl font-semibold text-white">
            JB
          </div>
          <h3 className="mb-1 text-xl font-semibold text-black">John Bonten</h3>
          <p className="mb-4 text-neutral-500">International, GTM, Operations</p>
          <p className="mb-6 text-sm text-neutral-600">
            Led by Spotify Alum, John Bonten brings broad insights, deep thinking,
            and superior returns. Seasoned startup strategist with specialization
            in SaaS, Consumer, and Platform businesses.
          </p>
          <p className="text-sm text-neutral-400">
            Interested in joining the team?{" "}
            <a href="mailto:apply@moat.agency" className="text-black underline">
              Apply here
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
