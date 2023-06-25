<template>
  <div class="homepage">
    <div class="m-4 mt-20 mx-20">
      <corporates-table></corporates-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useCorporatesStore } from "@/stores/corporates";

import CorporatesTable from "@/components/CorporatesTable.vue";

const store = useCorporatesStore();

const corporates = computed(() => store.corporates);

onMounted(async () => {});
</script>

<style></style>
