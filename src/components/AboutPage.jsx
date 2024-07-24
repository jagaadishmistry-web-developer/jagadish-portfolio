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
      <div className="flex bg-wh dark:bg-bl text-bl dark:text-white capitalize py-20">
        <div className="container mx-auto xl:px-20 lg:px-12 md:px-20 px-4 grid lg:grid-cols-2 grid-cols-1 xl:gap-20 lg:gap-16 gap-4 lg:pb-16 pb-5">
          <div
            data-aos="fade-up"
            className="col-span-1 w-full flex items-center justify-center lg:pt-10">
            <Image src={aboutImage} alt="image" />
          </div>
          <div
            data-aos="fade-down"
            className="flex flex-col gap-4 lg:mt-0 mt-14 h-full justify-center lg:items-start items-center lg:text-start text-center">
            <h1 className="text-4xl font-bold pb-3">About</h1>
            <p>I Am Jagadish mistry. I live in Kalkata in West Bengal. As a skilled web designer and React JS developer, I specialize in creating visually stunning and highly functional websites. My work focuses on delivering seamless user experiences and responsive designs that perform flawlessly across devices. Whether crafting custom websites from scratch or enhancing existing platforms, I strive to exceed client expectations by delivering innovative solutions that drive engagement and growth. Let{"'"}s collaborate to transform your digital presence into a dynamic and captivating experience.</p>
            <p>I have been doing web design work at my home for last one year but in real life I have not got any opportunity to work with any company.</p>
            <p className="pb-5">I have completed my web design and development course from CIT (Central Institute Of Technology). Completed Higher Secondary and Secondary Education from Dhanyakuria High School.</p>
            <a href="jagadish-mistry-cv.pdf" download className="h-16 w-60 xl:w-72 flex items-center justify-center bg-secendry text-lg text-white hover:scale-105 duration-300 rounded-md">Download CV</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
