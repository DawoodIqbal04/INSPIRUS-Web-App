import React from 'react'
import Button from './ui/Button'
import { grotesk, sans } from '@/font'
import Image from 'next/image'

const Proposal = () => {
  return (
    <section className='relative py-20'>
        <div className=' w-full lg:h-84 h-[38vh] flex items-center justify-between bg-[#E8E8E8] rounded-[38px] p-16'>
            <div className='flex flex-col items-start gap-5 lg:w-[50%] w-[40%] '>
                <h1 className={`${grotesk.className} text-3xl font-semibold`}>Let&apos;s make things happen</h1>
                <p className={`${sans.className} tracking-wide lg:w-[36vw] `}>Contact us today to learn more about how our creative software services can help your business grow and succeed online</p>
                <div>
                    <Button link='' otherClass='h-16 w-max lg:px-28 px-10 bg-dark text-white border border-dark lg:text-lg rounded-lg hover:text-dark' title='Get Your Free Posposal' secondColor='bg-primary' />
                </div>
            </div>
        </div>
            <div>
                <Image src={'/prop.svg'} alt='image' height={200} width={800} className='absolute lg:-top-35 lg:-right-10 -top-30 -right-45 z-10'/>
            </div>
    </section>
  )
}

export default Proposal