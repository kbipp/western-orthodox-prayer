<script setup lang="ts">
import getMarianAntiphon from "@/data/access/marianAntiphons";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import dayjs from "dayjs";

const route = useRoute();
const date = ref(dayjs(route.query.d as string));
const marianAntiphon = computed(() => getMarianAntiphon(date.value));

watch(
  () => route.query.d,
  (newDate) => (date.value = dayjs(newDate as string)),
);
</script>

<template>
  <div class="section">
    <h5 class="rubric">Antiphon of the Blessed Virgin Mary</h5>
    <div>
      <h6 class="incipit">{{ marianAntiphon.incipit }}</h6>
      <p>
        <span class="first-letter">{{ marianAntiphon.antiphon[0] }}</span
        >{{ marianAntiphon.antiphon.substring(1) }}
      </p>
      <p><span class="red">℣.</span> {{ marianAntiphon.verse }}</p>
      <p><span class="red">℟.</span> {{ marianAntiphon.response }}</p>
      <p><span class="red">℣.</span> Let us pray.</p>
      <p class="rubric">Collect</p>
      <p>
        <span class="first-letter">{{ marianAntiphon.collect[0] }}</span
        >{{ marianAntiphon.collect.substring(1) }}
      </p>
      <p><span class="red">℟.</span> Amen.</p>
    </div>
  </div>
</template>

<style scoped>
@import "../theme/office-common.css";
</style>
