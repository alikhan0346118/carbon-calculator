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
      className="relative w-full overflow-hidden bg-white py-8 sm:py-14 md:py-20"
      aria-labelledby={`${id}-title`}
    >
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-72 w-[80vw] rounded-full bg-gray-200/30 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8 relative">
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
            className="mt-1 text-xl sm:text-3xl font-serif font-bold tracking-tight text-gray-900 md:text-4xl"
          >
            {heading}
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base font-sans text-gray-600 md:text-lg">{subheading}</p>
        </motion.div>

        {/* Steps */}
        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 sm:mt-10 grid gap-4 sm:gap-8 md:gap-12 lg:mt-12 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
        >
          {steps.map((s, idx) => (
            <motion.li
              key={idx}
              variants={item}
              className="group relative rounded-2xl border border-gray-200 bg-white px-4 pt-4 pb-3 sm:p-6 md:p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md min-h-[180px] sm:min-h-[240px] md:min-h-[300px] flex flex-col"
              style={{ backgroundColor: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c2c2c2'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              {/* step number and title - row on mobile, vertical on desktop */}
              <div className="mb-3 sm:mb-4 flex flex-row sm:flex-col gap-2 sm:gap-3 text-sm font-display font-semibold text-gray-700">
                <span className="inline-flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-gray-300 bg-white font-mono text-gray-800 text-xs sm:text-sm">
                  {idx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-display font-semibold text-gray-900">{s.title}</h3>
                <span className="sr-only">Step {idx + 1}</span>
                {s.icon ?? null}
              </div>
              <p className="text-xs sm:text-sm font-sans leading-relaxed text-gray-700 flex-grow">
                {s.description}
              </p>

              {/* connector arrow on desktop */}
              {idx < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute right-[-32px] top-1/2 transform -translate-y-1/2"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
      <section className="relative h-[70vh] md:h-[85vh] lg:h-screen w-full overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0">
          <img
            src="/nasa sea ice GIF by NASA's Goddard Space Flight Center.gif"
            alt="Climate Change Earth"
            className="w-full h-full object-cover object-center"
          />

          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
            poster="/bg.gif"
          >
            <source src="/Climate Change Earth GIF.gif" type="video/mp4" />
          
          </video> */}
        </div>

        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-8 md:ml-0">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white/80 font-display font-semibold text-center sm:text-left md:text-left"
            >
              MEASURE · REPORT · ACT
            </motion.p>

            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-extrabold leading-tight text-white text-center sm:text-left md:text-left"
            >
              AI Geo Navigators
            </motion.h1>

            <motion.p
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 max-w-2xl sm:max-w-3xl md:max-w-4xl text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-sans text-center sm:text-left md:text-left mx-auto sm:mx-0 md:mx-0 leading-relaxed"
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
