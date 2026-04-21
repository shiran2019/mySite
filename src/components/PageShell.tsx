import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto max-w-5xl px-6 pt-32 pb-16"
    >
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">
        {eyebrow}
      </p>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
        {title}
      </h1>
      {intro && (
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {intro}
        </p>
      )}
      <div className="mt-12">{children}</div>
    </motion.section>
  );
}
