import { SuspenseSiteHeader } from "@/components/suspense-site-header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { LogoMarquee } from "@/components/logo-marquee";
import { Pricing } from "@/components/pricing";
import { AppverseFooter } from "@/components/appverse-footer";
import Script from "next/script";

// ✅ Force static generation for low TTFB
export const dynamic = "force-static";

export default function Page() {
  // Structured data for pricing
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://thestanpixels.com/#pricing",
    name: "Pricing Plans",
    description:
      "Branding and design services pricing plans - Startup, Pro, and Premium packages for all business needs",
    url: "https://thestanpixels.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "Branding and Design Services",
      description:
        "Professional branding and design services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Startup Plan",
          price: "299",
          priceCurrency: "USD",
          description:
            "Basic branding package with graphics design and 2 revisions",
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "699",
          priceCurrency: "USD",
          description:
            "Comprehensive branding with website design and 4 revisions",
        },
        {
          "@type": "Offer",
          name: "Premium Plan",
          price: "2049",
          priceCurrency: "USD",
          description:
            "Full branding suite including motion graphics and UI/UX with unlimited revisions",
        },
      ],
    },
  };

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://thestanpixels.com/",
    name: "stanpixels | Creative Branding Agency - Graphics, Web, Motion Graphics & UI/UX Design",
    description:
      "stanpixels is a leading branding agency specializing in graphics design, website design, motion graphics, and UI/UX design. We create stunning visuals and digital experiences for global brands.",
    url: "https://thestanpixels.com/",
    mainEntity: {
      "@type": "Organization",
      name: "stanpixels",
      url: "https://thestanpixels.com",
      sameAs: [
        "https://twitter.com/thestanpixels",
        "https://www.youtube.com/@stanpixelscreatives",
        "https://instagram.com/thestanpixels",
        "https://threads.com/thestanpixels",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://thestanpixels.com/#pricing",
        name: "Pricing Section",
        url: "https://thestanpixels.com/#pricing",
      },
    ],
  };

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SuspenseSiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <Pricing />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  );
}
