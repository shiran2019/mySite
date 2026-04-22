import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { generateMetaTags, SEO_KEYWORDS, getCombinedKeywords, generateBreadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const keywords = getCombinedKeywords(["softwareEngineering", "fintech", "ai", "author"]);
    const breadcrumbs = generateBreadcrumbSchema([
      { name: "Home", url: "https://shiran.dev" },
    ]);

    return {
      meta: [
        ...generateMetaTags({
          title:
            "Shiran Suriyapathiraja — Software Engineer, Fintech Specialist & AI Researcher",
          description:
            "Experienced Software Engineer with 2.5+ years building fintech systems, scalable backends, and AI-driven solutions. 40+ production projects. IEEE published author.",
          keywords: keywords,
          ogTitle:
            "Shiran Suriyapathiraja — Full-Stack Engineer & Fintech Systems Architect",
          ogDescription:
            "Building secure, scalable fintech systems and AI applications. 36+ active production branches. Spring Boot • React • Python • Generative AI",
        }),
      ],
      links: [
        { rel: "canonical", href: "https://shiran.dev/" },
        { rel: "alternate", hrefLang: "en", href: "https://shiran.dev/" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbs),
        },
      ],
    };
  },
  component: Index,
});

const stats = [
  { value: "2.5+", label: "Years of Industry Experience" },
  { value: "30+", label: "Real-world Projects" },
  { value: "2 ", label: "IEEE Research publications" },
];

const stack = [
  "React",
  "Spring Boot",
  "Node.js",
  "Python",
  "GraphQL",
  "MySQL",
  "MongoDB",
  "Docker",
  "Generative AI",
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative px-6 pt-36 pb-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono"
            >
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              Software{" "}
              <span className="text-gradient">engineer</span>
              <br />
              building fintech
              <br />
              with a touch of <span className="italic font-display text-[var(--accent-warm)]">AI</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              I'm <span className="text-foreground font-medium">Shiran Suriyapathiraja</span>, a Software Engineer and IT graduate from the University of Kelaniya, specializing in full-stack development and DevOps. With 2.5+ years of industry experience, I design scalable systems, build secure solutions, and apply Generative AI to real-world problems. I'm passionate about continuous learning and have contributed research to IEEE conferences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition glow"
              >
                View research
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium hover:bg-secondary transition"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-card">
              <img
                src={heroPortrait}
                alt="Shiran Suriyapathiraja portrait"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3 flex items-center gap-3">
                <Sparkles className="size-4 text-primary" />
                <div className="text-xs">
                  <div className="font-medium">B.Sc. (Hons) IT</div>
                  <div className="text-muted-foreground">University of Kelaniya</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-surface p-6 md:p-8"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                {s.value}
              </div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground font-mono uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">
            Toolkit
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
            A pragmatic stack — picked for{" "}
            <span className="text-gradient">scale and clarity</span>.
          </h2>
          <div className="mt-10 flex flex-wrap gap-2">
            {stack.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-mono hover:border-primary/60 hover:text-primary transition-colors"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl relative overflow-hidden rounded-3xl border border-border bg-surface-elevated p-10 md:p-14 grain">
          <div className="absolute -top-20 -right-20 size-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 size-72 rounded-full bg-[var(--accent-warm)]/20 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight max-w-xl">
                Have an idea worth building?
              </h3>
              <p className="mt-3 text-muted-foreground max-w-md">
                I collaborate on fintech, AI products, and ambitious side projects.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:opacity-90 transition self-start"
            >
              Start a conversation
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
