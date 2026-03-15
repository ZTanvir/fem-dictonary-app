interface Definition {
  definition: string;
  example: string;
}
interface MeaningProps {
  partsOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

function Meaning({
  partsOfSpeech,
  definitions,
  synonyms,
  antonyms,
}: MeaningProps) {
  return (
    <section>
      <h3>{partsOfSpeech}</h3>
      <p>Meaning</p>
      <ul>
        {definitions.map((definition) => (
          <li>
            <span>{definition.definition}</span>
            {definition?.example && <span>{definition.definition}</span>}
          </li>
        ))}
      </ul>
      {synonyms.length > 0 && (
        <div>
          <span>Synonyms</span>
          {synonyms.map((synonym) => (
            <span>{synonym}, </span>
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
  meanings: MeaningProps[];
}

export default function MeaningList({ meanings }: MeaningListProps) {
  return (
    <>
      {meanings.map((meaning) => (
        <Meaning
          partsOfSpeech={meaning.partsOfSpeech}
          definitions={meaning.definitions}
          synonyms={meaning.synonyms}
          antonyms={meaning.antonyms}
        />
      ))}
    </>
  );
}
