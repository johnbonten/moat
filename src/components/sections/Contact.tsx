"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Check, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  companyType: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  budgetRange: z.string().optional(),
  wantsCall: z.boolean().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const companyTypes = [
  { value: "", label: "Select company type" },
  { value: "startup", label: "Startup (Seed - Series A)" },
  { value: "scaleup", label: "Scale-up (Series B - D)" },
  { value: "enterprise", label: "Enterprise/Corporate" },
  { value: "investor", label: "Investor/VC" },
  { value: "other", label: "Other" },
];

const budgetRanges = [
  { value: "", label: "Select budget range" },
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "over-100k", label: "Over $100,000" },
];

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      wantsCall: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Or get in touch to learn more about our custom offering thanks to our unique network of experts."
        />

        <div className="mx-auto max-w-2xl">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Name & Email Row */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className={cn(
                    "w-full rounded-xl border bg-white px-4 py-3 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                    errors.name ? "border-red-500" : "border-slate-200"
                  )}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="john@company.com"
                  className={cn(
                    "w-full rounded-xl border bg-white px-4 py-3 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                    errors.email ? "border-red-500" : "border-slate-200"
                  )}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Company & Type Row */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium"
                >
                  Company
                </label>
                <input
                  {...register("company")}
                  type="text"
                  id="company"
                  placeholder="Your company"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="companyType"
                  className="mb-2 block text-sm font-medium"
                >
                  Company Type
                </label>
                <select
                  {...register("companyType")}
                  id="companyType"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  {companyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message / Project Details <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={5}
                placeholder="Tell us about your project, goals, and how we can help..."
                className={cn(
                  "w-full resize-none rounded-xl border bg-white px-4 py-3 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                  errors.message ? "border-red-500" : "border-slate-200"
                )}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Budget Range */}
            <div>
              <label
                htmlFor="budgetRange"
                className="mb-2 block text-sm font-medium"
              >
                Budget Range (optional)
              </label>
              <select
                {...register("budgetRange")}
                id="budgetRange"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                {budgetRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Free Call Checkbox */}
            <div className="flex items-start gap-3">
              <input
                {...register("wantsCall")}
                type="checkbox"
                id="wantsCall"
                className="mt-1 h-5 w-5 rounded border-slate-300 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="wantsCall" className="text-sm text-muted">
                I&apos;m interested in a 30-min free call to assess fit
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
              <p className="text-sm text-muted">
                We typically respond within 24 hours
              </p>
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
