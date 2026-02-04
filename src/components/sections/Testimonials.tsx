"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "John and his team delivered stellar work on company strategy and growth in general. Lorem ipsum, lorem ipsum, etc. use, bla bla bla bla bla bla.",
    name: "Mike Gabriel",
    title: "CEO",
    company: "Tech Startup",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    quote:
      "Colin and his team delivered stellar work on company strategy and growth in general. Lorem ipsum, lorem ipsum, etc. use, bla bla bla bla bla bla.",
    name: "Mike Gabriel",
    title: "CEO",
    company: "Scale-up",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    quote:
      "John and his team delivered stellar work on company strategy and growth in general. Lorem ipsum, lorem ipsum, etc. use.",
    name: "Mike Gabriel",
    title: "CEO",
    company: "Enterprise",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Heading */}
          <div>
            <SectionHeading
              title="Outcomes and results above all else"
              align="left"
              className="lg:sticky lg:top-32"
            />
          </div>

          {/* Right Column - Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: -4 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-50 p-6 transition-all hover:bg-white hover:shadow-lg"
              >
                {/* Quote icon */}
                <div
                  className={`absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br ${testimonial.gradient} opacity-10`}
                />

                <div className="relative">
                  <Quote
                    className={`mb-4 h-6 w-6 bg-gradient-to-br ${testimonial.gradient} bg-clip-text text-transparent`}
                    style={{
                      fill: "url(#gradient)",
                    }}
                  />

                  <p className="mb-6 text-foreground/80">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradient}`}
                    >
                      <span className="text-sm font-bold text-white">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </motion.div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
