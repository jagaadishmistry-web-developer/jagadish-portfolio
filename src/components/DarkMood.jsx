import { useAtom } from "jotai";
import { useEffect } from "react";
import { MdModeNight, MdOutlineWbSunny } from "react-icons/md";
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
      <div className="py-1 duration-500" onClick={() => setDark(!dark)}>
        {dark ? (
          <MdOutlineWbSunny className="h-6 w-6 duration-500 text-bl dark:text-white" />
        ) : (
          <MdModeNight className="h-6 w-6 duration-500 text-bl dark:text-white" />
        )}
      </div>
    </>
  );
};

export default DarkMood;
