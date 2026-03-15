import playAudioImg from "../assets/images/icon-play.svg";
interface PhoneticsProps {
  phonetics: { word: string; phonetic: string; audio: string };
}

export default function Phonetics({ phonetics }: PhoneticsProps) {
  return (
    <section id="phonetics" className="flex items-center">
      <div className="mr-auto">
        <h1 className="text-light-black text-5xl font-bold">
          {phonetics.word}
        </h1>
        <span className="text-fantasia mt-1 inline-block">
          {phonetics.phonetic}
        </span>
      </div>
      <div className="">
        <audio className="" src={phonetics.audio}>
          Your browser does not support the audio element.
        </audio>
        <button>
          <img src={playAudioImg} className="h-18 w-18" alt="play audio" />
        </button>
      </div>
    </section>
  );
}
