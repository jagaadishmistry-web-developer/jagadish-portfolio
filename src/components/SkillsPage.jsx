import { SkillData } from "@/utils/AllData";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Heading from "./Heading";

const SkillsPage = () => {
  return (
    <>
      <div className="">
        <div className="container mx-auto xl:px-20 lg:px-12 md:px-20 px-4 text-italic dark:text-wh text-bl pt-6 lg:pt-0 lg:pb-20 bg-secendry/5">
          <Heading title="My Skills" />
          <div className="grid place-items-center capitalize">
            <div className="grid lg:grid-cols-6 grid-cols-2 lg:gap-12 gap-8">
              {SkillData.map((sData) => {
                return (
                  <div
                    key={sData.id}
                    className="grid place-items-center gap-3 font-normal">
                    <CircularProgressbar
                      styles={buildStyles({
                        textColor: "#eb4d21f8",
                        pathColor: "#eb4d21f8",
                        textSize: "20px",
                      })}
                      value={sData.value}
                      text={`${sData.value}%`}
                    />
                    <p className="text-2xl font-bold">{sData.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
