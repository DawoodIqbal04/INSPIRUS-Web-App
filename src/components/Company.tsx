import { logos } from '@/data/data'
import { log } from 'console'
import Image from 'next/image'
import React from 'react'

const Company = () => {
  return (
  <div className='py-40'>

    <div className="h-[5vw] flex gap-16 items-center justify-center  overflow-hidden relative backdrop-grayscale">
      {logos.map((logo, idx) => (
          <div
          key={idx}
            className={`w-max h-max  ${logo.id == 1 && "mr-10"} ${logo.id == 2 && "-mr-9 -ml-18"} ${logo.id == 3 && "-mr-5"} ${logo.id == 4 && "-mr-6"}`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              height={100}
              width={120}
              className={`${logo.id == 1 && "h-14 w-14"} grayscale hover:grayscale-0 `}
              />
          </div>
        ))}
    </div>
        </div>
  )
}

export default Company