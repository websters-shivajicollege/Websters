import React from "react";
import EventCard from "../components/EventCard";
export default function Event() {
  return (
    <>
      <div className=" relative text-center text-white font-bold text-9xl grid-cols-4 sm:auto-cols-max tracking-widest ">
        EVENTS
      </div>
      <div className="relative top-16  text-center text-stone-400 text-grid-cols-2 mr-9 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
        consectetur. Architecto nulla deserunt magnam ratione ex excepturi ipsum
        velit, perspiciatis quo porro sequi, error tempore ducimus. Deleniti
        quasi ab soluta. Lorem ipsum dolor st amet, consectetur adipisicing
        elit. Ab autem velit quos quisquam aperiam illum ex possimus nihil id,
        recusandae necessitatibus omnis veritatis praesentium quia? Ea
        doloremque unde rerum voluptatum.
      </div>
      <div className=" relative grid xl:grid-cols-2 sm:grid-cols-1 gap-40 top-52 ">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </>
  );
}
