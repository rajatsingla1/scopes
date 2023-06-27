import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCorporatesStore = defineStore("corporates", () => {
  const corporates = ref([]);

  const fetchCorporates = async () => {
    try {
      const response = await axios.get(
        "https://api.alliedoffsets.com/corporates-public?page=1&per_page=20"
      );
      corporates.value = response.data.result;
    } catch (error) {
      console.error(error);
    }
  };
  return { corporates, fetchCorporates };
});
