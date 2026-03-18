import type { Meaning } from "../utils/types";

function Meaning({ partOfSpeech, definitions, synonyms, antonyms }: Meaning) {
  return (
    <section className="space-y-2">
      <h3 className="text-light-black mb-10 flex items-center text-xl font-bold italic">
        <span className="mr-10">{partOfSpeech}</span>
        <span className="bg-light-black/10 inline-block h-px w-40 flex-1"></span>
      </h3>
      <p className="text-solid-gray mb-5">Meaning</p>
      <ul className="marker:text-fantasia list-disc space-y-3 pl-10">
        {definitions.map((definition) => (
          <li className="text-light-black flex flex-col gap-2 pl-2">
            <span>{definition.definition}</span>
            {definition?.example && (
              <span className="text-solid-gray">"{definition.definition}"</span>
            )}
          </li>
        ))}
      </ul>
      {synonyms.length > 0 && (
        <div className="mt-14">
          <span className="text-solid-gray mr-4">Synonyms</span>
          {synonyms.map((synonym, index, array) => (
            <span key={index} className="text-fantasia font-semibold">
              {synonym}
              {index === array.length - 1 ? "." : ", "}
            </span>
          ))}
        </div>
      )}
      {antonyms.length > 0 && (
        <div>
          <span>Antonyms</span>
          {antonyms.map((antonym) => (
            <span>{antonym}, </span>
          ))}
        </div>
      )}
    </section>
  );
}

interface MeaningListProps {
  meanings: Meaning[];
}

export default function MeaningList({ meanings }: MeaningListProps) {
  return (
    <>
      {meanings.map((meaning, index) => (
        <Meaning
          key={index}
          partOfSpeech={meaning.partOfSpeech}
          definitions={meaning.definitions}
          synonyms={meaning.synonyms}
          antonyms={meaning.antonyms}
        />
      ))}
    </>
  );
}
