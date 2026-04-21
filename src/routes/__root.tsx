import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "@tanstack/react-router";
import { generateMetaTags, generatePersonSchema } from "@/lib/seo";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">
          Error 404
        </p>
        <h1 className="text-7xl font-bold text-foreground">Lost.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This page wandered off. Let's get you home.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

const personSchema = generatePersonSchema(
  "Shiran Suriyapathiraja",
  "Senior Software Engineer | Fintech Specialist | AI Researcher",
  "Software Engineer with 2.5+ years in fintech and AI. IEEE published author specializing in full-stack development, financial systems, and Generative AI.",
);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      ...generateMetaTags({
        title: "Shiran Suriyapathiraja — Software Engineer | Fintech & AI Specialist",
        description:
          "Senior Software Engineer with 2.5+ years in fintech systems, full-stack development, and Generative AI. IEEE published researcher. Specializing in banking systems, fraud detection, and scalable architecture.",
        keywords: [
          "Software Engineer",
          "Fintech Developer",
          "Full-Stack Engineer",
          "AI Researcher",
          "Spring Boot",
          "React",
          "Banking Systems",
          "Fraud Detection",
          "Artificial Intelligence",
          "IEEE Author",
          "Shiran Suriyapathiraja",
        ],
        ogTitle: "Shiran Suriyapathiraja — Senior Software Engineer & Fintech Specialist",
        ogDescription:
          "Full-stack engineer with deep expertise in fintech, AI systems, and scalable architecture. 2.5+ years building production systems for banking and financial services.",
      }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://shiran.dev" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
