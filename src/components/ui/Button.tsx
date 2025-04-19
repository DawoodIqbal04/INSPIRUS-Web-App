import { grotesk } from '@/font';
import Link from 'next/link'
import React from 'react'

interface buttonProps {
    link: string;
    title: string;
    otherClass: string;
    secondColor?: string;
}

const Button = ( {link, title, secondColor, otherClass} : buttonProps ) => {
  return (
      <div className={`${otherClass} relative hover:[&>.child]:bottom-0 hover:[&>.child]:rounded-none overflow-hidden`}>
        <Link href={link} className={`${grotesk.className} relative z-20 h-full w-full flex items-center justify-center`}>
            {title}
        </Link>
        <div style={{
          transition: 'all 0.3s ease-in-out',
        }} className={`child absolute bottom-[-100%] left-0 z-10 rounded-[50%] w-full h-full ${secondColor} `}></div>
      </div>
  )
}

export default Button