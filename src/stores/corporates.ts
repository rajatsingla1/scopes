import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCorporatesStore = defineStore("corporates", () => {
  const corporates = ref([]);
  const page = ref(1);
  const perPage = ref(30);
  const loading = ref(false);

  const fetchCorporates = async () => {
    try {
      loading.value = true;
      const response = await axios.get(
        `https://api.alliedoffsets.com/corporates-public?page=1&per_page=${perPage.value}`
      );
      corporates.value = response.data.result;
      page.value = 1;
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };


  const appendCorporates = async () => {
    try {
      loading.value = true;

      const response = await axios.get(
        `https://api.alliedoffsets.com/corporates-public?page=${page.value}&per_page=${perPage.value}`
      );
      corporates.value = corporates.value.concat(response.data.result);
      page.value += 1;
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  return { loading, corporates, fetchCorporates, appendCorporates };
});
