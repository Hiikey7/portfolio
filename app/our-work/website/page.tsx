// app/our-work/website/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SuspenseSiteHeader } from "@/components/suspense-site-header";

export default function WebsitePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Website Works - stanpixels creatives",
    url: "https://thestanpixels.com/our-work/website",
    description: "Explore our website portfolio.",
  };

  const websiteWorks = [
    {
      id: 1,
      title: "Payment Integration",
      image: "/placeholder.jpg",
      demoUrl: "/our-work/website/1",
      price: "KSH 15,000",
    },
    {
      id: 2,
      title: "Website Redesign",
      image: "/placeholder.jpg",
      demoUrl: "https://example-redesign.com",
      price: "KSH 45,000",
    },
    {
      id: 3,
      title: "UI/UX Design",
      image: "/placeholder.jpg",
      demoUrl: "/our-work/website/3",
      price: "KSH 25,000",
    },
    {
      id: 4,
      title: "NGO Website With MPesa Donation ",
      image: "/ww1.png",
      demoUrl: "https://bidiigirlsprogramme.org/",
      price: "KSH 35,000",
    },
    {
      id: 5,
      title: "Corporate Website",
      image: "/ww2.png",
      demoUrl: "https://nopaltechgrouplimited.co.ke/",
      price: "KSH 30,000",
    },
    {
      id: 6,
      title: "Tours & Travel website",
      image: "/ww3.png",
      demoUrl: "https://moonraldstravelsandsafaris.co.ke/",
      price: "KSH 25,000",
    },
    {
      id: 7,
      title: "WiFi Services website",
      image: "/ww4.png",
      demoUrl: "https://ultralinks.vercel.app/",
      price: "KSH 25,000",
    },
    {
      id: 8,
      title: "Real Estate website",
      image: "/ww5.png",
      demoUrl: "https://pelekproperties.co.ke/",
      price: "KSH 40,000",
    },
    {
      id: 9,
      title: "Business Profile",
      image: "/ww6.png",
      demoUrl: "https://terramicalimited.com/",
      price: "KSH 25,000",
    },
    {
      id: 10,
      title: "finetech Website",
      image: "/ww7.png",
      demoUrl: "https://ai-invoice-generator-ddxr.vercel.app/",
      price: "KSH 30,000",
    },
    {
      id: 11,
      title: "Law Firm Website | finetech",
      image: "/ww8.png",
      demoUrl: "https://harmonia-ai.vercel.app/",
      price: "KSH 30,000",
    },
    {
      id: 12,
      title: "Agriculture NGO",
      image: "/ww9.png",
      demoUrl: "https://imcaa.vercel.app/",
      price: "KSH 30,000",
    },
    {
      id: 13,
      title: "Mpesa Intergration",
      image: "/ww9.png",
      demoUrl: "https://example10.com",
      price: "KSH 6,000",
    },
  ];

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
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Website Works</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Discover our website portfolio.
        </p>
      </section>

      {/* Works Section */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {websiteWorks.map((work) => (
            <div key={work.id} className="bg-neutral-800 p-4 rounded-lg">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium">{work.title}</h3>
                <p className="text-[#3AB3FF] font-bold">{work.price}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                {work.id === 1 && (
                  <Button
                    asChild
                    variant="outline"
                    className="bg-transparent border-[#3ab3ff] text-[#3ab3ff] hover:bg-[#3ab3ff]/20 w-full md:w-1/2"
                  >
                    <Link href={work.demoUrl}>View Details</Link>
                  </Button>
                )}
                {work.id > 3 && (
                  <Button
                    asChild
                    variant="outline"
                    className="bg-transparent border-[#3ab3ff] text-[#3ab3ff] hover:bg-[#3ab3ff]/20 w-full md:w-1/2"
                  >
                    <a
                      href={work.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                )}
                <Button
                  asChild
                  className={`bg-[#3ab3ff] text-black hover:bg-[#2a9eff] ${
                    work.id <= 3 && work.id !== 1 ? "w-full" : "w-full md:w-1/2"
                  }`}
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
      </section>

      {/* Quotation Inclusives Section */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Quotation Inclusives
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Hosting & Domain */}
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#3AB3FF]">
                Hosting & Domain
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 1 Year Domain Registration</li>
                <li>• 1 Year Hosting (Shared/Cloud)</li>
                <li>• SSL Certificate (Free)</li>
                <li>• Email Setup (up to 5 accounts)</li>
                <li>• CDN Integration</li>
                <li>• Daily Backups</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#3AB3FF]">
                Payment Terms
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Initial Deposit</span>
                  <span className="font-medium text-white">50%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Development Phase</span>
                  <span className="font-medium text-white">25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Final Payment</span>
                  <span className="font-medium text-white">25%</span>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-600">
                  <p className="text-sm text-gray-400">
                    Payments due within 7 days of milestones.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    * Timeline may vary depending on project complexity, team
                    availability, and client responsiveness.
                  </p>
                </div>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#3AB3FF]">
                Client Responsibilities
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2 text-white">
                    Content & Assets
                  </h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Provide website content (text, images)</li>
                    <li>• Logo and brand assets</li>
                    <li>• Access to existing systems if needed</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2 text-white">Communication</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Timely feedback (48hr response time)</li>
                    <li>• Content approval within deadlines</li>
                    <li>• Availability for testing phase</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Website Project?
        </h2>
        <p className="text-lg opacity-80 mb-8">
          Let's create something amazing together.
        </p>
        <a
          href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20a%20quote%20for%20a%20website%20project"
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
