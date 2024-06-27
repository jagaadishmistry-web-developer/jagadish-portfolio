import Image from "next/image";

const ProjectCart = ({ passProjectData }) => {
  const { img, name, link } = passProjectData;
  return (
    <>
      <div className="shadow2 border border-white/25 hover:border-secendry rounded-xl">
        <div className="group relative rounded-xl items-center justify-center shadow-2xl shadow-black/90 dark:shadow-black-600/10 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black transition-shadow md:h-full h-64">
          <div className="lg:h-[430px] h-[250px]">
            <Image
              className="h-full w-full object-cover group-hover:duration-[800ms] group-hover:scale-125 transition-transform"
              src={img}
              alt="img"
              height={500}
              width={500}
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black group-hover:from-black/90 group-hover:via-black/90 group-hover:to-black/90"></div>
          <div className="absolute group-hover:duration-[400ms] inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] group-hover:translate-y-0 transition-all">
            <h1 className="xl:text-2xl text-xl font-bold text-white md:pt-4 md:pb-4 py-2 w-full">
              {name}
            </h1>
            <div className="flex flex-col gap-3 pt-8">
              <a
                href={link}
                target="_blank"
                className="flex gap-1 relative rounded-lg border-2 font-medium text-italic border-secendry bg-transparent py-1 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-secendry before:transition-transform before:duration-500 before:content-[''] text-secendry text-lg hover:text-white before:hover:scale-x-100 shadow-lg shadow-secendry/40">
                Live Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCart;
