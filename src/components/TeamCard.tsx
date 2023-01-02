import type { IResponse } from "../Pages/Homepage";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

interface IProps {
  member: IResponse;
}

const TeamCard = ({ member: { name, post, image } }: IProps) => {
  return (
    <div className="team-card my-12">
      <div className="team-member-pic h-[400px]">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="team-member-content px-8 py-4 bg-[#121212]">
        <h1 className="text-white lg:text-2xl font-poppins tracking-wide">
          {name}
        </h1>
        <p className="text-gray-200 font-poppins mt-2">{post}</p>
        <div className="socials flex items-center mt-2">
          <a
            href="#!"
            className="mr-2 text-gray-200"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="#!"
            className="mr-2 text-gray-200"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="#!"
            className="mr-2 text-gray-200"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

export default TeamCard;