import React from "react";
import Tcards from "./Tcards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from "framer-motion"

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Textimonial = ({ bgcolor, orange, darkorange,white,dark }) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="oveflow-hidden relative w-full flex flex-col gap-4 justify-center items-center py-10 ">
      <div className="flex flex-col justify-center items-center gap-1 overflow-hidden mb-3 w-[80%] text-center">
        <motion.h4 className="text-lg " style={{ color: darkorange }}
              initial={{ y: 55, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          What Our Customer Say
        </motion.h4>
        <motion.h1 className="text-3xl font-bold" style={{ color: white }}
              initial={{ y: 55, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Testimonial
        </motion.h1>
        <motion.p className={`${dark?"text-zinc-300":"text-zinc-500"}`}
              initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          asperiores sit ut facilis excepturi veritatis?
        </motion.p>
      </div>

      <motion.div
       initial={{scale:0,opacity:0}}
        whileInView={{scale:1,opacity:1}}
        transition={{duration:0.4}}
        className="flex w-full justify-center items-center pb-2"
        // data-aos="zoom-in"
      >
        <Slider
       
          {...settings}
          className="w-[90%] h-full flex justify-center items-center"
        >
          {TestimonialData.map((item) => (
            <Tcards
              key={item.id}
              bgcolor={bgcolor}
              orange={orange}
              darkorange={darkorange}
              item={item}
              dark={dark}
              white={white}
            />
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Textimonial;
