import LogoImg from "../assets/images/logo.svg";
import MoonImg from "../assets/images/icon-moon.svg?react";
import DownArrowImg from "../assets/images/icon-arrow-down.svg?react";
import { useRef, useState } from "react";
import clsx from "clsx";

interface HeaderProps {
  fontType: string;
  setFontType: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ fontType, setFontType }: HeaderProps) {
  const [mode, setMode] = useState("light");
  const dialogEl = useRef<HTMLDialogElement>(null);

  const handleOpenDialog = () => {
    if (dialogEl.current?.open) {
      dialogEl.current?.close();
      return;
    }
    dialogEl.current?.show();
  };
  const handleCloseDialog = () => {
    dialogEl.current?.close();
  };

  return (
    <header className="flex items-center bg-white">
      <img className="mr-auto w-8" src={LogoImg} alt="Logo" />
      <div className="flex">
        <div className="relative">
          <button className="flex gap-2" onClick={handleOpenDialog}>
            {fontType}
            Python
            <span className="self-center">
              <DownArrowImg />
            </span>
          </button>
          <dialog
            className="left-auto z-1 w-40 rounded-xl py-4 shadow-sm"
            ref={dialogEl}
          >
            <div className="flex flex-col space-y-3">
              <button
                onClick={handleCloseDialog}
                className="pl-4 text-left font-sans hover:cursor-pointer"
              >
                Sans Serif
              </button>
              <button className="pl-4 text-left font-serif hover:cursor-pointer">
                Serif
              </button>
              <button className="pl-4 text-left font-mono hover:cursor-pointer">
                Mono
              </button>
            </div>
          </dialog>
        </div>
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
