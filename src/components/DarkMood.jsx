import { useAtom } from "jotai";
import { useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import DarkAtom from "../../atom/DarkAtom";

const DarkMood = () => {
  const [dark, setDark] = useAtom(DarkAtom);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  return (
    <>
      <div className="py-1 duration-500 cursor-pointer" onClick={() => setDark(!dark)}>
        {dark ? (
          <MdOutlineWbSunny className="h-6 w-6 text-secendry cursor-pointer" />
        ) : (
          <FaRegMoon className="h-6 w-6 text-secendry" />
        )}
      </div>
    </>
  );
};

export default DarkMood;
