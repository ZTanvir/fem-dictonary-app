import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import playAudioImg from "./assets/images/icon-play.svg";
import SearchWordForm from "./components/SearchWordForm";
import type { ErrorMsgResponse } from "./utils/types";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";

const apiUrl = import.meta.env.VITE_DICTIONARY_API;

function App() {
  const [wordData, setWordData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | ErrorMsgResponse>(null);

  const handleSearchWord = (word: string) => {
    async function fetchWordData() {
      try {
        setIsLoading(true);
        setError(null);
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

  console.log(wordData);

  return (
    <>
      <Header />
      <SearchWordForm handleSearchWord={handleSearchWord} />

      {isLoading && (
        <div className="flex h-full items-center justify-center">
          <Loading />
        </div>
      )}

      {error && <ErrorMessage title={error.title} message={error.message} />}

      {wordData.length > 0 && (
        <section id="result">
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
      )}
    </>
  );
}

export default App;
