import { useState } from "react";
import SearchImg from "../assets/images/icon-search.svg";
import clsx from "clsx";

interface SearchWordFormProps {
  handleSearchWord: (word: string) => void;
}

export default function SearchWordForm({
  handleSearchWord,
}: SearchWordFormProps) {
  const [word, setWord] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmitForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!word.length) {
      setErrorMsg("Whoops, can't be empty...");
      return;
    }
    handleSearchWord(word);
    setErrorMsg("");
  };
  return (
    <form onSubmit={handleSubmitForm} className="relative mt-10">
      <div>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          type="text"
          name="search"
          id="search"
          className={clsx(
            "bg-wild-sand dark:bg-retro-black text-light-black w-full rounded-2xl p-3 text-lg font-bold ring-0 transition duration-200 outline-none hover:ring-2 focus:ring-2 active:ring-1 dark:text-white dark:placeholder:text-white",

            errorMsg
              ? "focus:ring-hot-kiss active:ring-hot-kiss caret-fantasia hover:ring-hot-kiss"
              : "focus:ring-fantasia active:ring-fantasia caret-fantasia hover:ring-fantasia",
          )}
          placeholder="Search for any word.."
        />
        {errorMsg && <p className="text-hot-kiss mt-2">{errorMsg}</p>}
      </div>

      <button
        type="submit"
        className={clsx(
          "absolute right-3",
          errorMsg ? "top-4" : "top-1/2 -translate-y-1/2",
        )}
      >
        <img src={SearchImg} alt="search icon" />
      </button>
    </form>
  );
}
