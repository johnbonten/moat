"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Team() {
  return (
    <section id="team" className="bg-slate-50 py-24 md:py-32">
      <Container>
        <SectionHeading
          label="About"
          title="The team at Moat"
          description="Global at heart, we're a small collective of premium business talent who've all been part of the highly transformative and successful start-ups. Over the years, we've supported founders in building the next generation of iconic technology companies."
        />

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 md:grid-cols-2"
          >
            {/* Main Profile Card */}
            <div className="overflow-hidden rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">
                  Never too early, pan-European focus
                </h3>
              </div>

              <div className="space-y-4 text-muted">
                <p>
                  Led by Spotify Alum, John Bonten, we bring broad insights,
                  deep thinking and superior returns.
                </p>
                <p>
                  We&apos;re seasoned start-up strategists & operators with
                  specialization in SaaS, Consumer and Platform businesses.
                </p>
                <p>
                  Our core team is completed by our unique (alumni) network of
                  specialists.
                </p>
              </div>

              <div className="mt-6">
                <Button variant="primary">Learn More</Button>
              </div>
            </div>

            {/* Founder Card */}
            <div className="overflow-hidden rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">John Bonten</h3>
                  <p className="text-sm text-muted">
                    International, GTM, Operations
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500"
                >
                  <span className="text-lg font-bold text-white">JB</span>
                </motion.div>
              </div>

              <div className="mb-6 border-b border-slate-100 pb-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <span className="text-sm font-bold text-green-600">S</span>
                  </span>
                  <span className="text-sm font-medium text-muted">
                    Former Spotify
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-2 text-sm font-medium">
                  Interested in joining the team?
                </h4>
                <a
                  href="mailto:apply@moat.agency"
                  className="text-sm font-medium text-blue-500 hover:underline"
                >
                  Apply here
                </a>
              </div>

              <div className="flex gap-3">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-muted transition-colors hover:bg-blue-500 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="mailto:john@moat.agency"
                  whileHover={{ scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-muted transition-colors hover:bg-foreground hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Network note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-muted">
              We deploy best-in-class resources as needed through our unique
              network of specialists and alumni from top tech companies.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
