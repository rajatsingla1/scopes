<template>
  <div class="ranking-bar">
    <span class="text-gray-700 text-base font-medium mb-4 inline-block mr-2"
      >Rank by
    </span>
    <span
      @click="() => corporateStore.updateOrderBy('scope_1')"
      :class="[
        'option border-gray-500 bg-white',
        { active: corporateStore.orderBy == 'scope_1' }
      ]"
      >Scope 1</span
    >
    <span
      @click="() => corporateStore.updateOrderBy('scope_2')"
      :class="[
        'option border-gray-400 bg-white',
        { active: corporateStore.orderBy == 'scope_2' }
      ]"
      >Scope 2</span
    >
    <span
      @click="() => corporateStore.updateOrderBy('scope_3')"
      :class="[
        'option border-gray-400 bg-white',
        { active: corporateStore.orderBy == 'scope_3' }
      ]"
      >Scope 3</span
    >
    <span
      @click="() => corporateStore.updateOrderBy('company', '')"
      :class="[
        'option border-gray-400 bg-white',
        { active: corporateStore.orderBy == 'company' }
      ]"
      >Company Name</span
    >
    <span
      @click="() => corporateStore.updateOrderBy('number_of_employees')"
      :class="[
        'option border-gray-400 bg-white',
        {
          active: corporateStore.orderBy == 'number_of_employees'
        }
      ]"
      >Employees</span
    >
    <span
      @click="() => corporateStore.updateOrderBy('annual_revenue')"
      :class="[
        'option border-gray-400 bg-white',
        { active: corporateStore.orderBy == 'annual_revenue' }
      ]"
      >Revenue</span
    >
  </div>
</template>
<script setup lang="ts">
import { useCorporatesStore } from '@/stores/corporates';

const corporateStore = useCorporatesStore();
</script>

<style scoped>
@media only screen and (max-width: 650px) {
  .ranking-bar {
    overflow: auto;
    height: 90px;
    margin-bottom: 20px;
  }
}

.ranking-bar span.option {
  color: #666;
  border-width: 2px;
  border-style: solid;
  border-radius: 22px;
  height: 18px;
  font-size: 14px;
  white-space: nowrap;
  padding: 6px 14px;
  white-space: normal;
  position: relative;
  font-weight: 400;
  white-space: nowrap;
  margin-left: 6px;
  cursor: pointer;
  border-width: 1px;
}

.ranking-bar span.active {
  color: green;
  border-color: #34861a;
}
</style>
