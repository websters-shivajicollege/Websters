import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#121212] p-8">
      <div className="w-[70%] mx-auto">
        <div className="sm:grid grid-cols-2">
          <div className="col">
            <img
              src="/logo_white.svg"
              alt="Websters"
              className="w-[80px] h-[80px] md:w-[200px] md:h-[200px] object-cover"
            />
          </div>
          <div className="col my-12 sm:my-0">
            <div className="sm:grid grid-cols-3">
              <div className="grid-col my-8 sm:my-0">
                <h1 className="text-xl font-bold text-white">Events</h1>
                <ul>
                  <li className="text-white my-4 font-poppins text-sm">
                    Googler
                  </li>
                  <li className="text-white my-4 font-poppins text-sm">
                    Googler
                  </li>
                  <li className="text-white my-4 font-poppins text-sm">
                    Googler
                  </li>
                  <li className="text-white my-4 font-poppins text-sm">
                    Googler
                  </li>
                </ul>
              </div>
              <div className="grid-col my-8 sm:my-0">
                <h1 className="text-xl font-bold text-white">About Us</h1>
                <ul>
                  <li className="text-white my-4 font-poppins text-sm">
                    Teams
                  </li>
                  <li className="text-white my-4 font-poppins text-sm">
                    Council
                  </li>
                  <li className="text-white my-4 font-poppins text-sm">
                    Teachers
                  </li>
                </ul>
              </div>
              <div className="grid-col my-8 sm:my-0">
                <h1 className="text-xl font-bold text-white">Socials</h1>
                <div className="flex items-center justify-between mt-4 w-1/2 sm:w-full">
                  <a href="#!">
                    <FaFacebook color="#fff" />
                  </a>
                  <a href="#!">
                    <FaInstagram color="#fff" />
                  </a>
                  <a href="#!">
                    <FaLinkedin color="#fff" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
