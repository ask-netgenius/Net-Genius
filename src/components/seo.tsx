/**
 * SEO Component for consistent structured data injection
 * Use this component to add JSON-LD structured data to any page
 */

interface SEOSchemaProps {
  schema: object | object[];
}

export function SEOSchema({ schema }: SEOSchemaProps) {
  const schemaArray = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemaArray.map((schemaItem, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaItem),
          }}
        />
      ))}
    </>
  );
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
  schema?: object | object[];
}

export function SEOHead({
  title,
  description,
  keywords,
  canonical,
  noindex = false,
  schema,
}: SEOHeadProps) {
  return (
    <head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Additional SEO meta tags */}
      <meta name="author" content="Net Genius" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

      {/* Structured Data */}
      {schema && <SEOSchema schema={schema} />}
    </head>
  );
}
