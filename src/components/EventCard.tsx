import React from "react";

export default function EventCard() {
  return (
    <div className="relative flex-col  bg-stone-900/[.70] pb-8  p-4 shadow-2xl border-2 grayscale hover:grayscale-0 flex-auto text-black scale-100 hover:scale-105 text-centre  bg-black w-4/5  ">
      <img
        src="./public/p1.jfif"
        alt=""
        className="relative rounded-2xl p-1 bg-cover  "
      />
      <div className="relavtive  text-white text-left font-sans text-2xl tracking-widest font-semibold ml-8 mt-4">
        GOOGLER
      </div>
      <div className="relavtive text-stone-400 text-left font-sans text-l pr-5 mr-4 mt-4 ml-8  ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        delectus autem nam iusto quis reiciendis, fuga asperiores, aliquam nisi
        impedit dolorum ab repellendus numquam sed eos. Impedit iure explicabo
        animi?
      </div>
      <div className="relative  max-sm:row-span-1 sm:grid-rows-1 grid md:grid-cols-2 mt-12 gap-8 "  >
        <div className="relavtive text-black   text-center p-3  md:text-lg text-2xl font-bold  bg-white">
          <a href="/">Register</a>
        </div>
        <div className="relavtive text-black max-sm:p-3 sm:pt-2 sm:p-3 text-center pt-3 md:text-lg  text-2xl  font-bold  bg-white ">
          <a href="/">Vist</a>
        </div>
      </div>
    </div>
  );
}
