import "./App.css";
import Header from "./components/Header";
import playAudioImg from "./assets/images/icon-play.svg";
import SearchWordForm from "./components/SearchWordForm";
import { useState } from "react";
import type { ErrorMsgResponse } from "./utils/types";

const apiUrl = import.meta.env.VITE_DICTIONARY_API;

function App() {
  const [wordData, setWordData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | ErrorMsgResponse>(null);

  const handleSearchWord = (word: string) => {
    async function fetchWordData() {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}/${word}`);
        if (!response.ok) {
          const errorMsg = await response.json();
          setError(errorMsg);
          throw new Error();
        }
        const data = await response.json();
        setWordData(data);
        setError(null);
      } catch {
        setWordData([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchWordData();
  };

  return (
    <>
      <Header />
      <SearchWordForm handleSearchWord={handleSearchWord} />
      <section id="result">
        <section id="phonetics" className="flex items-center">
          <div className="mr-auto">
            <h1 className="text-light-black text-5xl font-bold">Keyboard</h1>
            <span className="text-fantasia mt-1 inline-block">/ˈkiːbɔːd/</span>
          </div>
          <div className="">
            <audio
              className=""
              src="https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3"
            >
              Your browser does not support the audio element.
            </audio>
            <button>
              <img src={playAudioImg} className="h-18 w-18" alt="play audio" />
            </button>
          </div>
        </section>

        <section id="partOfSpeech">
          <h2>
            noun <span></span>
          </h2>
          <p>Meaning</p>
          <ul>
            <li>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default App;
