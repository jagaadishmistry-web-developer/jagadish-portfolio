import Image from "next/image";
import { ServicesProvied, servicesData } from "./Data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Heading from "./Heading";

const MyServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
    <div className="">
      <div className="container mx-auto xl:px-20 lg:px-12 md:px-20 px-4 text-italic pb-20 lg:pb-36">
        <Heading title="skills" />
          <div data-aos="fade-up" className="col-span-1">
            <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-8 gap-5 w-full">
              {servicesData.map((sData) => (
                <div
                  key={sData.id}
                  className="flex flex-col lg:py-9 py-6 gap-4 shadow2 items-center xl:gap-5 xl:text-xl text-lg xl:px-6 px-3 hover:scale-105 duration-300 rounded-lg shadow2 dark:border border-white/25 dark:text-wh w-full">
                  <Image src={sData.url} alt="image"/> 
                  <h1>{sData.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyServices;
