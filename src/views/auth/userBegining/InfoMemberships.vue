<template>
  <section class="container">
    <div class="container__back">
      <p @click="$router.back()">back</p>
    </div>
    <h3 class="container__title">Busy Girl Workouts</h3>

    <div class="container__text">
      <p>6 Week Program</p>
      <p>
        Reset, realign and reclaim your goals in 2023. Congratulations on
        securing your place in our 6-week Reset Challenge.
      </p>
      <p>
        Your app acces opens on 9th of January before we officially kick things
        off on the 16th of January.
      </p>
      <p>Here's what you can look forward to:</p>
      <p>
        40-60 minute home and gym workout options Customized meal guides
        tailored to your preferences and goals, the chance to win $3500 in cash
        prizes, 8 weeks of app acces to all features of the BF app daily
        goal-setting and habit tracking
      </p>
      <p>SO MUCH MORE</p>
      <p>! Let's turn your resolutions into a reality this New Year</p>
    </div>

    <button class="container__boton" @click="$router.push({ path: '/selectacces' })" >CONTINUE</button>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main";

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 59px 0;
  &__back {
    cursor: pointer;
    width: 350px;
  }

  &__title {
    // border: 1px solid tomato;
    font: italic normal 900 33px/52px Ironstrike;
    margin:  42px 0  19px 0;
    color: $primary-color-1;

    letter-spacing: -0.11px;
  }
  &__text {
    // border: 1px solid tomato;
    width: 327px;
    display: flex;
    flex-flow: column;
    font: normal normal 200 14px/22px Montserrat;
    line-height: 1.3em;
    gap: 2rem;
    letter-spacing: -0.04px;
    opacity: 1;
  }
  &__boton {
    margin-top: 111px;
    width: 350px;
    height: 64px;
    border-radius: 12px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: $text-title;
    border: none;
    color: white;
    background-color: $primary-color-1;
    cursor: pointer;
    letter-spacing: -0.06px;
    opacity: 1;
  }
}
</style>