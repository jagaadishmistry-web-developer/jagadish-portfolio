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
      <div className="flex bg-wh dark:bg-bl text-bl dark:text-white lg:h-screen capitalize lg:py-0 py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 lg:pb-16 pb-5">
          <div
            data-aos="fade-up"
            className="col-span-1 w-full flex items-center justify-center lg:pt-10">
            <Image src={aboutImage} alt="image" />
          </div>
          <div
            data-aos="fade-down"
            className="flex flex-col gap-4 lg:mt-0 mt-14 h-full justify-center">
            <h1 className="text-4xl font-bold pb-3">About</h1>
            <p>I Am Jagadish mistry. As a skilled web designer and React JS developer, I specialize in creating visually stunning and highly functional websites. With a keen eye for design and a passion for coding, I bring a unique blend of creativity and technical expertise to every project. My work focuses on delivering seamless user experiences and responsive designs that perform flawlessly across devices. Whether crafting custom websites from scratch or enhancing existing platforms, I strive to exceed client expectations by delivering innovative solutions that drive engagement and growth. Let{"'"}s collaborate to transform your digital presence into a dynamic and captivating experience.</p>
            <p>My expertise extends to crafting bespoke web solutions that meet the unique needs of each client. From conceptualization to deployment, I am dedicated to delivering high-quality work that aligns with the latest industry standards</p>
            <br />
            <a href="jagadish-mistry-cv.pdf" download className="h-16 w-60 xl:w-72 flex items-center justify-center bg-secendry text-lg text-white hover:scale-105 duration-300 rounded-md">Download CV</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
