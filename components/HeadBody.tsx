import React from 'react'
import Image from 'next/image'
import BG from "../public/whole-building.gif"
const HeadBody = () => {
  return (
<div>
   <div className='flex flex-row bg-white  w-full h-[500px] justify-between '>
          <div className="relative top-10 w-full flex flex-col ml-6"> 
    <p className="mt-20 text-lg text-black  ml-20 font-semibold">MEASURE. PEPORT. ACT</p>
         <h2 className="text-4xl mt-5 font-bold text-gray-950">Geo AI your partner  
           <br/> in tracking Emissions</h2>
           <p className="w-80 ml-5 mt-6 text-justify text-slate-950 text-lg font-semibold">Automate your emissions monitoring while advancing ESG compliance and net-zero goals in Pakistan.
              Automating Sustainability for Businesses Across Pakistan
              Unlock your potential with our cutting-edge tools for emissions tracking and ESG compliance.</p>
      </div>
      <Image className=" h-[500px] w-full " alt="foest" src={BG}/>
    </div>
</div>
   

  
  )
}

export default HeadBody
