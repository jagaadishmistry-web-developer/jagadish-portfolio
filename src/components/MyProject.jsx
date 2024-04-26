import { projectItems } from "@/utils/ProjectData";
import Image from "next/image";
import { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Heading from "./Heading";

const MyProject = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [projectItemData, setProjectItemData] = useState(projectItems);

  const projectItemFilter = (filterCategory) => {
    const projectItemUpdate = projectItems.filter((mainProjectItem) => {
      return mainProjectItem.category === filterCategory;
    });

    setProjectItemData(projectItemUpdate);
  };

  return (
    <>
      <div className="text-white text-italic font-serif">
        <div className="container mx-auto px-4 lg:pt-[40px] pt-[20px]">
          <Heading title="My Project" />
          {/* ====== Our Services first Caed Section ====== */}
          <div className="pb-10 flex items-center justify-center">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 place-items-center gap-4">
              <button
                data-aos="fade-up"
                onClick={() => setProjectItemData(projectItems)}
                className="col-span-1 h-10 w-28 text-italic font-medium font-serif text-base border border-secendry text-secendry shadow-lg shadow-black hover:scale-110 duration-300 rounded-lg">
                All
              </button>
              <button
                data-aos="fade-down"
                onClick={() => projectItemFilter("uiux")}
                className="col-span-1 h-10 w-28 text-italic font-medium font-serif text-base border border-secendry text-secendry shadow-lg shadow-black hover:scale-110 duration-300 rounded-lg">
                UI/UX
              </button>
              <button
                data-aos="fade-up"
                onClick={() => projectItemFilter("javascript")}
                className="col-span-1 h-10 w-28 text-italic font-medium font-serif text-base border border-secendry text-secendry shadow-lg shadow-black hover:scale-110 duration-300 rounded-lg">
                JavaScript
              </button>
              <button
                data-aos="fade-down"
                onClick={() => projectItemFilter("react")}
                className="col-span-1 h-10 w-28 text-italic font-medium font-serif text-base border border-secendry text-secendry shadow-lg shadow-black hover:scale-110 duration-300 rounded-lg">
                React Js
              </button>
              <button
                data-aos="fade-up"
                onClick={() => projectItemFilter("typescript")}
                className="col-span-1 h-10 w-28 text-italic font-medium font-serif text-base border border-secendry text-secendry shadow-lg shadow-black hover:scale-110 duration-300 rounded-lg">
                TypeScript
              </button>
            </div>
          </div>
          <div className="grid lg:gap-8 gap-8 grid-cols-1 lg:grid-cols-3 font-serif mt-6">
            {projectItemData.map((passProjectData) => {
              // const { img, name, description } = passProjectData;
              return (
                <div
                  key={passProjectData.id}
                  className="group relative rounded-xl items-center justify-center shadow-2xl shadow-black/90 dark:shadow-black-600/10 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black transition-shadow md:h-full h-64">
                  <div className="h-full">
                    <Image
                      className="h-full w-full object-cover group-hover:duration-[800ms] group-hover:scale-125 transition-transform"
                      src={passProjectData.img}
                      alt="img"
                      height={500}
                      width={500}
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black group-hover:from-black/90 group-hover:via-black/90 group-hover:to-black/90"></div>
                  <div className="absolute group-hover:duration-[400ms] inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[55%] group-hover:translate-y-0 transition-all">
                    <h1 className="xl:text-2xl text-xl font-bold text-white md:pt-4 md:pb-4 py-2 w-full">
                      {passProjectData.name}
                    </h1>
                    <div className="flex flex-col gap-3 pt-8">
                      <button className="flex gap-1 relative rounded-lg border-2 font-medium text-italic border-secendry bg-transparent py-1 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-secendry before:transition-transform before:duration-500 before:content-[''] text-secendry text-lg hover:text-white before:hover:scale-x-100 shadow-lg shadow-secendry/40">
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProject;
