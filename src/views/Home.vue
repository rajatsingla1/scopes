<template>
  <div class="homepage">
    <div class="m-2 md:m-4">
      <div class="mx-auto flex max-w-6xl justify-between px-3 md:mt-28">
        <rank-by-bar></rank-by-bar>
        <ratio></ratio>
      </div>

      <corporates-table></corporates-table>
    </div>
    <div class="flex justify-center mt-4 md:mt-16 mb-64">
      <button
        :disabled="corporateStore.loading"
        @click="corporateStore.appendCorporates"
        type="button"
        :class="[
          ' focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 shadow-md',
          { 'bg-green-100 hover:bg-green-100': corporateStore.loading }
        ]"
      >
        {{ corporateStore.loading ? 'Loading..' : 'Show More' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useCorporatesStore } from '@/stores/corporates';

import CorporatesTable from '@/components/CorporatesTable.vue';
import RankByBar from '@/components/RankByBar.vue';
import Ratio from '@/components/Ratio.vue';

const corporateStore = useCorporatesStore();

onMounted(async () => {});
</script>

<style></style>
