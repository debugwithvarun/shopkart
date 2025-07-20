import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import {motion} from "framer-motion"
const TopratedCard = ({ darkorange,item,index,dark,orange,white,bgcolor,setOrder }) => {
  // console.log(dark)
  return (
    <motion.div className={`rounded-2xl w-[300px] min-h-[300px] shadow-xl mt-15 flex flex-col justify-end items-center mb-5 p-2 pb-3 relative hover:bg-orange-300 ${dark===false?"shadow-zinc-200":"shadow-zinc-800"}`}
       initial={{ y: 155, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 ,delay:0.05*index }} 
          // whileHover={{backgroundColor:bgcolor,color:white}}
    >
      <div className="flex justify-center items-center mt-13  ">
        <img
          src={item.img}
          alt=""
          className="-top-15 absolute w-[160px] "
        />
      </div>

      <div className="flex flex-col text-center relative justify-center items-center gap-2 w-full">
        <div
          className="flex justify-center items-center gap-1 relative text-lg text-orange-500"
          // style={{ color: darkorange }}
        >
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
        </div>
        <h1 className="text-xl font-bold " style={{color:white}}>{item.title}</h1>
        <p className="text-gray-500 text-sm w-[80%] truncate">
          {item.description}
        </p>
        <motion.button
        onClick={()=>setOrder(true)}
          className="px-2 py-1 text-white rounded-2xl cursor-pointer"
          style={{ backgroundColor: darkorange }}
           whileHover={{ backgroundColor: dark?orange:"#fc6a10",color:dark?darkorange:"#fff"}}
           transition={{type:"spring"}}
           whileTap={{scale:0.8}}
        >
          Order Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TopratedCard;
