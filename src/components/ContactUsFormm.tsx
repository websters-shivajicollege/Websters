import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUsFormm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7lzbwdf",
        "template_34uyh86",
        form.current,
        "0W1XjH90DiMTpxqo4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="m-12 mb-8 mt-8 lg:mr-24  float-right">
      <form className="" ref={form} onSubmit={sendEmail}>
        <label className="w-full ml-4  text-l lg:text-2xl">Name</label>
        <input
          className="m-4 mt-2 w-full rounded h-9 p-2 text-black"
          type="text"
          name="user_name"
          placeholder="Name"
        />
        <label className="w-full ml-4 text-l lg:text-2xl">Email </label>
        <input
          className="m-4 mt-2 w-full rounded h-9 p-2 text-black"
          type="email"
          name="user_email"
          placeholder="E-mail"
        />
        <label className="w-full ml-4 text-l lg:text-2xl">Message</label>
        <textarea
          className="m-4 mt-2 w-full rounded h-20 p-2 text-black"
          name="message"
        />
        <input className="m-4 mr-0 float-right bg-white text-black p-1 pr-3 pl-3 font-semibold text-2xl rounded hover:bg-slate-300" type="submit" value="Send" />
      </form>
    </div>
  );
};
