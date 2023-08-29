<script setup lang="ts">
import getHymn from "@/data/access/hymns";

const { id } = defineProps<{ id: string }>();
const hymn = getHymn(id);
</script>

<template>
  <div class="section">
    <h5 class="red">Hymn</h5>
    <div v-if="hymn">
      <h6 class="incipit">{{ hymn.name }}</h6>

      <div class="stanza" v-for="(stanza, si) in hymn.stanzas" :key="si">
        <div v-for="(line, li) in stanza" :key="li">
          <p v-if="si === 0 && li === 0">
            <span class="first-letter">{{ line[0] }}</span
            >{{ line.substring(1) }}
          </p>
          <p v-else>{{ line }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <h4>Hymn {{ id }} not found!</h4>
    </div>
  </div>
</template>

<style scoped>
@import "../theme/office-common.css";

.stanza {
  padding-bottom: 0.5em;
}
</style>
