export interface dictionaryAPIResponse {
  word: string;
  phonetic: string;
  // phonetics is an array of objects
  phonetics: {
    text: string;
    audio: string;
    sourceUrl: string;
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      synonyms?: string[];
      antonyms?: string[];
      example?: string;
      definition: string;
    }[];
    antonyms?: string[];
    synonyms?: string[];
  }[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[]
}
[];

export interface Phonetics {
  [key: string]: string;
}
[];

export interface Meanings {
  partOfSpeech: string;
  definitions: {
    synonyms?: string[];
    antonyms?: string[];
    example?: string;
    definition: string;
  }[];
  antonyms?: string[];
  synonyms?: string[];
}
[];

export interface Definitions {
  antonyms?: string[];
  synonyms?: string[];
  definition: string;
  example?: string;
}

export interface DefinitionsInfo {
  [key: string]: string[];
}
