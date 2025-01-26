import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
      <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center">
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className="absolute px-10 py-1 border-2 rounded-full left-10 bottom-10 text-[#CDEA68]">&copy;2019-2022</button>
      </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
      <div className="card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#192826]">
      <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
      <button className="absolute px-10 py-1 border-2 rounded-full left-10 bottom-10 text-[#CDEA68]">RATING 5.0 ON CLUTCH</button>
      </div> 
      <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#192826]">
      <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
      <button className="absolute px-10 py-1 border-2 rounded-full left-10 bottom-10 text-[#CDEA68]">BUSINESS BOOTCAMP</button>
      </div> 

      </div>
    </div>
  );
}

export default Cards;
