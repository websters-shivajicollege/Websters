import ContactUsForm from "../components/ContactUsForm";
import { ContactUsFormm } from "../components/ContactUsFormm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function ContactUs() {
  return (
    <>
      <Navbar />

      <div className="m-auto  container w-3/4" style={{ color: "white" }}>
        <div className=" relative text-center text-white font-bold text-5xl md:text-7xl xl:text-9xl grid-cols-4 sm:auto-cols-max tracking-widest md:mb-16 ">
          Let's Talk
        </div>

        {/* Left side of Page       */}
        <div className="container w-full md:w-1/2 md:flex float-left md:border-white md:border-r-2">
          <ContactUsFormm />
        </div>
        {/* Right side of page */}
        <div className="container  mt-6 w-full md:w-1/2 md:float-right p-2 md:pl-14 flex-grow">
          <div className="p-4">
            <h2 className="text-left w-full	ml-0 text-2xl p-4 pl-2 float-left">
              <img
                src="./public/mail_icon.ico"
                alt=""
                className="relative mr-2 bg-cover w-8 float-left "
              />
              websters@mail.com
            </h2>
          </div>

          {/* Socials */}
          <div className="float-left w-full p-4 ">
            <h2 className="text-left	ml-0 text-2xl  float-left w-full font-semibold">
              Socials
            </h2>
            <a href="https://www.facebook.com/people/Websters-computer-science-society-of-shivaji-college/100057690960023/">
              <img
                src="./public/facebook_48.ico"
                alt=""
                className="relative m-3 ml-0 bg-cover w-8 float-left"
              />
            </a>
            <a href="https://www.instagram.com/websters.shivaji/">
              <img
                src="./public/insta_icon_48.png"
                alt=""
                className="relative m-3 bg-cover w-8 float-left"
              />
            </a>
            <a href="https://in.linkedin.com/company/websters-shivaji-college?trk=organization_guest_main-feed-card_feed-actor-name">
              <img
                src="./public/linkedin_48.ico"
                alt=""
                className="relative m-3 bg-cover w-8 float-left"
              />
            </a>
          </div>

          {/* Heads Info */}
          <ul className="w-full lg:w-1/2  md:text-left md:float-left p-4 ">
            <h3 className=" text-2xl font-semibold">President </h3>
            <p>Kumar Amrendram</p>
            <p>9876543210</p>
            <p>abcdefgh@gmal.com</p>
          </ul>
          <ul className="w-full  lg:w-1/2 md:text-left md:float-left p-4 ">
            <h3 className=" text-2xl font-semibold">Vice-President </h3>
            <p>Kamini Tiwari</p>
            <p>9876543210</p>
            <p>abcdefgh@gmal.com</p>
          </ul>
        </div>
      </div>

      <div className="float-left w-full mt-14 m-auto">
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
