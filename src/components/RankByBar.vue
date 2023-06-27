<template>
  <div class="ranking-bar mx-auto max-w-6xl px-3 md:mt-28">
    <span class="text-gray-700 text-lg font-medium">Rank by </span>
    <span @click="() => corporateStore.updateOrderBy('scope_1')" :class="[
      'option',
      { 'active': corporateStore.orderBy == 'scope_1' }
    ]">Scope 1</span>
    <span @click="() => corporateStore.updateOrderBy('scope_2')" :class="[
      'option',
      { 'active': corporateStore.orderBy == 'scope_2' }
    ]">Scope 2</span>
    <span @click="() => corporateStore.updateOrderBy('scope_3')" :class="[
      'option',
      { 'active': corporateStore.orderBy == 'scope_3' }
    ]">Scope 3</span>
    <span @click="() => corporateStore.updateOrderBy('company', '')" :class="[
      'option',
      { 'active': corporateStore.orderBy == 'company' }
    ]">Company Name</span>
    <span @click="() => corporateStore.updateOrderBy('number_of_employees')" :class="[
      'option',
      { 'active': corporateStore.orderBy == 'number_of_employees' }
    ]">Employees</span>
    <span @click="() => corporateStore.updateOrderBy('annual_revenue')" :class="[
      'option',
      { 'active': corporateStore.orderBy == 'annual_revenue' }
    ]">Revenue</span>
  </div>
</template>
<script setup lang="ts">
import { useCorporatesStore } from "@/stores/corporates";

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
  border-color: #dadada;
  border-radius: 22px;
  height: 18px;
  white-space: nowrap;
  padding: 6px 10px;
  white-space: normal;
  position: relative;
  background-color: #fff;
  font-weight: 400;
  white-space: nowrap;
  margin-left: 2px;
  cursor: pointer;
}

.ranking-bar span.active {
  background-color: #fff;
  color: #222;
  border-color: #666
}
</style>