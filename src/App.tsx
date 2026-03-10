import "./App.css";
import Header from "./components/Header";
import SearchImg from "./assets/images/icon-search.svg";

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
    </>
  );
}

export default App;
