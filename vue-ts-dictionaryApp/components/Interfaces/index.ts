interface stringies {
  [index: string] : string | undefined
}


export interface Meanings {
  partOfSpeech: string;
  definitions: stringies[];
  antonyms?: string[];
  synonyms?: string[];
}

interface Phonetics {
  audio : string;
  text : string;
}

export interface dictionaryAPIResponse {
  word: string;
  phonetic: string;
  // phonetics is an array of objects
  phonetics: Phonetics[];
  meanings: Meanings[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[]
}


export interface DefinitionsInfo {
  [key:string] : string[] | undefined
}
