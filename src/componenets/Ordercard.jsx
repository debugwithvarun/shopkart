import React from 'react'
import { GiCrossedBones } from "react-icons/gi";
import {AnimatePresence, motion, spring} from "framer-motion"
const Ordercard = ({orange,darkorange,setOrder,order}) => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center fixed z-10000 bg-white/10 backdrop-blur'
    onClick={()=>setOrder(false)}
    >

    <AnimatePresence>

             <motion.div className='w-[300px] p-4 flex flex-col justify-center gap-4 bg-white rounded-xl shadow-xl relative'
        initial={{y:"-100%"}}
        animate={{y:"0%"}}
      
        transition={{duration:0.5,ease:"easeInOut"}}

        onClick={(e)=>e.stopPropagation()}
        >
                <GiCrossedBones className='text-xl absolute top-5 right-5 cursor-pointer' style={{color:darkorange}} onClick={()=>setOrder(false)}/>
                <h1 className='text-xl font-bold'
                style={{color:darkorange}}
                >Order Now</h1>
                <input type="text" placeholder='Name' className='py-2 px-3 outline-1 rounded-2xl' style={{color:darkorange}}/>
                <input type="email" placeholder='Email' className='py-2 px-3 outline-1 rounded-2xl' style={{color:darkorange}}/>
                <input type="text" placeholder='Address' className='py-2 px-3 outline-1 rounded-2xl' style={{color:darkorange}}/>
                <div className='flex w-full justify-center items-center'>
                    <motion.button className='py-2 px-3 text-lg rounded-2xl text-white cursor-pointer'
                    onClick={()=>setOrder(false)}
                    whileTap={{scale:0.9}}
                    transition={{type:spring,stiffness:200}}
                    whileHover={{backgroundColor:orange,color:darkorange}}
                    style={{backgroundColor:darkorange}}
                    >Order Now</motion.button>
                </div>
        </motion.div>
    </AnimatePresence>

    </div>
  )
}

export default Ordercard