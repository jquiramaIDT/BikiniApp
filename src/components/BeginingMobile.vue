<template>
  <section class="container">
    <div class="container__logo">
      <img src="../assets/img/LogowhitLetter.png" alt="" />
    </div>
    <div class="container__text">
      <div>
        <h3>Welcome to our female</h3>
        <h3>fitness community</h3>
      </div>
      <div>
        <p>We're so exited to be a part of your</p>
        <p>journey to envolve!</p>
      </div>
      <div class="container__boton">
        <button @click="$router.push({ path: '/login' })">
          LET'S GET STARTED
        </button>
      </div>
    </div>
  </section>
</template>
  
  <script setup>
</script>
  
  
  <style lang="scss" scoped>
@import "../assets/styles/main.scss";

.container {
  border: 1px solid tomato;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 59px 0;
  height: 100vh;
  &__logo {
    margin-top: 2rem;
    width: 258px;
    height: 184px;
    box-shadow: 5px 5px 30px #000000d6;
    border: 1px solid #00000000;
    & img {
      width: 100%;
      height: 100%;
    }
  }
  &__text {
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
  }
  &__boton {
    & button {
      margin-top: 2rem;
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
}
</style>