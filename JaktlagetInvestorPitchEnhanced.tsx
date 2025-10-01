import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// --- Enhanced brand icon with gradient ---
function AntlersIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="antlerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <path d="M16 20c-2 4-6 6-10 6m10-6c-3-3-5-7-5-12m5 12c3-3 9-4 14-2m-14 2c4 4 6 10 6 16m32-16c2 4 6 6 10 6m-10-6c3-3 5-7 5-12m-5 12c-3-3-9-4-14-2m14 2c-4 4-6 10-6 16" stroke="url(#antlerGradient)" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="32" cy="46" r="3" stroke="url(#antlerGradient)" strokeWidth="2.5" />
    </svg>
  );
}

// --- Enhanced iPhone frame with glassmorphism ---
function IPhoneFrame({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative mx-auto aspect-[9/19] w-full max-w-[320px] rounded-[2.8rem] bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/20 shadow-2xl shadow-black/30 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 rounded-[2.8rem] border border-white/15" />
      <div className="absolute left-1/2 top-0 h-7 w-40 -translate-x-1/2 rounded-b-2xl bg-black/70 backdrop-blur-sm" />
      <div className="absolute inset-[12px] rounded-[2.2rem] bg-gradient-to-br from-black/80 to-black/60 ring-1 ring-white/15 overflow-hidden">
        {children || (
          <div className="h-full w-full">
            <img 
              src="/public/IMG_8880.jpg" 
              alt="Jaktlaget App Screenshot" 
              className="h-full w-full object-cover object-top"
            />
          </div>
        )}
      </div>
    </div>
  );
}

// --- Enhanced Card component with hover effects ---
function Card({ title, children, className = "", hover = false }: { title: string; children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <motion.div 
      className={`rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 ${hover ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-emerald-500/10' : ''} ${className}`}
      whileHover={hover ? { y: -2, scale: 1.02 } : {}}
    >
      <div className="text-xs uppercase tracking-wider text-white/60 font-medium">{title}</div>
      <div className="mt-3">{children}</div>
    </motion.div>
  );
}

