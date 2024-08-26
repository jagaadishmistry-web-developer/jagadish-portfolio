import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const TopBar = () => {
  return (
    <>
      <div className="bg-secendry text-white text-lg md:flex flex-col justify-center py-4 hidden">
        <div className="container mx-auto px-4 flex justify-between">
          <div className="flex lg:flex-row flex-col lg:gap-4 xl:text-[14px] text-[11px] lg:items-center">
            <div className="flex gap-1 items-center capitalize">
              <span>
                <FaLocationDot className="text-lg" />
              </span>
              West Bengal in kolkata at Basirhat Pin-743437
            </div>
            <div className="flex gap-1 items-center">
              <span className="">
                <IoIosMail className="text-lg" />
              </span>
             <a href="mailto:jagadishmistri8@gmail.com">jagadishmistri8@gmail.com</a>
            </div>
            <div className="flex gap-1 items-center">
              <span className="">
                <BiSolidPhoneCall className="text-lg" />
              </span>
              <a href="tel:9093958820">+(91) 9339471127</a>
            </div>
          </div>
          <div className="lg:flex hidden">
            <div className="flex gap-4 text-wh pt-1">
              <Link
                href={"https://www.facebook.com/jago.mistri.58"}>
                <FaFacebookF className="text-xl"/>
              </Link>
              <Link
                href={"https://www.instagram.com/_little_boy_2002/"}>
                <FaInstagram className="text-xl"/>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/jagadish-mistry-00b57b244/"}>
                <FaLinkedinIn className="text-xl"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
