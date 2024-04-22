import { useEffect, useState } from "react";
import { HiChevronDoubleUp } from "react-icons/hi2";

const GoTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`z-50 fixed bottom-6 right-4 -translate-y-96 rounded-full p-1 xl:p-3 text-2xl opacity-0 shadow-md ring-2 bg-secendry ring-secendry duration-700 lg:bottom-6 lg:right-6 ${
          showButton ? "translate-y-0 cursor-pointer opacity-100" : ""
        }`}
        onClick={scrollToTop}>
        <div className="text-white">
          <HiChevronDoubleUp />
        </div>
      </div>
    </>
  );
};

export default GoTop;
