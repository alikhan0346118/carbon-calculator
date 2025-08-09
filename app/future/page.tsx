"use client";

import Image from "next/image";
import Consult from "../../public/consul.png";
import Goal from "../../public/set-goals.png";
import Update from "../../public/update.png";
import Decarbonize from "../../public/netzero-logo-big-tree.png";

const Future = () => {
  const steps = [
    {
      img: Consult,
      title: "Consult Now",
      desc: "Meet our experts to begin sustainability and ESG compliance journey.",
    },
    {
      img: Goal,
      title: "Set your Goals",
      desc: "Our team guides in understanding and achieving your business roles.",
    },
    {
      img: Update,
      title: "Update Data",
      desc: "We interpret and organize data to ensure accuracy and transparency.",
    },
    {
      img: Decarbonize,
      title: "Decarbonize",
      desc: "Implement tailored plans to reduce emissions and achieve net zero goals.",
    },
  ];

  return (
    <div className="bg-white min-h-[85dvh] flex justify-center items-center py-12">
      <div className="flex flex-wrap gap-12 justify-center">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`group relative w-56 h-[380px] cursor-pointer rounded-3xl p-5
                        bg-white text-black shadow-lg border border-gray-200
                        hover:border-transparent hover:bg-gradient-to-b hover:from-cyan-500 hover:to-blue-500 hover:text-white
                        transition-all duration-500 ease-out transform hover:scale-105
                        animate-slideUp`}
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <Image
                src={step.img}
                alt={step.title}
                className="h-24 w-24 rounded-full bg-white p-2 shadow-md animate-float group-hover:shadow-xl transition-all duration-500"
              />
            </div>

            <div className="pt-16 flex flex-col items-center h-full">
              <h1 className="font-bold text-lg text-center mb-4">{step.title}</h1>

              <p className="text-md text-center opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Future;