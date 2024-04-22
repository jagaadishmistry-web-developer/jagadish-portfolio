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
      <div className="container mx-auto px-4 font-serif text-italic">
        <Heading title="My Services" />
        <div className="grid grid-cols-5 gap-8">
          <div data-aos="fade-up" className="lg:col-span-2 col-span-5">
            <div className="grid md:grid-cols-2 gap-3 w-full">
              {servicesData.map((sData) => (
                <div
                  key={sData.id}
                  className="flex items-center xl:gap-5 gap-3 xl:text-xl text-lg font-medium xl:px-6 px-3 hover:scale-105 duration-300 rounded-lg border text-white h-20 w-full">
                  <Image src={sData.url} alt="" /> {sData.title}
                </div>
              ))}
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="lg:col-span-3 col-span-5 grid lg:grid-cols-2 md:grid-cols-2 gap-3">
            {ServicesProvied.map((spData) => (
              <div
                key={spData.id}
                className="border h-80 bg-black text-white p-6 rounded-lg shadow2 hover:bg-black/90">
                <h1 className="xl:text-3xl text-2xl font-bold pt-2">
                  {spData.title}
                </h1>
                <p className="xl:text-lg pt-5 text-hiLight">{spData.dec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyServices;
