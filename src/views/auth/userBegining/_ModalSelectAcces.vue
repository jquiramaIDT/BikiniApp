<template>
  <div class="vue__modal" v-show="open">
    <div class="vue__modal--inner">
      <div class="vue__modal--inner-content">
        <slot />
        <h4 class="vue__modal--inner-content-close" @click="$emit('close')">
          Okay
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  open: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main";
.vue__modal {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #000;
  opacity: 0.9;
  z-index: 1;
  top: 0;
  display: flex;
  align-items: center;
  &--inner {
    width: 327px;
    margin: 2rem auto;
    &-content {
      padding: 1rem 2rem;
      display: flex;
      flex-flow: column;
      gap: 1rem;
      text-align: center;
      height: 190px;
      position: relative;
      border: 1px solid #707070;
      border-radius: 17px;
      &-close {
        border-top: 1px solid;
        cursor: pointer;
        padding-top: 1rem;
      }
    }
  }
}
</style>