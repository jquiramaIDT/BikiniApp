
<template>
  <section class="memberships">
    <div class="memberships__title">
      <h1>Memberships</h1>
    </div>
    <div
      class="memberships__card"
      v-for="(dato, index) in dataMemberships"
      :key="index"
    >
      <h2>{{ dato.title }}</h2>
      <h3>$ {{ dato.price }}</h3>
      <h3>{{ dato.title2 }}</h3>
      <small>{{ dato.text1 }}</small>
      <p>{{ dato.text2 }}</p>
      <p>{{ dato.text3 }}</p>
      <p>{{ dato.title3 }}</p>
      <p>{{ dato.title4 }}</p>
      <h6>{{ dato.text4 }}</h6>
      <button class="memberships__card-boton">start now</button>
    </div>
  </section>
</template>


<script setup>
const dataMemberships = [
  {
    title: "free",
    price: 0,
    title2: "Acces to premium content:",
    text1: "Nutrition program",
    text2: "Exercise program",
    text3: "Personalized videos",
    title3: "Online consulting",
    title4: "enjoy our variety of disciplines",
    text4: "Cancel anityme at no cost",
  },
  {
    title: "Monthly",
    price: 20,
    title2: "Acces to premium content:",
    text1: "Nutrition program",
    text2: "Exercise program",
    text3: "Personalized videos",
    title3: "Online consulting",
    title4: "enjoy our variety of disciplines",
    text4: "Cancel anityme at no cost",
  },
  {
    title: "Annual",
    price: 20,
    title2: "Acces to premium content:",
    text1: "Nutrition program",
    text2: "Exercise program",
    text3: "Personalized videos",
    title3: "Online consulting",
    title4: "enjoy our variety of disciplines",
    text4: "Cancel anityme at no cost",
  },
];
</script>

<style lang="scss" scoped>
@import "../assets/styles/memberships";
</style>

