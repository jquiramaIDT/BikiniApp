
<template>
  <Navbar />
  <article>
    <Memberships />
    <Footer />
  </article>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Memberships from "@/components/Memberships.vue";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.container {
  &__login {
    gap: 1rem;
    margin: 2rem 0;
    input {
      padding: 0 12px;
      width: 350px;
      height: 25px;
      border-radius: 10px;
      border: none;
    }
  }
  &__btn {
    gap: 1rem;
  }
}
</style>