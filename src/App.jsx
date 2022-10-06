import { useState } from "react";
import CustomForm from "./components/CustomForm";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    const htmlDocument = document.querySelector("html");
    htmlDocument.classList.toggle("dark", darkTheme);
    setDarkTheme(!darkTheme);
  };
  return (
    <>
      <div class="flex justify-between items-center w-full dark:bg-white bg-black">
        <div
          className="h-[38px] w-72 m-6 justify-around items-center hidden md:flex                                                                                                 "
        >
          <div className="bg-green-500 rounded-full w-4 h-4 cursor-pointer"></div>
          <div className="bg-red-500 rounded-full w-4 h-4 cursor-pointer"></div>
          <div className="bg-yellow-400 rounded-full w-4 h-4 cursor-pointer"></div>
        </div>
        <button
          className="h-[38px] w-[80px] m-6 flex justify-center items-center place-items-center rounded bg-gradient-to-b dark:from-slate-100 dark:to-slate-200 from-slate-800 to-slate-900 dark:text-slate-900 text-slate-200"
          onClick={toggleTheme}
        >
          {darkTheme ? <MdOutlineDarkMode /> : <MdLightMode />}
        </button>
      </div>
      <main className="flex flex-col items-center justify-start pt-56 w-full min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
        <div className="grid place-items-center gap-8 m-8">
          <CustomForm />
        </div>
      </main>
    </>
  );
};

export default App;
