import React from "react";
import { AiOutlineLock } from "react-icons/ai";
import { motion } from "framer-motion";
const WinterSale = ({ bgcolor, orange, darkorange,white , dark }) => {
  return (
    <div className="w-full p-4 flex justify-evenly items-center mt-8 mb-8 max-md:flex-col">
      <motion.div
        className={`w-[400px] h-[400px] flex justify-center items-center shadow-2xl overflow-hidden bg-gradient-to-br ${dark?"from-[#CFE7F8]":"from-[#ffd092ff]"} ${dark?"to-[#749DD0]":"to-[#FF8400]"} rounded-2xl shadow-[inset_-10px_-10px_65px_rgba(0,0,0,0.4)] max-sm:max-w-[350px]`}
        initial={{ scale: 0.5, opacity: 0.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.img
          src="https://static.vecteezy.com/system/resources/thumbnails/050/817/775/small_2x/pretty-young-man-posing-with-shopping-bags-full-length-side-view-isolate-on-transparent-background-png.png"
          alt=""
          className="w-[300px] aspect-quare top-20 relative"
          initial={{ scale: 0.5, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      <div className=" flex flex-col items-start p-4 justify-between gap-6 max-w-[40%] max-md:max-w-[80%] w-[80%] text-center">
        <motion.h1
        style={{color:white}}
          className="text-4xl font-bold"
          initial={{ y: 155, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Winter Sale Up To 50% Off
        </motion.h1>
        <motion.p
          className={`${dark?"text-zinc-300":"text-zinc-500"}`}
          initial={{ y: 155, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
          consequuntur voluptate at ea aliquam repellendus distinctio possimus
          harum numquam delectus!
        </motion.p>
        <div className="flex flex-col gap-2">
          <motion.ul
            className="list-none p-2 flex flex-col gap-4"
            style={{color:white}}
            initial={"h"}
            whileInView={"v"}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.li
              className="text-lg  flex gap-4 items-center max-md:text-sm"
              variants={{
                h: { y: 55, opacity: 0 },
                v: { y: 0, opacity: 1},
              }}
            >
              <span className="rounded-full w-10 h-10 bg-violet-100 flex items-center justify-center">
                <AiOutlineLock  className="text-black"/>
              </span>
              Quality Products
            </motion.li>
            <motion.li className="text-lg  flex gap-4 items-center max-md:text-sm"
                variants={{
                h: { y: 55, opacity: 0 },
                v: { y: 0, opacity: 1 },
              }}
            >
              <span className="rounded-full w-10 h-10 bg-orange-100 flex items-center justify-center">
                <AiOutlineLock  className="text-black"/>
              </span>
              Fast Delivery
            </motion.li>
            <motion.li className="text-lg  flex gap-4 items-center  max-md:text-sm"
                variants={{
                h: { y: 55, opacity: 0 },
                v: { y: 0, opacity: 1},
              }}
            >
              <span className="rounded-full w-10 h-10 bg-green-100 flex items-center justify-center">
                <AiOutlineLock  className="text-black"/>
              </span>
              Easy Payment Method
            </motion.li>
            <motion.li className="text-lg  flex gap-4 items-center max-md:text-sm"
                variants={{
                h: { y: 55, opacity: 0 },
                v: { y: 0, opacity: 1 },
              }}
            >
              <span className="rounded-full w-10 h-10 bg-yellow-100 flex items-center justify-center">
                <AiOutlineLock className="text-black" />
              </span>
              Get Offers
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default WinterSale;
