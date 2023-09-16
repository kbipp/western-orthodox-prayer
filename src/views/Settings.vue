<script setup lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
  ToggleCustomEvent,
} from "@ionic/vue";
import { useSettingStore } from "@/stores/settings";

const settingStore = useSettingStore();

function showBasicPrayersChanged({ detail: { checked } }: ToggleCustomEvent) {
  settingStore.setShowBasicPrayers(checked);
}
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-toggle
            :checked="settingStore.showBasicPrayers"
            @ionChange="showBasicPrayersChanged"
            :enable-on-off-labels="true"
            >Show basic prayers</ion-toggle
          >
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<style scoped></style>
