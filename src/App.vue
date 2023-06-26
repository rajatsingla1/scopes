<template>
  <div class="wrapper">
    <header-view></header-view>
  </div>
  <div class="mt-12">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useCorporatesStore } from "@/stores/corporates";

import HeaderView from "@/components/Header.vue";

const store = useCorporatesStore();

onMounted(async () => {
  await store.fetchCorporates();
});
</script>

<style scoped></style>
