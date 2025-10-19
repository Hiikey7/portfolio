// app/resources/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Share2 } from "lucide-react";

export default function ResourcesPage() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Resources - stanpixels creatives",
    url: "https://thestanpixels.com/resources",
    description:
      "Access tutorials, prompts, and resources for branding and design.",
  };

  const resources = [
    {
      id: 1,
      title: "Realistic balloon Logo Prompt",
      tool: "ChatGPT",
      excerpt:
        "A hyper-realistic metallic foil balloon in the shape of the uploaded logo.",
      fullPrompt:
        "A hyper-realistic metallic foil balloon in the shape of the uploaded logo. The balloon should have a glossy, reflective surface and vibrant colors matching the logo design. It is floating outdoors in a bright park with blurred green trees in the background. The balloon is tied with a thin golden string and softly lit by natural sunlight. The scene should look photorealistic and cheerful.",
      image: "/r1.jpg",
    },
    {
      id: 2,
      title: "Mannequin Jersey Display Prompt",
      tool: "ChatGPT",
      excerpt:
        "A sleek, modern mannequin posed confidently in a sports store display",
      fullPrompt:
        "A sleek, modern mannequin posed confidently in a sports store display, wearing the latest FC Bar-celona home jersey. The jersey features the club's iconic deep blue and garnet red vertical stripes, with the Nike logo on the right chest and the Barcelona club crest on the left. The Spotify sponsor logo is visible across the center of the chest in white. The mannequin is also wearing matching blue shorts with a garnet trim, and long blue socks with subtle detailing. The display is set against a clean, softly lit background with subtle stadium elements blurred in the distance, giving a professional and stylish sportswear showroom vibe. The mannequin is matte black or glossy white with realistic musculature but no facial features, standing tall with one hand on its hip and the other relaxed. Lighting emphasizes the texture and fabric details of the jersey.",
      image: "/r2.jpg",
    },
    {
      id: 3,
      title: "Embroidered Patch Logo Prompt",
      tool: "ChatGPT",
      excerpt:
        "highly detailed football team logo designed as an embroidered patch on fabric",
      fullPrompt:
        "highly detailed football team logo designed as an embroidered patch on fabric, visible stitching and thread texture, soft fabric background, realistic shadows and highlights, ultra-realistic textile material, natural folds and wrinkles on fabric, fine thread detailing, 8k resolution, studio lighting, clean composition, no text outside the logo",
      image: "/r3.jpg",
    },
    {
      id: 4,
      title: "Keychain Mockup Prompt",
      tool: "ChatGPT",
      excerpt:
        "Create a photorealistic vertical image showing a custom acrylic keychain",
      fullPrompt:
        "Create a photorealistic vertical image showing a custom acrylic keychain version of the uploaded logo hanging from the zipper of a dark-colored backpack (e.g. black or grey). The logo must retain its original shape, color, and proportions without any alteration. The keychain should have a clear or glossy acrylic layer, clipped with a silver ring. Use soft daylight or diffused lighting to avoid yellow tones. Set the background in a modern outdoor setting, but keep it blurred to maintain focus on the logo keychain.",
      image: "/r4.jpg",
    },
    {
      id: 5,
      title: "Football Player Portrait Prompt",
      tool: "Gemini",
      excerpt:
        "A hyper-realistic ultra-close studio-style portrait of a  football player ",
      fullPrompt:
        " A hyper-realistic ultra-close studio-style portrait of a Galatasaray football player exactly resembling the uploaded reference photo. The player sits confidently in the locker room, wearing the official Galatasaray home jersey (red and yellow with sponsor and Nike logo), paired with red shorts, red knee-high football socks, and white football boots. He firmly holds a white football with red patterns and a clear Puma logo between his knees, looking directly at the camera with a serious and composed expression.Behind him, the locker room atmosphere is full of Galatasaray pride: multiple Galatasaray jerseys are hanging neatly inside the wooden lockers, with the Galatasaray crest logo clearly visible, illuminated by warm spotlighting in deep red and golden tones. The entire environment glows with Galatasaray’s signature colors — bright yellow and deep red.Camera & Style:Framing: Extreme close-up portrait, tight crop focusing on the player’s face, upper body, and the Puma ball.Lighting: Cinematic single spotlight with warm red-yellow reflections, subtle vignette, strong dramatic contrast.Lens: 50mm prime lens for natural portrait detail.Aperture: f/2.8 for crisp subject focus with soft locker background separation.Shutter Speed: 1/160 sec, ISO 200 for noise-free sharpness.Color Tone: Bold deep reds and golden yellows, vibrant and authentic Galatasaray locker-room identity.Mood: Strong, professional, inspirational sports portrait — showcasing Galatasaray spirit with Puma details.",
      image: "/r5.jpg",
    },
    /*
    {
      id: 6,
      title: "Animation Rigging Prompt 6",
      tool: "Houdini",
      excerpt: "Rig complex animations with procedural controls.",
      fullPrompt:
        "Set up an advanced rigging system for character animation with procedural controls.",
      image: "/r1.jpg",
    },
    {
      id: 7,
      title: "Particle Effects Prompt 7",
      tool: "Blender",
      excerpt: "Create dynamic particle systems for effects.",
      fullPrompt:
        "Design a particle system for smoke, fire, and explosion effects in a scene.",
      image: "/r1.jpg",
    },
    {
      id: 8,
      title: "Rendering Optimization Prompt 8",
      tool: "Arnold",
      excerpt: "Optimize renders for quality and minimal time.",
      fullPrompt:
        "Configure rendering settings for photorealistic output with minimal render time.",
      image: "/r1.jpg",
    },
    {
      id: 9,
      title: "Motion Graphics Prompt 9",
      tool: "After Effects",
      excerpt: "Design motion graphics with typography effects.",
      fullPrompt:
        "Create a motion graphics animation with typography and visual effects.",
      image: "/r1.jpg",
    },
    {
      id: 10,
      title: "VR Experience Prompt 10",
      tool: "Unreal Engine",
      excerpt: "Build immersive VR environments with physics.",
      fullPrompt:
        "Develop a VR environment with interactive elements and realistic physics.",
      image: "/r1.jpg",
    },*/
  ];

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tool.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyToClipboard = async (text: string, id: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const shareResource = async (resource: any) => {
    const shareData = {
      title: resource.title,
      text: `${resource.title}\n\n${resource.fullPrompt}\n\nVisit: https://stanpixel.co.ke`,
      url: `https://stanpixel.co.ke/resources#${resource.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      const shareText = `${resource.title}\n\n${resource.fullPrompt}\n\nVisit: https://stanpixel.co.ke`;
      await copyToClipboard(shareText, resource.id);
    }
  };

  return (
    <>
      <SiteHeader />
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Access tutorials, prompts, and resources for branding and design..
        </p>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="mb-8 max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-neutral-800 border-neutral-700 text-white placeholder-neutral-400"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-neutral-800 p-4 rounded-lg">
              <Image
                src={resource.image}
                alt={resource.title}
                width={1600}
                height={900}
                className="w-full object-contain rounded-lg mb-3"
              />
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium">{resource.title}</h3>
                <Button
                  onClick={() => shareResource(resource)}
                  variant="ghost"
                  size="sm"
                  className="ml-2 bg-transparent text-[#3ab3ff] hover:bg-[#3ab3ff]/10"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-[#3ab3ff] text-sm mb-2">
                Tool: {resource.tool}
              </p>
              <p className="text-sm opacity-80 mb-3">{resource.excerpt}</p>
              <Button
                onClick={() =>
                  copyToClipboard(resource.fullPrompt, resource.id)
                }
                className="bg-[#3ab3ff] text-black hover:bg-[#2a9eff] w-full text-sm"
              >
                <Copy className="w-4 h-4 mr-2" />
                {copiedId === resource.id ? "Copied!" : "Copy Prompt"}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Need More Help?</h2>
        <p className="text-lg opacity-80 mb-8">
          Contact us for personalized assistance.
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
