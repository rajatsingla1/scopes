<template>
  <div class="about">
    {{ corporates[0] }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useCorporatesStore } from "@/stores/corporates";

const store = useCorporatesStore();

const corporates = computed(() => store.corporates);

onMounted(async () => {});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
