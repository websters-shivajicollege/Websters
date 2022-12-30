import React from 'react'

export default function navbar() {
  return (
    <>
    <div className="relative w-full flex flex-row justify-center font-poppins">
        <div className="relative mx-10 my-11">
          <a href="#" className="text-white shadow hover:shadow-2xl">
            Home
          </a>
        </div>
        <div className="relative mx-10 my-11">
          <a href="#" className="text-white shadow hover:shadow-2xl">
            Team
          </a>
        </div>
        <div className="relative mx-10 pr-20 my-11">
          <a href="#" className="text-white shadow hover:shadow-2xl">
            About Us
          </a>
        </div>
        <div className="relative h-20 w-20 ">
          <img src="./public/webs.png" alt="" className="relative   " />
        </div>
        <div className="relative mx-10 pl-20 my-11">
          <a href="#" className="text-white shadow hover:shadow-2xl">
            Events
          </a>
        </div>
        <div className="relative mx-10 my-11">
          <a href="#" className="text-white shadow hover:shadow-2xl">
            Techleons
          </a>
        </div>
        <div className="relative mx-10 my-11">
          <a href="#" className="text-white shadow hover:shadow-2xl">
            Contact Us
          </a>
        </div>
      </div>
    </>
  )
}
