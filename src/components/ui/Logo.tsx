"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <Link href="/" className={cn("block", className)}>
      <motion.div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold",
          variant === "default"
            ? "bg-foreground text-background"
            : "bg-white text-foreground"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Moat
      </motion.div>
    </Link>
  );
}
