<template>
  <section class="cardInfo">
    <div class="cardInfo__container">
      <div
        class="cardInfo__container--card"
        v-for="(dato, index) in data"
        :key="index"
      >
        <div class="cardInfo__container--card-img">
          <img src="@/assets/img/svg/cardimg.svg" alt="" />
        </div>
        <div class="cardInfo__container--card-info">
          <p class="cardInfo__container--card-info-title">{{ dato.title }}</p>
          <p class="cardInfo__container--card-info-text">{{ dato.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>



<script setup>
const data = [
  {
    title: "nutrition",
    text: "Gaining muscle requiresthe right combination of nutrition and nutrition and training,and here's how to do it.how to do it",
  },
  {
    title: "gym",
    text: "The digestive system hashas a great influence on youryour overall health. Learnhow your microbiota and your intestinal function.",
  },
  {
    title: "live",
    text: "having a regular sleep cyclehelps to improve the central nervous system, lowering stress and anxiety stress and nxiety levels",
  },
  {
    title: "cardio",
    text: "Many ideas about how to losehow to lose fat are wrong.Learn now the keys to achieve it with less effort",
  },
  {
    title: "cardio",
    text: "Many ideas about how to losehow to lose fat are wrong.Learn now the keys to achieve it with less effort",
  },
  {
    title: "cardio",
    text: "Many ideas about how to losehow to lose fat are wrong.Learn now the keys to achieve it with less effort",
  },
];
</script>

<style lang="scss" scoped>
@import "../assets/styles/cardInfo";

</style>