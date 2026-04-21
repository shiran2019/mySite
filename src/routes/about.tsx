import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { motion } from "framer-motion";
import { generateMetaTags, getCombinedKeywords, generateBreadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => {
    const keywords = getCombinedKeywords(["softwareEngineering", "fintech", "ai", "technologies"]);
    const breadcrumbs = generateBreadcrumbSchema([
      { name: "Home", url: "https://shiran.dev" },
      { name: "About", url: "https://shiran.dev/about" },
    ]);

    return {
      meta: [
        ...generateMetaTags({
          title:
            "About Shiran Suriyapathiraja — Software Engineer, Fintech Architect & AI Researcher",
          description:
            "Shiran Suriyapathiraja: Full-stack Software Engineer with expertise in fintech systems, banking infrastructure, fraud detection, and Generative AI. IT graduate from University of Kelaniya with 2.5+ years industry experience.",
          keywords: keywords,
          ogTitle: "About Shiran Suriyapathiraja — Fintech Engineer & AI Specialist",
          ogDescription:
            "Full-stack architect building secure banking systems, AML platforms, and AI-driven financial solutions. Spring Boot, React, Python, Deep Learning.",
        }),
      ],
      links: [
        { rel: "canonical", href: "https://shiran.dev/about" },
        { rel: "alternate", hrefLang: "en", href: "https://shiran.dev/about" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbs),
        },
      ],
    };
  },
  component: AboutPage,
});

const competences: Record<string, string[]> = {
  Languages: ["JavaScript", "Java", "Python", "C++"],
  Frontend: ["React.js", "MUI", "Bootstrap", "Zustand", "Redux", "HTML5", "CSS3"],
  Backend: ["Spring Boot", "Node.js", "REST", "GraphQL"],
  Data: ["MySQL", "MongoDB", "Redis", "Liquibase"],
  DevOps: ["Docker", "Jenkins", "GitHub"],
  Tools: ["Postman", "Insomnia", "DBeaver", "Jira", "ClickUp"],
};

function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title={
        <>
          Engineer at heart, <span className="text-gradient">researcher</span> by curiosity.
        </>
      }
    >
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm a Software Engineer and IT graduate from the{" "}
            <span className="text-foreground font-medium">University of Kelaniya</span>,
            specializing in Software Engineering with DevOps. With more than 2.5 years of industry
            experience, I've developed strong skills in full-stack development, secure coding, and
            building scalable software solutions.
          </p>
          <p>
            I'm particularly interested in{" "}
            <span className="text-foreground font-medium">artificial intelligence</span> — with
            hands-on experience training deep learning models and applying Generative AI to
            real-world problems. My background also includes research contributions in AI-driven
            systems, with publications in{" "}
            <span className="text-foreground font-medium">IEEE conferences</span>.
          </p>
          <p>
            I'm a collaborative and proactive team player with a strong passion for continuous
            learning, innovation, and delivering high-quality solutions.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-6">
            <Info label="Location" value="Maharagama, Sri Lanka" />
            <Info label="Degree" value="B.Sc. (Hons) IT — GPA 3.45/4.0" />
            <Info label="Focus" value="Fintech · AI · DevOps" />
            <Info label="Languages" value="English · Sinhala" />
          </div>
        </div>

        <aside className="space-y-6">
          {Object.entries(competences).map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-3">
                {cat}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </aside>
      </div>
    </PageShell>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1">
        {label}
      </p>
      <p className="text-foreground text-sm font-medium">{value}</p>
    </div>
  );
}
