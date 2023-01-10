<template>
  <!-- <h1>{{ $route.name }}</h1> -->
  <!-- <button @click="$router.push({ path: '/' })">Home</button>
  <button @click="$router.push({ path: '/shop' })">Shop</button>
  <button @click="$router.back()">atras</button> -->
  <header class="header">
    <div class="header__view">
      <div>
        <img
          @click="open = !open"
          src="../assets/img/menu-hamburguesa.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="../assets/img/usuario.png"
          alt=""
          @click="$router.push({ path: '/login' })"
        />
      </div>
    </div>

    <nav class="header__navbar" :class="open ? 'active-menu' : ''">
      <div class="header__navbar-logo">
        <img
          @click="$router.push({ path: '/' })"
          src="../assets/img/logo.png"
          alt=""
        />
      </div>
      <div class="header__navbar-container">
        <div
          v-for="(route, index) in routes"
          :key="index"
          class="header__navbar-container-items"
          @click="$router.push({ path: route.route })"
        >
          <p
            :class="$route.path == route.route ? 'active' : ''"
            @click="!open"
            class="header__navbar-items-text"
          >
            {{ route.name }}
          </p>
        </div>
      </div>
      <div
        class="header__navbar-item"
        @click="$router.push({ path: '/login' })"
      >
        <p :class="$route.path == '/login' ? 'active' : ''">Login</p>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);

const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Shop",
    route: "/Shop",
  },
  {
    name: "Memberships",
    route: "/memberships",
  },

  {
    name: "Contact us",
    route: "/contact",
  },
];
</script>

<style lang="scss" scoped>
@import "../assets/styles/navBar";
</style>