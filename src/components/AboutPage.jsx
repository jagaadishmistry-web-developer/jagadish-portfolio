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
      <div className="bg-wh dark:bg-bl text-bl dark:text-white lg:pb-12 capitalize">
        <Heading title="About Me" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 lg:place-items-start place-items-center lg:text-start text-center lg:pb-16 pb-5 text-italic">
          <div
            data-aos="fade-up"
            className="col-span-1 shadow-lg shadow2 dark:border border-white/35 w-full flex items-center justify-center">
            <Image src={aboutImage} alt="image" />
          </div>
          <div
            data-aos="fade-down"
            className="flex flex-col gap-4 lg:mt-0 mt-14 h-full">
            <div className="xl:text-4xl lg:text-3xl text-2xl py-4 font-medium flex flex-col gap-2">
              <h1>I&apos;AM </h1>
              <h1>FRONTEND DESIGNER</h1>
              <h1>JAGADISH MISTRY</h1>
            </div>
            <div className="md:text-[18px] text-[14px] text-hiLight">
              <ul>
                <h1 className="text-lg text-secendry font-bold">About Me</h1>
                Hello my name is jagadish mistry. I am Fresher Frontend
                Designer and Frontend Developer. I am always try do to something
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
                <li>UI/UX Designer</li>
                <li>Responsive Designer</li>
                <li>Creative Design</li>
              </div>
              <div className="mt-14 text-white flex justify-center lg:justify-start">
              <a
                  download
                  href="jagadish-mistry-cv.pdf"
                  className="flex gap-1 relative border-2 font-medium text-italic border-secendry bg-transparent py-4 px-16 lg:px-20 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-secendry before:transition-transform before:duration-500 before:content-[''] text-secendry text-lg hover:text-white before:hover:scale-x-100 shadow-lg shadow-secendry/40 items-center justify-center">
                  DOWNLOAD CV
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
