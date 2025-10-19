"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeaturesContent {
  title: string;
  subtitle: string;
}

const defaultContent: FeaturesContent = {
  title: "Try out our free invoice & receipt maker today.",
  subtitle: "Discover our unique approach to 3D animation",
};

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent);

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("stanpixels-content");
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        if (parsed.features) {
          setContent(parsed.features);
        }
      } catch (error) {
        console.error("Error parsing saved content:", error);
      }
    }
  }, []);

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {content.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Adaptability Card - Hidden on mobile */}
        <Card className="hidden md:block liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">
              Fast & Easy
            </p>
            <CardTitle className="mt-1 text-xl text-white">
              Start creating professional invoices and receipts for free today!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/intuitive-1.png"
                  alt="Close-up smartphone camera module on textured leather back"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/intuitive-2.png"
                  alt="Hand gripping textured phone back — macro detail"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Client Love Card - Always visible */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">
              Vinnation GFX ~ Freelancer
            </p>
            <CardTitle className="mt-1 text-xl text-white">
              “I love how quick and simple it is to create branded invoices.
              It’s saved me so much time and made my client communication look
              polished.”
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="flex items-end gap-4">
                <div className="text-4xl sm:text-5xl font-bold text-blue-300">
                  4.9
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 sm:h-5 sm:w-5 fill-blue-300 text-blue-300"
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  asChild
                  size="sm"
                  className="bg-[#3ab3ff] text-black hover:bg-[#2a9eff]"
                >
                  <a
                    href="https://receipt-maker.stanpixels.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try it now
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#3ab3ff]"
                  onClick={() => {
                    const message =
                      "Try out this free invoice and receipt generator";
                    if (navigator.share) {
                      navigator.share({
                        title: "Try our free invoice and receipt maker",
                        text: message,
                        url: "https://receipt-maker.stanpixels.co.ke",
                      });
                    } else {
                      navigator.clipboard.writeText(
                        message + ": https://receipt-maker.stanpixels.co.ke"
                      );
                      alert("Link copied to clipboard!");
                    }
                  }}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={"/images/top-rated-1.png"}
                width={280}
                height={160}
                alt="Product sketch concepts of backpack on paper"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
              <Image
                src={"/images/top-rated-2.png"}
                width={280}
                height={160}
                alt="Backpacks on stage with Smartpack PRO lighting"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
