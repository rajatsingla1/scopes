<template>
  <div class="ranking-bar">
    <span class="text-gray-700 text-base font-medium mb-4 inline-block mr-2"
      >Rank by
    </span>
    <span
      @click="() => corporateStore.updateOrderBy('scope_1')"
      :class="[
        'option border-blue-500',
        corporateStore.orderBy == 'scope_1' ? 'active bg-blue-500' : 'bg-white'
      ]"
      >Scope 1</span
    >
    <span
      @click="() => corporateStore.updateOrderBy('scope_2')"
      :class="[
        'option border-blue-500',
        corporateStore.orderBy == 'scope_2' ? 'active bg-blue-500' : 'bg-white'
      ]"
      >Scope 2</span
    >
    <span
      @click="() => corporateStore.updateOrderBy('scope_3')"
      :class="[
        'option border-blue-500',
        corporateStore.orderBy == 'scope_3' ? 'active bg-blue-500' : 'bg-white'
      ]"
      >Scope 3</span
    >
    <span
      @click="() => corporateStore.updateOrderBy('company', '')"
      :class="[
        'option border-blue-500',
        corporateStore.orderBy == 'company' ? 'active bg-blue-500' : 'bg-white'
      ]"
      >Company Name</span
    >
    <span
      @click="() => corporateStore.updateOrderBy('number_of_employees')"
      :class="[
        'option border-blue-500',
        corporateStore.orderBy == 'number_of_employees'
          ? 'active bg-blue-500'
          : 'bg-white'
      ]"
      >Employees</span
    >
    <span
      @click="() => corporateStore.updateOrderBy('annual_revenue')"
      :class="[
        'option border-blue-500',
        corporateStore.orderBy == 'annual_revenue' ? 'active bg-blue-500' : 'bg-white'
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
    height: 60px;
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
  color: white;
}
</style>
