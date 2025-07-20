import React from "react";
import fotter1 from "../assets/footer-pattern.jpg";
import fotter2 from "../assets/footer-blue.png";
import { FaShopify } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { motion } from "framer-motion";
const Footer = ({ bgcolor, orange, darkorange,dark }) => {
  return (
    <div
      className="w-full flex justify-evenly items-start py-15 px-4 text-white pb-60 max-md:flex-col max-md:gap-8"
      style={{
        backgroundImage: `url(${dark?fotter2:fotter1})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      <motion.div
        className="w-full flex justify-evenly items-start px-4 text-white pb-10 max-md:flex-col max-md:gap-8"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col gap-4 w-[20%] max-md:w-[80%]">
          <div className="flex gap-4 items-center justify-start">
            <FaShopify
              className="text-5xl font-bold"
              style={{ color: darkorange }}
            />
            <h1 className="text-4xl font-bold">Shopkart</h1>
          </div>
          <div>
            <p className="text-justify texxt-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              quasi dolor deserunt ratione unde magni voluptates non animi nihil
              adipisci numquam, cum corporis?
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-10 md:gap-20">
          <div className="flex flex-col justify-center items-start gap-4 ">
            <h1 className="text-2xl flex items-center justify-start font-bold">
              Important Links
            </h1>

            <ul className="flex flex-col gap-3 list-none text-lg ">
              <motion.li className="hover:translate-x-3  duration-300 cursor-pointer"
              whileHover={{color:darkorange}}
              >Home</motion.li>
              <motion.li className="hover:translate-x-3  duration-300 cursor-pointer"
              whileHover={{color:darkorange}}
              >About</motion.li>
              <motion.li className="hover:translate-x-3  duration-300 cursor-pointer"
              whileHover={{color:darkorange}}
              >Contact</motion.li>
              <motion.li className="hover:translate-x-3  duration-300 cursor-pointer"
              whileHover={{color:darkorange}}
              >Blog</motion.li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-start gap-4 ">
            <h1 className="text-2xl flex items-center justify-start font-bold">
              Links
            </h1>

            <ul className="flex flex-col gap-3 list-none text-lg">
              <motion.li className="hover:translate-x-3  duration-300 cursor-pointer"
              whileHover={{color:darkorange}}
              >Home</motion.li>
              <motion.li className="hover:translate-x-3  duration-300 cursor-pointer"
              whileHover={{color:darkorange}}
              >About</motion.li>
              <motion.li className="hover:translate-x-3  duration-300 cursor-pointer"
              whileHover={{color:darkorange}}
              >Contact</motion.li>
              <motion.li className="hover:translate-x-3  duration-300 cursor-pointer"
              whileHover={{color:darkorange}}
              >Blog</motion.li>
            </ul>
          </div>
        </div>

        <div className="flex-col flex gap-6 max-md:w-[80%]">
          <div className="flex gap-5 text-2xl font-bold items-center">
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
          </div>
          <div className="flex gap-5 items-center text-lg">
            <FaLocationArrow className="text-2xl" />{" "}
            <span>Moradabad , Uttar Pradesh</span>
          </div>
          <div className="flex gap-5 items-center text-lg">
            <MdPhoneIphone className="text-2xl" /> <span>+91 976026256</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
