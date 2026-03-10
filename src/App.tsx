import "./App.css";
import Header from "./components/Header";
import SearchImg from "./assets/images/icon-search.svg";
import playAudioImg from "./assets/images/icon-play.svg";

function App() {
  return (
    <>
      <Header />
      <form className="relative">
        <input
          type="text"
          name="search"
          id="search"
          className="bg-wild-sand text-light-black focus:ring-fantasia active:ring-fantasia caret-fantasia hover:ring-fantasia w-full rounded-2xl p-5 font-bold ring-0 transition duration-200 outline-none hover:ring-1 focus:ring-1 active:ring-1"
          placeholder="Search for any word.."
        />
        <button
          type="submit"
          className="absolute top-1/2 right-3 -translate-1/2"
        >
          <img src={SearchImg} alt="search icon" />
        </button>
      </form>
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
      </section>
    </>
  );
}

export default App;
