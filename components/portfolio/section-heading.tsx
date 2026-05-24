"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h2 className="mb-4 text-3xl font-bold text-gradient md:text-4xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
