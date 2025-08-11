"use client";

import type React from "react";
import scope3 from "../../public/animation-03.gif";
import scope2 from "../../public/animation_02.gif";
import scope1 from "../../public/animation.gif";
import Image from "next/image";

const Services: React.FC = () => {
  const plans = [
    {
      img: scope3,
      title: "Basic Plan",
      desc: "Track Scope 1 & 2 emissions, ensure ESG compliance, access a GHG dashboard, and get online support."
    },
    {
      img: scope1,
      title: "Enterprise Plan",
      desc: "Includes basic features, use AI to track Scope 3, automate reporting, create action plans and ensure compliance."
    },
    {
      img: scope2,
      title: "Net Zero Plan",
      desc: "Includes Enterprise features. Create net-zero strategies, analyze data, engage suppliers, and ensure decarbonization."
    }
  ];

  return (
    <div className="bg-white min-h-[85dvh] w-full flex justify-center items-center py-12">
      <div className="flex flex-wrap gap-20 justify-center">
        {plans.map((plan, i) => (
          <div
            key={plan.title}
            className={`group relative min-h-11 w-80 cursor-pointer text-center rounded-2xl p-6 
                        bg-slate-50 text-black shadow-md hover:shadow-xl 
                        transition-all duration-500 ease-out transform hover:scale-105 
                        hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 hover:text-white
                        animate-slideUp`}
            style={{ animationDelay: `${i * 200}ms` }} 
          >
            <div className="relative mt-6 mb-6">
              <Image
                src={plan.img}
                alt={plan.title}
                className="mx-auto h-32 w-auto rounded-lg bg-gray-50 shadow-sm group-hover:shadow-lg 
                           transition-all duration-500 group-hover:-translate-y-2 animate-float"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3">{plan.title}</h3>

            {/* Description (hidden until hover) */}
            <p className="text-sm text-justify opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              {plan.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
