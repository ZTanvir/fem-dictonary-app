import { useRef } from "react";
import PlayAudioImg from "../assets/images/icon-play.svg?react";

import type { phonetic } from "../utils/types";
interface PhoneticsProps {
  word: string;
  phonetic: string;
  phonetics: phonetic[];
}

// only add audio from phonetics that match the phonetic

export default function Phonetics({
  word,
  phonetic,
  phonetics,
}: PhoneticsProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const searchAudio = phonetics.find((item) => item.text === phonetic);
  const audio = searchAudio ? searchAudio.audio : searchAudio;

  return (
    <section id="phonetics" className="flex items-center">
      <div className="mr-auto">
        <h1 className="text-light-black text-5xl font-bold dark:text-white">
          {word}
        </h1>
        <span className="text-fantasia mt-1 inline-block">{phonetic}</span>
      </div>
      {searchAudio && Boolean(audio) && (
        <div className="">
          <audio ref={audioRef} src={audio}>
            Your browser does not support the audio element.
          </audio>
          <button
            onClick={() => {
              audioRef.current?.play();
            }}
          >
            <PlayAudioImg className="text-fantasia hover:text-white-echo hover:bg-fantasia h-15 w-15 overflow-hidden rounded-full bg-purple-100/10 transition-colors duration-200 hover:cursor-pointer" />
          </button>
        </div>
      )}
    </section>
  );
}
