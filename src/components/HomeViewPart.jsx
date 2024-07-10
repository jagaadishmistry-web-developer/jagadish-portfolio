import { CounterData } from "@/utils/AllData";
import Image from "next/image";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Typewriter } from "react-simple-typewriter";
import HeroImage from "../../public/aboutpng.png";
import Link from "next/link";

const HomeViewPart = () => {
  const [counting, setCounting] = useState(false);

  return (
    <>
      <div className="h-10 w-10 border border-secendry rounded-full animate-ping absolute lg:top-[25%] top-[15%] lg:right-[44%] right-[15%] flex items-center justify-center object-center">
      <div className="h-3 w-3 border border-secendry rounded-full animate-ping absolute"/>
      </div>
      <div className="h-10 w-10 border border-secendry rounded-full animate-ping absolute bottom-[14%] left-[35%] flex items-center justify-center object-center">
      <div className="h-3 w-3 border border-secendry rounded-full animate-ping absolute"/>
      </div>

      <div className="py-32 lg:py-0 bg-secendry/5">
          <ScrollTrigger
            onEnter={() => setCounting(true)}
            onExit={() => setCounting(false)}>
            <div className="container mx-auto px-4 flex justify-between capitalize">
              <div className="flex flex-col justify-center gap-2 text-center lg:text-start items-center lg:items-start md:w-full lg:w-auto">
                <div className="lg:text-2xl font-semibold mb-8 flex gap-2 text-bl dark:text-white pt-16">
                  Welcome <p className="border-b lg:w-64 w-16 mb-[6px] border-black dark:border-white"/>
                </div>
                <div className="duration-700">
                 <h1 className="text-secendry 2xl:text-6xl xl:text-4xl lg:text-3xl text-5xl font-medium pt-5 flex flex-col gap-1 lg:gap-3"> I AM JAGADISH MISTRY </h1></div>
                 <div className="lg:text-2xl font-semibold text-secendry mb-8 pt-2">
                 JUNIOR WEB DESIGNER & 
                  <Typewriter
                    words={[" DEVELOPER"]}
                    loop={true}
                    typeSpeed={190}
                    deleteSpeed={50}
                    delaySpeed={600}
                  />
                </div>
                 <div className="flex flex-col lg:flex-row gap-4">
                  <Link href={"/project"} className="h-16 w-60 flex items-center justify-center bg-secendry text-lg text-white hover:scale-105 duration-300">View Project</Link>
                  <a href="jagadish-mistry-cv.pdf" download className="h-16 w-60 flex items-center justify-center bg-secendry text-lg text-white hover:scale-105 duration-300">Download</a>
                </div>
              <div className="text-3xl text-secendry flex items-center justify-center gap-2 cursor-pointer">
              </div>
                <div className="xl:mt-[55px] lg:mt-[40px] md:mt-[50px] mt-[48px] flex md:gap-11 gap-5 justify-center lg:justify-start">
                  {CounterData.map((cData) => {
                    return (
                      <div
                        key={cData.id}
                        className="flex flex-col text-secendry">
                        <div className="lg:text-2xl md:text-3xl text-2xl font-semibold">
                          {counting && (
                            <CountUp
                              start={0}
                              end={cData.value}
                              duration={16}
                              delay={0}
                            />
                          )}
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
              <div className="lg:flex hidden py-24">
                <Image src={HeroImage} alt="hero-image"/>
              </div>
            </div>
          </ScrollTrigger>
      </div>
    </>
  );
};

export default HomeViewPart;
