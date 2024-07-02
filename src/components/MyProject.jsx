import { projectItems } from "@/utils/ProjectData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import Heading from "./Heading";
import ProjectCart from "./ProjectCart";

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
      <div className="text-white text-italic pb-28">
        <div className="container mx-auto px-4 lg:pt-[0px] pt-[20px]">
          <Heading title="My Project" />
          <div className="pb-10 flex items-center justify-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 place-items-center gap-4">
              <button
                data-aos="fade-up"
                onClick={() => setProjectItemData(projectItems)}
                className="col-span-1 h-10 w-28 text-italic font-medium text-base text-black dark:text-white shadow2 dark:border border-white/25 hover:scale-110 duration-300 rounded-lg">
                All
              </button>
              <button
                data-aos="fade-down"
                onClick={() => projectItemFilter("webflew")}
                className="col-span-1 h-10 w-28 text-italic font-medium text-base text-black dark:text-white shadow2 dark:border border-white/25 hover:scale-110 duration-300 rounded-lg">
                Webflew
              </button>
              {/* <button
                data-aos="fade-up"
                onClick={() => projectItemFilter("javascript")}
                className="col-span-1 h-10 w-28 text-italic font-medium text-base text-black dark:text-white shadow2 dark:border border-white/25 hover:scale-110 duration-300 rounded-lg">
                JavaScript
              </button> */}
              <button
                data-aos="fade-down"
                onClick={() => projectItemFilter("react")}
                className="col-span-1 h-10 w-28 text-italic font-medium text-base text-black dark:text-white shadow2 dark:border border-white/25 hover:scale-110 duration-300 rounded-lg">
                React Js
              </button>
              <button
                data-aos="fade-up"
                onClick={() => projectItemFilter("typescript")}
                className="col-span-1 h-10 w-28 text-italic font-medium text-base text-black dark:text-white shadow2 dark:border border-white/25 hover:scale-110 duration-300 rounded-lg">
                TypeScript
              </button>
            </div>
          </div>
          <div className="grid lg:gap-10 gap-8 grid-cols-1 lg:grid-cols-2 mt-6 lg:mt-12">
            {projectItemData.map((pValu) => {
              return <ProjectCart key={pValu.id} passProjectData={pValu} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProject;
