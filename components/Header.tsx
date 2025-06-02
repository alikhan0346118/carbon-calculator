'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../public/GeoAI-logo.jpeg"

const Header = () => {
  return (
    <div className="fixed w-full bg-cyan-600 flex flex-row gap-4 items-center z-50  ">
  <Image alt="logo" src={Logo} height={100} width={100} className='h-16 w-32'/>
  <div className="ml-64 flex items-center">
    <Link href="/" className="ml-12 p-5 text-gray-100 hover:text-gray-500 hover:bg-white"> Home</Link>
    <Link href="/services" className="ml-12 p-5 text-gray-100 hover:text-gray-500 hover:bg-white"> Services</Link>
    <Link href="/future" className="ml-12 p-5 text-gray-100 hover:text-gray-500 hover:bg-white"> Future</Link>
    <Link href="/calculate" className="ml-12 p-5 text-gray-100 hover:text-gray-500 hover:bg-white"> Calculator</Link>
  </div>
</div>
  )
}

export default Header

