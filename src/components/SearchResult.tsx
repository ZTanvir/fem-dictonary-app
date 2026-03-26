import Phonetics from "./Phonetics";
import MeaningList from "./MeaningList";

import type { DictionaryWord } from "../utils/types";

interface SearchResultProps {
  result: DictionaryWord[];
}

export default function SearchResult({ result }: SearchResultProps) {
  const phonetic = result[0];
  return (
    <div className="mt-8 space-y-6">
      <Phonetics
        word={phonetic.word}
        phonetic={phonetic.phonetic}
        phonetics={phonetic.phonetics}
      />
      {result.map((res, index) => (
        <MeaningList key={index} meanings={res.meanings} />
      ))}
    </div>
  );
}
