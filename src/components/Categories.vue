<script setup>
import { computed } from "@vue/runtime-core";
import categories from "../services/categories.js";

const dataCategories = [
  {
    categorie: "STRECH",
  },
  {
    categorie: "CROSSFIT",
  },
  {
    categorie: "PILATES",
  },
  {
    categorie: "HIT",
  },
  {
    categorie: "POWER",
  },
  {
    categorie: "DANCE",
  },
];
</script>

<template>
  <div class="title">
    <h1>Categories</h1>
    <p>The body achieves what mind believes</p>
  </div>
  <section class="categories">
    <div
      v-for="(dato, index) in dataCategories"
      :key="index"
      class="categories__card"
    >
      <div class="categories__card-glass">
        <p @click="$router.push({ path: '/programs' })">{{ dato.categorie }}</p>
      </div>
      <div class="categories__card-img">
        <img src="@/assets/img/categoriesimg.jpg" alt="" />
      </div>
    </div>
  </section>
  <div class="text">Believe in yourself!</div>
</template>




<style lang="scss" scoped>
@import "../assets/styles/categories";
</style>