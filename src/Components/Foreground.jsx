import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null);
    const data = [
        {
            desc:"  Hiii quos!",
            filesize:".7mb",
            close:false,
            tag:{isOpen:true,tagLine:"Download now",tagColor:"green"}
        },
        {
            desc:"  Hiii quos!",
            filesize:".7mb",
            close:false,
            tag:{isOpen:false,tagLine:"Download now",tagColor:"red"}
        },
        {
            desc:"  Hiii quos!",
            filesize:".7mb",
            close:true,
            tag:{isOpen:true,tagLine:"Download now",tagColor:"blue"}
        },
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
        {
            data.map((item,index)=>(
                <Card data={item} reference={ref} />
            ))
        }
    </div>
  )
}

export default Foreground