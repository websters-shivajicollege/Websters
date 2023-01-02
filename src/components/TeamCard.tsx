import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const TeamCard = (Cname) => {
  return (
    <div>
      <div>
        <div>
          <div className="w-full sm:px-6 pt-10">
            <div className="container mx-auto">
              <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                <div className="xl:w-5/6 sm:w-3/4 md:w-2/5 relative mt-1 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://source.unsplash.com/random/400x400/?wallpaper,landscape"
                          alt="Kumar Amrendram"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="text-gray-800 font-bold text-3xl text-center mb-1">
                        {Cname}
                      </h1>
                      <p className="text-gray-800 text-xl text-center">
                        President
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        The CEO's role in raising a company's corporate IQ is to 
                        establish an atmosphere that promotes knowledge sharing
                        and collaboration.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a
                          href="https://github.com/KumarAmrendram"
                          className="mx-5"
                        >
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </div>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/kumar-amrendram-178457194/"
                          className="mx-5"
                        >
                          <div aria-label="Twitter" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="feather feather-linkedln"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </div>
                        </a>
                        <a
                          href="https://www.instagram.com/amrendram_/"
                          className="mx-5"
                        >
                          <div aria-label="Instagram" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#000000"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                ry="5"
                              ></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line
                                x1="17.5"
                                y1="6.5"
                                x2="17.51"
                                y2="6.5"
                              ></line>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;