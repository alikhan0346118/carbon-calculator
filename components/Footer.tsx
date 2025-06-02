import React from 'react'

const Footer = () => {
  return (
    <div>
            <footer className='bg-cyan-800  text-sm w-full flex flex-row gap-36 justify-end pt-3'
    //  style={{ backgroundImage: `url(${BG})`,
    //  backgroundRepeat: "no-repeat",  
    //  backgroundSize: "cover",       
    //  backgroundPosition: "center",}}
     >
      <div><h1 className='text-lg font-bold'>Services</h1>
      <ul className='font-semibold cursor-pointer' >
        <li className='mt-3'>Development</li>
        <li className='mt-3'>Branding Strategy</li>
        <li className='mt-3'>Exposure & Engagement</li>
        <li className='mt-3'>Marketing Stratergies</li>
      </ul>
        </div>
        <div className='mr-4'><h1 className='text-lg font-bold'>Contact </h1>
      <ul className='font-semibold cursor-pointer' >
        <li className='mt-3'>aigeonavigation@gmail.com</li>
        <li className='mt-2'>+92 334 6555577</li>
        <li className='mt-2 w-32'>Flat No.34, 2nd Floor, Rose-1 Plaza, Plot No.13, I-8 Markaz, Islamabad</li>
      </ul>
        </div> </footer>
   <div className='p-3 text-center bg-gray-800 text-white'> AI Geo Navigation your sustainability partner</div>
    </div>
  )
}

export default Footer
