"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";
import { ExamplesDialog } from "./examples-dialog";

type Feature = { text: string; muted?: boolean };

const ACCENT = "#3ab3ff";

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
      <span
        className={`text-sm ${muted ? "text-neutral-500" : "text-neutral-200"}`}
      >
        {text}
      </span>
    </li>
  );
}

type Currency = "INR" | "USD";

const PRICES: Record<
  Currency,
  { startup: string; pro: string; premium: string; save: string }
> = {
  INR: {
    startup: "₹25,000/-",
    pro: "₹55,000/-",
    premium: "₹1,70,500/-",
    save: "Save Flat ₹1,500/-",
  },
  USD: {
    startup: "$299",
    pro: "$699",
    premium: "$2,049",
    save: "Save $20",
  },
};

function guessLocalCurrency(): Currency {
  const lang = typeof navigator !== "undefined" ? navigator.language : "";
  const tz =
    typeof Intl !== "undefined"
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : "";
  if (/-(IN|PK|BD)\b/i.test(lang) || /(Kolkata|Karachi|Dhaka)/i.test(tz || ""))
    return "INR";
  return "USD";
}

// Startup demo videos
const startupVideos = [
  "ysz5S6PUM-U",
  "aqz-KE-bpKQ",
  "ScMzIvxBSi4",
  "dQw4w9WgXcQ",
  "VYOjWnS4cMY",
  "9bZkp7q19f0",
  "3JZ_D3ELwOQ",
  "e-ORhEE9VVg",
  "fJ9rUzIMcZQ",
];

// Pro demo videos
const proVideos = [
  "ASV2myPRfKA",
  "eTfS2lqwf6A",
  "KALbYHmGV4I",
  "Go0AA9hZ4as",
  "sB7RZ9QCOAg",
  "TK2WboJOJaw",
  "5Xq7UdXXOxI",
  "kMjWCidQSK0",
  "RKKdQvwKOhQ",
];

// Premium demo videos
const premiumVideos = [
  "v2AC41dglnM",
  "pRpeEdMmmQ0",
  "3AtDnEC4zak",
  "JRfuAukYTKg",
  "LsoLEjrDogU",
  "RB-RcX5DS5A",
  "hTWKbfoikeg",
  "YQHsXMglC9A",
  "09R8_2nJtjg",
];

