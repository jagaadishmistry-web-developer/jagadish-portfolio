import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { Typewriter } from "react-simple-typewriter";
import HeroImage from "../../public/jagadish.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeViewPart = () => {
  const [counting, setCounting] = useState(false);

  return (
    <>
      <div className="h-10 w-10 border border-secendry rounded-full animate-ping absolute lg:top-[25%] top-[15%] lg:right-[44%] right-[15%] flex items-center justify-center object-center">
      <div className="h-3 w-3 border border-secendry rounded-full animate-ping absolute"/>
      </div>
      <div className="h-10 w-10 border border-secendry rounded-full animate-ping absolute bottom-[14%] left-[45%] flex items-center justify-center object-center">
      <div className="h-3 w-3 border border-secendry rounded-full animate-ping absolute"/>
      </div>

      <div className="py-32 lg:pt-0 pt-44 lg:py-0 bg-secendry/5">
          <ScrollTrigger
            onEnter={() => setCounting(true)}
            onExit={() => setCounting(false)}>
            <div className="container mx-auto xl:px-20 lg:px-12 md:px-20 px-4 grid lg:grid-cols-2 xl:gap-20 lg:gap-16 gap-4 w-full capitalize">
              <div className="flex flex-col justify-center items-center lg:items-start">
                <div className="lg:text-2xl flex gap-2 text-bl dark:text-white mb-12 duration-500">
                WELCOME
                <Typewriter
                    words={[" TO MY PORTFOLIO . . . ."]}
                    loop={true}
                    typeSpeed={190}
                    deleteSpeed={50}
                    delaySpeed={600}
                  />
                </div>
                <div className="duration-700 text-center lg:text-start">
                  <h2 className="lg:text-2xl text-lg font-medium text-black dark:text-white duration-500">HELLO EVERYONE, I&apos;M</h2>
                  <h1 className="text-secendry 2xl:text-6xl xl:text-4xl lg:text-3xl text-4xl font-medium pt-4 pb-2 lg:pb-4">JAGADISH MISTRY</h1>
                 </div>
                 <div className="lg:text-lg mb-8 text-black dark:text-white text-center lg:text-start duration-500">
                 <h1>My name is jagadish mistry. Fresher web designer and React JS developer skilled in creating responsive websites. Proficient in HTML, CSS, bootstrap, next js and React. Passionate about user-centric design and continuous learning. Familiarity with design tools like Adobe XD and Figma.</h1>
                </div>
                <a href="jagadish-mistry-cv.pdf" download className="h-16 w-60 xl:w-72 flex items-center justify-center bg-secendry text-lg text-white hover:scale-105 duration-300 rounded-md">Download CV</a>
              </div>
              
              <div className="lg:flex hidden py-24 items-center justify-center">
                <Image className="lg:ml-5 w-full h-full" src={HeroImage} alt="hero-image"/>
              </div>
            </div>
          </ScrollTrigger>
      </div>
    </>
  );
};

export default HomeViewPart;
