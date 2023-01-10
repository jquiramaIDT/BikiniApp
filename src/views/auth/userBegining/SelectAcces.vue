<template>
  <section class="container">
    <div class="container__title">
      <span @click="$router.back()">back</span>
      <p @click="$router.push({ path: '/' })">Home</p>
      <h3>Busy Girl Workouts</h3>
      <p>6 week program</p>
    </div>
    <div class="container__text">
      <h4>SELECT ACCES</h4>
      <p>12 weeks - $ 279.900</p>
    </div>
    <div class="container__boton">
      <!-- show modal -->
      <button @click="isOpen = true">PURCHASE THIS PROGRAM</button>
      <P>BEGIN 7 DAYS TRIAL</P>
    </div>
    <ModalSelectAccesVue :open="isOpen" @close="isOpen = !isOpen">
    
      <div class="modal">
        <p class="modal__title">No Payment Required</p>
        <p class="modal__text">
          Please note, this trial does not require any payment details. This
          option is completely free for you to enjoy!
        </p>
      </div>
    </ModalSelectAccesVue>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ModalSelectAccesVue from "./_ModalSelectAcces.vue";

const isOpen = ref(false);

</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main";

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 59px 0;
  height: 100vh;
  &__title {
    & span {
      cursor: pointer;
    }
    & h3 {
      font: italic normal 900 33px/52px Ironstrike;
      margin-top: 42px;
      color: $primary-color-1;
      letter-spacing: -0.11px;
    }
    & p {
      font: normal 14px/29px Montserrat;
    }
  }
  &__text {
    text-align: center;
    & h4 {
      font: normal 300 18px/29px Montserrat;
      letter-spacing: -0.05px;
    }
    & p {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 350px;
      height: 49px;
      background: #1c1c1c 0% 0% no-repeat padding-box;
      font: normal bold 18px/29px Montserrat;
      letter-spacing: -0.05px;
      border-radius: 14px;
      border: 1px solid #363636;
    }
  }
  &__boton {
    & button {
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
    & p {
      cursor: pointer;
      margin-top: 25px;
      text-align: center;
    }
  }
}

.modal{
  line-height: 1.1em;
  &__title{
    font: bold 20px/28px Montserrat;
letter-spacing: -0.06px;
  }
  &__text{
    font:  300 14px/21px Montserrat;
letter-spacing: -0.04px;


  }
}


</style>