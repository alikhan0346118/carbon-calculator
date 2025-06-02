import Image from "next/image"
import Consult from "../../public/consul.png"
import Goal from "../../public/set-goals.png"
import Update from "../../public/update.png"
import Decarbonize from "../../public/netzero-logo-big-tree.png"

const Future = () => {
  return (
    <div>
        <div className="flex bg-white flex-row gap-6 min-h-[85dvh] max-w-full">
   <div className=" hover:bg-cyan-700 cursor-pointer hover:text-white bg-gray-50 text-black transition-transform duration-20 hover:scale-105  p-5 text-center ml-44 mt-32 w-48 h-[360px] rounded-lg">
    <Image className="rounded-full ml-3 mt-4 mb-8 h-32 w-32" src={Consult} alt="Consultation" />
    <h1 className="font-bold text-lg mt-4">Consult Now</h1>
    <p className="text-center">Meet our experts to begin sustainability and ESG compliance jorney.</p>
   </div>
   <div className="hover:bg-cyan-700 cursor-pointer hover:text-white bg-gray-50 text-black transition-transform duration-20 hover:scale-105  p-5 text-center mt-32 w-48 h-[360px] rounded-lg">
    <Image className="bg-gray-50 rounded-full ml-3 mt-4 mb-8 h-32 w-32" src={Goal} alt="Consultation" />
    <h1 className="font-bold text-lg mt-6">Set your Goals</h1>
    <p className="text-center">Our team guides in understanding and achieving your business roles</p>
   </div>
   <div className="hover:bg-cyan-700 cursor-pointer hover:text-white bg-gray-50 text-black transition-transform duration-20 hover:scale-105  p-5 text-center  mt-32 w-48 h-[360px] rounded-lg">
    <Image className="ml-4 w-32 h-32 mt-4 rounded-full mb-8" src={Update} alt="Consultation" />
    <h1 className="font-bold text-lg mt-4">Update Data</h1>
    <p className="text-center">We interpret and organize data to ensure accuraccy and transparency</p>
   </div>
   <div className="hover:bg-cyan-700 cursor-pointer hover:text-white bg-gray-50 text-black transition-transform duration-20 hover:scale-105  p-5 text-center mt-32 w-48 h-[360px] rounded-lg">
    <Image className="bg-gray-50 rounded-full h-32 w-32 ml-4 mb-8 mt-4" src={Decarbonize} alt="Consultation" />
    <h1 className="font-bold text-lg mt-6">Decarbonize</h1>
    <p className="text-center">Implement tailored plans to reduce emissions and achieve net zero goals</p>
   </div>
   </div>
    </div>
  )
}

export default Future
