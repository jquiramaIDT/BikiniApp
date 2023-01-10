<template>
  <section class="advertising">
    <div class="advertising__title">
      <h1>Suplements</h1>
    </div>
    <div class="advertising__boton">
      <button @click="$router.push({ path: '/shop' })">see more</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/styles/advertising';
</style>