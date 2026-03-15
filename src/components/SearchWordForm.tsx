import { useState } from "react";
import SearchImg from "../assets/images/icon-search.svg";

interface SearchWordFormProps {
  handleSearchWord: (word: string) => void;
}

export default function SearchWordForm({
  handleSearchWord,
}: SearchWordFormProps) {
  const [word, setWord] = useState("");
  const handleSubmitForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearchWord(word);
  };
  return (
    <form onSubmit={handleSubmitForm} className="relative">
      <input
        value={word}
        onChange={(e) => setWord(e.target.value)}
        type="text"
        name="search"
        id="search"
        className="bg-wild-sand text-light-black focus:ring-fantasia active:ring-fantasia caret-fantasia hover:ring-fantasia w-full rounded-2xl p-3 text-lg font-bold ring-0 transition duration-200 outline-none hover:ring-2 focus:ring-2 active:ring-1"
        placeholder="Search for any word.."
      />
      <button type="submit" className="absolute top-1/2 right-3 -translate-1/2">
        <img src={SearchImg} alt="search icon" />
      </button>
    </form>
  );
}
