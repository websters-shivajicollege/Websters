import React from "react";

export default function HomePage() {
    return (
        <>
            <div className="relative w-full flex flex-row justify-center" >
                <div className="relative mx-10 my-11"><a href="#" className="text-white shadow hover:shadow-2xl">Home</a></div>
                <div className="relative mx-10 my-11"><a href="#" className="text-white shadow hover:shadow-2xl">Team</a></div>
                <div className="relative mx-10 pr-20 my-11"><a href="#" className="text-white shadow hover:shadow-2xl">About Us</a></div>
                <div className="relative h-20 w-20 "><img
                    src="./public/webs.png"
                    alt=""
                    className="relative bg-cover  "
                /></div>
                <div className="relative mx-10 pl-20 my-11"><a href="#" className="text-white shadow hover:shadow-2xl">Events</a></div>
                <div className="relative mx-10 my-11"><a href="#" className="text-white shadow hover:shadow-2xl">Techleons</a></div>
                <div className="relative mx-10 my-11"><a href="#" className="text-white shadow hover:shadow-2xl">Contact Us</a></div>

            </div>
            <br></br>
            <br></br>
            <div className="relative w-full">
                <h1 className="text-white text-9xl font-mono">WEBSTERS</h1>
            </div>
        </>
    )
}