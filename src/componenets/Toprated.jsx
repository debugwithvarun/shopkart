import React from "react";
import TopratedCard from "./TopratedCard";
import {motion} from "framer-motion"
import Img1 from "../assets/shirt/shirt.png";
import Img2 from "../assets/shirt/shirt2.png";
import Img3 from "../assets/shirt/shirt3.png";
const Toprated = ({ bgcolor, orange, darkorange,dark, white,setOrder }) => {

  const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
  return (
    <div className="oveflow-hidden relative w-[full] flex flex-col gap-4 justify-center items-center ">
      <div className="flex flex-col justify-center items-start gap-1 overflow-hidden mb-3 w-[80%] text-center">
        <motion.h4
          className="text-lg "
          style={{ color: darkorange }}
          initial={{ y: 55, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Trending Products
        </motion.h4>
        <motion.h1
          className="text-3xl font-bold"
          style={{ color: white }}
          initial={{ y: 55, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Top Rated Products
        </motion.h1>
        <motion.p
          className={`${dark?"text-zinc-200":"text-zinc-500"}`}
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          asperiores sit ut facilis excepturi veritatis?
        </motion.p>
      </div>

      <div className="flex w-full justify-evenly items-center  flex-wrap max-sm:flex-col">

        {
          ProductsData.map((item,index)=>(

            <TopratedCard darkorange={darkorange} item={item} key={index} index={index} orange={orange} dark={dark} white={white} bgcolor={bgcolor} setOrder={setOrder}/>
          ))
        }

      </div>
    </div>
  );
};

export default Toprated;
