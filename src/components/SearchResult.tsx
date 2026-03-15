const data = {
  word: "cat",
  phonetic: "/kat/",
  phonetics: [
    {
      text: "/kat/",
      audio: "https://api.dictionaryapi.dev/media/pronunciations/en/cat-uk.mp3",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=9014180",
      license: {
        name: "BY 3.0 US",
        url: "https://creativecommons.org/licenses/by/3.0/us",
      },
    },
    {
      text: "/kæt/",
      audio: "https://api.dictionaryapi.dev/media/pronunciations/en/cat-us.mp3",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=187316",
      license: {
        name: "BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
      },
    },
  ],
  meanings: [
    {
      partOfSpeech: "noun",
      definitions: [
        {
          definition: "An animal of the family Felidae:",
          synonyms: ["felid"],
          antonyms: [],
        },
        {
          definition: "A person:",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "A strong tackle used to hoist an anchor to the cathead of a ship.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "Short form of cat-o'-nine-tails.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            'A sturdy merchant sailing vessel (now only in "catboat").',
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            'The game of "trap and ball" (also called "cat and dog").',
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "The pointed piece of wood that is struck in the game of tipcat.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "A vagina, a vulva; the female external genitalia.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "A double tripod (for holding a plate, etc.) with six feet, of which three rest on the ground, in whatever position it is placed.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "A wheeled shelter, used in the Middle Ages as a siege weapon to allow assailants to approach enemy defences.",
          synonyms: ["Welsh cat", "tortoise"],
          antonyms: [],
        },
      ],
      synonyms: [
        "saber-tooth",
        "saber-toothed cat",
        "feline",
        "feline cat",
        "pantherine",
        "pantherine cat",
        "Caniformia",
        "carnivoran",
        "cat-like",
        "feliform",
        "feloid",
        "jaguar",
        "leopard",
        "lion",
        "panther",
        "tiger",
        "Welsh cat",
        "tortoise",
        "felid",
      ],
      antonyms: [],
    },
    {
      partOfSpeech: "verb",
      definitions: [
        {
          definition:
            "To hoist (the anchor) by its ring so that it hangs at the cathead.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "To flog with a cat-o'-nine-tails.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "To vomit.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "To go wandering at night.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "To gossip in a catty manner.",
          synonyms: [],
          antonyms: [],
        },
      ],
      synonyms: [],
      antonyms: [],
    },
  ],
  license: {
    name: "CC BY-SA 3.0",
    url: "https://creativecommons.org/licenses/by-sa/3.0",
  },
  sourceUrls: ["https://en.wiktionary.org/wiki/cat"],
};

export default function SearchResult({ result }) {
  return <div>SearchResult</div>;
}
