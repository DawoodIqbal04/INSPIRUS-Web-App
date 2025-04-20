import React from 'react'
import Button from './ui/Button'
import { grotesk, sans } from '@/font'
import Image from 'next/image'

const Proposal = () => {
  return (
    <section className='pb-20'>
        <div className='relative w-full h-84 flex items-center justify-between bg-[#E8E8E8] rounded-[38px] p-16'>
            <div className='flex flex-col items-start gap-5'>
                <h1 className={`${grotesk.className} text-3xl font-semibold`}>Let&apos;s make things happen</h1>
                <p className={`${sans.className} tracking-wide w-[36vw] `}>Contact us today to learn more about how our creative software services can help your business grow and succeed online</p>
                <div>
                    <Button link='' otherClass='h-16 w-max px-28 bg-dark text-white border border-dark text-lg rounded-lg hover:text-dark' title='Get Your Free Posposal' secondColor='bg-primary' />
                </div>
            </div>
            <div>
                <Image src={'/prop.svg'} alt='image' height={200} width={700} className='absolute -bottom-48 right-0 z-10'/>
            </div>
        </div>
    </section>
  )
}

export default Proposal