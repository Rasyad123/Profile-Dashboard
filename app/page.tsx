"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#E2E8F0] flex flex-col font-[family-name:var(--font-plus-jakarta)] selection:bg-orange-500/30 selection:text-orange-300">
      {/* Fully Transparent Fixed Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent px-6 py-5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-end">
          <nav className="flex items-center gap-1 sm:gap-6 font-mono text-xs text-slate-200 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
            <a href="#home" className="px-3.5 py-1.5 rounded-full hover:text-orange-400 hover:bg-white/10 transition-colors">
              HOME
            </a>
            <a href="#about" className="px-3.5 py-1.5 rounded-full hover:text-orange-400 hover:bg-white/10 transition-colors">
              ABOUT
            </a>
            <a href="#contact" className="px-3.5 py-1.5 rounded-full hover:text-orange-400 hover:bg-white/10 transition-colors">
              CONTACT
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* SECTION 1: HOME (Full Screen Pixel Sunset Image Hero) */}
        <section id="home" className="relative h-screen w-full flex flex-col justify-between items-start overflow-hidden pt-20 pb-8 px-6 md:px-16">
          {/* Fullscreen Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/pixel-cats-sunset.webp"
              alt="Two Pixel Cats Watching Sunset Over Ocean"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center transform scale-105 animate-float duration-1000"
            />
            {/* Ambient Gradient Overlays for visual depth & readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/80 via-[#0B0F19]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/60 via-transparent to-[#0B0F19]" />
          </div>

          {/* Left-Middle Content Overlay */}
          <div className="relative z-10 max-w-2xl text-left my-auto space-y-6">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Welcome to <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                my dashboard
              </span>
            </h1>

            {/* Left Aligned CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
              <a
                href="#about"
                className="px-7 py-3.5 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:shadow-[0_0_35px_rgba(249,115,22,0.7)] hover:scale-105 transition-all"
              >
                JELAJAHI CERITA ↓
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl font-bold bg-black/50 backdrop-blur-md text-white border border-white/20 hover:border-orange-400 hover:text-orange-300 transition-all"
              >
                HUBUNGI KAMI
              </a>
            </div>
          </div>

          {/* Bottom Dynamic Animated Scroll Indicator */}
          <a href="#about" className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer self-center">
            <span className="text-[11px] font-mono text-orange-200 group-hover:text-orange-400 transition-colors tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              GULIR KE ABOUT
            </span>
            <div className="w-6 h-10 border-2 border-orange-400/60 bg-black/40 backdrop-blur-sm group-hover:border-orange-400 rounded-full flex justify-center p-1.5 transition-colors shadow-[0_0_12px_rgba(249,115,22,0.3)]">
              <div className="w-1.5 h-2.5 bg-orange-400 rounded-full animate-bounce-slow" />
            </div>
          </a>
        </section>

        {/* CATCHY SCROLL TRANSITION SEPARATOR (Home -> About) */}
        <div className="relative w-full overflow-hidden leading-none bg-[#0B0F19]">
          {/* Smooth Curved Wave SVG with Sunset-to-Twilight Gradient Fill */}
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-16 sm:h-24 text-[#0F172A]"
          >
            <path
              d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>

          {/* Catchy Floating Divider Chip */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="px-4 py-1.5 rounded-full bg-slate-900 border border-orange-500/40 text-orange-400 font-mono text-[11px] tracking-wider shadow-[0_0_15px_rgba(249,115,22,0.25)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span>SECTION TRANSITION // ABOUT US</span>
            </div>
          </div>
        </div>

        {/* SECTION 2: ABOUT */}
        <section id="about" className="bg-[#0F172A] py-20 px-4 md:px-8 border-b border-slate-800/80 relative">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">
                // ABOUT THE EXPERIENCE
              </span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-white tracking-wide">
                Kisah Di Balik Piksel & Senja
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Kombinasi estetika game klasik dengan desain modern yang membawa kehangatan dan rasa nyaman.
              </p>
            </div>

            {/* Content Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4 hover:border-orange-500/40 transition-colors relative corner-brackets">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 text-xl font-mono">
                  🌅
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
                  Atmosphere & Vibes
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Sentuhan warna hangat keemasan memancarkan rasa tenang saat hari berganti malam. Desain minimalis namun kaya emosi.
                </p>
                <div className="pt-2 flex items-center justify-between font-mono text-[10px] text-slate-500 border-t border-slate-800">
                  <span>WARMTH INDEX</span>
                  <span className="text-orange-400 font-bold">100% COZY</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4 hover:border-pink-500/40 transition-colors relative corner-brackets">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 text-xl font-mono">
                  🐾
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
                  Karakter & Kebersamaan
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dua karakter kucing yang duduk berdampingan melambangkan persahabatan, sinergi, dan momen saling melengkapi.
                </p>
                <div className="pt-2 flex items-center justify-between font-mono text-[10px] text-slate-500 border-t border-slate-800">
                  <span>SYNERGY STATUS</span>
                  <span className="text-pink-400 font-bold">CLASS S+</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4 hover:border-purple-500/40 transition-colors relative corner-brackets">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl font-mono">
                  🎨
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
                  Pixel Craftsmanship
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Detail visual buatan tangan piksel demi piksel yang menghidupkan lanskap pantai, burung berterbangan, dan mercusuar jauh.
                </p>
                <div className="pt-2 flex items-center justify-between font-mono text-[10px] text-slate-500 border-t border-slate-800">
                  <span>STYLE MATRIX</span>
                  <span className="text-purple-400 font-bold">RETRO NEXT-GEN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CONTACT */}
        <section id="contact" className="bg-[#0B0F19] py-20 px-4 md:px-8 bg-tactical-grid relative">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">
                // GET IN TOUCH
              </span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-white tracking-wide">
                Hubungi Kami
              </h2>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                Punya pertanyaan atau ingin berkolaborasi? Kirimkan pesan Anda di bawah ini.
              </p>
            </div>

            {/* Contact Form & Info Box */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Form Side */}
              <div className="md:col-span-7 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
                {submitted ? (
                  <div className="p-6 rounded-xl bg-orange-500/10 border border-orange-500/40 text-center space-y-2">
                    <div className="text-3xl">✨</div>
                    <h4 className="font-bold text-white text-lg">Pesan Terkirim!</h4>
                    <p className="text-xs text-slate-300 font-mono">
                      Terima kasih sudah menghubungi kami. Kami akan segera membalasnya.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                    <div className="space-y-1.5">
                      <label className="text-slate-300 block uppercase tracking-wider">Nama Anda</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 block uppercase tracking-wider">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 block uppercase tracking-wider">Pesan</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tuliskan pesan atau ide Anda di sini..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all cursor-pointer uppercase tracking-wider"
                    >
                      KIRIM PESAN
                    </button>
                  </form>
                )}
              </div>

              {/* Info Side */}
              <div className="md:col-span-5 space-y-6">
                <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                    CONNECT WITH US
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Terhubung dengan komunitas kami untuk kabar terbaru, update ilustrasi, dan diskusi seputar visual art.
                  </p>

                  <div className="space-y-2 pt-2 font-mono text-xs">
                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                      <span className="text-orange-400">📧</span>
                      <span className="text-slate-300">hello@twilightsync.dev</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                      <span className="text-orange-400">📍</span>
                      <span className="text-slate-300">Pixel Coast, Sector 09</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
                  <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                    COMMUNITY LINKS
                  </span>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {["GITHUB", "DISCORD", "TWITTER", "INSTAGRAM"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-orange-400 hover:border-orange-500/40 transition-colors"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-800/80 py-8 px-6 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <p>© 2026 SUNSET PIXEL. ALL RIGHTS RESERVED.</p>
          <a href="#home" className="hover:text-orange-400 transition-colors">
            KEMBALI KE ATAS ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
