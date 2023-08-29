<script setup lang="ts">
import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
} from "@ionic/vue";
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Empty</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <h1>Coming soon!</h1>
    </ion-content>
  </ion-page>
</template>
