import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Heading from "./Heading";
const ContactUsPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ymuj1ud", "template_igpdss6", form.current, {
        publicKey: "w1TOagJMBZn_ApDP1",
      })
      .then(
        (result) => {
          alert("Your Message Has Been Sent Succesfullfully");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="text-italic dark:text-wh text-bl capitalize">
        <div className="container mx-auto xl:px-20 lg:px-12 md:px-20 px-2">
          <Heading title="Contact Me" />
            <form ref={form} onSubmit={sendEmail}>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:text-[17px] md:text-[17px] text-[16px] rounded-md px-2 lg:gap-8 gap-5">
              <input
                name="from_name"
                type="text"
                placeholder="Enter Your Name"
                required
                className="col-span-1 focus:outline-none md:px-6 px-4 xl:py-8 lg:py-6 py-5 dark:bg-wh/10 bg-bl/10"
              />
              <input
                name="from_email"
                type="text"
                placeholder="Enter Your Email"
                required
                className="col-span-1 focus:outline-none md:px-6 px-4 xl:py-8 lg:py-6 py-5 dark:bg-wh/10 bg-bl/10"
              />
              <input
                name="from_phone"
                type="text"
                placeholder="Enter Your Phone"
                required
                className="col-span-1 focus:outline-none md:px-6 px-4 xl:py-8 lg:py-6 py-5 dark:bg-wh/10 bg-bl/10"
              />
              <input
                name="from_subject"
                type="text"
                placeholder="Enter Your Subject"
                required
                className="col-span-1 focus:outline-none md:px-6 px-4 xl:py-8 lg:py-6 py-5 dark:bg-wh/10 bg-bl/10"
              />
              <textarea
                name="message"
                type="text"
                placeholder="Enter Your Send Message"
                required
                className="lg:col-span-2 focus:outline-none md:px-6 px-4 pt-4 h-[300px] lg:h-[300px] text-start dark:bg-wh/10 bg-bl/10"
              />
            </div>
            <div className="grid place-items-center py-12 bottom-0">
              <button className="flex gap-1 relative border-2 font-medium border-secendry bg-transparent py-3 px-16 lg:px-20 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-secendry before:transition-transform before:duration-500 before:content-[''] text-secendry text-lg hover:text-white before:hover:scale-x-100 shadow-lg shadow-secendry/40 items-center justify-center">
                Send Message
              </button>
            </div>
          </form>
          </div>
        </div>
    </>
  );
};

export default ContactUsPage;
