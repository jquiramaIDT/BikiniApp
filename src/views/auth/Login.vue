<template>
  <section class="container">
    <div class="container__login">
      <p @click="$router.push({ path: '/' })">Back</p>
      
      
      <div class="container__login--title">
        <h2>Sing In</h2>
        <p>
          if you don't already have an account, we will create one fou you.
          <span @click="$router.push({ path: '/register' })"
            >Sign up here.</span
          >
        </p>
      </div>
      <div class="container__login--input">
        <input type="email" placeholder="Email" v-model="note" />
        <input type="password" placeholder="Enter Password" />
      </div>
      <!-- <div @click="login" class="container__login--boton"></div> -->
      <div class="container__login--boton">
        <button @click="$router.push({ path: '/chosememberships' })">Login</button>
        <div class="container__login--boton-text">
          <p>
            By signing up, you agree to our <span>Terms and Condition</span>
          </p>
          <p>and that you have read our <span>Privacy Polity.</span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import {login, logout} from "@/services/auth.js";



// import { ref } from "vue";
// let note = ref("");
</script>

<style lang="scss" scoped>
@import "../../assets/styles/login.scss";
</style>
