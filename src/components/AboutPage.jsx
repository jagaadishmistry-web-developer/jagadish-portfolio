import Image from "next/image";
import aboutImage from "../../public/jagadish.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Heading from "./Heading";
import Link from "next/link";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="flex text-bl dark:text-white py-24">
        <div className="container mx-auto xl:px-20 lg:px-12 md:px-20 px-4 grid lg:grid-cols-2 grid-cols-1 xl:gap-20 lg:gap-16 gap-4 lg:pb-16 pb-5">
          <div
            data-aos="fade-up"
            className="col-span-1 w-full hidden items-center justify-center lg:pt-10 lg:flex">
            <Image src={aboutImage} alt="image" />
          </div>
          <div
            data-aos="fade-down"
            className="flex flex-col gap-4 lg:mt-0 mt-14 h-full justify-center lg:items-start items-center lg:text-start text-center">
            <h1 className="text-4xl font-bold pb-3">About</h1>
            <p>I am Jagadish mistry. I live in Kalkata in West Bengal. My skilled React JS developer.  have been doing web design work at my home for last one year but in real life I have not got any opportunity to work with any company. my hobbis coding and music and i am intreast learning any new things.</p>
            <p className="pb-5">I have completed my web design and development course from CIT (Central Institute Of Technology). Completed Higher Secondary and Secondary Education from Dhanyakuria High School. Complete B.A from basirhat collage.</p>
            <a href="jagadish-mistry-cv.pdf" download className="h-16 w-60 xl:w-72 flex items-center justify-center bg-secendry text-lg text-white hover:scale-105 duration-300 rounded-md">Download CV</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
