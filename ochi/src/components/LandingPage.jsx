import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section   data-scroll-speed='-.3' className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["we create", "Eye-opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end">
                {index === 1 && (
                  <motion.div 
                  initial={{width:0}} 
                  animate={{width:"8vw"}} 
                  transition={{ease:[0.76,0,0.24,1],duration:1}} 
                  className="mr-[vw] mr-4 w-[8vw] rounded-md h-[5.1vw] -top-[2vw] bg-cover bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)]">
                  </motion.div>
                )}
                <h1
                  key={index}
                  className='pt-[2vw] -mb-[0.1vw] uppercase text-[7vw] leading-[.75] font-["Neue Montreal"] font-semibold'
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            {" "}
            start the project
          </div>
          <div className="w-10 h-10 border-[1px] flex items-center justify-center border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
