import React from 'react'
import banner1 from "../assets/orange-pattern.jpg"
import banner2 from "../assets/blue-pattern.jpg"
import {motion} from "framer-motion"
const Banner = ({dark}) => {
  return (
    <motion.div className={`w-full h-[200px] flex justify-center items-center`}
    initial={{scale:0,opacity:0}}
    whileInView={{scale:1,opacity:1}}
    transition={{duration:0.3}}
    style={{
        backgroundImage:`url(${dark?banner2:banner1})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    }}
    >
        <div className='flex flex-col gap-5 justify-center items-center'>
            
        <motion.h1 className='text-white font-bold text-4xl max-md:text-2xl  max-md:w-[70%] text-center'
            initial={{y:255,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:0.4}}
        >Get Notified About New Products</motion.h1>
        <motion.input type="text" placeholder='Enter Your Email' className='border-0 py-2 px-4 bg-white w-[70%]'
         initial={{y:255,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:0.4,delay:0.1}}
        />
        </div>
    </motion.div>
  )
}

export default Banner