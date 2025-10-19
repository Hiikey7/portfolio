// app/referral/page.tsx
import React from "react";
import Link from "next/link";
import { SuspenseSiteHeader } from "@/components/suspense-site-header";
import { Button } from "@/components/ui/button";
import { AppverseFooter } from "@/components/appverse-footer";

export default function ReferralPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Referral Programme - stanpixels creatives",
    url: "https://thestanpixels.com/referral",
    description:
      "Earn 10% of every website package upon completion of the project. Terms and conditions apply. Claim within 15 days upon completion of the project.",
  };

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
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Referral Programme
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Earn 10% of every website package upon completion of the project.
          Terms and conditions apply.
        </p>
      </section>

      {/* Programme Details */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="bg-blue-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Refer a Client</h3>
              <p className="opacity-80">
                Share your unique referral link with potential clients
                interested in website development.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Client Signs Up</h3>
              <p className="opacity-80">
                When your referral completes a website project with us, you
                become eligible for commission.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Earn 10% Commission
              </h3>
              <p className="opacity-80">
                Receive 10% of the website package value upon project
                completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-16 bg-black text-white px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Terms & Conditions
          </h2>
          <div className="space-y-4 text-sm opacity-80">
            <p>
              • Commission is paid only upon successful completion of the
              referred project.
            </p>
            <p>
              • The referral must be a new client who has not previously engaged
              with stanpixels.
            </p>
            <p>
              • Commission is calculated as 10% of the website package value.
            </p>
            <p>
              • Claims must be made within 15 days upon completion of the
              project.
            </p>
            <p>
              • stanpixels reserves the right to modify or terminate the
              programme at any time.
            </p>
            <p>
              • All referrals must be made through official channels and links.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Referring?
        </h2>
        <p className="text-lg opacity-80 mb-8">
          Get your unique referral link and start earning commissions today.
        </p>
        <Button
          asChild
          className="bg-blue-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-blue-300"
        >
          <a
            href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20get%20started%20with%20referral"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us to Get Started
          </a>
        </Button>
      </section>

      <AppverseFooter />
    </>
  );
}
