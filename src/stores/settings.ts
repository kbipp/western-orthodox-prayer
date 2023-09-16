import { defineStore } from "pinia";
import { ref } from "vue";

const showBasicPrayersKey = "settings.showBasicPrayers";
const defaults = {
  [showBasicPrayersKey]: false,
};

function initializeStorage() {
  for (const k in defaults) {
    if (!localStorage.getItem(k)) {
      localStorage.setItem(k, String(defaults[k as keyof typeof defaults]));
    }
  }
}

export const useSettingStore = defineStore("setting", () => {
  initializeStorage();

  const showBasicPrayers = ref(
    Boolean(localStorage.getItem(showBasicPrayersKey)),
  );

  function setShowBasicPrayers(value: boolean) {
    localStorage.setItem(showBasicPrayersKey, String(value));
    showBasicPrayers.value = value;
  }

  return { showBasicPrayers, setShowBasicPrayers };
});
