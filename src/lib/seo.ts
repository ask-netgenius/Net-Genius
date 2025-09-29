/**
 * SEO Utilities for Net Genius
 * Provides reusable functions and constants for consistent SEO optimization
 */

export const SITE_CONFIG = {
  name: "Net Genius",
  description:
    "Comprehensive digital services agency offering full-stack development, custom software solutions, cloud infrastructure, DevOps automation, SEO optimization, and business digitalization - all unified in one powerful platform.",
  url: "https://netgenius.dev",
  ogImage: "https://netgenius.dev/og-image.jpg",
  creator: "@netgenius",
  keywords: [
    // Single-page app focused keywords
    "comprehensive digital services platform",
    "all-in-one development services",
    "complete software solutions",
    "unified digital services",
    "single-platform development",

    // Primary services
    "digital services agency",
    "software development company",
    "full-stack development",
    "custom backend development",
    "cloud solutions",
    "DevOps services",
    "SEO optimization",
    "business digitalization",

    // Technology keywords
    "freelance development agency",
    "web application development",
    "API development",
    "AWS cloud services",
    "Azure cloud solutions",
    "Google Cloud Platform",
    "CI/CD implementation",
    "infrastructure management",
    "digital transformation",
    "custom software solutions",
    "scalable web applications",
    "enterprise software development",

    // Single page specific
    "landing page optimization",
    "single page application development",
    "comprehensive service portfolio",
  ],
};

export const SERVICES_KEYWORDS = {
  "full-stack": [
    "full-stack development",
    "react development",
    "node.js development",
    "typescript development",
    "javascript development",
    "web application development",
    "frontend development",
    "backend development",
    "responsive web design",
    "API integration",
  ],
  backend: [
    "custom backend development",
    "REST API development",
    "GraphQL development",
    "microservices architecture",
    "database design",
    "server-side development",
    "API development",
    "scalable backend solutions",
    "enterprise backend systems",
    "backend optimization",
  ],
  devops: [
    "DevOps services",
    "CI/CD pipeline",
    "Docker containerization",
    "Kubernetes orchestration",
    "infrastructure automation",
    "deployment optimization",
    "monitoring solutions",
    "DevOps consulting",
    "infrastructure as code",
    "automated testing",
  ],
  seo: [
    "SEO optimization",
    "search engine optimization",
    "technical SEO",
    "local SEO",
    "SEO audits",
    "keyword optimization",
    "content optimization",
    "organic traffic growth",
    "SEO consulting",
    "digital marketing",
  ],
  cloud: [
    "cloud solutions",
    "AWS development",
    "Azure development",
    "Google Cloud Platform",
    "cloud migration",
    "serverless architecture",
    "cloud infrastructure",
    "cloud consulting",
    "cloud optimization",
    "cloud security",
  ],
  digitalization: [
    "business digitalization",
    "digital transformation",
    "process automation",
    "workflow optimization",
    "custom software solutions",
    "enterprise solutions",
    "business process improvement",
    "digital strategy",
    "technology integration",
    "digital consulting",
  ],
};

/**
 * Generate SEO-optimized meta tags for a page
 */
export function generateSEOMetadata(config: {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  image?: string;
}) {
  const {
    title = SITE_CONFIG.name,
    description = SITE_CONFIG.description,
    keywords = SITE_CONFIG.keywords,
    path = "/",
    image = SITE_CONFIG.ogImage,
  } = config;

  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title:
      title === SITE_CONFIG.name ? title : `${title} | ${SITE_CONFIG.name}`,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title:
        title === SITE_CONFIG.name ? title : `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_CONFIG.name}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        title === SITE_CONFIG.name ? title : `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [image],
      creator: SITE_CONFIG.creator,
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generate JSON-LD structured data for services
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  provider?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: service.provider || SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: "Worldwide",
    serviceType: "Digital Services",
  };
}

/**
 * Generate comprehensive single-page application schema
 */
export function generateSinglePageAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Net Genius - Complete Digital Services Platform",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    about: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.url,
    },
    mainEntity: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/logo.png`,
      description: SITE_CONFIG.description,
      foundingDate: "2024",
      serviceType: [
        "Software Development",
        "Web Development",
        "Cloud Solutions",
        "DevOps Services",
        "SEO Optimization",
        "Digital Transformation",
      ],
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Services Portfolio",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE_CONFIG.url}/#services`,
              name: "Full-Stack Development",
              description:
                "Comprehensive end-to-end web application development services including responsive React frontends, Node.js backends, database design, and seamless API integration.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE_CONFIG.url}/#services`,
              name: "Custom Backend Development",
              description:
                "Professional backend development services specializing in scalable server-side applications, RESTful APIs, microservices architecture, and database optimization.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE_CONFIG.url}/#services`,
              name: "DevOps & Infrastructure",
              description:
                "Complete DevOps solutions including CI/CD pipeline setup, Docker containerization, Kubernetes orchestration, and cloud infrastructure automation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE_CONFIG.url}/#services`,
              name: "SEO Optimization Services",
              description:
                "Professional SEO services to boost search engine rankings including technical SEO audits, keyword optimization, and content strategy.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE_CONFIG.url}/#services`,
              name: "Business Digitalization",
              description:
                "Digital transformation consulting and custom software solutions to modernize business operations and improve efficiency.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE_CONFIG.url}/#services`,
              name: "Cloud Solutions & Migration",
              description:
                "Expert cloud services including AWS, Google Cloud Platform, and Microsoft Azure implementations with migration support.",
            },
          },
        ],
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "contact@netgenius.dev",
        url: `${SITE_CONFIG.url}/#contact`,
      },
      sameAs: [
        "https://twitter.com/netgenius",
        "https://linkedin.com/company/netgenius",
        "https://github.com/netgenius",
      ],
    },
    potentialAction: [
      {
        "@type": "ViewAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_CONFIG.url}/#services`,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        name: "View Services",
      },
      {
        "@type": "ContactAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_CONFIG.url}/#contact`,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        name: "Contact Us",
      },
    ],
  };
}

/**
 * Generate section-specific schema for single-page app
 */
export function generateSectionSchema(
  sectionId: string,
  sectionName: string,
  description: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": `${SITE_CONFIG.url}/#${sectionId}`,
    name: sectionName,
    description: description,
    url: `${SITE_CONFIG.url}/#${sectionId}`,
    isPartOf: {
      "@type": "WebPage",
      name: "Net Genius - Complete Digital Services Platform",
      url: SITE_CONFIG.url,
    },
  };
}

/**
 * Generate local business schema for better local SEO
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: "+1-XXX-XXX-XXXX", // Replace with actual phone
    email: "contact@netgenius.dev",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.7128", // Replace with actual coordinates
      longitude: "-74.0060",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    acceptsReservations: "true",
  };
}

/**
 * Generate FAQ schema for better search features
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
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
