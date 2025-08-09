"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BG from "../public/bg.gif";
import graph from "../public/graph.gif"
export default function Home() {
  return (
    <div className="bg-white w-full ">
      <motion.div
        className="flex flex-row justify-between bg-white h-[520px]  overflow-hidden"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, duration: 1 }}
      >
        <motion.div
          className="relative top-10  flex flex-col ml-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <motion.p
            className="mt-20 text-lg text-black ml-20 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            MEASURE. REPORT. ACT
          </motion.p>

          <motion.h2
            className="text-4xl mt-4 font-bold text-gray-950 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
           AI Geo Navigator  <br />your partner in <br/> tracking Emissions
          </motion.h2>

          <motion.p
            className="w-80 ml-5 mt-4 text-justify text-slate-950 text-lg font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Automate your emissions monitoring while advancing ESG compliance
            and net-zero goals in Pakistan. Automating Sustainability for
            Businesses Across Pakistan. Unlock your potential with our
            cutting-edge tools for emissions tracking and ESG compliance.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <Image className="mt-32 h-1/2 w-full" alt="forest" src={BG} />
        </motion.div>
      </motion.div>
      <motion.div
        className="bg-[#fff8fa] text-black p-6 mt-10  shadow-xl flex flex-row justify-between"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >


        <motion.p
          className="px-5 text-justify text-lg leading-relaxed w-1/3 mt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <b>What is Net Zero?</b><br/>
       
          Net Zero refers to a state where the amount of greenhouse gases
          emitted into the atmosphere is balanced by an equivalent amount of
          emissions removed. It is a critical goal in the fight against climate
          change, aiming to reduce carbon footprints across industries, cities,
          and nations. 
        </motion.p>
        <motion.p
          className=""
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}>
            <Image src={graph} alt="Graph" className=" h-[350px] w-[650px]"/>
          </motion.p>
      
      </motion.div>
      <motion.div className="h-64 mt-4 text-9xl text-black flex justify-center backdrop-blur-xl">
      <motion.h1
          className="text-3xl font-bold mt-24 px-5 text-center "
          initial={{ opacity: 0, scale: 0.3}}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        >
           At AI Geo Navigation, we treat <br/>
           
            
           sustainability as a mandate 
             <br/> and as an opportunity.
        </motion.h1>
 
      </motion.div>
    </div>
  );
}
