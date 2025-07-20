import React, { useState } from "react";
import { FaShopify } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { motion } from "framer-motion";


const Navbar = ({ bgcolor, orange, darkorange,dark,setDark, setOrder }) => {
  const [show, setShow] = useState(false);


  const [showip, setShowip] = useState(false);
  // console.log(showip);
  return (
    <div className={`w-full flex flex-col relative z-100 shadow-lg `}>
      <div
        onClick={() => setShowip(false)}
        className={`py-3 w-full flex justify-center items-center shadow-lg`}
        style={{ backgroundColor: orange }}
      >
        <div className="w-[90%] flex justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-1 cursor-pointer">
              <FaShopify className=" text-3xl" style={{ color: darkorange }} />
              ShopKart
            </h1>
          </div>

          <div className="flex gap-4 items-center justify-end">
            <motion.input
              type="text"
              placeholder="Search here..."
              name=""
              id=""
              
              className={`bg-white rounded-2xl text-zinc-400 px-4 focus:outline-[#FF8400] py-1 cursor-pointer w-[50%] ${showip ? "flex" : "hidden"
              }`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: showip ? 1 : 0 }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
            <IoMdSearch
              className={`text-2xl flex justify-center items-center font-bold ${
                showip ? "hidden" : "flex"
              } cursor-pointer`}
              style={{ color: darkorange }}
              onClick={(e) => {
                e.stopPropagation();
                setShowip(true);
              }}
            />
            <div
            onClick={()=>setOrder(true)}
              className={`flex gap-3 text-white items-center px-3 rounded-2xl text-sm py-1 cursor-pointer ${
                showip ? "max-md:hidden" : "flex"
              }`}
              style={{ backgroundColor: darkorange }}
            >
              <span className="max-sm:hidden">Cart</span>
              <BsCartFill />
            </div>

            <button
              className={`w-10 bg-white rounded-2xl relative flex p-3 items-center md:p-4 md:w-15 cursor-pointer ${
                showip ? "max-md:hidden" : "flex"
              }`}
              onClick={()=>setDark(!dark)}
            >
              <motion.span
                className="h-4 rounded-full aspect-square  absolute left-1 md:h-6"
                style={{ backgroundColor: darkorange }}
                initial={{x:0}}
                animate={{x:dark?"100%":"0%"}}
                
              ></motion.span>
            </button>
            <RxHamburgerMenu
              className={`md:hidden text-2xl flex justify-center items-center font-bold cursor-pointer ${
                show ? "hidden" : ""
              }`}
              style={{ color: darkorange }}
              onClick={() => setShow(!show)}
            />
            <RxCross2
              className={`md:hidden text-2xl flex justify-center items-center font-bold cursor-pointer ${
                show ? "flex" : "hidden"
              }`}
              style={{ color: darkorange }}
              onClick={() => setShow(!show)}
            />
          </div>
        </div>
      </div>

      <div
        className="py-2 px-22 flex justify-center items-center w-full shadow-lg max-md:hidden"
        style={{ backgroundColor: bgcolor,color:orange }}
      >
        <motion.ul
          className="list-none flex gap-8 text-md font-[451] cursor-pointer"
          initial={{ scale: 0.4, opacity: 0.4 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.li
            initial={{ scale: 1 }}
            style={{color:orange}}

            whileHover={{ scale: 1.05, color: darkorange }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
          >
            Home
          </motion.li>
          <motion.li
            initial={{ scale: 1 }}
            style={{color:orange}}

            whileHover={{ scale: 1.05, color: darkorange }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
          >
            Tops Rated
          </motion.li>
          <motion.li
            initial={{ scale: 1 }}
            style={{color:orange}}

            whileHover={{ scale: 1.05, color: darkorange }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
          >
            Kids Wear
          </motion.li>
          <motion.li
            initial={{ scale: 1 }}
            style={{color:orange}}

            whileHover={{ scale: 1.05, color: darkorange }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
          >
            Mens Wear
          </motion.li>
          <motion.li
            initial={{ scale: 1 }}
            style={{color:orange}}

            whileHover={{ scale: 1.05, color: darkorange }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
          >
            Electronics
          </motion.li>
          <motion.li
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05, color: darkorange }}
            style={{color:orange}}
            transition={{ duration: 0.2 }}
          >
            <select className="focus:ring-0 transition duration-150 ease-in-out">
              <option value="trend">Trending Products</option>
              <option value="otherOption">Other option</option>
            </select>
          </motion.li>
        </motion.ul>
      </div>

      <motion.div
        className="py-2 px-22 max-md:flex hidden justify-center items-center w-full shadow-lg  max-md:absolute -z-10 top-[100%]"
        style={{ backgroundColor: bgcolor }}
        initial={{ y: "-100%" }}
        animate={{ y: show ? "0%" : "-100%" }}
        transition={{ duration: 0.7, ease: "easeIn" }}
      >
        <ul
          className="list-none flex gap-8 text-md font-bold max-md:flex-col my-2"
          style={{ backgroundColor: bgcolor ,color:darkorange}}
        >
          <li>Home</li>
          <li>Tops Rated</li>
          <li>Kids Wear</li>
          <li>Mens Wear</li>
          <li>Electronics</li>
          <li>
            <select className="focus:ring-0 transition duration-150 ease-in-out"
            style={{backgroundColor:bgcolor}}
            >
              <option value="trend">Trending Products</option>
              <option value="otherOption">Other option</option>
            </select>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
