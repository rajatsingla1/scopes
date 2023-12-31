<template>
  <div class="relative flex mr-0" ref="moreOptionsEl">
    <div>
      <span class="pr-4 mb-1 text-gray-700 text-sm font-semibold">Show Scopes as</span>
      <button
        type="button"
        class="inline-flex justify-center gap-x-1.5 mt-4 rounded-full bg-white px-3 py-2 text-sm text-green-700 shadow-sm ring-1 ring-inset ring-brandDark hover:ring-green-600 w-72"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        @click="toggleOptions()"
      >
        {{ selectedLevel }}
        <svg
          class="-mr-1 h-5 w-5 text-green-700"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div
      v-if="shouldShowOptions"
      class="absolute top-12 right-0 z-20 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->

        <a
          v-for="option in options"
          :key="option.value"
          href="#"
          :class="[
            'text-gray-700 block px-4 py-2 text-sm hover:font-semibold',
            option.value == selectedOption ? 'font-semibold' : ''
          ]"
          role="menuitem"
          tabindex="-1"
          @click.prevent="updateRatio(option.value)"
          id="menu-item-0"
        >
          {{ option.label }}
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCorporatesStore } from '@/stores/corporates';
import { computed, ref } from 'vue';
import { useClickOutside } from '@/uses/useClickOutside';

const corporateStore = useCorporatesStore();

const options = [
  {
    value: 'absolute',
    label: 'Underlying Data'
  },
  {
    value: 'number_of_employees',
    label: 'Emissions to Employee Ratio'
  },
  {
    value: 'annual_revenue',
    label: 'Emissions to Revenue Ratio'
  }
];

const moreOptionsEl = ref();
const shouldShowOptions = ref();
const toggleOptions = () => (shouldShowOptions.value = !shouldShowOptions.value);
const hideOptions = () => (shouldShowOptions.value = false);

useClickOutside(moreOptionsEl, hideOptions);

const selectedOption = computed(() => corporateStore.scopeRatio);

const selectedLevel = computed(
  () => options.filter(option => option.value == selectedOption.value)[0].label
);

const updateRatio = (value: string) => {
  toggleOptions();
  corporateStore.updateScopeRatio(value);
};
</script>

<style scoped>
@media only screen and (max-width: 650px) {
  .ranking-bar {
    overflow: auto;
    height: 60px;
  }
}

.ranking-bar span.option {
  color: #666;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(99, 102, 241);
  border-radius: 22px;
  height: 18px;
  white-space: nowrap;
  padding: 6px 14px;
  white-space: normal;
  position: relative;
  background-color: #fff;
  font-weight: 400;
  white-space: nowrap;
  margin-left: 6px;
  cursor: pointer;
  border-width: 1px;
}

.ranking-bar span.active {
  background-color: rgb(99, 102, 241);
  color: white;
}
</style>
