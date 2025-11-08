"use client";

import Link from "next/link";

type HeroSectionProps = {
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
  bgImageUrl?: string;
};

export default function HeroSection({
  title = "Freshly Brewed Coffee, Made for You!",
  subtitle = "Nikmati racikan kopi terbaik dengan suasana hangat dan nyaman setiap hari di Caffe Coffee.",
  ctaHref = "/order",
  ctaLabel = "Order Now",
  bgImageUrl = "https://i.pinimg.com/736x/35/b5/39/35b53920346fbfff0ad67a197145a958.jpg",
}: HeroSectionProps) {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-[#D7BDA6] min-h-screen"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.02] saturate-[0.98] contrast-[1.02]"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
        aria-hidden
      />

      {/* Soft texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]
          bg-[radial-gradient(60%_40%_at_120%_-10%,rgba(184,149,127,0.12),transparent_60%),
          radial-gradient(50%_35%_at_-20%_-10%,rgba(171,120,67,0.10),transparent_60%),
          radial-gradient(30%_30%_at_15%_95%,rgba(184,149,127,0.12),transparent_60%),
          linear-gradient(180deg,rgba(215,189,166,0.55),rgba(215,189,166,0.35))]"
      />

      {/* Content Wrap */}
      <div className="relative z-[2] max-w-[1200px] mx-auto px-4 py-10 md:py-16 min-h-screen flex items-center justify-center">

        {/* Center Content */}
        <div className="text-center p-8 md:p-10">
          <p className="uppercase tracking-[0.18em] text-xs text-white/75 mb-3">
            Caffe Coffee
          </p>

          <h1 className="font-black text-white text-[32px] md:text-[56px] leading-tight mb-3 drop-shadow-[0_3px_24px_rgba(0,0,0,0.30)]">
            {title}
          </h1>

          <p className="text-white/90 max-w-[60ch] mx-auto text-[15px] md:text-[18px] mb-6 drop-shadow-[0_2px_16px_rgba(0,0,0,0.30)]">
            {subtitle}
          </p>

          <div className="flex items-center justify-center gap-3">
            <Link
              href={ctaHref}
              className="bg-[#6D3914] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-[#AB7843] transition"
            >
              {ctaLabel}
            </Link>
          </div>

          <p className="text-white/80 text-sm mt-4">
            Buka setiap hari 08.00–22.00
          </p>
        </div>
      </div>
    </section>
  );
}
