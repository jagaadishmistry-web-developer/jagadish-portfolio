import { CounterData } from "@/utils/AllData";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Typewriter } from "react-simple-typewriter";

const HomeViewPart = () => {
  const [counting, setCounting] = useState(false);

  return (
    <>
      <div className="lg:text-bl text-wh dark:text-wh bg-[url('/bgLight.png')] dark:bg-[url('/homeImage.png')] bg-cover bg-center text-italic font-serif">
        <div className="py-28">
          <ScrollTrigger
            onEnter={() => setCounting(true)}
            onExit={() => setCounting(false)}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col justify-center gap-2 text-center lg:text-start items-center lg:items-start">
                <div className="lg:text-2xl font-semibold text-secendry mb-8">
                  WellCome
                  <Typewriter
                    words={[" To My Poetfolio . . . ."]}
                    loop={true}
                    typeSpeed={190}
                    deleteSpeed={50}
                    delaySpeed={600}
                  />
                </div>
                <div className="text-black dark:text-white">
                  <h2 className="xl:text-3xl text-2xl flex gap-2 font-medium justify-center lg:justify-start ">
                    HELLO <span>✋🏻</span> {"I'AM"}
                  </h2>
                  <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-5xl text-4xl font-medium pt-4 pb-2">
                    JAGADISH MISTRY
                  </h1>
                  <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl py-2 font-medium">
                    FRONTEND DESIGNER & DEVELOPER
                  </h2>
                </div>
                <p className="lg:text-black/70 text-hiLight dark:text-hiLight lg:text-xl 2xl:w-[600px] md:w-[570px] pb-10 pt-3">
                  Hello I am a Frontend Designer and Frontend Developer jagadish
                  mistry.i am working in javascript, react.js, next.js and
                  taliwend css and i am figma ui Disigner.
                </p>
                <a
                  download
                  href="jagadish-mistry-cv.pdf"
                  className="text-black dark:text-white lg:py-4 py-2 lg:px-24 px-6 rounded-lg shadow2 dark:border border-white font-medium hover:scale-110 duration-300 text-italic lg:text-lg">
                  DOWNLODE CV
                </a>
                {/* Counter ------------------- */}
                <div className="xl:mt-[55px] lg:mt-[40px] md:mt-[20px] mt-[48px] flex md:gap-14 gap-3 justify-center lg:justify-start">
                  {CounterData.map((cData) => {
                    return (
                      <div
                        key={cData.id}
                        className="flex flex-col gap-1 text-black dark:text-white">
                        <div className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-3xl text-2xl font-semibold">
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
                        <h2 className="2xl:text-3xl lg:text-2xl md:text-3xl text-2xl font-medium">
                          {cData.name}
                        </h2>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </>
  );
};

export default HomeViewPart;
