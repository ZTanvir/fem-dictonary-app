import LogoImg from "../assets/images/logo.svg";
import MoonImg from "../assets/images/icon-moon.svg?react";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [mode, setMode] = useState("light");
  return (
    <header className="flex items-center bg-white">
      <img className="mr-auto w-8" src={LogoImg} alt="Logo" />
      <div className="flex">
        <select name="font" id="font">
          <option value="sans">Sans Serif</option>
        </select>
        <div className="bg-white-echo mx-4 h-auto w-px"></div>
        <div className="flex gap-3">
          <div
            onClick={() =>
              setMode((prev) => (prev === "light" ? "dark" : "light"))
            }
            className={clsx(
              "relative flex h-5 w-10 items-center rounded-xl p-0.5 transition-colors",
              {
                "bg-solid-gray": mode === "light",
                "bg-fantasia": mode !== "light",
              },
            )}
          >
            <div
              className={clsx(
                "bg-full-white absolute h-3.5 w-3.5 rounded-full transition-all duration-200",
                {
                  "translate-x-0": mode === "light",
                  "translate-x-5": mode !== "light",
                },
              )}
            ></div>
          </div>
          <MoonImg className="text-solid-gray dark:text-fantasia" />
        </div>
      </div>
    </header>
  );
}
