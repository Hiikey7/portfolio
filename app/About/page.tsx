// app/about/page.tsx
"use client";

import React, { useState, useEffect, Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { useSearchParams } from "next/navigation";

function AboutContent({ searchParams }: { searchParams: URLSearchParams }) {
  const [mounted, setMounted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "stanpixels creatives",
    url: "https://thestanpixels.com",
    logo: "https://thestanpixels.com/logo.png",
    description:
      "stanpixels creatives is a branding agency specializing in graphics design, website design, motion graphics, and UI/UX design, serving clients worldwide.",
    sameAs: [
      "https://www.instagram.com/stanpixels",
      "https://www.linkedin.com/company/stanpixels",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-555-555-5555",
        contactType: "customer service",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Miami" },
      { "@type": "Place", name: "Los Angeles" },
      { "@type": "Place", name: "New York" },
      { "@type": "Place", name: "Canada" },
      { "@type": "Place", name: "United Kingdom" },
    ],
  };

  const [pausedRow, setPausedRow] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toolsRow1 = [
    { name: "Tool 1", image: "/1.png" },
    { name: "Tool 2", image: "/2.png" },
    { name: "Tool 3", image: "/3.png" },
    { name: "Tool 4", image: "/4.png" },
    { name: "Tool 5", image: "/5.png" },
    { name: "Tool 6", image: "/6.png" },
    { name: "Tool 7", image: "/7.png" },
  ];

  const toolsRow2 = [
    { name: "Tool 8", image: "/8.png" },
    { name: "Tool 9", image: "/9.png" },
    { name: "Tool 10", image: "/10.png" },
    { name: "Tool 11", image: "/11.png" },
    { name: "Tool 12", image: "/12.png" },
    { name: "Tool 13", image: "/13.png" },
    { name: "Tool 14", image: "/14.png" },
  ];

  const ToolCard = ({ tool, rowId }: { tool: any; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3"
      onMouseEnter={() => isClient && setPausedRow(rowId)}
      onMouseLeave={() => isClient && setPausedRow(null)}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
        <img
          src={tool.image}
          alt={tool.name}
          className="w-16 h-16 object-contain"
        />
      </div>
    </div>
  );

  return (
    <>
      <SiteHeader searchParams={searchParams} />
      {/* SEO Schema for Google + LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About stanpixels
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Pioneering the future of creative branding and design for global
          brands.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-8 bg-neutral-900 text-white px-6 md:px-12 lg:px-20 text-center">
        <p className="text-lg md:text-xl max-w-4xl mx-auto opacity-90">
          stanpixels is a leading creative agency specializing in cutting-edge
          digital solutions. We combine innovative design with advanced
          technology to help brands tell their stories and connect with
          audiences .
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "Website Design & Development",
              desc: "Creating responsive, modern websites that deliver exceptional user experiences.",
            },
            {
              title: "Branding",
              desc: "Developing comprehensive brand identities that resonate with your target audience.",
            },
            {
              title: "UI/UX Design",
              desc: "Designing intuitive interfaces and user experiences that drive engagement.",
            },
            {
              title: "Social Media Graphics",
              desc: "Crafting eye-catching visuals for social media platforms to boost your online presence.",
            },
            {
              title: "Motion Graphics",
              desc: "Producing dynamic animations and videos that bring your brand to life.",
            },
            {
              title: "Reels Editing",
              desc: "Creating engaging event and commercial reels with seamless flow and style.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300 min-h-[200px] flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="opacity-80">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      {isClient && (
        <section className="text-white py-16 sm:py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold tracking-tight text-white">
                Tools of <span className="text-blue-300">Specialization</span>
              </h2>
            </div>

            <div className="relative">
              {/* First Row - Scrolling Right */}
              <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div
                  className={`flex animate-scroll-right whitespace-nowrap ${
                    pausedRow === "first" ? "animation-play-state-paused" : ""
                  }`}
                  style={{
                    animationPlayState:
                      pausedRow === "first" ? "paused" : "running",
                    width: "max-content",
                  }}
                >
                  {/* Triple the tools for seamless loop */}
                  {[...toolsRow1, ...toolsRow1, ...toolsRow1].map(
                    (tool, index) => (
                      <ToolCard
                        key={`first-${index}`}
                        tool={tool}
                        rowId="first"
                      />
                    )
                  )}
                </div>
              </div>

              {/* Second Row - Scrolling Left */}
              <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div
                  className={`flex animate-scroll-left whitespace-nowrap ${
                    pausedRow === "second" ? "animation-play-state-paused" : ""
                  }`}
                  style={{
                    animationPlayState:
                      pausedRow === "second" ? "paused" : "running",
                    width: "max-content",
                  }}
                >
                  {/* Triple the tools for seamless loop */}
                  {[...toolsRow2, ...toolsRow2, ...toolsRow2].map(
                    (tool, index) => (
                      <ToolCard
                        key={`second-${index}`}
                        tool={tool}
                        rowId="second"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team Section */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Our Team
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Stanley Ngure",
              position: "UI/UX Designer",
              image: "/stano.png",
            },
            {
              name: "Danmike Atei",
              position: "Creative Designer",
              image: "/atei.png",
            },
            {
              name: "Obadiah",
              position: "Web Developer",
              image: "/obadiah.png",
            },
            {
              name: "Sultan GFX",
              position: "Lead Graphics Designer",
              image: "/sultan.jpg",
            },
            {
              name: "John Brandews",
              position: "Web Developer",
              image: "/brandews.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-2xl shadow-lg text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-[#3ab3ff]">{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-lg opacity-80 mb-8">
          Let stanpixels bring your brand to life.
        </p>
        <a
          href="https://wa.me/message/5MJVAG2CZN25M1"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-all"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
}

export default function AboutPage() {
  const searchParams = useSearchParams();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutContent searchParams={searchParams} />
    </Suspense>
  );
}
