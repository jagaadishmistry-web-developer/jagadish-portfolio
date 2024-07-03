import { CounterData } from "@/utils/AllData";
import HeroImage from "../../public/hero-image.png";
import Image from "next/image";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Typewriter } from "react-simple-typewriter";

const HomeViewPart = () => {
  const [counting, setCounting] = useState(false);

  return (
    <>
      <div className="lg:text-bl text-wh dark:text-wh text-italic py-32 lg:py-0 bg-secendry/5">
          <ScrollTrigger
            onEnter={() => setCounting(true)}
            onExit={() => setCounting(false)}>
            <div className="container mx-auto px-4 flex justify-between capitalize">
              <div className="flex flex-col justify-center gap-2 text-center lg:text-start items-center lg:items-start md:w-full lg:w-auto">
                <div className="lg:text-2xl font-semibold text-secendry mb-8">
                  Welcome
                  <Typewriter
                    words={[" To My Portfolio . . . ."]}
                    loop={true}
                    typeSpeed={190}
                    deleteSpeed={50}
                    delaySpeed={600}
                  />
                </div>
                <div className="text-black dark:text-white duration-700">
                  <h2 className="xl:text-3xl text-2xl flex gap-2 font-medium justify-center lg:justify-start">
                    HELLO <span>✋🏻</span> {"I'AM"}
                  </h2>
                 <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-5xl text-4xl font-medium pt-5 flex flex-col gap-1 lg:gap-3">
                 <h1>
                   JAGADISH MISTRY
                  </h1>
                  <h1>WEB-DESIGNER & DEVELOPER</h1>
                 </div>
                </div>
                <p className="lg:text-black/70 text-hiLight dark:text-hiLight lg:text-xl 2xl:w-[600px] md:w-[570px] pb-8 pt-4 capitalize">
                  I am Junior Frontend Designer and Frontend Developer. I Have Expreience Projecting in React Js And Next Js.
                </p>
                <a
                  download
                  href="jagadish-mistry-cv.pdf"
                  className="flex gap-1 relative border-2 font-medium text-italic border-secendry bg-transparent py-4 px-16 lg:px-20 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-secendry before:transition-transform before:duration-500 before:content-[''] text-secendry text-lg hover:text-white before:hover:scale-x-100 shadow-lg shadow-secendry/40 items-center justify-center">
                  DOWNLOAD CV
                </a>
                <div className="xl:mt-[55px] lg:mt-[40px] md:mt-[50px] mt-[48px] flex md:gap-11 gap-5 justify-center lg:justify-start">
                  {CounterData.map((cData) => {
                    return (
                      <div
                        key={cData.id}
                        className="flex flex-col text-black dark:text-white">
                        <div className="xl:text-3xl lg:text-2xl md:text-3xl text-2xl font-semibold">
                          {counting && (
                            <CountUp
                              start={0}
                              end={cData.value}
                              duration={16}
                              delay={0}
                            />
                          )}{" "}
                          +
                        </div>
                        <h2 className="lg:text-2xl md:text-3xl text-2xl">
                          {cData.name}
                        </h2>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="lg:flex hidden">
                <Image src={HeroImage} alt="hero-image"/>
              </div>
            </div>
          </ScrollTrigger>
      </div>
    </>
  );
};

export default HomeViewPart;
