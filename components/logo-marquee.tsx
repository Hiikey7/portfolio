"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null);

  // Logo data with colors and content
  const logos = [
    { name: "Client 1", content: "image", image: "/s1.png" },
    { name: "Client 2", content: "image", image: "/s6.png" },
    { name: "Client 3", content: "image", image: "/s3.png" },
    { name: "Client 4", content: "image", image: "/s4.png" },
    { name: "Client 5", content: "image", image: "/s5.png" },
    { name: "Client 6", content: "image", image: "/s2.png" },
    { name: "Client 7", content: "image", image: "/s7.png" },
    { name: "Client 8", content: "image", image: "/s8.png" },
  ];

  const LogoCard = ({ logo, rowId }: { logo: any; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
        {logo.image ? (
          <div className="relative w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12">
            <Image
              src={logo.image || "/placeholder.svg"}
              alt={logo.name}
              fill
              className="object-contain opacity-90"
              sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"
            />
          </div>
        ) : logo.bg ? (
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${logo.bg} flex items-center justify-center`}
          >
            <span className={`text-sm sm:text-lg font-bold ${logo.color}`}>
              {logo.content}
            </span>
          </div>
        ) : (
          <span
            className={`text-lg sm:text-xl lg:text-2xl font-semibold ${logo.color}`}
          >
            {logo.content}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
            Meet our <span className="text-blue-300">top-tier</span>
            <br />
            customers
          </h2>
          <Link href="/About">
            <Button
              variant="outline"
              className="mt-4 sm:mt-0 liquid-glass hover:liquid-glass-enhanced bg-transparent"
            >
              Learn More
            </Button>
          </Link>
        </div>

        {/* Logo Marquee */}
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
              {/* Triple the logos for seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <LogoCard key={`first-${index}`} logo={logo} rowId="first" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
