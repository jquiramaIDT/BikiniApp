<template>
  <span @click="$router.back()">back</span>
  <section class="memberships">
    
    <div class="memberships__title">
      
      <h1>New Programs</h1>
    </div>
    <div class="memberships__container">
      <div
      @click="$router.push({ path: '/infomemberships' })"
        class="memberships__container--card"
        v-for="(dato, index) in dataMemberships"
        :key="index"
      >
        
          <h3 class="memberships__container--card-title">{{ dato.title }}</h3>
          <li>{{ dato.title2 }}</li>
          <li>{{ dato.text1 }}</li>
          <li>{{ dato.text2 }}</li>
          <li>{{ dato.text3 }}</li>
          <li>{{ dato.title3 }}</li>
          <li>{{ dato.title4 }}</li>
        
      </div>
    </div>
  </section>
</template>

  <script setup>
const dataMemberships = [
  {
    title: "BUSSY GIRL WORKUTS",
    title2: "6 week Program",
    text1: "Customized Meal Guides",
    text2: "Daily Home + Gym Workut",
    text3: "Minimal Equipment Workout Options",
    title3: "Excercise On your Own Termns",
    title4: "Change Body Composition",
  },
  {
    title: "FIT PROGRAM",
    title2: "6 week Program",
    text1: "Customized Meal Guides",
    text2: "Daily Home + Gym Workut",
    text3: "Minimal Equipment Workout Options",
    title3: "Excercise On your Own Termns",
    title4: "Change Body Composition",
  },
  {
    title: "STRONG PROGRAM",
    title2: "6 week Program",
    text1: "Customized Meal Guides",
    text2: "Daily Home + Gym Workut",
    text3: "Minimal Equipment Workout Options",
    title3: "Excercise On your Own Termns",
    title4: "Change Body Composition",
  },
];
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/choseMemberships";
</style>
