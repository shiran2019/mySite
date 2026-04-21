import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { motion } from "framer-motion";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Shiran Suriyapathiraja" },
      {
        name: "description",
        content:
          "Professional journey of Shiran Suriyapathiraja across ZData Innovations and mobiOs — from intern to Software Engineer.",
      },
      { property: "og:title", content: "Experience — Shiran Suriyapathiraja" },
      {
        property: "og:description",
        content: "From intern to engineer leading fintech projects across 36+ active branches.",
      },
    ],
  }),
  component: ExperiencePage,
});

const experience = [
  {
    role: "Software Engineer",
    company: "ZData Innovations (Pvt) Ltd",
    location: "Malabe, Colombo",
    period: "Sep 2025 — Present",
    points: [
      "Led financial-domain projects with hotfixes and production support across 36+ active branches.",
      "Designed and implemented Anti-Money Laundering (AML) systems with AI-based dynamic thresholds and fraud detection.",
      "Built a Chat-Based Loan Origination System (LOS) with end-to-end approval pipelines.",
      "Spearheaded customer onboarding systems — secure, scalable, and user-friendly.",
      "Mentored junior developers and ensured timely delivery of complex systems.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "ZData Innovations (Pvt) Ltd",
    location: "Malabe, Colombo",
    period: "Sep 2024 — Sep 2025",
    points: [
      "Developed a database monitoring and management system tracking DB ops across multiple services.",
      "Conducted R&D on chat-based workflows for fintech automation.",
      "Gained deep banking and financial domain knowledge through industry collaboration.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "mobiOs (Private) Limited",
    location: "Colombo 04",
    period: "Mar 2024 — Sep 2024",
    points: [
      "Contributed to enterprise apps in healthcare, digital voting, and delivery & logistics.",
      "Built OCR-driven applications for automated data extraction.",
      "Maintained store management systems handling inventory, transactions, and workflows.",
    ],
  },
  {
    role: "Intern Software Engineer",
    company: "mobiOs (Private) Limited",
    location: "Colombo 04",
    period: "Sep 2023 — Mar 2024",
    points: [
      "Worked on 10+ real-world React.js projects in collaborative GitHub workflows.",
      "Integrated RESTful APIs and sharpened core problem-solving skills.",
    ],
  },
];

const education = [
  {
    title: "B.Sc. (Hons) Information Technology",
    org: "University of Kelaniya — Industrial Management",
    period: "2021 — 2024",
    detail: "GPA 3.45 / 4.0 · Software Engineering with DevOps",
  },
  {
    title: "GCE Advanced Level — Physical Science",
    org: "Central College Kuliyapitiya",
    period: "2016 — 2018",
    detail: "Physics B · Chemistry C · Maths C",
  },
];

function ExperiencePage() {
  return (
    <PageShell
      eyebrow="Experience"
      title={
        <>
          A timeline of <span className="text-gradient">building</span>.
        </>
      }
      intro="From intern to engineer leading critical fintech systems — here's the path so far."
    >
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[11px]" />
        <div className="space-y-12">
          {experience.map((exp, i) => (
            <motion.article
              key={exp.role + exp.period}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pl-10 md:pl-16"
            >
              <div className="absolute left-0 top-2 size-4 rounded-full bg-primary glow md:size-[22px] md:left-0 md:flex md:items-center md:justify-center">
                <div className="hidden md:block size-2 rounded-full bg-primary-foreground" />
              </div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                <span className="text-primary font-medium">{exp.company}</span>
              </div>
              <p className="mt-1 font-mono text-xs text-muted-foreground uppercase tracking-wider">
                {exp.period} · {exp.location}
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {exp.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed">
                    <span className="text-primary mt-2 shrink-0 size-1 rounded-full bg-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">
          Education
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Foundations.</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {education.map((e) => (
            <div
              key={e.title}
              className="rounded-xl border border-border bg-surface p-6 hover:border-primary/50 transition-colors"
            >
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {e.period}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold">{e.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{e.org}</p>
              <p className="text-sm text-foreground mt-3">{e.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
