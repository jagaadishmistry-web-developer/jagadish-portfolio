import Image from "next/image";
import aboutImage from "../../public/jagadish.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Heading from "./Heading";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="bg-wh dark:bg-bl text-bl dark:text-white font-serif lg:pb-12">
        <Heading title="About Me" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-4 lg:place-items-start place-items-center lg:text-start text-center lg:pb-16 pb-5 text-italic">
          <div
            data-aos="fade-up"
            className="col-span-1 shadow-lg shadow2 dark:border border-white w-full flex items-center justify-center">
            <Image src={aboutImage} alt="image" />
          </div>
          <div
            data-aos="fade-down"
            className="flex flex-col gap-4 lg:mt-0 mt-14 h-full">
            <div className="xl:text-4xl lg:text-3xl text-2xl py-4 font-medium flex flex-col gap-2">
              <h1>I'AM . . . . . </h1>
              <h1>FRONTEND DESIGNER</h1>
              <h1>JAGADISH MISTRY</h1>
            </div>
            <div className="md:text-[18px] text-[14px] text-hiLight">
              <ul className="">
                <h1 className="text-lg text-secendry font-bold">About Me</h1>
                Hello my name is jagadish mistry Hello I am Fresher Frontend
                Designer and Frontend Developer.I am always try do to something
                new. I Always like to work with integrity.
              </ul>
              <div className="mt-3">
                <h1 className="text-lg text-secendry font-bold">Education</h1>
                <li>Complete (H.S) from Dhanyakuria High School</li>
                <li>Complete (B.A) from Basirhat College</li>
                <li>Complete Full Stack Web Developer from (CIT)</li>
              </div>
              <div className="mt-3">
                <h1 className="text-lg text-secendry font-bold">Experience</h1>
                <li>Working in This Field Since 2022</li>
              </div>
              <div className="mt-3">
                <h1 className="text-lg text-secendry font-bold">
                  Skill Highlights
                </h1>
                <li>Web Designer</li>
                <li>Web Developer</li>
                <li>Figma Designer</li>
                <li>Responsive Designer</li>
                <li>Creative Design</li>
              </div>
              <div className="mt-16 text-white">
                <a
                  download
                  href="jagadish-mistry-cv.pdf"
                  className="text-black dark:text-white lg:py-4 py-2 lg:px-24 px-6 rounded-lg shadow2 dark:border border-white font-medium hover:scale-110 duration-300 text-italic lg:text-lg">
                  DOWNLODE CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
