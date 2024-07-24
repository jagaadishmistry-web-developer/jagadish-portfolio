import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { LuUser2 } from "react-icons/lu";
import AboutPage from "./AboutPage";
import ContactUsPage from "./ContactUsPage";
import GoTop from "./GoTop";
import HomeViewPart from "./HomeViewPart";
import MyProject from "./MyProject";
import MyServices from "./MyServices";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import portfolioLogo from "../../public/portfolioLogo.png";
import DarkMood from "./DarkMood";

const NavBar = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [nav, setNav] = useState(false);

  // const aboutPage = useRef();
  const myServices = useRef();
  const project = useRef();
  const contactUsPage = useRef();

  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <>
      <GoTop />
      <div className="bg-secendry/5 text-bl dark:text-wh duration-700 border-b border-slate-300 dark:border-slate-700 capitalize">
        <div className="container mx-auto xl:px-20 lg:px-12 md:px-20 px-4 flex h-[75px] md:h-[85px] lg:h-[78px] xl:h-[80px] 2xl:h-[110px] place-items-center">
          <div className="flex items-start w-full">
            <Image src={portfolioLogo} alt="" data-aos="fade-right" />
          </div>
          <div className="lg:flex hidden xl:gap-6 lg:gap-4 items-center justify-between w-full">
            <div className=""></div>
            <div className="flex lg:gap-2 text-[16px] items-center">
              <div
                data-aos="fade-up"
                className="group flex relative bg-transparent py-3 px-4 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-secendry before:transition-transform before:duration-500 before:content-[''] text-lg hover:text-white before:hover:scale-x-100 items-center justify-center cursor-pointer">
                Home
              </div>
              {/* <div
                data-aos="fade-down"
                className="group flex relative bg-transparent py-3 px-4 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-secendry before:transition-transform before:duration-500 before:content-[''] text-lg hover:text-white before:hover:scale-x-100 items-center justify-center cursor-pointer"
                onClick={() => scrollHandler(aboutPage)}>
                About
              </div> */}
              <div
                data-aos="fade-up"
                className="group flex relative bg-transparent py-3 px-4 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-secendry before:transition-transform before:duration-500 before:content-[''] text-lg hover:text-white before:hover:scale-x-100 items-center justify-center cursor-pointer"
                onClick={() => scrollHandler(myServices)}>
                Skills
              </div> 
              <div
                data-aos="fade-up"
                className="group flex relative bg-transparent py-3 px-4 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-secendry before:transition-transform before:duration-500 before:content-[''] text-lg hover:text-white before:hover:scale-x-100 items-center justify-center cursor-pointer"
                onClick={() => scrollHandler(project)}>
                Project
              </div> 
              <div
                 data-aos="fade-up"
                 className="bg-secendry text-lg text-white px-4 lg:px-10 ml-4 py-3 rounded-md cursor-pointer"
                 onClick={() => scrollHandler(contactUsPage)}>
                 Contact
              </div>
              <div className="lg:flex gap-7 hidden justify-end w-full pl-5">
                <DarkMood />
              </div>
            </div>
          </div>
          <div className="flex gap-4 z-50 lg:hidden justify-end w-full items-center">
            <DarkMood />
            <div onClick={() => setNav(!nav)} className="cursor-pointer">
              {nav ? (
                <XMarkIcon className="w-8 h-8 text-bl dark:text-wh" />
              ) : (
                <Bars3Icon className="w-8 h-8 text-bl dark:text-wh" />
              )}
            </div>
          </div>
          {nav && (
            <div
              onClick={() => setNav(false)}
              className="absolute md:top-[188px] top-20 text-center flex pt-16 justify-center left-0 right-0 bg-white h-[50vh]">
              <div className="text-xl font-medium text-slate-600 gap-2 ">
                <div className="grid gap-10 place-items-center">
                  <div className="grid gap-4">
                    <div className="cursor-pointer">Home</div>
                    {/* <div
                      className="cursor-pointer"
                      onClick={() => scrollHandler(aboutPage)}>
                      About
                    </div> */}
                    <div
                      className="cursor-pointer hover:border-b hover:text-secendry hover:border-secendry"
                      onClick={() => scrollHandler(myServices)}>
                      Services
                    </div>
                    <div
                      className="cursor-pointer hover:border-b hover:text-secendry hover:border-secendry"
                      onClick={() => scrollHandler(project)}>
                      Project
                    </div>
                  </div>
                  <button
                    data-aos="fade-up"
                    onClick={() => scrollHandler(contactUsPage)}
                    className="flex gap-1 relative border-2 font-medium text-italic border-secendry bg-transparent py-2 px-6 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-secendry before:transition-transform before:duration-500 before:content-[''] text-secendry text-lg hover:text-white before:hover:scale-x-100 shadow-lg shadow-secendry/40 items-center justify-center">
                    <span className="mt-1">
                      <LuUser2 />
                    </span>
                    <span> Contact Us</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div>
          <HomeViewPart />
        </div>
        {/* <div ref={aboutPage}>
          <AboutPage />
        </div> */}
        <div ref={myServices}>
          <MyServices />
        </div>
        <div ref={project}>
        <MyProject/>
        </div>
        <div ref={contactUsPage}>
          <ContactUsPage />
        </div>
      </div>
    </>
  );
};

export default NavBar;
