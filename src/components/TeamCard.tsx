import {AiFillGithub } from "react-icons/ai";
import { FaLinkedin,FaInstagram } from "react-icons/fa";

export default function TeamCard() {
  return (
    <div className="text-left" style={{ color:"white", maxWidth: 500 }}>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: "url('./public/p1.jfif')" }}
        ></div>
        <div className="border-gray-400 lg:border-l-0 lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        >
          <div className="mb-8">
            <div className="text-900 font-bold text-xl mb-2">
              <p>Kumar Amrendram</p>
              <p>President</p>
            </div>
            <p className="text-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
            </p>
            <div className="flex gap-3 text-3xl" style={{ color: "white" }}>
              <FaInstagram />
              <AiFillGithub />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
