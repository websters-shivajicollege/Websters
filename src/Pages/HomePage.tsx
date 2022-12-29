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
                {/* Change this font family to kapartino */}
                <h1 className="text-white text-9xl font-mono">WEBSTERS</h1>
            </div>
            <div className="realtive my-7 justify-center text-white">
                {/* Scroll button  */}
                <p>Scroll Down</p>
            </div>
            <div className="realtive flex w-full flex-row ">
                <div className="relative flex-1 mx-10 mt-3 text-white text-left">
                    <h1 className="text-3xl">hey !</h1>
                    <h1 className="text-2xl">we are Websters, a Computer science</h1>
                    <p>Department society of the Shivaji College,<br></br>University Of Delhi</p>
                    <br></br>
                    <p>The Department of Computer Science was established in 1984.
                        The Department aims at upholding the cognitive aspect of education by
                        ensuring academic excelelnce and intellectual growth of its students.</p>


                </div>
                <div className="ralative ml-5 mr-7 mt-3 bg-white w-0.5"></div>
                <div className="relative flex flex-1 mx-10 mt-3  text-white text-left">
                    <p>The Department lays prime focus on academics intersoersed with co-curricular
                        and extra-curricular activities that bring the versatility of its students to
                        the fore and give them a sound sense of perspective. The faculty comprises
                        of experienced and dedicated teachers who with their expert inputs encourage
                        students to explore new avenues. The computer society "Webstres" was started with
                        the aim to faster interest int the world of computers and technology.
                        It provides a platform for like-minded brain to communicate with each other and expand their
                        horizons.</p>
                </div>
            </div>
            <div className="relative w-full mt-10 mb-3">
                {/* Change this font family to kapartino */}
                <h1 className="text-white text-8xl font-mono tracking-widest">EVENTS</h1>
            </div>
            <div className="relative  ">

            </div>
        </>
    )
}