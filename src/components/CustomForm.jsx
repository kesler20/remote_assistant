// library imports
import CustomButton from "./CustomButton";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

const Form = () => {
  const [command, setCommand] = useState("");

  useEffect(() => {
    const form = document.querySelector("input");
    form.focus();
    return () => {
      form.removeEventListener("focus", () => {});
    };
  }, []);

  const handleClick = () => {
    fetch("http://127.0.0.1:5000", {
      method: "POST",
      body: JSON.stringify(command),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });

    setCommand("");
  };

  return (
    <>
      <h1 className="text-3xl sm:text-6xl font-bold text-center">
        What should I do?
      </h1>
      <form
        className="flex ring-4 rounded-md ring-slate-200  dark:ring-slate-800 focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200 ring-offset-slate-200 dark:ring-offset-slate-800"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="bg-inherit rounded-md font-sans text-slate-800  py-2 px-6 focus:outline-none text-xl sm:text-2xl placeholder:text-slate-400 caret-teal-600 appearance-none w-full"
          placeholder="Enter Command"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          autoFocus
          maxLength="64"
        />
        <button
          className="bg-inherit rounded-md font-sans text-slate-800  py-2 pr-6 focus:outline-none focus:text-teal-600 hover:text-teal-600"
          onClick={handleClick}
        >
          <ArrowCircleRightIcon className="h-12 w-12 pointer-events-none" />
        </button>
      </form>

      <CustomButton text="Send Command" />
    </>
  );
};

export default Form;
