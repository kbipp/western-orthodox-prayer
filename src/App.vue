<script setup lang="ts">
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonRouterOutlet,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
} from "@ionic/vue";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import dayjs from "dayjs";

const route = useRoute();
const router = useRouter();
const pages = [
  { title: "Lauds", name: "lauds" },
  { title: "Prime (Morning Prayer)", name: "prime" },
  { title: "Terce", name: "terce" },
  { title: "Sext", name: "sext" },
  { title: "None", name: "none" },
  { title: "Vespers", name: "vespers" },
  { title: "Compline (Night Prayer)", name: "compline" },
];
const selectedIndex = ref(pages.findIndex((p) => p.name === route.name));
const date = ref(dayjs(route.query.d as string));
const displayDate = computed(() => date.value.format("dddd MMMM D, YYYY"));
const isoDate = computed(() => date.value.format("YYYY-MM-DD"));

function changeDate(e: any) {
  router.push({
    name: route.name as string,
    query: { d: e.detail.value.split("T")[0] },
  });
}

watch(
  () => route.query.d,
  (newDate) => (date.value = dayjs(newDate as string)),
);
</script>

<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="hours-list">
            <ion-list-header>
              <ion-datetime-button datetime="datetime">
                <ion-label slot="date-target">{{ displayDate }}</ion-label>
              </ion-datetime-button>
              <ion-modal :keep-contents-mounted="true">
                <ion-datetime
                  id="datetime"
                  presentation="date"
                  :show-default-title="true"
                  :show-default-buttons="true"
                  :show-clear-button="true"
                  @ionChange="changeDate"
                ></ion-datetime>
              </ion-modal>
              <!--            <ion-note>Octave Day of the Assumption</ion-note>-->
            </ion-list-header>
            <ion-menu-toggle
              :auto-hide="false"
              v-for="(page, i) in pages"
              :key="i"
            >
              <ion-item
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="{
                  name: page.name,
                  query: { d: isoDate },
                }"
                :detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === i }"
              >
                <ion-label>{{ page.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#hours-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

ion-split-pane {
  --side-width: 150px;
}
</style>
