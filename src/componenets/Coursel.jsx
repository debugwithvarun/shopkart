import React from "react";
import Image1 from "../assets/coursel/women.png";
import Image2 from "../assets/coursel/shopping.png";
import Image3 from "../assets/coursel/sale.png";
import { motion } from "framer-motion";

const Coursel = ({ orange, darkorange,bgcolor,dark,setOrder }) => {
  const ImageList = [
    {
      id: 1,
      img: Image1,
      title: "Upto 50% off on all Men's Wear",
      description:
        "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Image2,
      title: "30% off on all Women's Wear",
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Image3,
      title: "70% off on all Products Sale",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const xaxis = ImageList.map((image, index) => {
    return `${-100 * index + Math.floor(ImageList.length / 2) * 100}%`;
  }).flatMap((i) => [i, i]);

  // console.log(xaxis);
  // const bg=`bg-[${bgcolor}]`
  // console.log(bg)

  return (
    <div className={`max-w-screen ${dark?"bg-zinc-100":""} flex justify-center items-center py-4 overflow-hidden relative min-h-[650px]`}
    style={{backgroundColor:dark?"#1F201F":"#f4f4f5",}}
    >
      {/* yeh hai woh backgroung bala 5 degree bala box */}
      <div
        className="w-[700px] h-[700px] rounded-4xl rotate-45 absolute right-0 -top-1/2 "
        style={{ backgroundColor: orange }}
      />

      {/* yeh hai content  */}
      <div className="max-w-[90%] flex justify-center items-center overflow-hidden">
        {ImageList.map((image, index) => (
          <motion.div
            className=" min-w-full  flex justify-evenly gap-10 items-center relative max-sm:flex-col-reverse"
            key={index}
            initial={{ x: xaxis[0] }}
            animate={{ x: xaxis }}
            transition={{
              duration: ImageList.length * 3,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <div className="flex flex-col w-[50%] gap-6 justify-center items-start max-sm:w-[80%]">
              <motion.h1
                className="text-5xl font-bold text-black"
                style={{color:dark?"white":"black"}}
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {image.title}
              </motion.h1>
              <motion.p
                className={`${dark?"text-zinc-100":"text-zinc-500"}`}
                initial={{ y: 55, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {image.description}
              </motion.p>

              <motion.button
              onClick={()=>setOrder(true)}
                initial={{ y: 55, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                whileHover={{ backgroundColor: dark?orange:"#fc6a10",color:dark?darkorange:"white" }}
                whileTap={{ scale: 0.8 }}
                className="px-3 py-3 flex justify-center items-center rounded-4xl"
                style={{ backgroundColor: darkorange, color: "white" }}
              >
                Order Now
              </motion.button>
            </div>
            <div className="flex justify-start items-center   max-sm:w-[30%] max-sm:w-[30%]">
              <motion.img
                initial={{ x: 155, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                src={image.img}
                alt=""
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Coursel;
