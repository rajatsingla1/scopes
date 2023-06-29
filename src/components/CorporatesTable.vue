<template>
  <div
    class="mx-auto max-w-6xl px-4 mt-6 sm:px-6 lg:px-8 rounded-lg ring-1 ring-slate-900/10 custom-shadow"
  >
    <div class="mt-0 flow-root">
      <div class="-mx-4 my-0 sm:-mx-6 lg:-mx-8 overflow-x-scroll lg:overflow-visible">
        <div class="inline-block min-w-full py-2 align-middle pb-0">
          <table class="min-w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="sticky top-[0px] z-10 border-b border-gray-300 bg-white bg-opacity-75 py-1.5 pl-4 pr-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                >
                  Rank
                </th>
                <th
                  scope="col"
                  class="sticky top-[0px] z-10 border-b border-gray-300 bg-white bg-opacity-75 py-1.5 pl-4 pr-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                >
                  Entity
                </th>
                <th
                  scope="col"
                  class="sticky top-[0px] z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-1.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  <div class="flex items-center flex-col">
                    <span class="block">Scope 1</span>
                    <span class="text-center block font-normal text-sm"> (tCO2) </span>
                  </div>
                </th>
                <th
                  scope="col"
                  class="sticky top-[0px] z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-1.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  <div class="flex items-center flex-col">
                    <span class="block">Scope 2</span>
                    <span class="text-center block font-normal text-sm"> (tCO2) </span>
                  </div>
                </th>
                <th
                  scope="col"
                  class="sticky top-[0px] z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-1.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  <div class="flex items-center flex-col">
                    <span class="block">Scope 3</span>
                    <span class="text-center block font-normal text-sm"> (tCO2) </span>
                  </div>
                </th>
                <th
                  scope="col"
                  class="sticky top-[0px] z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-1.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  Employees
                </th>
                <th
                  scope="col"
                  class="sticky top-[0px] z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-1.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  <div class="flex flex-col">
                    <span class="block">Annual Revenue</span>
                  </div>
                </th>
                <th
                  scope="col"
                  class="sticky top-[0px] z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-1.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter w-32"
                >
                  Allied Offsets Grade
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(corporate, index) in corporates"
                :key="corporate.company"
                v-if="corporates.length"
              >
                <td
                  class="relative whitespace-wrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-lg text-gray-500 font-medium sm:pr-8 lg:pr-8"
                >
                  {{ index + 1 }}
                </td>
                <td
                  class="whitespace-wrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                >
                  <h1 class="text-base lg: text-gray-800 mb-1 font-normal">
                    {{ corporate.company }}
                  </h1>

                  <div
                    class="text-sm text-gray-500 font-normal flex"
                    v-if="corporate.sector"
                  >
                    <span
                      class="material-symbols-rounded text-sm text-gray-800 font-normal mr-1"
                    >
                      factory
                    </span>
                    <span class="text-sm font-normal">
                      {{ corporate.sector }}
                    </span>
                  </div>

                  <div
                    class="text-sm text-gray-500 font-normal flex"
                    v-if="corporate.location"
                  >
                    <span
                      class="material-symbols-rounded text-sm text-gray-800 font-normal mr-1"
                    >
                      location_on
                    </span>
                    <span class="text-sm text-gray-500 font-normal">
                      {{ corporate.location }}
                    </span>
                  </div>
                </td>
                <td
                  class="relative whitespace-wrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                >
                  {{
                    getScope(
                      corporate.scope1,
                      corporate.numberOfEmployees,
                      corporate.annualRevenue
                    )
                  }}
                </td>
                <td
                  class="relative whitespace-wrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                >
                  {{
                    getScope(
                      corporate.scope2,
                      corporate.numberOfEmployees,
                      corporate.annualRevenue
                    )
                  }}
                </td>
                <td
                  class="relative whitespace-wrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                >
                  {{
                    getScope(
                      corporate.scope3,
                      corporate.numberOfEmployees,
                      corporate.annualRevenue
                    )
                  }}
                </td>
                <td
                  class="relative whitespace-wrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                >
                  <span class="text-sm text-gray-500 font-normal">{{
                    numberToLocale(corporate.numberOfEmployees)
                  }}</span>
                </td>
                <td
                  class="relative whitespace-wrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                >
                  <span
                    v-if="corporate.annualRevenue"
                    class="text-sm text-gray-500 font-normal"
                  >
                    ${{ numberToLocale(Number(corporate.annualRevenue) / 1000000) }}
                    M
                  </span>
                </td>
                <td
                  class="relative whitespace-wrap border-b border-gray-200 py-4 pr-4 pl-3 text-center text-sm font-medium sm:pr-8 lg:pr-8"
                >
                  <div class="flex flex-col">
                    <h1 class="text-xl text-gray-700">
                      {{ corporate.aoRating }}
                    </h1>
                    <span
                      class="text-gray-500 block pt-2"
                      v-if="corporate.aoSectorRating"
                    >
                      (Sector: {{ corporate.aoSectorRating }})</span
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useCorporatesStore } from '@/stores/corporates';

const corporateStore = useCorporatesStore();

const corporates: any = computed(() => corporateStore.corporates);

const scopeRatio = computed(() => corporateStore.scopeRatio);

const numberToLocale = (num: Number | null) => {
  if (num) return num.toLocaleString();
  return '';
};

const getScope = (value: number, employees: number, revenue: number) => {
  if (!value) return '';
  if (scopeRatio.value == 'number_of_employees' && employees)
    return numberToLocale(value / employees);
  if (scopeRatio.value == 'annual_revenue' && revenue)
    return numberToLocale(value / revenue);
  return numberToLocale(value);
};

onMounted(async () => {});
</script>

<style scoped>
.custom-shadow {
  background: white;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}
</style>
