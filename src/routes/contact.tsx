import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shiran Suriyapathiraja" },
      {
        name: "description",
        content:
          "Get in touch with Shiran Suriyapathiraja for software engineering, fintech, and AI collaborations.",
      },
      { property: "og:title", content: "Contact — Shiran Suriyapathiraja" },
      {
        property: "og:description",
        content: "Email, phone, LinkedIn — let's build something together.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "shiranay22083@gmail.com",
    href: "mailto:shiranay22083@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 (0)77 978 3620",
    href: "tel:+94779783620",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "shiran-suriyapathiraja",
    href: "https://www.linkedin.com/in/shiran-suriyapathiraja-8612b5225",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Maharagama, Sri Lanka",
    href: "https://maps.google.com/?q=Maharagama,+Sri+Lanka",
  },
];

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title={
        <>
          Let's build <span className="text-gradient">something</span>.
        </>
      }
      intro="Open to engineering roles, AI collaborations, and interesting side projects. The fastest way to reach me is email."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 hover:border-primary/60 hover:bg-surface-elevated transition-all"
          >
            <div className="size-12 rounded-xl bg-secondary text-primary grid place-items-center shrink-0">
              <c.icon className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                {c.label}
              </p>
              <p className="text-foreground font-medium truncate">{c.value}</p>
            </div>
            <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-surface-elevated p-8 md:p-12 text-center relative overflow-hidden grain">
        <div className="absolute -top-16 -right-16 size-60 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 size-60 rounded-full bg-[var(--accent-warm)]/20 blur-3xl" />
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-3">
            References available
          </p>
          <h3 className="text-2xl md:text-3xl font-bold max-w-xl mx-auto">
            Academic and professional references available on request.
          </h3>
          <a
            href="mailto:shiranay22083@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition glow"
          >
            Request references
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </PageShell>
  );
}
