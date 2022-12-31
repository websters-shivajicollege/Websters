import Navbar from "../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TeamCard from "../components/TeamCard";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <section className="bg-black h-auto">
      <Navbar />
      <div className="hero-section h-[70vh] flex flex-col items-center justify-between my-12">
        <h1 className="font-anton text-white my-16 md:my-0 text-[90px] sm:text-[150px] md:text-[250px]">
          WEBSTERS
        </h1>
        <a href="#about">
          <div className="scroll-down-container cursor-pointer flex flex-col items-center">
            <div className="scroll-down-btn h-[80px] w-[40px] p-2 rounded-full border-4 border-white relative">
              <span className="block h-6 w-6 rounded-full bg-white absolute top-[4px] left-[50%] -translate-x-[50%]"></span>
            </div>
            <h1 className="text-white my-4 font-poppins text-sm tracking-wider">
              SCROLL DOWN
            </h1>
          </div>
        </a>
      </div>

      <div className="dept-info w-[90%] sm:w-[80%] mx-auto mt-24" id="about">
        <div className="about-society md:grid grid-cols-2 gap-8 w-full sm:p-12">
          <div className="col w-full">
            <h1 className="text-white font-poppins text-xl text-center sm:text-left font-bold">
              Hey, We are Websters - The Computer Science Society of Shivaji
              College
            </h1>
            <p className="text-center font-poppins text-white sm:text-left mt-4 leading-7 text-opacity-80">
              The Department of Computer Science was established in 1984. The
              Department aims at upholding the cognitive aspect of education by
              ensuring academic excellence and intellectual growth of its
              students.
            </p>
          </div>
          <div className="col w-full">
            <p className="text-center font-poppins text-white sm:text-left mt-4 leading-7 text-opacity-80">
              The department lays prime focus on academics interspersed with
              co-curricular and extra-curricular activities that bring the
              versatility of its students to the fore and gives them a sound
              sense of perspective. The faculty comprises of experienced and
              dedicated teachers who with their expert inputs encourage students
              to explore new avenues.
            </p>
            <p className="text-center font-poppins text-white sm:text-left mt-4 leading-7 text-opacity-80">
              The computer society “Websters” was started with the aim to foster
              interest in the world of computers and technology. It provides a
              platform for likeminded brains to communicate with each other and
              expand their horizons.
            </p>
          </div>
        </div>
      </div>

      <div className="events w-[80%] mx-auto my-24">
        <h1 className="text-center font-anton text-[45px] sm:text-[100px] text-white">
          EVENTS
        </h1>
        <Carousel showArrows={true} autoPlay className="my-12">
          <div>
            <img
              src="https://user-images.githubusercontent.com/48273777/158253170-0ef704cf-e348-4b66-94c5-ab6bae77c1dc.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://user-images.githubusercontent.com/48273777/158253170-0ef704cf-e348-4b66-94c5-ab6bae77c1dc.png"
              alt=""
            />
          </div>
        </Carousel>
      </div>

      <div className="teams-section w-[90%] sm:w-[80%] mx-auto my-24">
        <h1 className="text-center font-anton text-[45px] sm:text-[100px] text-white">
          TEAMS
        </h1>
        <p className="text-white text-center leading-7 font-poppins text-sm sm:text-base">
          The Department of Computer Science was established in 1984. The
          Department aims at upholding the cognitive aspect of education by
          ensuring academic excellence and intellectual growth of its students.
        </p>
        <div className="md:grid grid-cols-3 my-12 gap-12">
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
        <div className="flex justify-center">
          <a
            href="#!"
            className="bg-[#121212] text-white font-semibold px-6 py-2 transition-all"
          >
            Explore More...
          </a>
        </div>
      </div>

      <div className="events w-[80%] mx-auto my-12">
        <h1 className="text-center font-anton text-[45px] sm:text-[100px] text-white">
          Gallery
        </h1>
        <Carousel showArrows={true} autoPlay className="my-12">
          <div>
            <img
              src="https://user-images.githubusercontent.com/48273777/158253170-0ef704cf-e348-4b66-94c5-ab6bae77c1dc.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://user-images.githubusercontent.com/48273777/158253170-0ef704cf-e348-4b66-94c5-ab6bae77c1dc.png"
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <Footer />
    </section>
  );
};

export default Homepage;
