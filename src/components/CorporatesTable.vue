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
                  class="sticky top-[0px] z-10 bg-white bg-opacity-75 py-1.5 pl-4 pr-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8 border-b border-gray-300"
                >
                  Rank
                </th>
                <th
                  scope="col"
                  class="sticky top-[0px] z-10 bg-white bg-opacity-75 py-1.5 pl-4 pr-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8 border-b border-gray-300"
                >
                  Entity
                </th>
                <th
                  scope="col"
                  class="sticky top-[0px] z-10 bg-white bg-opacity-75 px-3 py-1.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter border-b border-gray-300"
                >
                  <div class="flex items-center flex-col">
                    <span class="block">Scope 1</span>
                    <span class="text-center block font-normal text-sm"> {{getEmissiontext(scopeRatio)}} </span>
                  </div>
                </th>
                <th
                  scope="col"
                  class="sticky top-[0px] z-10 bg-white bg-opacity-75 px-3 py-1.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter border-b border-gray-300"
                >
                  <div class="flex items-center flex-col">
                    <span class="block">Scope 2</span>
                    <span class="text-center block font-normal text-sm"> {{getEmissiontext(scopeRatio)}} </span>
                  </div>
                </th>
                <th
                  scope="col"
                  class="sticky top-[0px] z-10 bg-white bg-opacity-75 px-3 py-1.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter border-b border-gray-300"
                >
                  <div class="flex items-center flex-col">
                    <span class="block">Scope 3</span>
                    <span class="text-center block font-normal text-sm"> {{getEmissiontext(scopeRatio)}} </span>
                  </div>
                </th>
                <th
                  v-if="scopeRatio !== 'number_of_employees'"
                  scope="col"
                  class="sticky top-[0px] z-10 bg-white bg-opacity-75 px-3 py-1.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter border-b border-gray-300"
                >
                  Employees
                </th>
                <th
                  v-if="scopeRatio !== 'annual_revenue'"
                  scope="col"
                  class="sticky top-[0px] z-10 bg-white bg-opacity-75 w-36 px-3 py-1.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter border-b border-gray-300"
                >
                  <div class="flex flex-col">
                    <span class="block">Annual Revenue</span>
                  </div>
                </th>
                <th
                  scope="col"
                  class="sticky top-[0px] z-10 bg-white bg-opacity-75 px-0 py-0 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter w-32 border-b border-gray-300"
                >
                  Allied Offsets Grade
                </th>
                <th
                  scope="col"
                  class="sticky top-[0px] z-10 bg-white bg-opacity-75 px-1 py-1.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter border-b border-gray-300"
                >
                  Source
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
                  class="relative whitespace-wrap border-b border-gray-200 py-2 pr-4 pl-3 text-right text-lg text-gray-500 font-medium sm:pr-8 lg:pr-8"
                >
                  {{ index + 1 }}
                </td>
                <td
                  class="whitespace-wrap border-b border-gray-200 py-1 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                >
                  <h1 class="text-base lg: text-gray-800 mb-0 font-normal">
                    {{ corporate.company }}
                  </h1>
                  <div class="flex">
                    <div
                      class="text-sm text-gray-500 font-normal flex mr-2"
                      v-if="corporate.sector"
                    >
                      <span
                        class="material-symbols-rounded text-sm text-gray-800 font-normal mr-1"
                      >
                        factory
                      </span>
                      <span
                        :title="corporate.sector"
                        class="text-sm font-normal text-ellipsis whitespace-nowrap overflow-hidden max-w-[100px]"
                      >
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
                      <span
                        :title="corporate.location"
                        class="text-sm text-gray-500 font-normal text-ellipsis whitespace-nowrap overflow-hidden max-w-[80px]"
                      >
                        {{ corporate.location }}
                      </span>
                    </div>
                  </div>
                </td>
                
                <td
                  class="relative whitespace-wrap border-b border-gray-200 py-1 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8"
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
                  class="relative whitespace-wrap border-b border-gray-200 py-1 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8"
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
                  class="relative whitespace-wrap border-b border-gray-200 py-1 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8"
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
                  v-if="scopeRatio !== 'number_of_employees'"
                  class="relative whitespace-wrap border-b border-gray-200 py-1 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                >
                  <span class="text-sm text-gray-500 font-normal">{{
                    numberToLocale(corporate.numberOfEmployees)
                  }}</span>
                </td>
                <td
                  v-if="scopeRatio !== 'annual_revenue'"
                  class="relative whitespace-wrap border-b border-gray-200 py-1 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8"
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
                  class="relative whitespace-wrap border-b border-gray-200 py-1 pr-0 pl-3 text-center text-sm font-medium"
                >
                  <div class="flex flex-col items-center">
                    <h1
                      class="text-xl text-gray-700"
                      :style="`color:${getGradeColor(corporate.aoRating)}`"
                    >
                      {{ corporate.aoRating }}
                    </h1>
                    <span
                      class="text-gray-500 block pt-0 text-xs font-normal"
                      v-if="corporate.aoSectorRating"
                    >
                      Sector: {{ corporate.aoSectorRating }}</span
                    >
                  </div>
                </td>
                <td
                  class="relative whitespace-wrap border-b border-gray-200 py-1 pr-0 pl-1 text-center text-sm text-gray-500"
                >
                  <div class="flex items-center justify-center">
                    <a
                      :href="corporate.source"
                      target="_blank"
                      class="text-sm flex items-center"
                      download
                    >
                      <span
                        class="material-symbols-rounded text-sm md:text-xl brand-color mr-0"
                      >
                        download
                      </span>
                    </a>
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
import { Grades } from '@/utils/enum';

const corporateStore = useCorporatesStore();

const corporates: any = computed(() => corporateStore.corporates);

const scopeRatio = computed(() => corporateStore.scopeRatio);

const emissionTextOptions = [
  {
    value: 'absolute',
    label: '(tCO2)'
  },
  {
    value: 'number_of_employees',
    label: 'to employee ratio'
  },
  {
    value: 'annual_revenue',
    label: 'to revenue ratio'
  }
];

const getEmissiontext = (value: string) => {
  return emissionTextOptions.filter(option => option.value === value)[0].label;
};

const numberToLocale = (num: number | null) => {
  if (num && num > 10) {
    num = Math.trunc(num);
  }
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

const getGradeColor = (grade: string) => {
  if (grade) grade = grade.trim();
  else return '';
  return Grades[grade as keyof typeof Grades];
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
