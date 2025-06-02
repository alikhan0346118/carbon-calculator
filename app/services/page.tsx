import type React from "react"
import scope3 from "../../public/animation-03.gif"
import scope2 from "../../public/animation_02.gif"
import scope1 from "../../public/animation.gif"
import Image from "next/image"
const Services: React.FC = () => {
  console.log("Services component is rendering")

  // const handleClick = (): void => {
  //   console.log("Button was clicked!")
  //   alert("Hello World!")
  // }

  return (
    <div className="bg-white min-h-[85dvh] w-full ">
      <div className="flex flex-row justify-between ml-10">
        <div className="min-h-11 w-80 cursor-pointer text-center justify-center rounded-sm  mr-8 mt-24 mb-6 p-4  hover:bg-cyan-600 hover:text-white bg-slate-50 text-black transition-transform duration-20 hover:scale-105 ">
        <Image src={scope3} alt="Carbon" className="mt-12 ml-3 h-32 w-auto rounded-lg bg-gray-50"/>
        <button
          type="button"
          // onClick={handleClick}
          className="text-xl mb-2 mt-20 rounded-xl font-bold"
        >
         
         Basic Plan
        </button>
        <p className="text-justify text-sm ">Track Scope 1 & 2 emissions, ensure ESG compliance, access a GHG dashboard, and get online support.</p>
        </div>
        <div className="min-h-11 w-80 cursor-pointer text-center justify-center rounded-sm  mr-8 mt-24 mb-6 p-4  hover:bg-cyan-600 hover:text-white bg-slate-50 text-black transition-transform duration-20 hover:scale-105 ">
        <Image src={scope1} alt="Carbon" className="mt-12 ml-3 h-32 w-auto rounded-lg bg-gray-50"/>
        <button
          type="button"
          // onClick={handleClick}
          className="text-xl mb-2 mt-20 rounded-xl font-bold"
        >
         Enterprise Plan
        </button>
        <p className="text-justify text-sm ">Includes basic feature use AI to track Scope 3, automate reporting, create action plans and ensure compliance.</p>
        </div>
        <div className="min-h-11 w-80 cursor-pointer text-center justify-center rounded-sm  mr-8 mt-24 mb-6 p-4  hover:bg-cyan-600 hover:text-white bg-slate-50 text-black transition-transform duration-20 hover:scale-105 ">
        <Image src={scope2} alt="Carbon" className="mt-12 ml-7 h-32 w-auto rounded-lg bg-gray-50"/>
        <button
          type="button"
          // onClick={handleClick}
          className="text-xl mb-2 mt-20 rounded-xl  font-bold"
        >
         
         Net Zero Plan
        </button>
        <p className="text-justify text-sm ">Includes Enterprise features. Create net-zero strategies, analyze data, engage suppliers, and ensure decarbonization.</p>
        </div>
      </div>
    </div>
  )
}

export default Services

