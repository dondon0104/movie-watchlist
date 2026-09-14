<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet />
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home"><ion-icon :icon="homeOutline" /><ion-label>Home</ion-label></ion-tab-button>
        <ion-tab-button tab="discover" href="/tabs/discover"><ion-icon :icon="compassOutline" /><ion-label>Discover</ion-label></ion-tab-button>
        <ion-tab-button tab="watchlist" href="/tabs/watchlist"><ion-icon :icon="bookmarkOutline" /><ion-label>Watchlist</ion-label></ion-tab-button>
        <ion-tab-button tab="favorites" href="/tabs/favorites"><ion-icon :icon="heartOutline" /><ion-label>Favorites</ion-label></ion-tab-button>
        <ion-tab-button tab="profile" href="/tabs/profile"><ion-icon :icon="personOutline" /><ion-label>Profile</ion-label></ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
<script setup lang="ts">
import { IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue'
import { bookmarkOutline, compassOutline, heartOutline, homeOutline, personOutline } from 'ionicons/icons'
</script>