// --- Enhanced Button component ---
function Button({ children, onClick, active = false, className = "" }: { children: React.ReactNode; onClick: () => void; active?: boolean; className?: string }) {
  return (
    <motion.button
      onClick={onClick}
      className={`rounded-xl px-4 py-2.5 ring-1 ring-white/15 transition-all duration-200 text-sm font-medium ${
        active 
          ? "bg-gradient-to-r from-emerald-400 to-emerald-500 text-emerald-950 shadow-lg shadow-emerald-500/25" 
          : "hover:bg-white/10 hover:ring-white/25"
      } ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

// --- Enhanced Slider component ---
function Slider({ value, onChange, min, max, step = 1, label }: { value: number; onChange: (value: number) => void; min: number; max: number; step?: number; label: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span>{label}</span>
        <span className="font-semibold text-emerald-400">{value}%</span>
      </div>
      <div className="relative">
        <input 
          type="range" 
          min={min} 
          max={max} 
          step={step} 
          value={value} 
          onChange={(e) => onChange(parseInt(e.target.value))} 
          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
        />
        <style jsx>{`
          .slider::-webkit-slider-thumb {
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: linear-gradient(135deg, #10b981, #059669);
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          }
          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: linear-gradient(135deg, #10b981, #059669);
            cursor: pointer;
            border: none;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          }
        `}</style>
      </div>
    </div>
  );
}

// --- Table data (from your table) ---
const revenueRows = [
  { adoption: "1 %", users: "8\u00a0957", rev19: "2,04 Mkr", rev29: "3,12 Mkr", rev49: "5,27 Mkr", opex: "~0,24 Mkr", profit: "1,8 M / 2,9 M / 5,0 M" },
  { adoption: "10 %", users: "89\u00a0571", rev19: "20,4 Mkr", rev29: "31,2 Mkr", rev49: "52,7 Mkr", opex: "~0,6 Mkr", profit: "19,8 M / 30,6 M / 52,1 M" },
  { adoption: "20 %", users: "179\u00a0141", rev19: "40,8 Mkr", rev29: "62,4 Mkr", rev49: "105,4 Mkr", opex: "~1,0 Mkr", profit: "39,8 M / 61,4 M / 104,4 M" },
  { adoption: "40 %", users: "358\u00a0282", rev19: "81,7 Mkr", rev29: "124,8 Mkr", rev49: "210,8 Mkr", opex: "~1,4 Mkr", profit: "80,3 M / 123,4 M / 209,4 M" },
];

// --- Chart data (Yearly profit, Mkr) parsed from table above ---
const chartData = [
  { adoption: "1%", p19: 1.8, p29: 2.9, p49: 5.0 },
  { adoption: "10%", p19: 19.8, p29: 30.6, p49: 52.1 },
  { adoption: "20%", p19: 39.8, p29: 61.4, p49: 104.4 },
  { adoption: "40%", p19: 80.3, p29: 123.4, p49: 209.4 },
];

// --- Dataset: active hunting cards (latest available) ---
const HUNTING_CARDS = {
  SE: { name: "SVERIGE", year: "2023/24", count: 277042 },
  NO: { name: "NORGE", year: "2024/25", count: 171740 },
  DK: { name: "DANMARK", year: "2024/25", count: 166891 },
  FI: { name: "FINLAND", year: "2024", count: 301963 },
};

const NORDIC_TOTAL = Object.values(HUNTING_CARDS).reduce((acc, v) => acc + v.count, 0);

const currency = new Intl.NumberFormat("sv-SE", { style: "currency", currency: "SEK", maximumFractionDigits: 0 });
const fmt = new Intl.NumberFormat("sv-SE");

export default function JaktlagetInvestorPitchEnhanced() {
  // --- UI state for tabs ---
  const [activeTab, setActiveTab] = useState<"hem" | "investerare" | "annonsorer" | "utvecklare">("hem");

  // --- UI state for calculator ---
  const [region, setRegion] = useState<"NORDEN" | "SE" | "NO" | "DK" | "FI">("NORDEN");
  const [adoption, setAdoption] = useState(10);
  const [price, setPrice] = useState<19 | 49>(19);
  const [useCustomScenario, setUseCustomScenario] = useState(false);
  const [customPrice, setCustomPrice] = useState(29);
  const [priceInterval, setPriceInterval] = useState<"month" | "year">("month");

  // Bonus / ads
  const [mauPct, setMauPct] = useState(60);
  const [viewsPerMAU, setViewsPerMAU] = useState(30);
  const [sovPct, setSovPct] = useState(20);

  // Derived base
  const baseCount = useMemo(() => {
    if (region === "NORDEN") return NORDIC_TOTAL;
    return HUNTING_CARDS[region].count;
  }, [region]);

  const activePrice = useMemo(() => useCustomScenario ? customPrice : price, [useCustomScenario, customPrice, price]);
  const subscribers = useMemo(() => Math.round(baseCount * (adoption / 100)), [baseCount, adoption]);
  
  // Calculate monthly and annual revenue based on price interval
  const monthlyRevenueSEK = useMemo(() => {
    if (useCustomScenario && priceInterval === "year") {
      return subscribers * activePrice / 12; // Yearly price divided by 12
    }
    return subscribers * activePrice; // Monthly price
  }, [subscribers, activePrice, useCustomScenario, priceInterval]);
  
  const annualRevenueSEK = useMemo(() => {
    if (useCustomScenario && priceInterval === "year") {
      return subscribers * activePrice; // Yearly price
    }
    return subscribers * activePrice * 12; // Monthly price * 12
  }, [subscribers, activePrice, useCustomScenario, priceInterval]);

  // Ads math
  const mauUsers = useMemo(() => Math.round(subscribers * (mauPct / 100)), [subscribers, mauPct]);
  const adProbPerView = useMemo(() => (1 / 3) * (sovPct / 100), [sovPct]);
  const monthlyImpressions = useMemo(() => Math.round(mauUsers * viewsPerMAU * adProbPerView), [mauUsers, viewsPerMAU, adProbPerView]);
  const uniqueReach = useMemo(() => {
    const p = adProbPerView;
    const V = viewsPerMAU;
    const probAtLeastOne = 1 - Math.pow(1 - p, V);
    return Math.round(mauUsers * probAtLeastOne);
  }, [mauUsers, adProbPerView, viewsPerMAU]);

  const revenueCompare = useMemo(() => {
    if (useCustomScenario) {
      return [
        { label: "19 kr", value: subscribers * 19 * 12 / 1_000_000 },
        { label: `${customPrice} kr`, value: subscribers * customPrice * 12 / 1_000_000 },
        { label: "49 kr", value: subscribers * 49 * 12 / 1_000_000 },
      ];
    }
    return [
      { label: "19 kr", value: subscribers * 19 * 12 / 1_000_000 },
      { label: "49 kr", value: subscribers * 49 * 12 / 1_000_000 },
    ];
  }, [subscribers, useCustomScenario, customPrice]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0f0a] via-[#0b100c] to-[#0a0f0a] text-white overflow-x-hidden">
      {/* Enhanced animated background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 [background:radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.08)_1px,transparent_1px)] [background-size:32px_32px] animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Enhanced Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-500/20 ring-1 ring-emerald-300/30 shadow-lg shadow-emerald-500/20">
              <AntlersIcon className="w-6 h-6" />
            </span>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">Jaktlaget</span>
            <span className="ml-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300 font-medium">Investor Pitch</span>
          </motion.div>
          <motion.div 
            className="text-xs text-white/60 font-medium"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Konfidentiellt – delning efter överenskommelse
          </motion.div>
        </div>
      </header>

      {/* Enhanced Tab Navigation */}
      <nav className="relative z-10 mx-auto max-w-7xl px-6 py-8">
        <div className="flex justify-center">
          <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-lg shadow-black/20">
            {[
              { id: "hem", label: "Hem" },
              { id: "investerare", label: "Investerare" },
              { id: "annonsorer", label: "Annonsörer" },
              { id: "utvecklare", label: "Utvecklare" }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-emerald-400 to-emerald-500 text-emerald-950 shadow-lg shadow-emerald-500/25"
                    : "hover:bg-white/10 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hem Tab Content */}
        {activeTab === "hem" && (
          <>
            {/* Hero Section */}
            <section className="relative mx-auto max-w-7xl px-6 pt-12 md:pt-16">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                    <span className="bg-gradient-to-r from-white via-emerald-100 to-emerald-200 bg-clip-text text-transparent">
                      Infrastruktur för jaktlag.
                    </span>
                    <span className="block text-white/70 text-3xl md:text-4xl font-medium mt-4">
                      Säkrare säsonger, mindre friktion, bättre kommunikation.
                    </span>
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                    Jaktlaget - hela NORDENS jaktcommunity! Här samlas kalender, pass, bomkoder och kommunikation i ett rollstyrt, GDPR‑medvetet flöde. Designat för förtroende och fältläsbarhet.
                    Hitta gästjägare, knyt nya kontakter och utbyt värdefull kunskap mellan andra jägare, allt på ett och samma ställe! 
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute -inset-x-8 -bottom-8 top-16 -z-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl ring-1 ring-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.4)]" />
                  <IPhoneFrame />
                  <p className="mt-4 text-center text-xs text-white/60 font-medium">Innehållet är i utvecklingsfas (kan ändas).</p>
                </motion.div>
              </div>
            </section>

            {/* Problem/Solution Section */}
            <section className="mx-auto mt-16 max-w-7xl px-6">
              <div className="grid gap-8 md:grid-cols-2">
                <Card title="Problemet idag" hover>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Fragmenterad info: chattgrupper, utspridda dokument, analoga listor.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Risker kring felaktiga bomkoder, passfördelning och samlingstider.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Brist på rollstyrning och spårbarhet vid ändringar.</span>
                    </li>
                  </ul>
                </Card>
                <Card title="Vår lösning" hover>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Samlad plattform: kalender, pass, bomkoder, anslag/chatt.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Roll/behörigheter, notifieringar och tydlig logg av ändringar.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Modern, sober design för förtroende och snabb fältanvändning.</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mx-auto mt-16 mb-16 max-w-7xl px-6">
              <motion.div
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-12 backdrop-blur-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent md:text-4xl">
                  Utforska våra möjligheter
                </h2>
                <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                  Välj en flik ovan för att se detaljerad information för investerare, annonsörer eller utvecklare.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button onClick={() => setActiveTab("investerare")} className="px-6 py-3">
                    Investerare
                  </Button>
                  <Button onClick={() => setActiveTab("annonsorer")} className="px-6 py-3">
                    Annonsörer
                  </Button>
                  <Button onClick={() => setActiveTab("utvecklare")} className="px-6 py-3">
                    Utvecklare
                  </Button>
                </div>
              </motion.div>
            </section>
          </>
        )}

        {/* Investerare Tab Content */}
        {activeTab === "investerare" && (
          <>
            {/* Enhanced Title Section */}
            <section className="relative mx-auto max-w-7xl px-6 pt-12 md:pt-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                <span className="bg-gradient-to-r from-white via-emerald-100 to-emerald-200 bg-clip-text text-transparent">
                  Infrastruktur för jaktlag.
                </span>
                <span className="block text-white/70 text-3xl md:text-4xl font-medium mt-4">
                  Säkrare säsonger, mindre friktion, bättre kommunikation.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                Jaktlaget - hela NORDENS jaktcommunity! Här samlas kalender, pass, bomkoder och kommunikation i ett rollstyrt, GDPR‑medvetet flöde. Designat för förtroende och fältläsbarhet.
                Hitta gästjägare, knyt nya kontakter och utbyt värdefull kunskap mellan andra jägare, allt på ett och samma ställe! 
              </p>
              <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 text-sm text-white/80 md:grid-cols-2">
                <Card title="Affärsmodell" hover>
                  <div className="font-semibold text-emerald-300">Prenumeration per medlem</div>
                  <div className="text-xs text-white/60 mt-1">Prispunkter för modellering: 19 / 49 kr / mån</div>
                </Card>
                <Card title="Bas / antagande" hover>
                  <div className="font-semibold text-emerald-300">Nordiska jaktkort</div>
                  <div className="text-xs text-white/60 mt-1">Interaktiv kalkyl nedan</div>
                </Card>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-x-8 -bottom-8 top-16 -z-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl ring-1 ring-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.4)]" />
              <IPhoneFrame />
              <p className="mt-4 text-center text-xs text-white/60 font-medium">Innehållet är i utvecklingsfas (kan ändas).</p>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Problem/Solution Section */}
        <section className="mx-auto mt-16 max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card title="Problemet idag" hover>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Fragmenterad info: chattgrupper, utspridda dokument, analoga listor.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Risker kring felaktiga bomkoder, passfördelning och samlingstider.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Brist på rollstyrning och spårbarhet vid ändringar.</span>
                </li>
              </ul>
            </Card>
            <Card title="Vår lösning" hover>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Samlad plattform: kalender, pass, bomkoder, anslag/chatt.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Roll/behörigheter, notifieringar och tydlig logg av ändringar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Modern, sober design för förtroende och snabb fältanvändning.</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Enhanced Interactive Calculator */}
        <section id="calc" className="mx-auto mt-16 max-w-7xl px-6">
          <motion.div 
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  Interaktiv Nordisk Kalkylator
                </h3>
                <p className="mt-2 text-sm text-white/80">Välj område, adoption och pris för att modellera potentiella intäkter och annons‑reach.</p>
              </div>
              <div className="text-xs text-white/60 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                Not: Aktiva jaktkort = senaste tillgängliga uppgifter per land.
              </div>
            </div>

            {/* Enhanced Controls */}
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <Card title="Område" hover>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { id: "NORDEN", label: "HELA NORDEN" },
                    { id: "SE", label: "SVERIGE" },
                    { id: "NO", label: "NORGE" },
                    { id: "DK", label: "DANMARK" },
                    { id: "FI", label: "FINLAND" },
                  ].map((opt) => (
                    <Button 
                      key={opt.id} 
                      onClick={() => setRegion(opt.id as any)} 
                      active={region === opt.id}
                      className="text-left justify-start"
                    >
                      {opt.label}
                    </Button>
                  ))}
                </div>
                <div className="mt-4 text-xs text-white/70 bg-black/30 p-3 rounded-lg border border-white/10">
                  {region === "NORDEN" ? (
                    <>
                      <div className="font-semibold text-emerald-300">Aktiva jaktkort (summa): {fmt.format(NORDIC_TOTAL)}</div>
                      <div className="mt-2 space-y-1 opacity-80">
                        <div>SE {HUNTING_CARDS.SE.year}: {fmt.format(HUNTING_CARDS.SE.count)}</div>
                        <div>NO {HUNTING_CARDS.NO.year}: {fmt.format(HUNTING_CARDS.NO.count)}</div>
                        <div>DK {HUNTING_CARDS.DK.year}: {fmt.format(HUNTING_CARDS.DK.count)}</div>
                        <div>FI {HUNTING_CARDS.FI.year}: {fmt.format(HUNTING_CARDS.FI.count)}</div>
                      </div>
                    </>
                  ) : (
                    <div>
                      Aktiva jaktkort: <span className="font-semibold text-emerald-300">{fmt.format(HUNTING_CARDS[region].count)}</span> <span className="opacity-70">({HUNTING_CARDS[region].year})</span>
                    </div>
                  )}
                </div>
              </Card>

              <Card title="Adoption & Pris" hover>
                <div className="space-y-6">
                  <Slider 
                    value={adoption}
                    onChange={setAdoption}
                    min={1}
                    max={80}
                    label="Adoption (% av aktiva jaktkort)"
                  />
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/70">Prismodell</span>
                      <button
                        onClick={() => setUseCustomScenario(!useCustomScenario)}
                        className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                          useCustomScenario 
                            ? "bg-emerald-400/20 text-emerald-300 ring-1 ring-emerald-400/30" 
                            : "bg-white/5 text-white/60 hover:bg-white/10"
                        }`}
                      >
                        {useCustomScenario ? "Eget scenario" : "Standard"}
                      </button>
                    </div>
                    {useCustomScenario ? (
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <label className="text-xs text-white/70">Abonnemangstyp</label>
                          <div className="grid grid-cols-2 gap-3">
                            <Button
                              onClick={() => setPriceInterval("month")}
                              active={priceInterval === "month"}
                            >
                              Per månad
                            </Button>
                            <Button
                              onClick={() => setPriceInterval("year")}
                              active={priceInterval === "year"}
                            >
                              Per år
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs text-white/70">
                            Pris {priceInterval === "month" ? "per månad" : "per år"} (kr)
                          </label>
                          <input 
                            type="number" 
                            value={customPrice}
                            onChange={(e) => setCustomPrice(Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-full px-3 py-2 bg-black/40 border border-white/20 rounded-lg text-emerald-300 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                            min="1"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        {[19, 49].map((p) => (
                          <Button 
                            key={p} 
                            onClick={() => setPrice(p as 19 | 49)} 
                            active={price === p}
                          >
                            {p} kr / mån
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>

              <Card title="Resultat – prenumeration" hover>
                {useCustomScenario && (
                  <div className="mb-4 p-3 bg-emerald-400/10 rounded-lg border border-emerald-400/30">
                    <div className="text-xs text-emerald-300 font-medium">
                      Scenario: {customPrice} kr/{priceInterval === "month" ? "månad" : "år"} ({priceInterval === "month" ? "Månadsabonnemang" : "Årsabonnemang"})
                    </div>
                  </div>
                )}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span>Prenumeranter</span>
                    <span className="font-bold text-emerald-400">{fmt.format(subscribers)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Pris per månad</span>
                    <span className="font-bold text-emerald-400">{activePrice} kr</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Intäkt / månad</span>
                    <span className="font-bold text-emerald-400">{currency.format(monthlyRevenueSEK)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Intäkt / år</span>
                    <span className="font-bold text-emerald-400">{currency.format(annualRevenueSEK)}</span>
                  </div>
                </div>
                <div className="mt-6 h-40 w-full rounded-xl border border-white/10 bg-black/30 p-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueCompare} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="label" tick={{ fill: "#10b981", fontSize: 12 }} />
                      <YAxis tick={{ fill: "#10b981", fontSize: 12 }} tickFormatter={(v) => `${v.toFixed(1)} Mkr`} />
                      <Tooltip 
                        formatter={(v) => [`${(v as number).toFixed(2)} Mkr`, 'Årsintäkt']} 
                        contentStyle={{ 
                          background: "#0b100c", 
                          border: "1px solid rgba(16,185,129,0.3)", 
                          borderRadius: 12, 
                          color: "#fff" 
                        }} 
                      />
                      <Bar dataKey="value" fill="url(#revenueGradient)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* Enhanced Ads Section */}
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <Card title="BONUS: Annons‑reach (anslagstavla)" hover>
                <div className="space-y-6">
                  <Slider 
                    value={mauPct}
                    onChange={setMauPct}
                    min={10}
                    max={95}
                    label="MAU av prenumeranter"
                  />
                  <Slider 
                    value={viewsPerMAU}
                    onChange={setViewsPerMAU}
                    min={5}
                    max={120}
                    label="Feed‑visningar / MAU / mån"
                  />
                  <Slider 
                    value={sovPct}
                    onChange={setSovPct}
                    min={5}
                    max={100}
                    label="Partnerns SOV av annonsutrymme"
                  />
                  <p className="text-xs text-white/70 bg-white/5 p-3 rounded-lg border border-white/10">
                    Antagande: 1 annons per 3 inlägg i anslagstavlan.
                  </p>
                </div>
              </Card>

              <Card title="Resultat – annonser" hover>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span>Månatliga visningar (est.)</span>
                    <span className="font-bold text-emerald-400">{fmt.format(monthlyImpressions)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Unik reach / månad (est.)</span>
                    <span className="font-bold text-emerald-400">{fmt.format(uniqueReach)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>MAU (antal)</span>
                    <span className="font-bold text-emerald-400">{fmt.format(mauUsers)}</span>
                  </div>
                </div>
                <div className="mt-6 h-40 w-full rounded-xl border border-white/10 bg-black/30 p-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[{ name: "Visningar", v: monthlyImpressions }, { name: "Unik reach", v: uniqueReach }]} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="name" tick={{ fill: "#10b981", fontSize: 12 }} />
                      <YAxis tick={{ fill: "#10b981", fontSize: 12 }} tickFormatter={(v) => fmt.format(v)} />
                      <Tooltip 
                        formatter={(v) => [fmt.format(v as number), 'Antal']} 
                        contentStyle={{ 
                          background: "#0b100c", 
                          border: "1px solid rgba(16,185,129,0.3)", 
                          borderRadius: 12, 
                          color: "#fff" 
                        }} 
                      />
                      <Bar dataKey="v" fill="url(#adsGradient)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card title="Snabbjämförelse (år)" hover>
                <div className="space-y-4">
                  {revenueCompare.map((scenario, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span>{scenario.label} scenario</span>
                      <span className="font-bold text-emerald-400">{scenario.value.toFixed(2)} Mkr</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-white/70 bg-white/5 p-3 rounded-lg border border-white/10">
                  {useCustomScenario 
                    ? "Eget scenario aktiverat - justera pris och tidpunkt för att beräkna olika scenarion." 
                    : "Byt pris i panelen för att sätta huvudscenariot. Jämförelsen uppdateras dynamiskt."}
                </p>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Revenue Section */}
        <section id="revenue" className="mx-auto mt-16 max-w-7xl px-6">
          <motion.div 
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  Potentiella intäkter (estimat)
                </h3>
                <p className="mt-2 text-sm text-white/80">Enligt inlämnad tabell. Prisnivåer används endast för modellering – inte kundkommunikation.</p>
              </div>
              <div className="hidden sm:block text-xs text-white/60 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                Alla siffror exkl. moms. Drift = uppskattad årlig driftskostnad.
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {/* Enhanced Table */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-left text-sm text-white/80">
                      <th className="rounded-l-xl bg-white/10 px-4 py-4 ring-1 ring-white/20 font-semibold">Adoption</th>
                      <th className="bg-white/10 px-4 py-4 ring-1 ring-white/20 font-semibold">Användare</th>
                      <th className="bg-white/10 px-4 py-4 ring-1 ring-white/20 font-semibold">Årsintäkt (19 kr)</th>
                      <th className="bg-white/10 px-4 py-4 ring-1 ring-white/20 font-semibold">Årsintäkt (29 kr)</th>
                      <th className="bg-white/10 px-4 py-4 ring-1 ring-white/20 font-semibold">Årsintäkt (49 kr)</th>
                      <th className="bg-white/10 px-4 py-4 ring-1 ring-white/20 font-semibold">Drift/år (estimat)</th>
                      <th className="rounded-r-xl bg-white/10 px-4 py-4 ring-1 ring-white/20 font-semibold">Årsvinst (19 / 29 / 49)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {revenueRows.map((r, idx) => (
                      <tr key={idx} className="text-sm">
                        <td className="rounded-l-xl bg-black/40 px-4 py-4 ring-1 ring-white/10 font-medium">{r.adoption}</td>
                        <td className="bg-black/40 px-4 py-4 ring-1 ring-white/10">{r.users}</td>
                        <td className="bg-black/40 px-4 py-4 ring-1 ring-white/10">{r.rev19}</td>
                        <td className="bg-black/40 px-4 py-4 ring-1 ring-white/10">{r.rev29}</td>
                        <td className="bg-black/40 px-4 py-4 ring-1 ring-white/10">{r.rev49}</td>
                        <td className="bg-black/40 px-4 py-4 ring-1 ring-white/10">{r.opex}</td>
                        <td className="rounded-r-xl bg-black/40 px-4 py-4 ring-1 ring-white/10 font-semibold text-emerald-300">{r.profit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Enhanced Chart */}
              <div className="h-80 w-full rounded-2xl border border-white/10 bg-black/30 p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="adoption" tick={{ fill: "#10b981", fontSize: 12 }} />
                    <YAxis tick={{ fill: "#10b981", fontSize: 12 }} label={{ value: "Årsvinst (Mkr)", angle: -90, position: "insideLeft", fill: "#10b981", fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        background: "#0b100c", 
                        border: "1px solid rgba(16,185,129,0.3)", 
                        borderRadius: 12, 
                        color: "#fff" 
                      }} 
                    />
                    <Legend wrapperStyle={{ color: "#10b981", fontSize: 12 }} />
                    <Bar dataKey="p19" name="19 kr" fill="#10b981" />
                    <Bar dataKey="p29" name="29 kr" fill="#059669" />
                    <Bar dataKey="p49" name="49 kr" fill="#047857" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Moat & Risk Section */}
        <section className="mx-auto mt-16 max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card title="Försprång / Moat" hover>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1 text-lg">•</span>
                  <span>Förtroende‑driven design och rollstyrning för jaktlagens verkliga behov.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1 text-lg">•</span>
                  <span>Onboarding för hela lag – viralitet via inbjudningar, inte enskilda konton.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1 text-lg">•</span>
                  <span>Modularitet för nordisk expansion (språk, regler, lokala behov).</span>
                </li>
              </ul>
            </Card>
            <Card title="Risker & åtgärder" hover>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1 text-lg">•</span>
                  <span>Adoptionsrisk → Pilot med jaktlag, ambassadörer, case‑studies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1 text-lg">•</span>
                  <span>Integritetsrisk → GDPR‑först, minimal datalagring, tydliga behörigheter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1 text-lg">•</span>
                  <span>Konkurrens → Fokuserad nisch, hög UX‑kvalitet, snabb förbättringstakt.</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

            {/* Enhanced Source Note */}
            <section className="mx-auto my-16 max-w-7xl px-6">
              <motion.div
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-white/70 leading-relaxed">
                  <span className="font-semibold text-emerald-300">Källor:</span> Underlag för aktiva jaktkort (senaste publicerade): SE 2023/24; NO 2024/25; DK 2024/25; FI 2024. Uppdatera siffror löpande vid ny statistik.
                </p>
              </motion.div>
            </section>
          </>
        )}

        {/* Annonsörer Tab Content */}
        {activeTab === "annonsorer" && (
          <>
            <section className="relative mx-auto max-w-7xl px-6 pt-12 md:pt-16">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                    <span className="bg-gradient-to-r from-white via-emerald-100 to-emerald-200 bg-clip-text text-transparent">
                      Annonsmöjligheter
                    </span>
                  </h1>
                  <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-white/80 md:text-xl">
                    Nå ut till Nordens jaktcommunity genom Jaktlagets plattform. Vi erbjuder målriktade annonslösningar för jaktrelaterade produkter och tjänster.
                  </p>
                </motion.div>
              </div>
            </section>

            <section className="mx-auto mt-16 max-w-7xl px-6">
              <div className="grid gap-8 md:grid-cols-2">
                <Card title="Målgrupp" hover>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span><strong>916 000+</strong> aktiva jägare i Norden</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span><strong>60-80%</strong> månatlig aktivitet bland användare</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span><strong>30+</strong> visningar per användare och månad</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span><strong>Rollbaserad</strong> målriktning inom jaktlag</span>
                    </li>
                  </ul>
                </Card>
                <Card title="Annonsformat" hover>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span><strong>Anslagstavla</strong> - Native integration i flödet</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span><strong>Push-notiser</strong> - Riktade meddelanden</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span><strong>Sponsrad</strong> - Markera innehåll som sponsrat</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mx-auto mt-16 max-w-7xl px-6">
              <motion.div
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent mb-6">
                  Kontakt för annonsförfrågningar
                </h3>
                <div className="grid gap-6 md:grid-cols-3">
                  <Card title="Intresseanmälan" hover>
                    <p className="text-sm text-white/80 mb-4">
                      Kontakta oss för att diskutera era annonsbehov och målgruppsstrategi.
                    </p>
                    <Button onClick={() => window.open('mailto:annonsering@jaktlaget.se')} className="w-full">
                      Skicka intresseanmälan
                    </Button>
                  </Card>
                  <Card title="Mediakit" hover>
                    <p className="text-sm text-white/80 mb-4">
                      Ladda ner vår mediakit med detaljerad målgruppsdata och format.
                    </p>
                    <Button onClick={() => window.open('/mediakit.pdf')} className="w-full">
                      Ladda ner mediakit
                    </Button>
                  </Card>
                  <Card title="Demo" hover>
                    <p className="text-sm text-white/80 mb-4">
                      Se hur annonser integreras naturligt i användarupplevelsen.
                    </p>
                    <Button onClick={() => setActiveTab("investerare")} className="w-full">
                      Se app-demo
                    </Button>
                  </Card>
                </div>
              </motion.div>
            </section>
          </>
        )}

        {/* Utvecklare Tab Content */}
        {activeTab === "utvecklare" && (
          <>
            <section className="relative mx-auto max-w-7xl px-6 pt-12 md:pt-16">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                    <span className="bg-gradient-to-r from-white via-emerald-100 to-emerald-200 bg-clip-text text-transparent">
                      Teknisk Arkitektur
                    </span>
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                    Jaktlaget är byggt med modern teknik för skalbarhet, säkerhet och användarupplevelse. En robust plattform för jägare i hela Norden.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute -inset-x-8 -bottom-8 top-16 -z-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl ring-1 ring-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.4)]" />
                  <IPhoneFrame />
                  <p className="mt-4 text-center text-xs text-white/60 font-medium">App-demo: Funktionell prototyp i utvecklingsfas</p>
                </motion.div>
              </div>
            </section>

            <section className="mx-auto mt-16 max-w-7xl px-6">
              <div className="grid gap-8 md:grid-cols-2">
                <Card title="Tech Stack" hover>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-emerald-300 mb-2">Frontend</div>
                      <ul className="space-y-2 text-sm text-white/80">
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">•</span>
                          React Native (iOS/Android)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">•</span>
                          TypeScript för typsäkerhet
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">•</span>
                          Framer Motion för animationer
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-emerald-300 mb-2">Backend</div>
                      <ul className="space-y-2 text-sm text-white/80">
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">•</span>
                          Node.js med Express
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">•</span>
                          PostgreSQL för data
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">•</span>
                          Redis för caching
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card title="Arkitektur" hover>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-emerald-300 mb-2">Mikrotjänster</div>
                      <ul className="space-y-2 text-sm text-white/80">
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">•</span>
                          User Management Service
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">•</span>
                          Calendar & Events Service
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">•</span>
                          Notification Service
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">•</span>
                          Analytics Service
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-emerald-300 mb-2">DevOps</div>
                      <ul className="space-y-2 text-sm text-white/80">
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">•</span>
                          Docker containerisering
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">•</span>
                          AWS/Google Cloud deployment
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">•</span>
                          CI/CD med GitHub Actions
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="mx-auto mt-16 max-w-7xl px-6">
              <motion.div
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent mb-6">
                  Säkerhet & Privacy (GDPR)
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card title="Dataskydd" hover>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>End-to-end kryptering för meddelanden</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>Rollbaserad åtkomstkontroll (RBAC)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>Minimal datalagring enligt GDPR</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>Audit logs för alla ändringar</span>
                      </li>
                    </ul>
                  </Card>
                  <Card title="Skalbarhet" hover>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>Horisontell skalning med Kubernetes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>Real-tidsync med WebSocket</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>Offline-stöd för kritiska funktioner</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>CDN för global prestanda</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </motion.div>
            </section>

            <section className="mx-auto mt-16 max-w-7xl px-6">
              <motion.div
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent mb-6">
                  Utvecklingsfilosofi
                </h3>
                <div className="grid gap-6 md:grid-cols-3">
                  <Card title="User-Centric" hover>
                    <p className="text-sm text-white/80 mb-3">
                      Design för jägare, inte för tekniker. Varje funktion måste lösa ett verkligt problem i skogen eller på pass.
                    </p>
                    <ul className="space-y-2 text-xs text-white/60">
                      <li>• Fältläsbarhet först</li>
                      <li>• Offline-funktionalitet</li>
                      <li>• Minimal kognitiv belastning</li>
                    </ul>
                  </Card>
                  <Card title="Nordic Focus" hover>
                    <p className="text-sm text-white/80 mb-3">
                      Byggt för nordiska förhållanden - från svenska skogar till finska ödemarker. Lokala språk och regler.
                    </p>
                    <ul className="space-y-2 text-xs text-white/60">
                      <li>• Flerspråkig plattform</li>
                      <li>• Lokala jaktregler</li>
                      <li>• Väderintegrering</li>
                    </ul>
                  </Card>
                  <Card title="Privacy First" hover>
                    <p className="text-sm text-white/80 mb-3">
                      Jägare delar känslig information. Vi bygger förtroende genom transparens och starka säkerhetsprinciper.
                    </p>
                    <ul className="space-y-2 text-xs text-white/60">
                      <li>• Zero-trust arkitektur</li>
                      <li>• GDPR compliance</li>
                      <li>• Transparent datahantering</li>
                    </ul>
                  </Card>
                </div>
              </motion.div>
            </section>
          </>
        )}

      </main>

      {/* Enhanced Footer */}
      <footer className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <motion.div 
          className="border-t border-white/10 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-white/60 font-medium">
            © {new Date().getFullYear()} Jaktlaget. Konfidentiellt underlag för investerare.
          </p>
        </motion.div>
      </footer>

      {/* SVG Gradients for Charts */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="adsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}