import React from "react";

const Tcards = ({ bgcolor, orange, darkorange ,item,white,dark}) => {
  const  {id,name,text,img}=item;
  return (
    <div className="max-w-[400px] py-6 px-8 rounded-3xl shadow-lg/5 flex flex-col justify-around mx-5 gap-4 mb-4 " key={id}
    style={{backgroundColor:dark?darkorange:orange,color:white}}
    >
      <img src={img} alt={name} className="w-16 h-16 rounded-full mx-auto" />
      <h3 className="text-lg font-semibold text-center">{name}</h3>
      <p className={`text-sm text-center ${dark?"text-zinc-200":"text-zinc-600"}`}>{text}</p>
    </div>
  );
};

export default Tcards;
