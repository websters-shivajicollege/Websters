import React from "react";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";

function Event() {
  return (
    <section className="bg-black ">
      <Navbar />
      <section className="relative p-8">
      
      <div className="relative text-center sm:text-[20vw] max-sm:text-[20vw] text-white p-4 font-bold text-[15vw] grid-cols-4 sm:auto-cols-max tracking-widest md:text-[19vw] ">
        EVENTS
      </div>
      <div className="relative top-16 sm:ml-8 w-[90%] ml-12 text-center max-sm:w-[70vw] xl:text-xl text-stone-400 text-grid-cols-2 mr-9 md:mt-[-4em] md:w-[87%] m md:ml-18 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
        consectetur. Architecto nulla deserunt magnam ratione ex excepturi ipsum
        velit, perspiciatis quo porro sequi, error tempore ducimus. Deleniti
        quasi ab soluta. Lorem ipsum dolor st amet, consectetur adipisicing
        elit. Ab autem velit quos quisquam aperiam illum ex possimus nihil id,
        recusandae necessitatibus omnis veritatis praesentium quia? Ea
        doloremque unde rerum voluptatum.
      </div>
      <div className=" relative grid 2xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 sm:scale-90 sm:ml-20 sm:mr-[oem] max-sm:ml-20 max-sm:top-[-5em]   mt-[-8em] scale-75 md:scale-90 md:ml-12 gap-20   top-52 ml-4 sm:content-center ">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      </section>
    </section>
  );
}

export default Event;
