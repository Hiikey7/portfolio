// app/our-work/branding/page.tsx
"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { SuspenseSiteHeader } from "@/components/suspense-site-header";

export default function BrandingPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Branding Work - stanpixels creatives",
    url: "https://thestanpixels.com/our-work/branding",
    description: "Explore our branding portfolio.",
  };

  const brandingWorks = [
    {
      id: 1,
      title: "Motion Graphics",
      image:
        "https://mu73aitmabymkzpg.public.blob.vercel-storage.com/motion.mp4",
      price: "from KSH 1,500",
    },
    {
      id: 2,
      title: "Event & Club Poster",
      image: "/sg7.jpg",
      price: "KSH 1,500",
    },
    {
      id: 3,
      title: "Sports Graphics",
      image: "/sg8.jpg",
      price: "KSH 1,500",
    },
    {
      id: 4,
      title: "Social Media Post",
      image: "/sg4.jpg",
      price: "From ksh 1,000",
    },
    {
      id: 5,
      title: "Print Materials",
      image: "/sg3.jpg",
      price: "from ksh 1,000",
    },
    {
      id: 6,
      title: "Politics Branding",
      image: "/wb.jpg",
      price: "From KSH 1,500",
    },
    {
      id: 7,
      title: "Brand Identity 2",
      image: "/sg6.jpg",
      price: "From KSH 10,000",
    },
    {
      id: 8,
      title: "Logo Design 2",
      image: "/sg2.jpg",
      price: "From KSH 5,000",
    },
    {
      id: 9,
      title: "Eulogy Booklet",
      image: "/sg10.jpg",
      price: "From KSH 4,000",
    },
    {
      id: 10,
      title: "Presentations",
      image: "/sg5.jpg",
      price: "From KSH 3,000",
    },
    {
      id: 11,
      title: "Product ads",
      image: "/sg9.jpg",
      price: "From KSH 1,000",
    },
    {
      id: 12,
      title: "Company Profile",
      image: "/sg11.jpg",
      price: "From KSH 5,000",
    },
    {
      id: 13,
      title: "Jersey Design",
      image: "/sg13.jpg",
      price: "From KSH 5,000",
    },
  ];

  const filteredWorks = useMemo(() => {
    return brandingWorks.filter((work) =>
      work.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <>
      <SuspenseSiteHeader />
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Branding Work</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 mb-8">
          Discover our branding portfolio.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search branding works..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#3ab3ff] focus:ring-[#3ab3ff]"
          />
        </div>
      </section>

      {/* Works Section */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredWorks.map((work) => (
            <div key={work.id} className="bg-neutral-800 p-4 rounded-lg">
              {work.image.endsWith(".mp4") ? (
                <video
                  src={work.image}
                  loop
                  muted
                  autoPlay
                  className="w-full mb-4"
                  style={{
                    objectFit: "contain",
                    aspectRatio: "16/9",
                    borderRadius: "8px",
                  }}
                />
              ) : (
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full mb-4"
                  style={{
                    objectFit: "contain",
                    aspectRatio: "16/9",
                    borderRadius: "8px",
                  }}
                />
              )}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium">{work.title}</h3>
                <p className="text-[#3AB3FF] font-bold">{work.price}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-[#3ab3ff] text-[#3ab3ff] hover:bg-white/5 hover:text-[#3ab3ff] w-full md:w-1/2"
                >
                  {work.id === 1 ? (
                    <a
                      href="https://www.behance.net/stanpixels"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  ) : (
                    <Link href={`/our-work/branding/${work.id}`}>View</Link>
                  )}
                </Button>
                <Button
                  asChild
                  className="bg-[#3ab3ff] text-black hover:bg-[#2a9eff] w-full md:w-1/2"
                >
                  <a
                    href={`https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20order%20${encodeURIComponent(
                      work.title
                    )}%20priced%20at%20${encodeURIComponent(work.price)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* Floating Behance Button */}
        <a
          href="https://www.behance.net/stanpixels"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 bg-[#0166f0] text-white p-3 rounded-full shadow-lg hover:bg-[#0155d0] transition-all text-sm font-bold liquid-glass-button"
        >
          Be
        </a>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Branding Project?
        </h2>
        <p className="text-lg opacity-80 mb-8">
          Let's create something amazing together.
        </p>
        <a
          href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20a%20quote%20for%20a%20branding%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-all"
        >
          Get a Quote
        </a>
      </section>
    </>
  );
}
