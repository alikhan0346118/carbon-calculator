"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type HowStep = {
  title: string;
  description: string;
  icon?: ReactNode; // e.g., <YourIcon className="h-5 w-5" />
};

type HowItWorksProps = {
  id?: string;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  steps?: HowStep[];
};

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

function HowItWorks({
  id = "how-it-works",
  eyebrow = "How It Works",
  heading = "Measure → Report → Act",
  subheading = "Three simple steps to move from raw data to verified climate action.",
  steps = [
    {
      title: "Measure",
      description:
        "Ingest activity data from utilities, suppliers, and IOT. Normalize to GHG Protocol and cover all scopes."
    },
    {
      title: "Report",
      description:
        "Generate audit-ready dashboards and exports for customers and regulators no messy spreadsheets."
    },
    {
      title: "Act",
      description:
        "Pinpoint hotspots via GIS, simulate scenarios, and prioritize the projects that cut the most carbon per dollar."
    }
  ]
}: HowItWorksProps) {
  return (
    <section
      id={id}
      className="relative w-full overflow-hidden bg-white py-14 sm:py-18"
      aria-labelledby={`${id}-title`}
    >
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-72 w-[80vw] rounded-full bg-gray-200/30 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-display font-semibold uppercase tracking-wider text-gray-600">
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-1 text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {heading}
          </h2>
          <p className="mt-3 text-base font-sans text-gray-600 sm:text-lg">{subheading}</p>
        </motion.div>

        {/* Steps */}
        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-8 sm:gap-10 lg:mt-12 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
        >
          {steps.map((s, idx) => (
                         <motion.li
               key={idx}
               variants={item}
               className="group relative rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md min-h-[240px] sm:min-h-[280px] flex flex-col"
               style={{ backgroundColor: 'white' }}
               onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c2c2c2'}
               onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
             >
              {/* step number */}
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-display font-semibold text-gray-700">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white font-mono text-gray-800">
                  {idx + 1}
                </span>
                <span className="sr-only">Step {idx + 1}</span>
                {s.icon ?? null}
              </div>

              <h3 className="text-lg font-display font-semibold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-sm font-sans leading-relaxed text-gray-700 flex-grow">
                {s.description}
              </p>

                             {/* connector arrow on desktop */}
               {idx < steps.length - 1 && (
                 <div
                   aria-hidden
                   className="hidden lg:block absolute right-[-32px] top-1/2 transform -translate-y-1/2"
                 >
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </div>
               )}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-white w-full">
      {/* HERO (after navbar) */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
            poster="/bg.gif"
          >
            <source src="/video.mp4" type="video/mp4" />
            {/* Fallback to gif if video doesn't load */}
          
          </video>
        </div>

        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.15em] sm:tracking-[0.25em] text-white/80 font-display font-semibold text-center sm:text-left"
            >
              MEASURE · REPORT · ACT
            </motion.p>

            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-extrabold leading-tight text-white text-center sm:text-left"
            >
              AI Geo Navigators
            </motion.h1>

            <motion.p
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 max-w-2xl sm:max-w-3xl text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-sans text-center sm:text-left mx-auto sm:mx-0 leading-relaxed"
            >
              Empowering organizations to meet climate goals through smart, automated carbon intelligence
            </motion.p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Your existing second section */}
      {/* ...keep the rest of your code (Net Zero + graph) */}
    </div>
  );
}
