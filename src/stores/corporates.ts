import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCorporatesStore = defineStore('corporates', () => {
  const corporates = ref([]);
  const locations = ref([]);
  const sectors = ref([]);
  const currentPage = ref(1);
  const perPage = ref(30);
  const total = ref(0);
  const hasMore = ref(true);
  const loading = ref(false);
  const orderBy = ref('scope_1');
  const filterByLocation = ref('');
  const filterBySector = ref('');
  const orderByOrder = ref('-');
  const scopeRatio = ref('number_of_employees');

  const fetchLocations = async () => {
    try {
      const response = await axios.get(
        `https://api.alliedoffsets.com/corporates/locations`
      );
      locations.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSectors = async () => {
    try {
      const response = await axios.get(
        `https://api.alliedoffsets.com/corporates/sectors`
      );
      sectors.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const ratioSlug = computed(() => {
    if (scopeRatio.value != 'absolute' && orderBy.value.includes('scope')) {
      return `/${scopeRatio.value}`;
    }
    return '';
  });

  const filterBySlug = computed(() => {
    let slug = '';
    if (filterByLocation.value) {
      slug += `&location=${filterByLocation.value}`;
    }

    if (filterBySector.value) {
      slug += `&sector=${filterBySector.value}`;
    }
    return slug;
  });

  const cleanUpCorporates = (corporates: any) => {
    const filtered = corporates.filter((corporate: any) => {
      return (
        (corporate.scope1 || corporate.scope2 || corporate.scope3) &&
        corporate.numberOfEmployees >= 1000
      );
    });
    return filtered;
  };

  const fetchCorporates = async () => {
    try {
      loading.value = true;
      hasMore.value = true;

      const response = await axios.get(
        `https://api.alliedoffsets.com/corporates-public?page=1&per_page=${perPage.value}&order_by=${orderBy.value}${ratioSlug.value}${orderByOrder.value}${filterBySlug.value}`
      );
      corporates.value = cleanUpCorporates(response.data.result);
      total.value = response.data.pagination.total;
      if (response.data.pagination.resultSize < perPage.value) {
        hasMore.value = false;
      }
      currentPage.value = 1;
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  const updateFilterByLocation = (value: any) => {
    filterByLocation.value = value;
    fetchCorporates();
  };

  const updateFilterBySector = (value: any) => {
    filterBySector.value = value;
    fetchCorporates();
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
      hasMore.value = true;

      const response = await axios.get(
        `https://api.alliedoffsets.com/corporates-public?page=${
          currentPage.value + 1
        }&per_page=${perPage.value}&order_by=${orderBy.value}${ratioSlug.value}${
          orderByOrder.value
        }${filterBySlug.value}`
      );
      corporates.value = corporates.value.concat(cleanUpCorporates(response.data.result));
      if (response.data.pagination.resultSize < perPage.value) {
        hasMore.value = false;
      }
      currentPage.value += 1;
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    total,
    hasMore,
    locations,
    sectors,
    corporates,
    fetchSectors,
    fetchLocations,
    fetchCorporates,
    appendCorporates,
    orderBy,
    scopeRatio,
    updateScopeRatio,
    updateOrderBy,
    updateFilterByLocation,
    updateFilterBySector
  };
});
