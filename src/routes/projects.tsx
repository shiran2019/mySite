import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Research & Projects — Shiran Suriyapathiraja" },
      {
        name: "description",
        content:
          "IEEE-published research on Generative AI car damage detection and deep-learning emotion recognition by Shiran Suriyapathiraja.",
      },
      { property: "og:title", content: "Research & Projects — Shiran Suriyapathiraja" },
      {
        property: "og:description",
        content: "Two IEEE conference publications and selected engineering projects.",
      },
    ],
  }),
  component: ProjectsPage,
});

const research = [
  {
    title: "Car Body Damage Detection and Cost Estimation Based on Generative AI",
    venue: "2025 Moratuwa Engineering Research Conference (MERCon)",
    doi: "10.1109/MERCon67903.2025.11217017",
    summary:
      "Generative AI pipeline that detects vehicle body damage from images and estimates repair cost, designed for insurance and claims automation.",
    tags: ["Generative AI", "Computer Vision", "Cost Estimation"],
  },
  {
    title:
      "Enhancing Human Emotion Detection in Audio Data with Deep Neural Networks Using Cross-Dataset",
    venue: "2025 5th International Conference on Advanced Research in Computing (ICARC)",
    doi: "10.1109/ICARC64760.2025.10963219",
    summary:
      "Deep neural network trained across heterogeneous emotion datasets, improving robustness of audio-based emotion classification.",
    tags: ["Deep Learning", "Audio", "Cross-Dataset"],
  },
];

const projects = [
  {
    name: "Anti-Money Laundering (AML) Platform",
    role: "Lead Engineer · ZData",
    blurb:
      "AI-driven dynamic thresholding and fraud detection for banking clients, integrated into multi-branch production systems.",
  },
  {
    name: "Chat-Based Loan Origination System",
    role: "Developer · ZData",
    blurb:
      "Conversational LOS handling validation and approval workflows end-to-end for retail loans.",
  },
  {
    name: "Customer Onboarding Suite",
    role: "Developer · ZData",
    blurb: "Secure, scalable, and user-friendly digital onboarding for fintech customers.",
  },
  {
    name: "Database Monitoring System",
    role: "Developer · ZData",
    blurb:
      "Tracks DB operations across services to drive performance optimization and data-driven decisions.",
  },
];

function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Research & Work"
      title={
        <>
          Published <span className="text-gradient">papers</span> and shipped systems.
        </>
      }
      intro="Two IEEE publications and a selection of production projects from my fintech work."
    >
      <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-6">
        Publications
      </h2>
      <div className="grid md:grid-cols-2 gap-5">
        {research.map((r, i) => (
          <motion.a
            key={r.doi}
            href={`https://doi.org/${r.doi}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl border border-border bg-surface p-6 hover:border-primary/60 hover:bg-surface-elevated transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <FileText className="size-5 text-primary shrink-0" />
              <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="mt-4 text-xl font-display font-semibold leading-snug">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground italic">{r.venue}</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{r.summary}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {r.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[11px] font-mono text-muted-foreground">DOI: {r.doi}</p>
          </motion.a>
        ))}
      </div>

      <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-primary mt-20 mb-6">
        Selected Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-surface p-6 hover:bg-surface-elevated transition"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {p.role}
            </p>
            <h3 className="mt-2 text-lg font-display font-semibold">{p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
