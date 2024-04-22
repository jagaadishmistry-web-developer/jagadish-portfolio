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
      <div className="bg-bl text-white font-serif">
        <Heading title="About Me" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 grid-cols-1 2xl:gap-0 lg:gap-16 gap-4 lg:place-items-start place-items-center lg:text-start text-center lg:pb-16 pb-5 text-italic">
          <div
            data-aos="fade-up"
            className="col-span-1 border border-slate-700 shadow-lg">
            <Image src={aboutImage} alt="" />
          </div>
          <div
            data-aos="fade-down"
            className="flex flex-col gap-4 lg:mt-0 mt-14 h-full">
            <h1 className="xl:text-5xl lg:text-4xl text-3xl py-4 font-bold to-secendry bg-gradient-to-t from-white text-transparent bg-clip-text">
              Hello i am <br />
              Web Frontend Developer <br />
              Jagadish Mistry
            </h1>
            <div className="md:text-[18px] text-[14px] text-hiLight font-medium">
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
                <li>Responcive Designer</li>
                <li>Creative Design</li>
              </div>
              <div className="mt-16 text-white">
                <a
                  download
                  href="jagadish-mistry-cv.pdf"
                  className="text-secendry lg:py-4 py-2 lg:px-24 px-6 rounded-lg border border-secendry shadow-2xl shadow-slate-700/60 font-medium text-italic lg:text-lg">
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
