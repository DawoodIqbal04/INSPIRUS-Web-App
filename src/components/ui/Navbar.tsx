import Link from 'next/link'
import React from 'react'
import { grotesk, sans } from '@/app/layout'
import Image from 'next/image'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='fixed z-50 top-0 flex items-center justify-between bg-whital w-full h-28 px-28'>
        <div className='flex items-center justify-center '>
            <Image src={'/logo.svg'} alt='logo' height={100} width={60} />
            <h1 className={`${grotesk.className} text-4xl font-semibold `}>Inspirus</h1>
        </div>
        <div className={`flex items-center justify-center ${grotesk.className} `}>
            <ul className='flex items-center justify-center gap-8 tracking-wide font-medium'>
                <li><Link href={''}>About Us</Link></li>
                <li><Link href={''}>Services</Link></li>
                <li><Link href={''}>Use Cases</Link></li>
                <li><Link href={''}>Pricing</Link></li>
                <li><Link href={''}>Blog</Link></li>
            </ul>
        </div>
        <div>
            <Button link='' title='Request a quote' otherClass='h-18 w-max px-9 bg-whital text-dark border border-dark text-xl rounded-2xl hover:text-whital' secondColor='bg-[#191A23]'/>
        </div>
    </div>
  )
}

export default Navbar