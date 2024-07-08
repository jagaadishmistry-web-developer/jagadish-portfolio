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
    <div className="bg-secendry/5">
      <div className="container mx-auto px-4 text-italic pb-20 lg:pb-36 capitalize">
        <Heading title="skills" />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div data-aos="fade-up" className="col-span-1">
            <div className="grid md:grid-cols-2 gap-4 w-full">
              {servicesData.map((sData) => (
                <div
                  key={sData.id}
                  className="flex items-center xl:gap-5 gap-3 xl:text-xl text-lg xl:px-6 px-3 hover:scale-105 duration-300 rounded-lg shadow2 dark:border border-white/25 dark:text-wh h-24 w-full">
                  <Image src={sData.url} alt="" /> {sData.title}
                </div>
              ))}
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="col-span-1 grid md:grid-cols-1 gap-4">
            {ServicesProvied.map((spData) => (
              <div
                key={spData.id}
                className="text-bl dark:text-wh lg:p-6 p-3 rounded-lg shadow2 dark:border border-white/25">
                <h1 className="xl:text-3xl text-2xl pt-2">
                  {spData.title}
                </h1>
                <p className="xl:text-lg pt-3 text-hiLight">{spData.dec}</p>
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
