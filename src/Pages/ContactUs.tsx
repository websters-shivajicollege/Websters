import ContactUsForm from "../components/ContactUsForm";
function ContactUs() {
  return (
    <div className="container" style={{ color: "white" }}>
      <div className=" relative text-center text-white font-bold text-2xl md:text-7xl xl:text-9xl grid-cols-4 sm:auto-cols-max tracking-widest md:mb-8 ">
        Let's Talk
      </div>

      {/* Left side of Page       */}
      <div className="container w-full md:w-1/2 md:flex float-left md:border-white md:border-r-2">
        <ContactUsForm />
      </div>
      {/* Right side of page */}
      <div className="container w-full md:w-1/2 md:float-right p-2 md:pl-14 flex-grow">
        <div className="p-4">
          <img
            src="./public/mail_icon.ico"
            alt=""
            className="relative mt-5 bg-cover w-8 float-left "
          />
          <h2 className="text-left	ml-0 text-2xl p-4 pl-2 float-left">
            {" "}
            websters@mail.com
          </h2>
        </div>

        {/* Socials */}
        <div className="float-left w-full p-4 ">
          <h2 className="text-left	ml-0 text-2xl  float-left w-full font-semibold">
            Socials
          </h2>
          
            <img
              src="./public/facebook_48.ico"
              alt=""
              className="relative m-3 ml-0 bg-cover w-8 float-left"
            />
          
          <img
            src="./public/insta_icon_48.png"
            alt=""
            className="relative m-3 bg-cover w-8 float-left"
          />
          <img
            src="./public/linkedin_48.ico"
            alt=""
            className="relative m-3 bg-cover w-8 float-left"
          />
        </div>

        {/* Heads Info */}
        <ul className="w-full md:w-1/2 xl:w-1/3 text-left float-left p-4 ">
          <h3 className=" text-2xl font-semibold">President </h3>
          <p>Kumar Amrendram</p>
          <p>9876543210</p>
          <p>abcdefgh@gmal.com</p>
        </ul>
        <ul className="w-full xl:w-1/3 md:w-1/2 text-left float-left p-4 ">
          <h3 className=" text-2xl font-semibold">Vice-President </h3>
          <p>Kamini Tiwari</p>
          <p>9876543210</p>
          <p>abcdefgh@gmal.com</p>
        </ul>
      </div>
    </div>
  );
}

export default ContactUs;
