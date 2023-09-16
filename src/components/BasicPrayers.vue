<script setup lang="ts">
const { showCreed } = defineProps<{ showCreed: boolean }>();
</script>

<template>
  <p>
    <span class="first-letter">O</span>UR Father, who art in heaven, Hallowed by
    thy Name. Thy kingdom come. Thy will be done, On earth as it is in heaven.
    Give us this day our daily bread. And forgive us our trespasses, As we
    forgive those who trespass against us. And lead us not into temptation, But
    deliver us from evil. Amen
  </p>
  <p>
    <span class="first-letter">H</span>AIL, Mary, full of grace, the Lord is
    with thee. Blessed art thou among women, and blessed is the fruit of thy
    womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and in the
    hour of our death. Amen.
  </p>

  <p v-if="showCreed">
    <span class="first-letter">I</span> BELIEVE in God the Father Almighty,
    Maker of heaven and earth: And in Jesus Christ his only Son our Lord: Who
    was conceived by the Holy Ghost, Born of the Virgin Mary: Suffered under
    Pontius Pilate, Was crucified, dead, and buried: He descended into hell; The
    third day he rose again from the dead: He ascended into heaven, And sitteth
    on the right hand of God the Father Almighty: From thence he shall come to
    judge the quick and the dead. I believe in the Holy Ghost: The holy Catholic
    Church; The Communion of Saints: The Forgiveness of sins: The Resurrection
    of the body: And the Life everlasting. Amen.
  </p>
</template>

<style scoped>
@import "@/theme/office-common.css";
</style>
