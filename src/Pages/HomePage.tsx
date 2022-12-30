import React from "react";
import Navbar from "../components/navbar";
import Page1info from "../components/Page1info";
export default function HomePage() {
  return (
    <>
      <Navbar/>
      <br></br>
      <br></br>
      <div className="relative w-full">
        {/* Change this font family to kapartino */}
        <h1 className="text-white text text-12xl max-sm:text-7xl max-md:text-7xl   font-anton tracking-wider">WEBSTERS</h1>
      </div>
      <div className="realtive my-7 justify-center text-white">
        {/* Scroll button  */}
        <p>Scroll Down</p>
      </div>
      <Page1info/>
      <div className="relative w-full mt-10 mb-3">
        {/* Change this font family to kapartino */}
        <h1 className="text-white text-9xl tracking-widest font-anton font-normal">
          EVENTS
        </h1>
      </div>
      <div className="relative  "></div>
    </>
  );
}
