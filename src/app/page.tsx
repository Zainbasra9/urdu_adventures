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
  X
} from 'lucide-react';

export default function UrduAdventuresLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden selection:bg-orange-200">

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform -rotate-6">
              U
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-800">
              Urdu<span className="text-orange-500">Adventures</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-slate-600">
            <button onClick={() => scrollToSection('features')} className="hover:text-orange-500 transition-colors">Features</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">Our Story</button>
            <button onClick={() => scrollToSection('download')} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2">
              <Download size={18} />
              Download APK
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-orange-100 p-4 flex flex-col gap-4 shadow-xl">
            <button onClick={() => scrollToSection('features')} className="text-left font-semibold text-slate-600 py-2">Features</button>
            <button onClick={() => scrollToSection('about')} className="text-left font-semibold text-slate-600 py-2">Our Story</button>
            <button onClick={() => scrollToSection('download')} className="bg-orange-500 text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2">
              <Download size={20} /> Download Now
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50/50 -skew-x-12 translate-x-32 -z-10" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-bold text-sm">
              <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">NEW</span>
              <span>v1.0 Available for Android</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
              Make Urdu Learning <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                Fun Again!
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The AI-powered adventure aimed at kids aged 3-5. Master letters, words, and pronunciation while exploring a colorful world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('download')}
                className="bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold px-8 py-4 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Download className="w-6 h-6" />
                Download APK
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="bg-white border-2 border-slate-200 hover:border-orange-200 hover:bg-orange-50 text-slate-700 text-lg font-bold px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-3"
              >
                <Play className="w-6 h-6 fill-current" />
                How it works
              </button>
            </div>
          </div>

          {/* Hero Image / Mockup Placeholder */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-md aspect-[9/16] lg:aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-pink-500 rounded-[3rem] rotate-3 shadow-2xl opacity-20" />
            <div className="relative w-full h-full bg-slate-900 rounded-[2.5rem] border-8 border-slate-900 shadow-2xl overflow-hidden flex flex-col">
              {/* Screen Content Mockup */}
              <div className="bg-sky-300 flex-1 relative p-6 flex flex-col items-center justify-between overflow-hidden">
                {/* Clouds */}
                <div className="absolute top-4 left-4 text-white/60"><Sparkles size={40} /></div>
                <div className="absolute top-10 right-10 text-white/60"><Sparkles size={24} /></div>

                {/* Game Elements */}
                <div className="mt-12 text-center z-10">
                  <span className="block text-6xl font-black text-white drop-shadow-md mb-2">ا</span>
                  <span className="bg-white/90 text-sky-600 px-4 py-1 rounded-full text-sm font-bold shadow-sm">Alif</span>
                </div>

                <div className="w-full grid grid-cols-2 gap-4 z-10">
                  <div className="bg-white p-3 rounded-2xl shadow-lg flex flex-col items-center gap-2 transform hover:scale-105 transition-transform cursor-pointer">
                    <span className="text-4xl">🍇</span>
                    <span className="font-bold text-slate-700">Angoor</span>
                  </div>
                  <div className="bg-white p-3 rounded-2xl shadow-lg flex flex-col items-center gap-2 transform hover:scale-105 transition-transform cursor-pointer border-4 border-green-400">
                    <span className="text-4xl">🍍</span>
                    <span className="font-bold text-slate-700">Ananas</span>
                  </div>
                </div>

                {/* Character */}
                <div className="mt-4 text-8xl z-10 filter drop-shadow-xl animate-bounce">
                  🐯
                </div>
              </div>
              {/* Phone Chin */}
              <div className="h-12 bg-slate-900 flex items-center justify-center">
                <div className="w-32 h-1 bg-slate-800 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- PROBLEM / SOLUTION SECTION --- */}
      <section id="about" className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-3xl shadow-lg transform translate-y-8">
                  <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4">
                    <Globe2 size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Living Abroad?</h3>
                  <p className="text-sm text-slate-500">Many kids struggle to connect with Urdu because they don&apos;t hear it enough outside.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-lg">
                  <div className="w-12 h-12 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center mb-4">
                    <BrainCircuit size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Boring Resources</h3>
                  <p className="text-sm text-slate-500">Textbooks are dull. We replaced them with interactive, colorful gameplay.</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                Bridging the Gap Between <br />
                <span className="text-orange-500">Culture & Fun</span>
              </h2>
              <p className="text-lg text-slate-600">
                Built specifically for children aged 3-5, <strong>Urdu Adventures</strong> combines education with entertainment. We understand that parents find it difficult to teach Urdu in an engaging way.
              </p>
              <ul className="space-y-4">
                {[
                  "Personalized AI difficulty scaling",
                  "Built with Unity for smooth performance",
                  "Voice recognition to practice pronunciation",
                  "Rewards system to keep kids motivated"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Powered by Tech, Designed for Kids</h2>
            <p className="text-slate-600 text-lg">We use Firebase ML Kit and Unity to create a seamless learning experience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Gamepad2 size={32} />}
              color="bg-blue-500"
              title="Gamified Learning"
              desc="Interactive levels that feel like playing, not studying. Collect stars and unlock new worlds."
            />
            <FeatureCard
              icon={<Sparkles size={32} />}
              color="bg-orange-500"
              title="AI Adaptation"
              desc="The game learns with your child. It adjusts difficulty automatically based on their progress."
            />
            <FeatureCard
              icon={<Star size={32} />}
              color="bg-pink-500"
              title="Voice Guidance"
              desc="Native Urdu voice-overs teach correct pronunciation for letters and everyday words."
            />
          </div>
        </div>
      </section>

      {/* --- DOWNLOAD CTA --- */}
      <section id="download" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Start the Adventure?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Download the APK now and give your child the gift of language in the most fun way possible.
          </p>

          <div className="flex flex-col items-center gap-6">
            <button className="group relative bg-orange-500 hover:bg-orange-400 text-white text-xl font-bold px-12 py-5 rounded-2xl transition-all shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.6)] transform hover:-translate-y-1">
              <span className="flex items-center gap-3">
                <Download className="w-8 h-8 group-hover:animate-bounce" />
                Download APK v1.0
              </span>
              <span className="absolute -top-3 -right-3 bg-white text-orange-600 text-xs font-black px-2 py-1 rounded shadow-sm rotate-12">
                FREE
              </span>
            </button>
            <p className="text-sm text-slate-400">
              Compatible with Android 8.0+ • Size: 45MB
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
              U
            </div>
            <span className="text-lg font-bold text-slate-800">Urdu Adventures</span>
          </div>
          <p className="text-slate-500 text-sm mb-8">
            © {new Date().getFullYear()} Urdu Adventures. Helping kids connect to their roots.
          </p>
          <div className="flex justify-center gap-6 text-slate-400">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Contact Support</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Component for Feature Cards
function FeatureCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-orange-200 shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <div className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-6 transition-transform shadow-md`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
