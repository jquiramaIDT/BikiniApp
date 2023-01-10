<template>
  <section class="container">
    <div class="container__home">
      <div class="container__home--logo">
        <img src="../../assets/img/LogowhitLetter.png" alt="" />
      </div>
      <div class="container__home--items">
        <div>
          <h3>Welcome to our female</h3>
          <h3>fitness community</h3>
        </div>
        <div>
          <p>We're so exited to be a part of your</p>
          <p>journey to envolve!</p>
        </div>
        <button @click="$router.push({ path: '/login' })">
          LET'S GET STARTED
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>


<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  &__home {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 347px;
    &--logo {
      width: 258px;
      height: 184px;
      box-shadow: 5px 5px 30px #000000d6;
      border: 1px solid #00000000;
      & img {
        width: 100%;
        height: 100%;
      }
    }
    &--items {
      display: flex;
      flex-flow: column nowrap;
      font-family: "Montserrat", sans-serif;
      gap: 1rem;
      & h3 {
        font-size: 26px;
        line-height: 1.1em;
        letter-spacing: -0.08px;
      }
      & p {
        font-size: 17px;
        line-height: 1.1em;
        letter-spacing: -0.05px;
        font-weight: 100;
      }
      & button {
        margin-top: 2rem;
        width: 350px;
        height: 64px;
        border-radius: 12px;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 18px;
        border: none;
        color: white;
        background-color: $primary-color-1;
        cursor: pointer;
        letter-spacing: -0.06px;
        opacity: 1;
      }
    }
  }

}
</style>