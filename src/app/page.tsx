'use client';

import React, { useState } from 'react';
import {
  Download,
  Gamepad2,
  Sparkles,
  BrainCircuit,
  Globe2,
  Star,
  CheckCircle2,
  Play,
  Menu,
  X,
  Music
} from 'lucide-react';

export default function UrduAdventuresLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Note: This is a signed URL and may expire. For a permanent link, enable "Public Access" in R2.
  const APK_DOWNLOAD_URL = "https://pub-faf2dd128582445f992f88e4f6f07ef8.r2.dev/UrduAdventure1.apk";

  const handleDownload = () => {
    window.open(APK_DOWNLOAD_URL, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    // Replaced 'font-sans' with 'font-fredoka' (defined in layout) for that bubbly look
    <div className="min-h-screen bg-white font-fredoka text-slate-800 overflow-x-hidden selection:bg-orange-200">

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-orange-100 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            {/* Logo Icon */}
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-[4px_4px_0px_0px_rgba(194,65,12,1)] transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
              <span className="font-urdu pt-2">ا</span>
            </div>
            {/* Logo Text */}
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tight text-slate-800">
                Urdu<span className="text-orange-500">Adventures</span>
              </span>
              <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">For Kids</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-bold text-slate-600 text-lg">
            <button onClick={() => scrollToSection('features')} className="hover:text-orange-500 transition-colors">Features</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">Our Story</button>
            <button onClick={handleDownload} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl transition-all shadow-[4px_4px_0px_0px_rgba(194,65,12,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(194,65,12,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] flex items-center gap-2 border-2 border-orange-600">
              <Download size={20} strokeWidth={3} />
              Download APK
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 bg-slate-100 rounded-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b-2 border-orange-100 p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
            <button onClick={() => scrollToSection('features')} className="text-left font-bold text-xl text-slate-600 py-3 border-b border-slate-100">Features</button>
            <button onClick={() => scrollToSection('about')} className="text-left font-bold text-xl text-slate-600 py-3 border-b border-slate-100">Our Story</button>
            <button onClick={handleDownload} className="bg-orange-500 text-white font-black text-xl py-4 rounded-xl flex justify-center items-center gap-2 shadow-[4px_4px_0px_0px_rgba(194,65,12,1)] active:shadow-none active:translate-y-1">
              <Download size={24} /> Download Now
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Playful Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50 -skew-x-12 translate-x-32 -z-10 rounded-bl-[100px]" />
        <div className="absolute top-32 left-10 text-6xl opacity-20 animate-bounce delay-700 font-urdu rotate-12 text-orange-400">ا</div>
        <div className="absolute bottom-20 left-1/4 text-6xl opacity-20 animate-bounce delay-1000 font-urdu -rotate-12 text-blue-400">ب</div>
        <div className="absolute top-40 right-10 text-6xl opacity-20 animate-bounce font-urdu rotate-45 text-pink-400">پ</div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border-2 border-yellow-200 text-yellow-700 font-bold text-sm transform hover:scale-105 transition-transform cursor-default">
              <span className="bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full uppercase tracking-wide">Beta</span>
              <span>v1.0 Ready for Android! 🤖</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] drop-shadow-sm">
              Learn <span className="text-orange-500 inline-block transform hover:rotate-3 transition-transform cursor-pointer font-urdu px-2">اردو</span> <br />
              The <span className="relative inline-block text-white">
                <span className="absolute inset-0 bg-pink-500 -rotate-2 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"></span>
                <span className="relative z-10 px-2">Fun Way!</span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Join the magical journey of <span className="font-bold text-orange-500">Haroof-e-Tahajji!</span> Master letters, words, and sounds with our AI-powered adventure for kids 3-5.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={handleDownload}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xl font-bold px-8 py-4 rounded-2xl transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] hover:translate-x-[3px] hover:translate-y-[3px] active:translate-x-[6px] active:translate-y-[6px] flex items-center justify-center gap-3 border-2 border-slate-900"
              >
                <Download className="w-6 h-6" strokeWidth={3} />
                Get the App
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="bg-white border-2 border-slate-200 hover:border-orange-400 hover:bg-orange-50 text-slate-700 hover:text-orange-600 text-xl font-bold px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
              >
                <Play className="w-6 h-6 fill-current" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* GAME MOCKUP - HAROOF E TAHAJJI FOCUSED */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-md aspect-[9/16] lg:aspect-square flex items-center justify-center">
            {/* Background Splash */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-pink-500 rounded-[3rem] rotate-3 shadow-2xl opacity-20 animate-pulse" />

            {/* Phone Frame */}
            <div className="relative w-full h-full bg-slate-900 rounded-[2.5rem] border-8 border-slate-900 shadow-2xl overflow-hidden flex flex-col z-10 ring-4 ring-slate-900/10">

              {/* Screen Content */}
              <div className="bg-[#4ECDC4] flex-1 relative p-6 flex flex-col items-center justify-between overflow-hidden">
                {/* Decorative Clouds */}
                <div className="absolute top-6 left-[-20px] text-white/40"><Sparkles size={60} /></div>
                <div className="absolute top-12 right-[-10px] text-white/40"><Sparkles size={40} /></div>

                {/* Header Bar */}
                <div className="w-full flex justify-between items-center z-20 bg-white/20 backdrop-blur-sm p-2 rounded-full mt-2">
                  <div className="bg-yellow-400 text-yellow-900 text-xs font-black px-3 py-1 rounded-full border-2 border-yellow-600 shadow-sm flex gap-1">
                    ⭐ 1,250
                  </div>
                  <div className="bg-red-500 w-8 h-8 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white font-bold">
                    II
                  </div>
                </div>

                {/* Main Letter Card */}
                <div className="mt-4 text-center z-10 transform hover:scale-105 transition-transform duration-500">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/40 blur-xl rounded-full"></div>
                    <span className="block text-[8rem] font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-2 font-urdu leading-none">ا</span>
                  </div>
                  <div className="bg-white text-[#4ECDC4] px-6 py-2 rounded-full text-xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] inline-block">
                    Alif (Alif)
                  </div>
                </div>

                {/* Options / Learning Objects */}
                <div className="w-full grid grid-cols-2 gap-4 z-10 mb-4">
                  <div className="bg-white p-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-1 transform hover:-translate-y-1 transition-transform cursor-pointer border-2 border-white hover:border-orange-400">
                    <span className="text-5xl drop-shadow-sm">🍇</span>
                    <span className="font-bold text-slate-700 text-lg font-urdu">انگور</span>
                  </div>
                  <div className="bg-white p-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-1 transform hover:-translate-y-1 transition-transform cursor-pointer border-2 border-green-400 bg-green-50">
                    <span className="text-5xl drop-shadow-sm">🍍</span>
                    <span className="font-bold text-slate-700 text-lg font-urdu">انناس</span>
                  </div>
                </div>

                {/* Cute Character */}
                <div className="absolute bottom-[-10px] right-[-10px] text-7xl z-20 filter drop-shadow-xl animate-bounce">
                  🐯
                </div>
              </div>

              {/* Phone Chin */}
              <div className="h-14 bg-slate-900 flex items-center justify-center">
                <div className="w-32 h-1.5 bg-slate-800 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- PROBLEM / SOLUTION SECTION --- */}
      <section id="about" className="py-20 bg-orange-50 rounded-t-[3rem] -mt-10 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visual Side */}
            <div className="order-2 md:order-1 relative">
              {/* Decoration */}
              <div className="absolute -top-10 -left-10 text-yellow-400 animate-spin-slow"><Star size={60} fill="currentColor" /></div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] border-2 border-slate-100 transform translate-y-8">
                  <div className="w-14 h-14 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mb-4 transform -rotate-3">
                    <Globe2 size={32} />
                  </div>
                  <h3 className="font-black text-xl mb-3 text-slate-800">Living Abroad?</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">Kids don&apos;t hear Urdu enough outside? We bring the language home!</p>
                </div>
                <div className="bg-white p-8 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] border-2 border-slate-100">
                  <div className="w-14 h-14 bg-purple-100 text-purple-500 rounded-2xl flex items-center justify-center mb-4 transform rotate-3">
                    <BrainCircuit size={32} />
                  </div>
                  <h3 className="font-black text-xl mb-3 text-slate-800">No More Boring Books!</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">Textbooks are snoozefests 😴. We made learning a video game!</p>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                Bridging the Gap Between <br />
                <span className="text-orange-500 underline decoration-wavy decoration-orange-300 underline-offset-4">Culture & Fun</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                Created for little explorers aged 3-5, <strong>Urdu Adventures</strong> solves the problem of boring resources. We use <span className="font-bold text-pink-500">colors</span>, <span className="font-bold text-blue-500">animations</span>, and <span className="font-bold text-green-500">sounds</span> to make Urdu stick!
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Start with Alif, Bay, Pay (Haroof-e-Tahajji)",
                  "AI that adjusts to your child's speed",
                  "Speak into the mic to practice sounds 🎤",
                  "Unlock rewards and trophies 🏆"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 font-bold text-lg bg-white/50 p-3 rounded-xl border border-orange-100">
                    <div className="bg-green-500 text-white rounded-full p-1">
                      <CheckCircle2 size={20} strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-24 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply opacity-50 blur-xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 font-black tracking-widest uppercase mb-2 block">Tech Magic</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Powered by Unity & AI <br /> Designed for Tiny Fingers</h2>
            <p className="text-slate-600 text-xl font-medium">We use Firebase ML Kit to listen and help your child&apos;s pronunciation.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Gamepad2 size={36} strokeWidth={2.5} />}
              color="bg-blue-500"
              borderColor="border-blue-200"
              shadowColor="shadow-blue-200"
              title="Gamified Learning"
              desc="It's not school, it's a quest! Collect stars, unlock levels, and defeat the boredom monster."
            />
            <FeatureCard
              icon={<Sparkles size={36} strokeWidth={2.5} />}
              color="bg-orange-500"
              borderColor="border-orange-200"
              shadowColor="shadow-orange-200"
              title="Smart AI Teacher"
              desc="Our game gets easier if they struggle and harder as they learn. A perfect fit for every child."
            />
            <FeatureCard
              icon={<Music size={36} strokeWidth={2.5} />}
              color="bg-pink-500"
              borderColor="border-pink-200"
              shadowColor="shadow-pink-200"
              title="Native Voice Overs"
              desc="Crystal clear Urdu pronunciation guide. From 'Alif' to 'Yay', hear it exactly as it should be."
            />
          </div>
        </div>
      </section>

      {/* --- DOWNLOAD CTA --- */}
      <section id="download" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-[120px] opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[120px] opacity-30 transform translate-x-1/2 translate-y-1/2"></div>

        {/* Pattern Dots */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block animate-bounce mb-4 text-6xl">🚀</div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to Start the <br /><span className="text-orange-400">Urdu Adventure?</span></h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
            Download the APK file directly to your Android device and let the fun learning begin!
          </p>

          <div className="flex flex-col items-center gap-6">
            <button
              onClick={handleDownload}
              className="group relative bg-orange-500 hover:bg-orange-400 text-white text-2xl font-black px-16 py-6 rounded-3xl transition-all shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_10px_60px_-10px_rgba(249,115,22,0.7)] transform hover:-translate-y-2 border-b-8 border-orange-700 active:border-b-0 active:translate-y-1"
            >
              <span className="flex items-center gap-4">
                <Download className="w-8 h-8 group-hover:animate-bounce" strokeWidth={3} />
                Download APK
              </span>
              <span className="absolute -top-4 -right-4 bg-white text-orange-600 text-sm font-black px-3 py-1 rounded-lg shadow-lg rotate-12 border-2 border-orange-100">
                FREE v1.0
              </span>
            </button>
            <div className="flex items-center gap-6 text-slate-400 font-medium bg-slate-800/50 px-6 py-3 rounded-full backdrop-blur-sm border border-slate-700">
              <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div> Android 8.0+</span>
              <span>•</span>
              <span>45 MB Size</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
              <span className="font-urdu pt-1">ا</span>
            </div>
            <span className="text-xl font-black text-slate-800">Urdu Adventures</span>
          </div>
          <p className="text-slate-500 text-lg font-medium mb-8">
            © {new Date().getFullYear()} Urdu Adventures. <br className="md:hidden" /> Made with ❤️ for our little ones.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-400 font-bold">
            <a href="#" className="hover:text-orange-500 transition-colors hover:underline decoration-2 underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors hover:underline decoration-2 underline-offset-4">Parent Guide</a>
            <a href="#" className="hover:text-orange-500 transition-colors hover:underline decoration-2 underline-offset-4">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Component for Feature Cards
function FeatureCard({ icon, title, desc, color, borderColor, shadowColor }: { icon: React.ReactNode, title: string, desc: string, color: string, borderColor: string, shadowColor: string }) {
  return (
    // Fixed unused variable error by adding shadowColor to the className below
    <div className={`bg-white p-8 rounded-[2.5rem] border-2 ${borderColor} hover:border-orange-400 shadow-xl ${shadowColor} transition-all duration-300 group cursor-default hover:-translate-y-2`}>
      <div className={`${color} w-20 h-20 rounded-3xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-12 transition-transform shadow-lg border-b-4 border-black/10`}>
        {icon}
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed font-medium text-lg">
        {desc}
      </p>
    </div>
  );
}
