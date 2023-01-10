<template>
  <!-- <register class="none"/> -->
 <BeginingMobile class="none"/>
  <article class="home">
    <Navbar />
    <div class="home__container">
      <div class="home__container--slider">
        <div class=" home__container--slider-item ">
          <img src="../../assets/img/ImgSlider1.jpg" alt="" />
        </div>
        <div class=" home__container--slider-item">
          <img src="../../assets/img/ImgSlider2.jpg" alt="" />
        </div>
        <div class="c home__container--slider-item">
          <img src="../../assets/img/ImgSlider3.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="home__boton">
      <p>do you have an account?</p>
      <button>Get start now</button>
    </div>
  </article>

  <CardInfo />
  <Categories />

  <Advertising />
  <ClassSchedule />
  <FullCalendar/>
  <Memberships />
  <ContactUs />
  <Footer />
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import CardInfo from "@/components/CardInfo.vue";
import Categories from "@/components/Categories.vue";
import Advertising from "@/components/Advertising.vue";
import ClassSchedule from "@/components/ClassSchedule.vue";
import Memberships from "@/components/Memberships.vue";
import ContactUs from "@/components/ContactUs.vue";
import Footer from "@/components/Footer.vue";
import FullCalendar from "@/components/FullCalendar.vue";
import Register from '../auth/Register.vue'
import BeginingMobile from '@/components/BeginingMobile.vue';

</script>



<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.home { 
  @include BcImg();
  &__container {
    position: absolute;
    z-index: -1;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;
      background-color: #000;
      opacity: 0.1;
    }
    &--slider {
      display: flex;
      animation: slider 20s infinite alternate linear;
      width: 300%;
      &-item {
        img {
          max-width: 100%;
          width: 100vw;
        }
      }
    }
  }
  &__boton{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
    gap: 0.7rem;
    & p {
      font-size: 19px;
      font-family: montserrat, sans-serif;
      font-style: italic;
      font-weight: 500; 
      letter-spacing: -0.06px;
    }
    & button {
      @include primaryBtn();
      font-size: 21px;
      color: #fff;
      letter-spacing: -0.06px;
      background: $primary-color-1 0% 0% no-repeat padding-box;
    }
  }
}

.none {
  @media (min-width: 768px) {
    display: none;
  }
}

@keyframes slider {
    0% {
      margin-left: 0;
    }
    20% {
      margin-left: 0;
    }
    25% {
      margin-left: -100%;
    }
    45% {
      margin-left: -100%;
    }
    50% {
      margin-left: -200%;
    }
    70% {
      margin-left: -200%;
    }
    75% {
      margin-left: -200%;
    }
    100% {
      margin-left: -200%;
    }
  }
  
</style>

