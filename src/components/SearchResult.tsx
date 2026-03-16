import Phonetics from "./Phonetics";
import MeaningList from "./MeaningList";

import type { DictionaryWord } from "../utils/types";

interface SearchResultProps {
  result: DictionaryWord[];
}

export default function SearchResult({ result }: SearchResultProps) {
  console.log(result);
  const phonetic = result[0];
  return (
    <div>
      <Phonetics
        word={phonetic.word}
        phonetic={phonetic.phonetic}
        phonetics={phonetic.phonetics}
      />
      {result.map((res, index) => (
        <section key={index}></section>
      ))}
    </div>
  );
}
