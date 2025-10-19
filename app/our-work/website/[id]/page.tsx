// app/our-work/website/[id]/page.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SuspenseSiteHeader } from "@/components/suspense-site-header";

interface PageProps {
  params: {
    id: string;
  };
}

export default function WebsiteWorkDetail({ params }: PageProps) {
  const { id } = params;

  // Mock data for different website works
  const worksData = {
    1: {
      title: "Payment Integration",
      description:
        "Seamless payment integration using Daraja API and HashPay API for secure transactions.",
      images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
      technologies: ["Daraja API", "HashPay API", "M-Pesa", "Node.js"],
      liveUrl: "https://example.com",
    },
    2: {
      title: "Website Redesign",
      description:
        "Complete website redesign for both custom code and WordPress platforms, including new feature updates and modern UI improvements.",
      images: [],
      technologies: ["React", "WordPress", "PHP", "MySQL"],
      liveUrl: "https://example-redesign.com",
    },
    3: {
      title: "UI/UX Design",
      description:
        "Comprehensive UI/UX design services focusing on user experience optimization and modern design principles.",
      images: [],
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      liveUrl: "https://example.com",
    },
  };

  const work =
    worksData[parseInt(id) as keyof typeof worksData] || worksData[1];

  const suggestedWorks = [
    { id: 2, title: "Portfolio Website 2", image: "/placeholder.jpg" },
    { id: 3, title: "Corporate Site 3", image: "/placeholder.jpg" },
    { id: 4, title: "Landing Page 4", image: "/placeholder.jpg" },
  ];

  return (
    <>
      <SuspenseSiteHeader />
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{work.title}</h1>
          <p className="text-lg md:text-xl opacity-80 mb-8">
            {work.description}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {work.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-blue-400 text-black px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              <a href={work.liveUrl} target="_blank" rel="noopener noreferrer">
                View Live Site
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sample Websites */}
      {parseInt(id) === 1 && (
        <section className="py-16 bg-neutral-900 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#3AB3FF]">
                Sample Websites with Successful Payment Integration
              </h3>
              <p className="text-gray-300 mb-6">
                Our payment integrations are secure, reliable, and handle
                thousands of transactions safely.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-neutral-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-white">
                    E-Commerce Store
                  </h4>
                  <a
                    href="https://example1.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3AB3FF] hover:text-[#2a9eff] text-sm underline"
                  >
                    View Live Site →
                  </a>
                  <p className="text-gray-400 text-xs mt-2">
                    Daraja API Integration
                  </p>
                </div>
                <div className="bg-neutral-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-white">
                    Service Booking Platform
                  </h4>
                  <a
                    href="https://example2.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3AB3FF] hover:text-[#2a9eff] text-sm underline"
                  >
                    View Live Site →
                  </a>
                  <p className="text-gray-400 text-xs mt-2">
                    HashPay API Integration
                  </p>
                </div>
                <div className="bg-neutral-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-white">
                    NGO Donation Portal
                  </h4>
                  <a
                    href="https://bidiigirlsprogramme.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3AB3FF] hover:text-[#2a9eff] text-sm underline"
                  >
                    View Live Site →
                  </a>
                  <p className="text-gray-400 text-xs mt-2">
                    M-Pesa Integration
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-sm flex items-center">
                  <span className="mr-2">🛡️</span>
                  All integrations are PCI DSS compliant and use secure
                  encryption protocols.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Payment Integration Details */}
      {parseInt(id) === 1 && (
        <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Payment Integration Details
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Project Steps */}
              <div className="bg-neutral-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#3AB3FF]">
                  Project Steps
                </h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-[#3AB3FF] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      1
                    </span>
                    <span>Requirements gathering and API selection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#3AB3FF] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      2
                    </span>
                    <span>API credentials setup and testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#3AB3FF] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      3
                    </span>
                    <span>Frontend integration and UI development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#3AB3FF] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      4
                    </span>
                    <span>Backend webhook handling and security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#3AB3FF] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      5
                    </span>
                    <span>Testing, deployment and documentation</span>
                  </li>
                </ol>
              </div>

              {/* Available APIs */}
              <div className="bg-neutral-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#3AB3FF]">
                  Available APIs
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-white">Daraja API</h4>
                    <p className="text-gray-300 text-sm">
                      Safaricom's M-Pesa API for STK Push, C2B, B2C, and B2B
                      transactions
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">HashPay API</h4>
                    <p className="text-gray-300 text-sm">
                      Alternative payment gateway supporting multiple payment
                      methods
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-white">Pesapal API</h4>
                    <p className="text-gray-300 text-sm">
                      Comprehensive payment gateway with card, mobile, and bank
                      payments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div className="mt-8 bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#3AB3FF]">
                Client Responsibilities
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-medium mb-2 text-white">
                    Technical Requirements
                  </h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Provide API credentials and access</li>
                    <li>• Business registration details for API setup</li>
                    <li>• Test payment amounts for verification</li>
                    <li>• Domain/URL for webhook endpoints</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-white">
                    Communication & Testing
                  </h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Timely feedback on payment flows</li>
                    <li>• Availability for testing payment scenarios</li>
                    <li>• Approval of transaction success/failure flows</li>
                    <li>• Final sign-off on payment integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Suggested Works */}
      <section className="py-16 bg-black text-white px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          More Website Work
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {suggestedWorks.map((suggested) => (
            <div
              key={suggested.id}
              className="bg-neutral-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={suggested.image}
                alt={suggested.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{suggested.title}</h3>
              <Button asChild>
                <Link href={`/our-work/website/${suggested.id}`}>View</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Behance Button */}
      <a
        href="https://www.behance.net/stanpixels"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-[#0166f0] text-white p-3 rounded-full shadow-lg hover:bg-[#0155d0] transition-all text-sm font-bold liquid-glass-button"
      >
        Be
      </a>

      {/* Floating Order Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          asChild
          className="bg-[#3AB3FF] text-black font-medium rounded-full px-6 py-3 hover:bg-[#2a9eff] shadow-lg"
        >
          <a
            href={`https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20order%20${encodeURIComponent(
              work.title
            )}%20priced%20at%20${encodeURIComponent("Contact for pricing")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Now
          </a>
        </Button>
      </div>
    </>
  );
}
