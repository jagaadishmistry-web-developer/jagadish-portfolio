const Heading = (props) => {
  return (
    <>
      <div className="grid place-items-center lg:pb-[100px] pb-[80px] lg:pt-20 pt-16 text-italic capitalize">
        <p className="font-bold md:text-[40px] text-[36px] dark:text-white">
          {props.title}
        </p>
        {/* <p className="lg:w-[540px] md:text-[16px] text-[15px] text-center mt-1 text-hiLight lg:px-0 px-5">
         Creative Frontend-Designer. Developed The Project Using React Js
        </p> */}
      </div>
    </>
  );
};

export default Heading;
