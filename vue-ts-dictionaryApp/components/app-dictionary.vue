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
      <div v-show="definitionsInfo.nouns">
        <span>nouns:</span>
        <p v-for="(defs, index) in definitionsInfo.nouns" :key="index">
          {{ defs }}
        </p>
      </div>
      <div v-show="definitionsInfo.verbs">
        <span>verbs:</span>
        <p v-for="(defs, index) in definitionsInfo.verbs" :key="index">
          {{ defs }}
        </p>
      </div>
      <div v-show="definitionsInfo.adjectives">
        <span>adjectives:</span>
        <p v-for="(defs, index) in definitionsInfo.adjectives" :key="index">
          {{ defs }}
        </p>
      </div>
      <div v-show="definitionsInfo.interjections">
        <span>interjections:</span>
        <p v-for="(defs, index) in definitionsInfo.interjections" :key="index">
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

const definitionsInfo = reactive<DefinitionsInfo>({
  nouns: [],
  verbs: [],
  adjectives: [],
  interjections: [],
});

async function getTheWord() {
  const { data } = await axios.get<dictionaryAPIResponse[]>(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput.value}`
  );

  // console.table(data);

  isResolved.value = true;

  data.map(
    ({
      phonetic,
      word,
      phonetics,
      meanings,
    }) => {
      wordText.value = word;
      wordPhonetic.value = phonetic;

      phonetics.map(({ audio }) => {
        wordAudio.value = audio;
      });

      meanings.map(
        ({
          definitions,
          partOfSpeech,
        }) => {
          wordPart.value.push(partOfSpeech);

          definitions.map(({ definition }) => {
            switch (partOfSpeech) {
              case "noun":
                definitionsInfo.nouns.push(definition);
                break;
              case "verb":
                definitionsInfo.verbs.push(definition);
                break;
              case "adjective":
                definitionsInfo.adjectives.push(definition);
                break;
              case "interjection":
                definitionsInfo.interjections.push(definition);
                break;
            }
          });
        }
      );
    }
  );
}
</script>
