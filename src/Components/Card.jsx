import React from 'react'
import { FaRegFileAlt, } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion'
function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0 w-full'>
            <div className='flex items-center justify-between mb-3 px-8 py-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close?<IoMdClose size=".7em" color='#fff'/>:
                    <GoDownload size=".7em" color='#fff' />}
                </span>
            </div>
            {
                data.tag.isOpen &&
                (<div className={`tag w-full h-10 py-4 bg-green-600 flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagLine}</h3>
                </div>)
            }

        </div>
    </motion.div>
  )
}

export default Card