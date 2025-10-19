import { Button } from "@/components/ui/button";
import Image from "next/image";
import LazyVideo from "./lazy-video";

export function Hero() {
  const buttonNew = (
    <Button
      asChild
      className="rounded-full bg-blue-400 px-6 text-black hover:bg-blue-300"
    >
      <a
        href="https://wa.link/rc25na"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat With Us
      </a>
    </Button>
  );

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image
              src="/icons/stanpixels-white.svg"
              alt="stanpixels logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <p className="text-sm uppercase tracking-[0.25em] text-blue-300/80">
              stanpixels
            </p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">TRANSFORMING</span>
            <span className="block">IDEAS INTO</span>
            <span className="block text-blue-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">
              DIGITAL IMPACT
            </span>
          </h1>

          {/* Phone grid mimic */}
          <div className="mt-10 grid w-full gap-4 justify-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {phoneData.map((p, i) => {
              const visibility =
                i <= 3 ? "block" : i === 4 ? "hidden xl:block" : "hidden";

              return (
                <div key={i} className={visibility}>
                  <PhoneCard
                    title={p.title}
                    sub={p.sub}
                    tone={p.tone}
                    gradient={p.gradient}
                    videoSrc={p.videoSrc}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneCard({
  title = "8°",
  sub = "Clear night. Great for render farm runs.",
  tone = "calm",
  gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
  videoSrc,
}: {
  title?: string;
  sub?: string;
  tone?: string;
  gradient?: string;
  videoSrc?: string;
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={
            videoSrc ??
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
          }
          className="absolute inset-0 h-full w-full object-cover"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} - ${sub}`}
        />

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-3xl font-bold leading-snug text-white/90">
              {title}
            </div>
            <p className="text-xs text-white/70">{sub}</p>
            <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-blue-300">
              {tone === "calm" ? "stanpixels app" : tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const phoneData = [
  {
    title: "Engage",
    sub: "Visuals that captivate and connect.",
    tone: "compelling",
    gradient: "from-[#0b0b0b] via-[#0f172a] to-[#020617]",
    videoSrc:
      "https://mu73aitmabymkzpg.public.blob.vercel-storage.com/engage.mp4",
  },
  {
    title: "Convert",
    sub: "Designs that drive action.",
    tone: "Driven",
    gradient: "from-[#0b1a0b] via-[#052e16] to-[#022c22]",
    videoSrc:
      "https://mu73aitmabymkzpg.public.blob.vercel-storage.com/convert.mp4",
  },
  {
    title: "Influence",
    sub: "Designs that shape perceptions.",
    tone: "Strong",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
    videoSrc:
      "https://mu73aitmabymkzpg.public.blob.vercel-storage.com/influence.mp4",
  },
  {
    title: "Impact",
    sub: "Creative work that leaves a mark.",
    tone: "Powerful",
    gradient: "from-[#0b0b0b] via-[#1f2937] to-[#0b1220]",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm",
  },
];
