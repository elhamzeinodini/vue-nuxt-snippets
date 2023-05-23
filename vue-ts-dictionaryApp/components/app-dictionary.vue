<template>
  <section>
    <input type="text" v-model="userInput" />
    <button @click.prevent="getTheWord">submit</button>
    <div v-show="isResolved">
      <p>{{ wordText }}</p>
      <p>{{ wordPhonetic }}</p>
      <audio controls v-show="wordAudio">
        <source :src="wordAudio" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
      <div>
        <p>part of speech :</p>
        <p v-for="(parts, index) in wordPart" :key="index">{{ parts }}</p>
      </div>
      <div v-show="definitonsInfo.nouns">
        <span>nouns:</span>
        <p v-for="(defs, index) in definitonsInfo.nouns" :key="index">
          {{ defs }}
        </p>
      </div>
      <div v-show="definitonsInfo.verbs">
        <span>verbs:</span>
        <p v-for="(defs, index) in definitonsInfo.verbs" :key="index">
          {{ defs }}
        </p>
      </div>
      <div v-show="definitonsInfo.adjective">
        <span>adjectives:</span>
        <p v-for="(defs, index) in definitonsInfo.adjective" :key="index">
          {{ defs }}
        </p>
      </div>
      <div v-show="definitonsInfo.interjections">
        <span>interjections:</span>
        <p v-for="(defs, index) in definitonsInfo.interjections" :key="index">
          {{ defs }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import axios from "axios";
import {
  dictionaryAPIResponse,
  Meanings,
  Phonetics,
  Definitions,
  DefinitionsInfo,
} from "./Interfaces/index";

// properties
const userInput = ref<string>("");
const isResolved = ref<boolean>(false);
// not using reactive because reassigning it will destroy reactivity
const wordText = ref<string>("");
const wordPhonetic = ref<string>("");
const wordAudio = ref<string>("");
const wordPart = ref<string[]>([]);

const definitonsInfo: DefinitionsInfo = reactive({
  nouns: [],
  verbs: [],
  adjectives: [],
  interjections: [],
});

async function getTheWord() {
  const { data } = await axios.get<dictionaryAPIResponse>(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput.value}`
  );

  console.table(data);

  isResolved.value = true;

  data.map(
    ({
      phonetic,
      word,
      phonetics,
      meanings,
    }: {
      phonetic: string;
      word: string;
      phonetics: Phonetics;
      meanings: Meanings;
    }) => {
      wordText.value = word;
      wordPhonetic.value = phonetic;

      phonetics.map(({ audio }: { audio: string }) => {
        wordAudio.value = audio;
      });

      meanings.map(
        ({
          definitions,
          partOfSpeech,
        }: {
          definitions: Definitions;
          partOfSpeech: string;
        }) => {
          wordPart.value.push(partOfSpeech);

          definitions.map(({ definition }: { definition: string }) => {
            switch (partOfSpeech) {
              case "noun":
                definitonsInfo.nouns.push(definition);
                break;
              case "verb":
                definitonsInfo.verbs.push(definition);
                break;
              case "adjective":
                definitonsInfo.adjectives.push(definition);
                break;
              case "interjection":
                definitonsInfo.interjections.push(definition);
                break;
            }
          });
        }
      );
    }
  );
}
</script>
