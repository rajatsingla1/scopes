import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCorporatesStore = defineStore('corporates', () => {
  const corporates = ref([]);
  const currentPage = ref(1);
  const perPage = ref(30);
  const loading = ref(false);
  const orderBy = ref('scope_1');
  const orderByOrder = ref('-');
  const scopeRatio = ref('number_of_employees');

  const ratioSlug = computed(() => {
    if (scopeRatio.value != 'absolute' && orderBy.value.includes('scope')) {
      return `/${scopeRatio.value}`;
    }
    return '';
  });

  const fetchCorporates = async () => {
    try {
      loading.value = true;

      const response = await axios.get(
        `https://api.alliedoffsets.com/corporates-public?page=1&per_page=${perPage.value}&order_by=${orderBy.value}${ratioSlug.value}${orderByOrder.value}`
      );
      corporates.value = response.data.result;
      currentPage.value = 1;
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  const updateOrderBy = async (orderByVal: string, orderByOrderVal = '-') => {
    orderBy.value = orderByVal;
    orderByOrder.value = orderByOrderVal;
    fetchCorporates();
  };

  const updateScopeRatio = async (newRatio: string) => {
    scopeRatio.value = newRatio;
    fetchCorporates();
  };

  const appendCorporates = async () => {
    try {
      loading.value = true;

      const response = await axios.get(
        `https://api.alliedoffsets.com/corporates-public?page=${
          currentPage.value + 1
        }&per_page=${perPage.value}&order_by=${orderBy.value}${ratioSlug.value}${orderByOrder.value}`
      );
      corporates.value = corporates.value.concat(response.data.result);
      currentPage.value += 1;
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    corporates,
    fetchCorporates,
    appendCorporates,
    orderBy,
    scopeRatio,
    updateScopeRatio,
    updateOrderBy
  };
});
