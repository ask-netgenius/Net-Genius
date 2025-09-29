import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default:
      "Net Genius - Premier Digital Services & Software Development Agency | Full-Stack, Cloud, DevOps",
    template: "%s | Net Genius",
  },
  description:
    "Net Genius is a comprehensive digital services agency offering full-stack development, custom software solutions, cloud infrastructure, DevOps automation, SEO optimization, and business digitalization. All services available on one powerful platform. Transform your business with expert technology solutions.",
  keywords: [
    // Primary services
    "digital services agency",
    "software development company",
    "full-stack development",
    "custom backend development",
    "cloud solutions",
    "DevOps services",
    "SEO optimization",
    "business digitalization",

    // Secondary keywords
    "freelance development agency",
    "web application development",
    "API development",
    "enterprise software solutions",
    "scalable web applications",
    "custom software development",

    // Technology-specific
    "React development",
    "Node.js development",
    "TypeScript development",
    "AWS cloud services",
    "Azure cloud solutions",
    "Google Cloud Platform",
    "CI/CD implementation",
    "Docker containerization",
    "Kubernetes orchestration",

    // Business-focused
    "digital transformation",
    "process automation",
    "infrastructure management",
    "technical SEO",
    "responsive web design",
    "microservices architecture",

    // Single page app specific
    "comprehensive digital solutions",
    "all-in-one development services",
    "complete software lifecycle",
    "end-to-end digital services",
  ],
  authors: [{ name: "Net Genius Development Team" }],
  creator: "Net Genius",
  publisher: "Net Genius",
  category: "Technology",
  classification: "Business Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://netgenius.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://netgenius.dev",
    title:
      "Net Genius - Complete Digital Services Platform | Software Development, Cloud & DevOps",
    description:
      "Transform your business with Net Genius comprehensive digital platform. Expert full-stack development, cloud solutions, DevOps automation, and business digitalization - all services unified in one powerful solution.",
    siteName: "Net Genius",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Net Genius - Complete Digital Services Platform",
        type: "image/jpeg",
      },
      {
        url: "/og-image-services.jpg",
        width: 1200,
        height: 630,
        alt: "Net Genius Services - Full-Stack Development & Cloud Solutions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@netgenius",
    creator: "@netgenius",
    title: "Net Genius - Complete Digital Services Platform",
    description:
      "Expert full-stack development, cloud solutions, DevOps automation, and business digitalization. All services unified in one powerful platform.",
    images: [
      {
        url: "/twitter-image.jpg",
        alt: "Net Genius - Digital Services Platform",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  // Additional metadata for single-page app
  other: {
    "application-name": "Net Genius",
    "apple-mobile-web-app-title": "Net Genius",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "theme-color": "#000000",
    "color-scheme": "dark light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Net Genius",
              url: "https://netgenius.dev",
              logo: "https://netgenius.dev/logo.png",
              description:
                "Leading digital services agency specializing in full-stack development, custom software solutions, cloud infrastructure, DevOps, SEO optimization, and business digitalization.",
              foundingDate: "2024",
              founders: [
                {
                  "@type": "Person",
                  name: "Net Genius Team",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "contact@netgenius.dev",
              },
              sameAs: [
                "https://twitter.com/netgenius",
                "https://linkedin.com/company/netgenius",
                "https://github.com/netgenius",
              ],
              serviceType: [
                "Software Development",
                "Web Development",
                "Cloud Solutions",
                "DevOps Services",
                "SEO Optimization",
                "Digital Transformation",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Full-Stack Development",
                      description:
                        "End-to-end development of web applications, from responsive front-ends to robust back-ends.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Backend Development",
                      description:
                        "Designing and building scalable, secure, and high-performance server-side applications and APIs.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "DevOps",
                      description:
                        "Streamlining development and deployment processes with CI/CD, automation, and infrastructure management.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SEO Optimization",
                      description:
                        "Improving your website's visibility on search engines to attract more organic traffic and grow your audience.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Business Digitalization",
                      description:
                        "Transforming your business operations with custom digital solutions to enhance efficiency and productivity.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cloud Solutions",
                      description:
                        "Leveraging cloud platforms like AWS, GCP, and Azure for scalable, reliable, and cost-effective infrastructure.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
