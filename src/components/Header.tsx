import clsx from "clsx";
import LogoImg from "../assets/images/logo.svg";
import MoonImg from "../assets/images/icon-moon.svg?react";
import DownArrowImg from "../assets/images/icon-arrow-down.svg?react";
import type { FontList } from "../utils/types";
import { useRef } from "react";
import { useFontContext } from "./context/font-context/FontContext";
import { useThemeContext } from "./context/theme-context/ThemeContext";

export default function Header() {
  const { theme, setTheme } = useThemeContext();
  const dialogEl = useRef<HTMLDialogElement>(null);
  const { fontType, setFontType } = useFontContext();

  const handleOpenDialog = () => {
    if (dialogEl.current?.open) {
      dialogEl.current?.close();
      return;
    }
    dialogEl.current?.show();
  };
  const handleCloseDialog = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setFontType(target.value as FontList);
    dialogEl.current?.close();
  };

  function generateFontName(fontClass: FontList) {
    switch (fontClass) {
      case "font-mono":
        return "Mono";
      case "font-sans":
        return "Sans serif";
      case "font-serif":
        return "Serif";
      default:
        return "Sans serif";
    }
  }

  return (
    <header className="flex items-center bg-white dark:bg-black">
      <img className="mr-auto w-8" src={LogoImg} alt="Logo" />
      <div className="flex">
        <div className="relative">
          <button
            className="text-light-black flex gap-2 hover:cursor-pointer dark:text-white"
            onClick={handleOpenDialog}
          >
            {generateFontName(fontType as FontList)}
            <span className="self-center">
              <DownArrowImg />
            </span>
          </button>
          <dialog
            className="dark:bg-retro-black left-auto z-1 mt-4 w-40 rounded-xl py-4 drop-shadow-xl dark:drop-shadow-[0_0_10px_#a445ed]"
            ref={dialogEl}
          >
            <div className="flex flex-col space-y-3 font-semibold dark:text-white">
              <button
                onClick={handleCloseDialog}
                value="font-sans"
                className="hover:text-fantasia pl-6 text-left font-sans hover:cursor-pointer"
              >
                Sans Serif
              </button>
              <button
                value="font-serif"
                onClick={handleCloseDialog}
                className="hover:text-fantasia pl-6 text-left font-serif hover:cursor-pointer"
              >
                Serif
              </button>
              <button
                value="font-mono"
                onClick={handleCloseDialog}
                className="hover:text-fantasia pl-6 text-left font-mono hover:cursor-pointer"
              >
                Mono
              </button>
            </div>
          </dialog>
        </div>
        <div className="bg-white-echo mx-4 h-auto w-px"></div>
        <div className="flex gap-3">
          <div
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className={clsx(
              "relative flex h-5 w-10 items-center rounded-xl p-0.5 transition-colors",
              {
                "bg-solid-gray": theme === "light",
                "bg-fantasia": theme !== "light",
              },
            )}
          >
            <div
              className={clsx(
                "bg-full-white absolute h-3.5 w-3.5 rounded-full transition-all duration-200",
                {
                  "translate-x-0": theme === "light",
                  "translate-x-5": theme !== "light",
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
