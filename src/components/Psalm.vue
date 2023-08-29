<script setup lang="ts">
import getPsalm from "@/data/access/psalms";

const { id } = defineProps<{ id: string }>();
const psalm = getPsalm(id);
</script>

<template>
  <div class="section">
    <div v-if="psalm">
      <h5 class="red">{{ psalm.name }}</h5>
      <h6 class="incipit">{{ psalm.incipit }}</h6>

      <div v-for="(line, verse) in psalm.lines" :key="verse">
        <p v-if="verse === 0">
          <span class="first-letter">{{ line[0] }}</span
          >{{ line.substring(1) }}
        </p>
        <p v-else>
          <sup>{{ verse + 1 }}</sup> {{ line }}
        </p>
      </div>
    </div>
    <div v-else>
      <h2>Psalm {{ id }} not found!</h2>
    </div>
  </div>
</template>

<style scoped>
@import "../theme/office-common.css";
</style>
