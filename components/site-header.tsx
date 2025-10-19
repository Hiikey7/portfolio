"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import {
  Menu,
  Briefcase,
  FolderOpen,
  ShoppingBag,
  BookOpen,
  Info,
  ChevronDown,
} from "lucide-react";

export function SiteHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const links = [
    { href: "/", label: "Home", icon: Briefcase },
    {
      href: "/our-work",
      label: "Our Work",
      icon: FolderOpen,
      submenu: [
        { href: "/our-work/branding", label: "Branding" },
        { href: "/our-work/website", label: "Website" },
      ],
    },
    { href: "/merchandise", label: "Merchandise", icon: ShoppingBag },
    { href: "/resources", label: "Resources", icon: BookOpen },
    { href: "/About", label: "About", icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <Image
              src="/icon.png"
              alt="stanpixels logo"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            <span className="font-semibold tracking-wide text-white">
              stanpixels
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            {links.map((l) =>
              l.submenu ? (
                <DropdownMenu key={l.href}>
                  <DropdownMenuTrigger
                    className={`flex items-center gap-1 transition-colors border-0 ${
                      pathname.startsWith(l.href)
                        ? "text-[#3ab3ff]"
                        : "hover:text-[#3ab3ff]"
                    }`}
                  >
                    {l.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="bg-gray-900 border-gray-700"
                    side="bottom"
                    align="start"
                  >
                    {l.submenu.map((sub) => (
                      <DropdownMenuItem key={sub.href} asChild>
                        <Link
                          href={sub.href}
                          className={`transition-colors text-white ${
                            sub.href ===
                            pathname +
                              (searchParams.toString()
                                ? "?" + searchParams.toString()
                                : "")
                              ? "text-[#3ab3ff]"
                              : "hover:bg-[#3AB3FF] hover:text-black"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`transition-colors ${
                    pathname === l.href
                      ? "text-[#3ab3ff]"
                      : "hover:text-[#3ab3ff]"
                  }`}
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-[rgb(58,179,255)] text-black font-medium rounded-lg px-6 py-2.5
                         hover:bg-[rgb(42,158,239)] hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              <a
                href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20chat%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat With Us
              </a>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="liquid-glass border-gray-800 p-0 w-64 flex flex-col"
              >
                {/* Brand Header */}
                <div className="flex items-center gap-1.5 px-4 py-4 border-b border-gray-800">
                  <Image
                    src="/icon.png"
                    alt="stanpixels logo"
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                  <span className="font-semibold tracking-wide text-white text-lg">
                    stanpixels
                  </span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  {links.map((l) =>
                    l.submenu ? (
                      <Collapsible key={l.href}>
                        <CollapsibleTrigger
                          className={`flex items-center justify-between w-full px-4 py-3 transition-colors ${
                            pathname.startsWith(l.href)
                              ? "text-[#3ab3ff]"
                              : "hover:bg-gray-900 hover:text-[#3ab3ff]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                              <l.icon className="h-4 w-4" />
                            </span>
                            <span className="text-sm">{l.label}</span>
                          </div>
                          <ChevronDown className="h-4 w-4" />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          {l.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`flex items-center gap-3 px-8 py-2 transition-colors ${
                                sub.href ===
                                pathname +
                                  (searchParams.toString()
                                    ? "?" + searchParams.toString()
                                    : "")
                                  ? "text-[#3ab3ff]"
                                  : "hover:bg-gray-900 hover:text-[#3ab3ff]"
                              }`}
                            >
                              <span className="text-sm">{sub.label}</span>
                            </Link>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Link
                        key={l.href}
                        href={l.href}
                        className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                          pathname === l.href
                            ? "text-[#3ab3ff]"
                            : "hover:bg-gray-900 hover:text-[#3ab3ff]"
                        }`}
                      >
                        <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                          <l.icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm">{l.label}</span>
                      </Link>
                    )
                  )}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Button
                    asChild
                    className="w-full bg-[rgb(58,179,255)] text-black font-medium rounded-lg px-6 py-2.5
                               hover:bg-[rgb(42,158,239)] hover:shadow-md hover:scale-[1.02]
                               transition-all"
                  >
                    <a
                      href="https://wa.me/254722465983?text=Hello%2C%20I%20want%20a%20quote"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get a Quote
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
