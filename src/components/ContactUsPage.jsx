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
        <div className="container mx-auto px-2">
          <Heading title="Contact Me" />
          <div className="grid lg:gap-8 gap-4 lg:grid-cols-2 pb-10 lg:pb-24">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.367443269133!2d88.77037357335726!3d22.714580127755305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8aca130e5d873%3A0x253272649870109f!2sArbelia%20Post%20Office!5e0!3m2!1sen!2sin!4v1700141906689!5m2!1sen!2sin"
            title="google maps"
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
            className="w-full h-full px-2"></iframe>
            <form ref={form} onSubmit={sendEmail}>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:text-[17px] md:text-[17px] text-[16px] rounded-md px-2 lg:gap-4 md:gap-5 gap-4">
              <input
                name="from_name"
                type="text"
                placeholder="Enter Your Name"
                required
                className="col-span-1 focus:outline-none md:px-6 px-4 xl:h-[70px] lg:h-[60px] md:h-[60px] h-[50px] dark:bg-wh/10 bg-bl/10"
              />
              <input
                name="from_email"
                type="text"
                placeholder="Enter Your Email"
                required
                className="col-span-1 focus:outline-none md:px-6 px-4 xl:h-[70px] lg:h-[60px] md:h-[60px] h-[50px] dark:bg-wh/10 bg-bl/10"
              />
              <input
                name="from_phone"
                type="text"
                placeholder="Enter Your Phone"
                required
                className="col-span-1 focus:outline-none md:px-6 px-4 xl:h-[70px] lg:h-[60px] md:h-[60px] h-[50px] dark:bg-wh/10 bg-bl/10"
              />
              <input
                name="from_subject"
                type="text"
                placeholder="Enter Your Subject"
                required
                className="col-span-1 focus:outline-none md:px-6 px-4 xl:h-[70px] lg:h-[60px] md:h-[60px] h-[50px] dark:bg-wh/10 bg-bl/10"
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
      </div>
    </>
  );
};

export default ContactUsPage;
