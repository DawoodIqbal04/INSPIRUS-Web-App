import React, { useState, useRef } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'


const ExtendBox = () => {

    const [open, setOpen] = useState(false)
  return (
    <div className='w-full h-[28vh] bg-slate-400 drop-shadow-[0_6px_rgba(0,0,0,0.6)] rounded-[45px]'>
        <div className='flex items-center justify-between w-full px-5'>
            <div className='flex items-center gap-3'>
                <h1>01</h1>
                <p>Consultation</p>
            </div>
            <div onClick={() => setOpen(!open)} className='bg-slate-400 w-14 h-14 flex items-center justify-center rounded-full border border-black  ' >
                <span>
                    {open ? <FaPlus size={40}/> : <FaMinus size={40}/>}
                </span>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default ExtendBox