<template>
  <div class="homepage">
    <div class="m-2 md:m-4">
      <h1 class="text-center text-2xl md:mt-12">
        World’s largest aggregated data source for carbon offsetting
      </h1>

      <div class="flex space-x-4 max-w-6xl px-3 mx-auto md:mt-12">
        <div>
          <Multiselect
            @change="corporateStore.updateFilterByLocation"
            :options="corporateStore.locations"
            :searchable="true"
            autocomplete="off"
            :close-on-select="true"
            mode="single"
            :classes="{
              container:
                '!text-sm !w-72 !border-gray-400 !rounded-full placeholder-small multiselect !bg-inherit',
              dropdown: 'multiselect-dropdown !w-64 !max-h-80',
              search: 'multiselect-search !bg-inherit',
              placeholder: 'multiselect-placeholder !pr-1'
            }"
            placeholder="Ranking by countries"
          />
        </div>
        <div>
          <Multiselect
            @change="corporateStore.updateFilterBySector"
            :options="corporateStore.sectors"
            :searchable="true"
            autocomplete="off"
            :close-on-select="true"
            mode="single"
            :classes="{
              container:
                '!text-sm !w-72 !border-gray-400 !rounded-full placeholder-small multiselect !bg-inherit',
              search: 'multiselect-search !bg-inherit',
              dropdown: 'multiselect-dropdown !w-72 !max-h-80',
              placeholder: 'multiselect-placeholder !pr-1'
            }"
            placeholder="Ranking by sectors"
          />
        </div>
      </div>

      <div class="mx-auto flex max-w-6xl justify-between px-3 mt-4">
        <rank-by-bar></rank-by-bar>
      </div>
      <div class="mx-auto flex max-w-6xl justify-between px-3">
        <ratio></ratio>
        <button
          class="px-4 py-2 font-semibold text-sm bg-green-500 text-white rounded-full shadow-sm"
          @click="() => downloadAsCsv(corporateStore.corporates)"
        >
          Download
        </button>
      </div>

      <corporates-table></corporates-table>
    </div>
    <div class="flex justify-center mt-4 md:mt-16 mb-64">
      <button
        :disabled="corporateStore.loading"
        @click="corporateStore.appendCorporates"
        v-if="corporateStore.hasMore"
        type="button"
        :class="[
          ' focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 shadow-md',
          { 'bg-green-100 hover:bg-green-100': corporateStore.loading }
        ]"
      >
        {{
          corporateStore.loading
            ? 'Loading..'
            : `Show More (${corporateStore.total - corporateStore.corporates.length})`
        }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCorporatesStore } from '@/stores/corporates';

import CorporatesTable from '@/components/CorporatesTable.vue';
import RankByBar from '@/components/RankByBar.vue';
import Ratio from '@/components/Ratio.vue';
import Multiselect from '@vueform/multiselect';
import { downloadAsCsv } from '@/utils';

const corporateStore = useCorporatesStore();

onMounted(async () => {
  await corporateStore.fetchCorporates();
  corporateStore.fetchLocations();
  corporateStore.fetchSectors();
});
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
