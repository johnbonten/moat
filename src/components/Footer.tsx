"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "International Growth", href: "#services" },
    { label: "Business Operations", href: "#services" },
  ],
  resources: [
    { label: "Contact", href: "#contact" },
    { label: "FAQs", href: "#faq" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Insights", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p className="mb-6 max-w-sm text-sm text-muted">
              AI-powered growth advisory for startups, scale-ups, and
              enterprises. Led by former tech operators from Spotify, Calm, and
              more.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-muted transition-colors hover:bg-foreground hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 text-sm text-muted md:flex-row md:gap-4">
            <span>OFFICE: COPPERNICUSSTRAAT 20, AMSTERDAM</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@moat.agency"
              className="transition-colors hover:text-foreground"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted">
          <p>COPYRIGHT. 2025 MOAT. ALL RIGHTS RESERVED.</p>
        </div>
      </Container>
    </footer>
  );
}