export function Pricing() {
  const [openPlan, setOpenPlan] = useState<
    null | "Startup" | "Pro" | "Premium"
  >(null);
  const [currency, setCurrency] = useState<Currency>("USD");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/api/geo", { cache: "no-store" });
        if (!res.ok) throw new Error("geo failed");
        const data = await res.json();
        if (!cancelled) setCurrency(data?.currency === "INR" ? "INR" : "USD");
      } catch {
        if (!cancelled) setCurrency(guessLocalCurrency());
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="pricing"
      className="text-white"
      itemScope
      itemType="https://schema.org/PriceSpecification"
    >
      <Tabs defaultValue="website" className="w-full">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
              style={{
                backgroundColor: "rgba(198,255,58,0.12)",
                color: ACCENT,
              }}
            >
              Our Pricing and Packages
            </div>
            <h2
              className="text-4xl font-extrabold tracking-tight sm:text-5xl"
              itemProp="name"
            >
              Our Pricing.
            </h2>
            <p
              className="mx-auto mt-2 max-w-xl text-sm text-neutral-400"
              itemProp="description"
            >
              No hidden fees. Just world-class visuals that fits your budget.
            </p>
          </div>

          <TabsList className="grid w-full grid-cols-2 mb-8 mt-8 bg-transparent gap-4">
            <TabsTrigger
              value="website"
              className="data-[state=active]:bg-[#3ab3ff] data-[state=active]:text-black bg-transparent text-white border-0"
            >
              Website
            </TabsTrigger>
            <TabsTrigger
              value="social-media"
              className="data-[state=active]:bg-[#3ab3ff] data-[state=active]:text-black bg-transparent text-white border-0"
            >
              Branding
            </TabsTrigger>
          </TabsList>

          <TabsContent value="website">
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {/* Basic Website */}
              <Card
                className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <CardHeader className="space-y-3 pb-4">
                  <div
                    className="text-sm font-semibold text-neutral-200"
                    itemProp="name"
                  >
                    Starter
                  </div>
                  <div className="flex items-end gap-2 text-neutral-100">
                    <div
                      className="text-sm font-bold tracking-tight"
                      itemProp="price"
                    >
                      Ksh.25,000
                    </div>
                    <meta itemProp="priceCurrency" content="USD" />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: "#0a0a0a",
                        color: "#ffffff",
                        border: "1px solid #333",
                      }}
                    >
                      <Link href="/our-work?tab=website">View Examples</Link>
                    </Button>
                    <Button
                      asChild
                      className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-black shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <Link
                        href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20order%20Starter%20Website"
                        target="_blank"
                      >
                        Order Now
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="grid gap-2" itemProp="description">
                    {[
                      "Up to 5 pages",
                      "Responsive design",
                      "Basic SEO setup",
                      "Contact form",
                      "1 month support",
                    ].map((f, i) => (
                      <FeatureItem key={i} text={f} />
                    ))}
                  </ul>
                </CardContent>
                <CardFooter />
              </Card>

              {/* Pro Website */}
              <Card
                className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <CardHeader className="space-y-3 pb-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="text-sm font-semibold text-neutral-200"
                      itemProp="name"
                    >
                      Professional
                    </div>
                    <span className="bg-[#3ab3ff] text-black text-xs font-bold px-2 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                  <div className="flex items-end gap-2 text-neutral-100">
                    <div
                      className="text-sm font-bold tracking-tight"
                      itemProp="price"
                    >
                      Ksh.35,000
                    </div>
                    <meta itemProp="priceCurrency" content="USD" />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: "#0a0a0a",
                        color: "#ffffff",
                        border: "1px solid #333",
                      }}
                    >
                      <Link href="/our-work?tab=website">View Examples</Link>
                    </Button>
                    <Button
                      asChild
                      className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-black shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <Link
                        href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20order%20Professional%20Website"
                        target="_blank"
                      >
                        Order Now
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="grid gap-2" itemProp="description">
                    {[
                      "Up to 10 pages",
                      "Advanced responsive design",
                      "SEO optimization",
                      "Google Analytics setup",
                      "3rd party integration",
                      "CMS integration",
                      "Admin panel",
                      "3 months support",
                    ].map((f, i) => (
                      <FeatureItem key={i} text={f} />
                    ))}
                  </ul>
                </CardContent>
                <CardFooter />
              </Card>

              {/* Premium Website */}
              <Card
                className="relative overflow-hidden rounded-2xl liquid-glass-enhanced shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <CardHeader className="relative space-y-3 pb-4">
                  <div
                    className="text-sm font-semibold text-neutral-200"
                    itemProp="name"
                  >
                    E-commerce
                  </div>
                  <div className="flex items-end gap-2 text-white">
                    <div
                      className="text-sm font-bold tracking-tight"
                      itemProp="price"
                    >
                      Ksh.70,000
                    </div>

                    <meta itemProp="priceCurrency" content="USD" />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: "#0a0a0a",
                        color: "#ffffff",
                        border: "1px solid #333",
                      }}
                    >
                      <Link href="/our-work?tab=website">View Examples</Link>
                    </Button>
                    <Button
                      asChild
                      className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-black shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <Link
                        href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20order%20E-commerce%20Website"
                        target="_blank"
                      >
                        Order Now
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="relative pt-0">
                  <ul className="grid gap-2" itemProp="description">
                    {[
                      "Unlimited pages",
                      "Custom design & development",
                      "Advanced SEO & analytics",
                      "Full e-commerce integration",
                      "Basic SEO + Product SEO",
                      "Custom functionality",
                      "Sewcure Payment gateway",
                      "Google Analytics setup",
                      "6 months support",
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4"
                          style={{ color: ACCENT }}
                        />
                        <span className="text-sm text-neutral-200">{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter />
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="social-media">
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {/* Basic Graphics Pack */}
              <Card
                className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <CardHeader className="space-y-3 pb-4">
                  <div
                    className="text-sm font-semibold text-neutral-200"
                    itemProp="name"
                  >
                    Basic Pack
                  </div>
                  <div className="flex items-end gap-2 text-neutral-100">
                    <div
                      className="text-sm font-bold tracking-tight"
                      itemProp="price"
                    >
                      Ksh.15,000
                    </div>

                    <meta itemProp="priceCurrency" content="USD" />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: "#0a0a0a",
                        color: "#ffffff",
                        border: "1px solid #333",
                      }}
                    >
                      <Link href="/our-work?tab=branding">View Examples</Link>
                    </Button>
                    <Button
                      asChild
                      className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-black shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <Link
                        href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20order%20Basic%20Pack"
                        target="_blank"
                      >
                        Order Now
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="grid gap-2" itemProp="description">
                    {[
                      "20 social media posts",
                      "Stories & highlights",
                      "Basic branding",
                      "2 revisions per post",
                      "Perfect for posting 1month",
                      "Perfect for ads,instagram & facebook",
                      "Delivered in 48hrs",
                    ].map((f, i) => (
                      <FeatureItem key={i} text={f} />
                    ))}
                  </ul>
                </CardContent>
                <CardFooter />
              </Card>

              {/* Pro Graphics Pack */}
              <Card
                className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <CardHeader className="space-y-3 pb-4">
                  <div
                    className="text-sm font-semibold text-neutral-200"
                    itemProp="name"
                  >
                    Startup Pack
                  </div>
                  <div className="flex items-end gap-2 text-neutral-100">
                    <div
                      className="text-sm font-bold tracking-tight"
                      itemProp="price"
                    >
                      Ksh 10,000
                    </div>
                    <meta itemProp="priceCurrency" content="USD" />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: "#0a0a0a",
                        color: "#ffffff",
                        border: "1px solid #333",
                      }}
                    >
                      <Link href="/our-work?tab=branding">View Examples</Link>
                    </Button>
                    <Button
                      asChild
                      className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-black shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <Link
                        href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20order%20Startup%20Pack"
                        target="_blank"
                      >
                        Order Now
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="grid gap-2" itemProp="description">
                    {[
                      "Logo design",
                      "basic brand kit",
                      "3 posters/flyers",
                      "receipt  + invoice/letterhead+ businesscard",
                      "2 revisions per post",
                      "High-resolution files",
                      "Delivered in 48hrs",
                    ].map((f, i) => (
                      <FeatureItem key={i} text={f} />
                    ))}
                  </ul>
                </CardContent>
                <CardFooter />
              </Card>

              {/* Premium Graphics Pack */}
              <Card
                className="relative overflow-hidden rounded-2xl liquid-glass-enhanced shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <CardHeader className="relative space-y-3 pb-4">
                  <div
                    className="text-sm font-semibold text-neutral-200"
                    itemProp="name"
                  >
                    Event Pack
                  </div>
                  <div className="flex items-end gap-2 text-white">
                    <div
                      className="text-sm font-bold tracking-tight"
                      itemProp="price"
                    >
                      Ksh 20,000
                    </div>

                    <meta itemProp="priceCurrency" content="USD" />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: "#0a0a0a",
                        color: "#ffffff",
                        border: "1px solid #333",
                      }}
                    >
                      <Link href="/our-work?tab=branding">View Examples</Link>
                    </Button>
                    <Button
                      asChild
                      className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-black shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <Link
                        href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20order%20Event%20Pack"
                        target="_blank"
                      >
                        Order Now
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="relative pt-0">
                  <ul className="grid gap-2" itemProp="description">
                    {[
                      "Event logo & theme",
                      "social media post & banners",
                      "attendee spotlight",
                      "Backdrops & stage design",
                      "tickets & invitations",
                      "event merchandise",
                      "Unlimited revisions",
                      "Priority support",
                      "Delivered in 72hrs",
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4"
                          style={{ color: ACCENT }}
                        />
                        <span className="text-sm text-neutral-200">{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter />
              </Card>
            </div>
          </TabsContent>

          {/* Our Work Carousel */}
          <section className="py-16 bg-neutral-900 text-white mt-16 liquid-glass rounded-2xl">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8 ml-4 mr-4">
                <h2 className="text-3xl font-bold">Recent Works</h2>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#3ab3ff] text-[#3ab3ff] hover:bg-[#3ab3ff] hover:text-black bg-transparent"
                >
                  <Link href="/our-work">View More</Link>
                </Button>
              </div>
              <div className="flex overflow-x-auto scrollbar-hide gap-6 md:grid md:grid-cols-2 lg:grid-cols-5 md:overflow-visible">
                {/* Motion Graphics Card */}
                <div className="bg-neutral-800 p-4 rounded-lg flex-shrink-0 w-64 md:w-auto">
                  <video
                    src="https://mu73aitmabymkzpg.public.blob.vercel-storage.com/motion.mp4"
                    loop
                    muted
                    autoPlay
                    className="w-full h-36 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-medium mb-3">Motion Graphics</h3>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-[#3ab3ff] text-[#3ab3ff] hover:bg-[#3ab3ff] hover:text-black bg-transparent"
                    >
                      <Link href="/our-work/branding/12">View</Link>
                    </Button>
                    <Button
                      asChild
                      className="flex-1 bg-[#3ab3ff] text-black hover:bg-[#2a9eff]"
                    >
                      <a
                        href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20order%20Motion%20Graphics"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Order
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Club Poster Card */}
                <div className="bg-neutral-800 p-4 rounded-lg flex-shrink-0 w-64 md:w-auto">
                  <img
                    src="/sg7.jpg"
                    alt="Club Poster"
                    className="w-full h-36 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-medium mb-3">Club Poster</h3>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-[#3ab3ff] text-[#3ab3ff] hover:bg-[#3ab3ff] hover:text-black bg-transparent"
                    >
                      <Link href="/our-work/branding/1">View</Link>
                    </Button>
                    <Button
                      asChild
                      className="flex-1 bg-[#3ab3ff] text-black hover:bg-[#2a9eff]"
                    >
                      <a
                        href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20order%20Club%20Poster"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Order
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Corporate Website Card */}
                <div className="bg-neutral-800 p-4 rounded-lg flex-shrink-0 w-64 md:w-auto">
                  <img
                    src="/ww2.png"
                    alt="Corporate Website"
                    className="w-full h-36 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-medium mb-3">
                    Corporate Website
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-[#3ab3ff] text-[#3ab3ff] hover:bg-[#3ab3ff] hover:text-black bg-transparent"
                    >
                      <Link href="/our-work/website/5">View</Link>
                    </Button>
                    <Button
                      asChild
                      className="flex-1 bg-[#3ab3ff] text-black hover:bg-[#2a9eff]"
                    >
                      <a
                        href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20order%20Corporate%20Website"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Order
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Brand Identity Card */}
                <div className="bg-neutral-800 p-4 rounded-lg flex-shrink-0 w-64 md:w-auto">
                  <img
                    src="/sg6.jpg"
                    alt="Brand Identity"
                    className="w-full h-36 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-medium mb-3">Brand Identity</h3>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-[#3ab3ff] text-[#3ab3ff] hover:bg-[#3ab3ff] hover:text-black bg-transparent"
                    >
                      <Link href="/our-work/branding/6">View</Link>
                    </Button>
                    <Button
                      asChild
                      className="flex-1 bg-[#3ab3ff] text-black hover:bg-[#2a9eff]"
                    >
                      <a
                        href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20order%20Brand%20Identity"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Order
                      </a>
                    </Button>
                  </div>
                </div>

                {/* NGO Website Card */}
                <div className="bg-neutral-800 p-4 rounded-lg flex-shrink-0 w-64 md:w-auto">
                  <img
                    src="/ww1.png"
                    alt="NGO Website"
                    className="w-full h-36 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-medium mb-3">NGO Website</h3>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-[#3ab3ff] text-[#3ab3ff] hover:bg-[#3ab3ff] hover:text-black bg-transparent"
                    >
                      <Link href="/our-work/website/4">View</Link>
                    </Button>
                    <Button
                      asChild
                      className="flex-1 bg-[#3ab3ff] text-black hover:bg-[#2a9eff]"
                    >
                      <a
                        href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20order%20NGO%20Website"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Order
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Modals */}
        <ExamplesDialog
          open={openPlan === "Startup"}
          onOpenChange={(v) => setOpenPlan(v ? "Startup" : null)}
          planName="Startup Plan"
          price={PRICES[currency].startup}
          videoIds={startupVideos}
        />
        <ExamplesDialog
          open={openPlan === "Pro"}
          onOpenChange={(v) => setOpenPlan(v ? "Pro" : null)}
          planName="Pro Plan"
          price={PRICES[currency].pro}
          videoIds={proVideos}
        />
        <ExamplesDialog
          open={openPlan === "Premium"}
          onOpenChange={(v) => setOpenPlan(v ? "Premium" : null)}
          planName="Premium Plan"
          price={PRICES[currency].premium}
          videoIds={premiumVideos}
        />
      </Tabs>
    </section>
  );
}
