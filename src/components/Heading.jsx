const Heading = (props) => {
  return (
    <>
      <div className="grid place-items-center lg:py-[100px] py-[70px] text-italic font-serif">
        <p className="font-bold md:text-[48px] text-[36px] underline text-bl dark:text-white">
          {props.title}
        </p>
        <p className="lg:w-[540px] md:text-[16px] text-[15px] text-center mt-3 text-hiLight lg:px-0 px-5">
          Thanks for visiting the portfolio. Here the work of web site design
          and website development is done. And with figma and PhotoShop UI
          designing is also done.
        </p>
      </div>
    </>
  );
};

export default Heading;
