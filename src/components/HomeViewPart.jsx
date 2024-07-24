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
      {/* <div className="h-10 w-10 border border-secendry rounded-full animate-ping absolute lg:top-[25%] top-[15%] lg:right-[44%] right-[15%] flex items-center justify-center object-center">
      <div className="h-3 w-3 border border-secendry rounded-full animate-ping absolute"/>
      </div>
      <div className="h-10 w-10 border border-secendry rounded-full animate-ping absolute bottom-[14%] left-[45%] flex items-center justify-center object-center">
      <div className="h-3 w-3 border border-secendry rounded-full animate-ping absolute"/>
      </div> */}

      <div className="py-16 lg:pt-0 pt-28 lg:py-0 bg-secendry/5">
          <ScrollTrigger
            onEnter={() => setCounting(true)}
            onExit={() => setCounting(false)}>
            <div className="container mx-auto xl:px-20 lg:px-12 md:px-20 px-4 grid lg:grid-cols-2 xl:gap-20 lg:gap-16 gap-4 w-full">
              <div className="flex flex-col justify-center items-center lg:items-start">
                <div className="duration-700 text-center lg:text-start">
                  <h2 className="lg:text-2xl text-lg font-medium text-black dark:text-white duration-500">
                    Hello,
                    <Typewriter
                    words={[" Sir"]}
                    loop={true}
                    typeSpeed={300}
                    deleteSpeed={200}
                    delaySpeed={1000}
                  />
                  </h2>
                  <h1 className="text-secendry 2xl:text-6xl xl:text-4xl lg:text-3xl text-4xl font-medium pt-4 pb-2 lg:pb-4 italic">I Am Jagadish Mistry</h1>
                  <h1 className="text-black dark:text-white text-2xl lg:text-3xl pb-4 italic">React Js Developer</h1>
                 </div>
                 <div className="lg:text-lg mb-8 text-black dark:text-white text-center lg:text-start duration-500">
                 <h1>I am a fresher react JS developer. Creating responsive and dynamic websites. I have completed my web design and development course from CIT (Central Institute Of Technology). I love coding and listening to music and traveling.</h1>
                </div>
                </div>          
              <div className="flex lg:py-24 items-center justify-center">
                <Image className="lg:ml-5 w-full h-full" src={HeroImage} alt="hero-image"/>
              </div>
            </div>
          </ScrollTrigger>
      </div>
    </>
  );
};

export default HomeViewPart;
