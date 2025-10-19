"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";
import LazyVideo from "./lazy-video";
import Image from "next/image";

interface FooterContent {
  tagline: string;
  copyright: string;
}

const defaultContent: FooterContent = {
  tagline:
    "We combine innovative design with advanced technology to help brands tell their stories and connect with audiences .",
  copyright: "© 2025 — stanpixels creatives ",
};

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent);

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("stanpixels-content");
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        if (parsed.footer) {
          setContent(parsed.footer);
        }
      } catch (error) {
        console.error("Error parsing saved content:", error);
      }
    }
  }, []);

  return (
    <section className="text-white">
      {/* Contact CTA */}

      {/* Download the app */}
      <div className="container mx-auto px-4 py-12 sm:py-16"></div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Image
                  src="/icon.png"
                  alt="stanpixels logo"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span className="text-xl font-semibold text-blue-300">
                  stanpixels
                </span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">
                {content.tagline}
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Navigation
                </h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li>
                    <Link href="/" className="hover:text-blue-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#features" className="hover:text-blue-300">
                      Features
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://g.page/your-business-id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-300"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <Link href="#pricing" className="hover:text-blue-300">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="hover:text-blue-300">
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/referral"
                      title="Programme offering 10% on all website referrals upon completion of the project. Terms and conditions apply."
                      className="hover:text-blue-300"
                    >
                      Referral
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Social media
                </h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://www.instagram.com/stanpixels_creatives?igsh=MWVraDBmbnBpdzQ3aw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-300"
                      aria-label="Follow stanpixels on Instagram"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Twitter className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://x.com/stanpixels?t=x2fNgJXGrEH8dw1uA0dFWQ&s=09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-300"
                      aria-label="Follow stanpixels on X/Twitter"
                    >
                      X/Twitter
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Youtube className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://www.tiktok.com/@stanpixelscreatives0?_t=ZM-90dENGcqTXQ&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-300"
                      aria-label="Follow stanpixels on TikTok"
                    >
                      TikTok
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-4 w-4 text-neutral-400 font-bold text-sm flex items-center justify-center">
                      P
                    </span>
                    <a
                      href="https://pin.it/4RyigEXre"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-300"
                      aria-label="Follow stanpixels on Pinterest"
                    >
                      Pinterest
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-4 w-4 text-neutral-400 font-bold text-sm flex items-center justify-center">
                      Be
                    </span>
                    <a
                      href="https://www.behance.net/hikyqunke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-300"
                      aria-label="Follow stanpixels on Behance"
                    >
                      Behance
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-4 w-4 text-neutral-400 font-bold text-sm flex items-center justify-center">
                      in
                    </span>
                    <a
                      href="https://www.linkedin.com/in/stanley-ndegwa-a49a96377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-300"
                      aria-label="Follow stanpixels on LinkedIn"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="/revisions" className="hover:text-blue-300">
                Revision Policy
              </Link>
              <Link href="/t&c" className="hover:text-blue-300">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
