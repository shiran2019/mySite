/**
 * SEO utilities for structured data and metadata generation
 * Optimized for Software Engineering, Fintech, and AI/ML domains
 */

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: "summary" | "summary_large_image";
  canonicalUrl?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

/**
 * Generate structured data for Person (schema.org)
 */
export function generatePersonSchema(name: string, title: string, description: string) {
  return {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: name,
    jobTitle: title,
    description: description,
    url: "https://shiran.dev",
    sameAs: [
      "https://linkedin.com/in/shiran-suriyapathiraja",
      "https://github.com/shiran2019",
      "https://twitter.com/shiran2019",
    ],
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Development",
      "Fintech Systems",
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Cloud Architecture",
      "DevOps",
      "Banking Systems",
      "Fraud Detection",
      "Anti-Money Laundering",
    ],
    workLocation: {
      "@type": "Place",
      name: "Maharagama, Sri Lanka",
    },
  };
}

/**
 * Generate breadcrumb schema (schema.org)
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate software/web application schema
 */
export function generateApplicationSchema() {
  return {
    "@context": "https://schema.org/",
    "@type": "WebApplication",
    name: "Shiran Suriyapathiraja Portfolio",
    description:
      "Professional portfolio and technical blog of a Software Engineer specializing in fintech and AI systems",
    url: "https://shiran.dev",
    creator: {
      "@type": "Person",
      name: "Shiran Suriyapathiraja",
    },
    applicationCategory: "Professional Portfolio",
  };
}

/**
 * Generate article/research schema (for projects/publications)
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  url: string;
  keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    url: article.url,
    keywords: article.keywords.join(", "),
  };
}

/**
 * Core SEO keywords organized by domain
 */
export const SEO_KEYWORDS = {
  softwareEngineering: [
    "Software Engineer",
    "Software Development",
    "Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Web Development",
    "Software Architecture",
    "System Design",
    "Clean Code",
    "SOLID Principles",
  ],
  fintech: [
    "Fintech Engineer",
    "Financial Technology",
    "Banking Systems",
    "Payment Systems",
    "Loan Origination",
    "Anti-Money Laundering",
    "Fraud Detection",
    "Financial Compliance",
    "Cryptocurrency",
    "DeFi",
    "Digital Banking",
  ],
  ai: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "Neural Networks",
    "AI Research",
    "Computer Vision",
    "Natural Language Processing",
    "AI Systems",
    "AI Engineer",
  ],
  technologies: [
    "React.js",
    "Spring Boot",
    "Node.js",
    "Python",
    "TypeScript",
    "GraphQL",
    "REST API",
    "Docker",
    "Kubernetes",
    "MySQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Cloud Architecture",
  ],
  author: [
    "Shiran Suriyapathiraja",
    "SPMSMS Pathiraja",
    "IEEE Published Author",
    "AI Researcher",
    "Engineering Professional",
  ],
};

/**
 * Combine keywords by relevance and domain
 */
export function getCombinedKeywords(domains: (keyof typeof SEO_KEYWORDS)[]): string[] {
  const keywordSet = new Set<string>();
  domains.forEach((domain) => {
    SEO_KEYWORDS[domain]?.forEach((keyword) => keywordSet.add(keyword));
  });
  return Array.from(keywordSet);
}

/**
 * Generate meta tags from SEO config
 */
export function generateMetaTags(config: SEOConfig) {
  const baseUrl = "https://shiran.dev";
  const ogUrl = config.ogUrl || baseUrl;
  const ogImage = config.ogImage || `${baseUrl}/og-image.jpg`;

  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: config.title },
    { name: "description", content: config.description },
    { name: "keywords", content: config.keywords.join(", ") },
    { name: "author", content: config.author || "Shiran Suriyapathiraja" },
    { name: "robots", content: "index, follow" },
    { name: "language", content: "English" },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:title", content: config.ogTitle || config.title },
    { property: "og:description", content: config.ogDescription || config.description },
    { property: "og:url", content: ogUrl },
    { property: "og:image", content: ogImage },
    { property: "og:site_name", content: "Shiran Suriyapathiraja" },

    // Twitter
    { name: "twitter:card", content: config.twitterCard || "summary_large_image" },
    { name: "twitter:title", content: config.ogTitle || config.title },
    { name: "twitter:description", content: config.ogDescription || config.description },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:creator", content: "@shiran" },

    // Additional SEO
    { name: "revisit-after", content: "7 days" },
    { name: "googlebot", content: "index, follow" },
  ];
}
