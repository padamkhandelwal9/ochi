import React from "react";
import {motion} from 'framer-motion'

function Marquee() {
   
  return (
    <div data-scroll data-scroll-speed='.2' data-scroll-section className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[18vw]  leading-none font-["Neue Montreal"] uppercase pt-10 -mb-[0.75vw] font-semibold pr-20 py-8'>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[18vw]  leading-none font-["Neue Montreal"] uppercase pt-10 -mb-[0.75vw] font-semibold pr-20 py-8'>we are ochi</motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
