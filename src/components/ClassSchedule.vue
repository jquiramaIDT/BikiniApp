<script setup>

import { ref } from "vue";
import "v-calendar/dist/style.css";




const date = ref(new Date());

const classAvailable = [
  {
    class: "Pilates",
  },
  {
    class: "Hit",
  },
  {
    class: "Spining",
  },
];
</script>

<template>
  <section class="container">
    <div class="container__title">
      <h1>Let´s Start</h1>
    </div>
    <div class="container__items">
      <!-- <v-calendar 
      color="pink"
      is-range
      :value="null"/> -->

      <div class="container__items--calendar">
        <v-date-Picker
          v-model="date"
          mode="dateTime"
          color="pink"
          locale="en"
          :columns="$screens({ default: 1, laptop: 2 })"
        />
      </div>
      <div class="container__items--classAvailable">
        <div class="container__items--classAvailable-items">
          <div
            v-for="(dato, index) in classAvailable"
            :key="index"
            class="container__items--classAvailable-items-class"
          >
            <p>{{ dato.class }}</p>
            <input type="checkbox" name="" id="" />
          </div>
        </div>
        <div class="container__items--classAvailable-items-boton">
          <button>Reserve Now</button>
        </div>
      </div>
      <div class="container__items--options">
        <div class="container__items--options-chose">
          <p>On site</p>
          <p>virtual</p>
        </div>
        <div class="container__items--options-hours">
          <li>6:00 AM</li>
          <li>7:00 AM</li>
          <li>8:00 AM</li>
          <li>9:00 AM</li>
          <li>10:00 AM</li>
          <li>11:00 AM</li>
          <li>1:00 PM</li>
          <li>2:00 PM</li>
          <li>3:00 PM</li>
          <li>4:00 PM</li>
          <li>5:00 PM</li>
          <li>6:00 PM</li>
        </div>
      </div>
    </div>
  </section>

 
  <!-- <p>
    Date: {{date.toJSON()}}
  </p> -->
</template>


<style lang="scss" scoped>
@import "../assets/styles/classSchedule";
</style>