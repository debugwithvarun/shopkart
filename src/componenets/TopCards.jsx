import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import {motion} from "framer-motion"
const TopCards = ({ darkorange, item ,index, white , orange }) => {
  return (
    <motion.div className="flex flex-col gap-3  items-start h-[300px] w-[200px] rounded-t-xl mb-4 mr-4"
    style={{color:white}}
             initial={{ y: 155, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 ,delay:0.02*index }} 
    >
      <div className="h-[70%] w-full rounded-xl overflow-hidden flex justify-center shadow-[inset_-10px_-10px_95px_rgba(0,0,0,0.4)]"
      style={{backgroundColor:item.color}}
      >
        <img
          src={item.img}
          alt={item.id}
          className="scale-[1.3] h-full mt-10 p-2 "
        />
      </div>
      <div className="w-full flex flex-col">
        <h1 className="font-bold text-lg">{item.title}</h1>
        <h3 className="font-sm">{item.color}</h3>
        <h3 className="flex gap-2 items-center text-lg ">
          <span className="text-orange-500">
            <TiStarFullOutline />
          </span>
          {item.rating}
        </h3>
      </div>
    </motion.div>
  );
};

export default TopCards;
