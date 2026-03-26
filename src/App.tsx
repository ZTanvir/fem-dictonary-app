import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchWordForm from "./components/SearchWordForm";
import type { ErrorMsgResponse } from "./utils/types";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import SearchResult from "./components/SearchResult";
import Container from "./components/Container";
import { timeBlocker } from "./utils/lib";
import clsx from "clsx";
import { useFontContext } from "./components/context/font-context/FontContext";
import { useThemeContext } from "./components/context/theme-context/ThemeContext";

const apiUrl = import.meta.env.VITE_DICTIONARY_API;

function App() {
  const [wordData, setWordData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | ErrorMsgResponse>(null);
  const { fontType } = useFontContext();
  const { theme } = useThemeContext();

  const handleSearchWord = (word: string) => {
    async function fetchWordData() {
      try {
        setIsLoading(true);
        setError(null);
        setWordData([]);
        await timeBlocker(1000);
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
    <main
      data-theme={theme}
      className={clsx("flex min-h-screen flex-col dark:bg-black", fontType)}
    >
      <Container>
        <Header />
        <SearchWordForm handleSearchWord={handleSearchWord} />

        {isLoading && (
          <div className="flex flex-1 items-center justify-center">
            <Loading />
          </div>
        )}

        {error && <ErrorMessage title={error.title} message={error.message} />}
        {wordData.length > 0 && <SearchResult result={wordData} />}
      </Container>
    </main>
  );
}

export default App;
