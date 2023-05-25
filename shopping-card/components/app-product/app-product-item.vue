<template>
    <section class="product">
      <h1 class="product__title">Carolina 4oz Cotton Canvas Tote</h1>
      <span class="product__subtitle">Product Number: 330-SM-7262-023</span>
      <div class="product__img">
        <img :src="imgVariant" alt="bag" class="product__img__item" />
      </div>
      <div class="product__variants">
        <img
          v-for="bag in bags"
          :key="bag.index"
          :src="`/images/${bag.src}`"
          alt="bag"
          @click="loadImg(bag.index)"
          :class="[
            { 'product__variants__item--selected': bag.isBagSelected },
            'product__variants__item',
          ]"
        />
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  interface Bags {
    src: string;
    variant: string;
    isBagSelected: boolean;
    index: number;
  }
  
  const imgVariant = ref<string>("/images/bag-3.png");
  
  const bags = reactive<Bags[]>([
    {
      src: "bag-1.png",
      variant: "/images/bag-1.png",
      isBagSelected: false,
      index: 1,
    },
    {
      src: "bag-2.png",
      variant: "/images/bag-2.png",
      isBagSelected: false,
      index: 2,
    },
    {
      src: "bag-1.png",
      variant: "/images/bag-1.png",
      isBagSelected: false,
      index: 3,
    },
    {
      src: "bag-5.png",
      variant: "/images/bag-5.png",
      isBagSelected: false,
      index: 4,
    },
  ]);
  const loadImg = (bagIndex: number) => {
    bags.forEach((bag: Bags) => {
      if (bag.index === bagIndex) {
        bag.isBagSelected = true;
        imgVariant.value = bag.variant;
      } else {
        bag.isBagSelected = false;
      }
    });
  };
  </script>
  
  <style lang="scss" scoped>
  @import "~/assets/scss/styles/app-product-item-desktop.scss";
  </style>
  