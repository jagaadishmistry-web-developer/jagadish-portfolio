import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { LuUser2 } from "react-icons/lu";
import AboutPage from "./AboutPage";
import ContactUsPage from "./ContactUsPage";
import GoTop from "./GoTop";
import HomeViewPart from "./HomeViewPart";
import MyProject from "./MyProject";
import SkillsPage from "./SkillsPage";
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

  const aboutPage = useRef();
  const myServices = useRef();
  const myProject = useRef();
  const skillsPage = useRef();
  const contactUsPage = useRef();

  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <>
      <GoTop />
      <div className="bg-wh dark:bg-bl text-bl dark:text-wh border-b border-slate-300 dark:border-slate-700 text-italic">
        <div className="container mx-auto px-4 grid lg:grid-cols-4 grid-cols-2 justify-between h-[75px] md:h-[85px] lg:h-[78px] xl:h-[80px] 2xl:h-[100px] place-items-center">
          <div className="lg:col-span-1 flex items-start w-full">
            <Image src={portfolioLogo} alt="" data-aos="fade-right" />
          </div>
          <div className="col-span-2 lg:flex hidden xl:gap-16 lg:gap-9 items-center">
            <div className="flex 2xl:gap-8 xl:gap-7 lg:gap-6 text-[16px]">
              <div
                data-aos="fade-up"
                className="cursor-pointer hover:border-b border-b text-secendry border-secendry">
                Home
              </div>
              <div
                data-aos="fade-down"
                className="cursor-pointer hover:border-b hover:text-secendry hover:border-secendry"
                onClick={() => scrollHandler(aboutPage)}>
                About
              </div>
              <div
                data-aos="fade-up"
                className="cursor-pointer hover:border-b hover:text-secendry hover:border-secendry"
                onClick={() => scrollHandler(myServices)}>
                Services
              </div>
              <div
                data-aos="fade-down"
                className="cursor-pointer hover:border-b hover:text-secendry hover:border-secendry"
                onClick={() => scrollHandler(myProject)}>
                Project
              </div>
              <div
                data-aos="fade-up"
                className="cursor-pointer hover:border-b hover:text-secendry hover:border-secendry"
                onClick={() => scrollHandler(skillsPage)}>
                Skills
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:flex items-center gap-7 hidden justify-end w-full">
            <DarkMood />
            <button
              data-aos="fade-left"
              onClick={() => scrollHandler(contactUsPage)}
              className="flex justify-center items-center text-italic gap-1 bg-secendry text-white text-[16px] hover:scale-105 duration-300 rounded-full w-[147px] h-[46px]">
              <span className="mt-1">
                <LuUser2 />
              </span>
              <span> Contact Us</span>
            </button>
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
              className="absolute md:top-[188px] top-20 text-center flex pt-16 justify-center left-0 right-0 bg-white h-[100vh]">
              <div className="text-xl font-medium text-slate-600 gap-2 ">
                <div className="grid gap-10 place-items-center">
                  <div className="grid gap-4">
                    <div className="cursor-pointer">Home</div>
                    <div
                      className="cursor-pointer"
                      onClick={() => scrollHandler(aboutPage)}>
                      About
                    </div>
                    <div
                      className="cursor-pointer hover:border-b hover:text-secendry hover:border-secendry"
                      onClick={() => scrollHandler(myServices)}>
                      Services
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => scrollHandler(myProject)}>
                      Project
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => scrollHandler(skillsPage)}>
                      Skills
                    </div>
                  </div>
                  <button
                    onClick={() => scrollHandler(contactUsPage)}
                    className="flex gap-1 bg-secendry text-white text-xl rounded-full px-7 py-2 text-italic">
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
        <div ref={aboutPage}>
          <AboutPage />
        </div>
        <div ref={myServices}>
          <MyServices />
        </div>
        <div ref={myProject}>
          <MyProject />
        </div>
        <div ref={skillsPage}>
          <SkillsPage />
        </div>
        <div ref={contactUsPage}>
          <ContactUsPage />
        </div>
      </div>
    </>
  );
};

export default NavBar;
