<template>
  <div class="wrapper">
    <header-view></header-view>
  </div>
  <div class="mt-12">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderView from '@/components/Header.vue';
</script>

<style>
body {
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(240, 240, 240, 1) 100%
    )
    no-repeat top;
  background-size: 100% 500px;
}
</style>
