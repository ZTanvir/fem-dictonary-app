import "./App.css";
import Header from "./components/Header";
import playAudioImg from "./assets/images/icon-play.svg";
import SearchWordForm from "./components/SearchWordForm";

function App() {
  const handleSearchWord = (word: string) => {};
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
