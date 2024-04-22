import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { PiPhoneCallLight } from "react-icons/pi";
import { RiBox3Fill } from "react-icons/ri";
import portfolioLogo from "../../public/portfolioLogo.png";

const FooterBar = () => {
  return (
    <>
      <div className="bg-bl/95 pb-32 pt-16 text-italic font-serif">
        <div className="container mx-auto px-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 place-items-center h-full text-white lg:grid-flow-col">
          {/* part 1 */}
          <div className="col-span-1 grid lg:place-items-start lg:w-full w-48 gap-4 xl:gap-7 lg:mt-0 md:mt-24 mt-20 xl:mt-20">
            <Image src={portfolioLogo} alt="" />
            <p className="xl:text-lg text-xs">
              Hello I am Fresher Frontend Designer and Frontend Developer
              jagadish mistry. iI am a Working In React Js & Next Js.
            </p>
            <div className="flex gap-3 xl:gap-4">
              <Link
                href={"https://www.facebook.com/jago.mistri.58"}
                className="bg-white h-7 w-7 lg:h-5 lg:w-5 xl:h-[45px] hover:scale-105 duration-300 xl:w-[45px] flex justify-center items-center rounded-full text-black">
                <FaFacebookF />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/jagadish-mistry-00b57b244/"}
                className="bg-white h-7 w-7 lg:h-5 lg:w-5 xl:h-[45px] hover:scale-105 duration-300 xl:w-[45px] flex justify-center items-center rounded-full text-black ">
                <FaLinkedinIn />
              </Link>
              <Link
                href={"https://www.facebook.com/jago.mistri.58"}
                className="bg-white h-7 w-7 lg:h-5 lg:w-5 xl:h-[45px] hover:scale-105 duration-300 xl:w-[45px] flex justify-center items-center rounded-full text-black ">
                <FaInstagram />
              </Link>
              <Link
                href={
                  "https://www.youtube.com/channel/UCgRKg-U0clk8V0GwCYMALPw"
                }
                className="bg-white h-7 w-7 lg:h-5 lg:w-5 xl:h-[45px] hover:scale-105 duration-300  xl:w-[45px] flex justify-center items-center rounded-full text-black ">
                <FaYoutube />
              </Link>
            </div>
          </div>
          {/* part 2 */}
          <div className="col-span-1 grid lg:place-items-start lg:w-full w-48 gap-3 xl:gap-9 lg:mt-0 md:mt-24 mt-0 xl:mt-[14px] 2xl:mt-20">
            <div className="text-xl xl:text-[32px] font-bold underline">
              Explore Link
            </div>
            <div className="text-xs xl:text-[18px] flex flex-col gap-1 xl:gap-4">
              <div className="flex gap-1 xl:gap-2">
                <span>
                  <RiBox3Fill />
                </span>
                <span>Home</span>
              </div>
              <div className="flex gap-1 xl:gap-2">
                <span>
                  <RiBox3Fill />
                </span>
                <span>About</span>
              </div>
              <div className="flex gap-1 xl:gap-2">
                <span>
                  <RiBox3Fill />
                </span>
                <span>Services</span>
              </div>
              <div className="flex gap-1 xl:gap-2">
                <span>
                  <RiBox3Fill />
                </span>
                <span>Project</span>
              </div>
              <div className="flex gap-1 xl:gap-2">
                <span>
                  <RiBox3Fill />
                </span>
                <span>Skills</span>
              </div>
            </div>
          </div>
          {/* part 3 */}
          <div className="col-span-1 grid lg:place-items-start lg:w-full w-48 gap-4 xl:gap-8 xl:mt-[40px] 2xl:mt-[100px]">
            <div className="text-xl xl:text-[34px] font-bold underline">
              Latest Project
            </div>
            <div className="flex flex-col gap-2 xl:gap-5">
              <div className="flex gap-2 xl:gap-4">
                <div className="">
                  <Image
                    src={"/footer1.png"}
                    height={500}
                    width={500}
                    className="xl:h-[72px] h-[45px] xl:w-[80px] w-[70px] rounded-md"
                    alt=""
                    priority
                  />
                </div>
                <div className="">
                  <p className="text-[12px] xl:text-[20px] font-bold w-36">
                    New Dental Care project
                  </p>
                  <p className="text-[9px] xl:text-[16px]"> 05 Apr 2024</p>
                </div>
              </div>
              <div className="">
                <div className="flex gap-2 xl:gap-4">
                  <div className="">
                    <Image
                      src={"/footer2.png"}
                      height={500}
                      width={500}
                      className="xl:h-[72px] h-[45px] xl:w-[80px] w-[70px] rounded-md"
                      alt=""
                      priority
                    />
                  </div>
                  <div className="">
                    <p className="text-[12px] xl:text-[20px] font-bold w-36">
                      New Artizen ai Project
                    </p>
                    <p className="text-[9px] xl:text-[16px]"> 21 feb 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* part 4 */}
          <div className="col-span-1 grid lg:place-items-start lg:w-full w-48 gap-4 mb-5 2xl:mb-[0px] xl:mb-8 2xl:mt-8 xl:gap-9 ">
            <div className="text-xl xl:text-[32px] font-bold underline">
              Get In Touch
            </div>
            <div className="text-xs xl:text-[16px] grid gap-3 xl:gap-5">
              <div className="flex gap-1 xl:gap-2">
                <span className=" text-secendry text-[18px] xl:text-[23px]">
                  <PiPhoneCallLight />
                </span>
                <p>+91 9093958820</p>
              </div>
              <div className="flex gap-1 xl:gap-2">
                <span className=" text-secendry text-[18px] xl:text-[23px]">
                  <IoIosMail />
                </span>
                <p>jagadishmistri8@gmail.com</p>
              </div>
              <div className="flex gap-1 xl:gap-2">
                <span className=" text-secendry text-[18px] xl:text-[23px]">
                  <FaLocationDot />
                </span>
                <p>West-Bengal in Kkolkata at Basirhat. PIN- 743437</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 text-white xl:text-[20px] lg:text-sm text-xs text-italic">
        <div className="bg-black h-full w-full grid place-items-center">
          Copyright © 2024 Jagadish-Portfolio. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default FooterBar;
