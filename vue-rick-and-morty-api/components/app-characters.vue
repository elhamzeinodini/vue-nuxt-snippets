<template>
  <button @click="getData" v-show="!isResolved">get Data</button>
  <section class="char" v-show="isResolved">
    <div v-for="char in characters" :key="char.id" class="char__content">
      <div class="char__img">
        <img :src="char.image" :alt="char.name" class="char__img__item" />
      </div>
      <div class="char__info">
        <h2 class="char__name">{{ char.name }}</h2>
        <div class="char__status">
          <span :class="['char__status__item', handleStatus(char.status)]">{{
            charStatus
          }}</span>
          <span class="char__status__text"
            >{{ char.status }} - {{ char.species }}</span
          >
        </div>
        <span>{{ char.gender }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import axios from "axios";

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface Results {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  image: string;
}

interface APIData {
  info: Info;
  results: Results[];
}

interface CharacterInfo {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  id: string;
}

const characters = ref<CharacterInfo[]>([]);
const isResolved = ref<boolean>(false);
const charStatus = ref<string>("");

async function getData() {
  const { data } = await axios.get<APIData>(
    "https://rickandmortyapi.com/api/character"
  );
  isResolved.value = true;
  data.results.map(({ name, status, species, type, gender, image, id }) => {
    characters.value.push({
      name: name,
      status: status,
      species: species,
      type: type,
      gender: gender,
      image: image,
      id: id,
    });
  });
}

const handleStatus = (status: string) => {
  switch (status) {
    case "Alive":
      return "char__status__item--alive";
    case "Dead":
      return "char__status__item--dead";
    case "unknown":
      return "char__status__item--unknown";
  }
};
</script>

<style lang="scss">
@import "/assets/sass/styles/app-characters-desktop.scss";
</style>
