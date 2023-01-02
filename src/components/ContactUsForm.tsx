import emailjs from "emailjs-com";
function ContactUsForm() {
  function sendEmail() {}
  return (
    <>
      <div className="container  w-full p-4 md:p-2 lg:pl-16 lg:pr-20 ">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto m-5 mt-2">
              <h3 className="text-xl m-1">Enter Full Name</h3>
              <input
                type="text"
                className="form-control rounded-lg w-full h-9 p-2 text-gray-900"
                placeholder="Name"
                name="Name"
              />
            </div>
            <div className="col-8 form-group mx-auto m-5 mt-2">
              <h3 className="text-xl m-1">Enter Email-Address</h3>
              <input
                type="text"
                className="form-control rounded-lg w-full h-9 p-2  text-gray-900"
                placeholder="Email-Address"
                name="Email-Address"
              />
            </div>
            <div className="col-8 form-group mx-auto m-5 mt-2">
              <h3 className="text-xl m-1">Enter Messege</h3>
              <input
                type="text"
                className="form-control rounded-lg w-full p-2 h-20  text-gray-900"
                placeholder="Messege"
                name="Messege"
              />
            </div>

            <div className="col-8 form-group pb-4 text-xl mt-4 float-right ">
              <input
                type="submit"
                className="btn btn-info border-2 border-white bg-white text-black rounded-lg p-1 pl-4 pr-4   font-semibold hover:bg-slate-300  "
                value="Send Messege"
                placeholder="Send-Messege"
                name="Send-Messege"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default ContactUsForm;
