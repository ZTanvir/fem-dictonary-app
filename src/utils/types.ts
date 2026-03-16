export interface ErrorMsgResponse {
  message: string;
  resolution: string;
  title: string;
}

export interface Definition {
  definition: string;
  example: string;
}

export interface phonetic {
  text: string;
  audio: string;
}

export interface Meaning {
  partsOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export type DictionaryWord = {
  word: string;
  phonetic: string;
  meanings: Meaning[];
  phonetics: phonetic[];
  sourceUrls: string[];
};
