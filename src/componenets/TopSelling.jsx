import React from "react";
import TopCards from "./TopCards";
import { motion } from "framer-motion";
import Img1 from "../assets/topseeling/women.png";
import Img2 from "../assets/topseeling/women2.png";
import Img3 from "../assets/topseeling/women3.png";
import Img4 from "../assets/topseeling/women4.png";
const TopSelling = ({ bgcolor, orange, darkorange,dark,white }) => {

  const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "blue",
 
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
  
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
   
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
   
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    
  },
];
  return (
    <div className="oveflow-hidden relative w-full flex flex-col gap-8 justify-center items-center py-10 ">
      <div className="flex flex-col justify-center items-center gap-1 overflow-hidden mb-3 w-[80%] text-center">
        <motion.h4
          className="text-lg "
          initial={{ y: 55, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{ color: darkorange }}
        >
          Top Selling Products for you
        </motion.h4>
        <motion.h1
          className="text-3xl font-bold"
          initial={{ y: 55, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{ color: white }}
        >
          Top Selling Products
        </motion.h1>
        <motion.p
          className={`${dark?"text-zinc-300":"text-zinc-500"}`}
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          asperiores sit ut facilis excepturi veritatis?
        </motion.p>
      </div>

      <div className="flex w-full justify-evenly items-center flex-wrap max-sm:flex-col max-sm:gap-6">
        {
          ProductsData.map((item,index)=>(

            <TopCards darkorange={darkorange} item={item} key={index} index={index} white={white} orange={orange}/>
          ))
        }

      </div>

      <div className="w-full flex justify-center items-center">
        <motion.button
          className="px-3 py-2 text-lg rounded-2xl text-white mb-4"
          
          initial={{ y: 55, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 ,type:"spring"}}
          style={{ backgroundColor: darkorange }}
              whileHover={{ backgroundColor: dark?orange:"#fc6a10",color:dark?darkorange:"white"}}
           
           whileTap={{scale:0.8}}

          // whileHover={{backgroundColor:orange}}
        >
          View All Producst
        </motion.button>
      </div>
    </div>
  );
};

export default TopSelling;
