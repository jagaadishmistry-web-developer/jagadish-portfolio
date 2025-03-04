import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaRegEnvelope,
  FaTwitter
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiBox3Fill } from "react-icons/ri";
import portfolioLogo from "../../public/portfolioLogo.png";

const FooterBar = () => {
  return (
    <>
      <br />
      <br />
      <footer className="py-4 bg-secendry/5">
        <div className="container mx-auto xl:px-20 lg:px-12 md:px-20 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 lg:gap-x-12 py-10 lg:py-20">
            <div className="lg:col-span-2 col-span-1">
              <Link className="block" href="/"><Image className="max-w-48	w-full" src={portfolioLogo} alt="portfolioLogo" /></Link>
              <p className="text-black dark:text-white mt-5 md:mt-8 mb-7 md:mb-10 capitalize">I am a fresher react JS developer. Creating responsive and dynamic websites. I have completed my web design and development course from CIT (Central Institute Of Technology). I love coding and listening to music and traveling.
              </p>
              <ul className="flex items-center space-x-6 text-white text-xl">
                <li><a href="https://www.facebook.com/jago.mistri.58" className="transition-all hover:text-secendry text-black dark:text-white" target="_blank"><FaFacebookF /></a></li>
                <li><a href="#" className="transition-all hover:text-secendry text-black dark:text-white" target="_blank"><FaTwitter /></a></li>
                <li><a href="https://www.instagram.com/_little_boy_2002/" className="transition-all hover:text-secendry text-black dark:text-white" target="_blank"><FaInstagram /></a></li>
                <li><a href="https://www.linkedin.com/in/jagadish-mistry-00b57b244/" className="transition-all hover:text-secendry text-black dark:text-white" target="_blank"><FaLinkedinIn /></a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-2xl md:text-3xl	font-medium capitalize text-black dark:text-white mb-6 lg:mb-8 xl:mb-11">Quick Links</h3>
              <ul className="text-base font-medium capitalize text-black dark:text-white space-y-3">
                <li className="flex gap-1 xl:gap-2 items-center"><RiBox3Fill /><Link href="#">Home</Link></li>
                <li className="flex gap-1 xl:gap-2 items-center"><RiBox3Fill /><Link href="#">About Us</Link></li>
                <li className="flex gap-1 xl:gap-2 items-center"><RiBox3Fill /><Link href="#">Skills</Link></li>
                <li className="flex gap-1 xl:gap-2 items-center"><RiBox3Fill /><Link href="#">Project</Link></li>
                <li className="flex gap-1 xl:gap-2 items-center"><RiBox3Fill /><Link href="#">contact Us</Link></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-2xl md:text-3xl	font-medium capitalize text-black dark:text-white mb-6 lg:mb-8 xl:mb-11">Contact Us</h3>
              <ul className="text-base font-medium text-black dark:text-white space-y-4">
                <li className="flex items-center gap-x-3 lg:gap-x-5">
                  <div className="w-12 h-12 rounded-xl bg-secendry text-white inline-flex items-center justify-center">
                    <FaPhone />
                  </div>
                  <h4 className="text-base font-medium "> <a href="tel:9339471127">+(91) 9339471127</a></h4>
                </li>
                <li className="flex items-center gap-x-3 lg:gap-x-5">
                  <div className="w-12 h-12 rounded-xl bg-secendry text-white inline-flex items-center justify-center">
                    <FaRegEnvelope />
                  </div>
                    <h4 className="text-base font-medium "><a href="mailto:jagadishmistri8@gmail.com">jagadishmistri8@gmail.com</a></h4>
                </li>
                <li className="flex items-center gap-x-3 lg:gap-x-5">
                  <div className="w-12 h-12 rounded-xl bg-secendry text-white inline-flex items-center justify-center">
                  <FaLocationDot />
                  </div>
                    <h4 className="text-base font-medium ">kolkata in west bengal</h4>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secendry text-center py-3 lg:py-5 px-2 lg:px-6 text-xs sm:text-sm md:text-base font-semibold text-black dark:text-white">
            <p className="mb-6">Copyright &copy; <Link href="/" className="transition-all hover:text-secendry">Jagadish-Portfolio</Link> 2024. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterBar;
