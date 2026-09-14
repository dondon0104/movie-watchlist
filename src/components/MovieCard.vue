<template>
  <ion-card class="movie-card" button @click="$emit('select', movie)">
    <div class="poster-wrap">
      <img :src="movie.poster" :alt="movie.title" class="poster" />
      <ion-badge class="status-badge" :color="movie.status === 'Watched' ? 'success' : 'warning'">{{ movie.status }}</ion-badge>
      <ion-button class="favorite-button" fill="clear" @click.stop="$emit('favorite', movie)">
        <ion-icon slot="icon-only" :icon="movie.favorite ? heart : heartOutline" />
      </ion-button>
    </div>
    <ion-card-content>
      <ion-card-title>{{ movie.title }}</ion-card-title>
      <p class="meta">{{ movie.genre }} <span>•</span> {{ movie.releaseYear }}</p>
      <div class="rating-row"><span class="star">★</span> {{ movie.rating.toFixed(1) }} <span class="spacer" /> <span class="view-label">View details</span></div>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonBadge, IonButton, IonCard, IonCardContent, IonCardTitle, IonIcon } from '@ionic/vue'
import { heart, heartOutline } from 'ionicons/icons'
import type { Movie } from '../types/movie'
defineProps<{ movie: Movie }>()
defineEmits<{ select: [movie: Movie]; favorite: [movie: Movie] }>()
</script>

<style scoped>
.movie-card { margin: 0; overflow: hidden; background: var(--surface-card); border: 1px solid var(--surface-border); border-radius: 16px; }
.poster-wrap { position: relative; aspect-ratio: 2 / 3; background: #17171c; }
.poster { width: 100%; height: 100%; object-fit: cover; display: block; }
.status-badge { position: absolute; top: 10px; left: 10px; text-transform: uppercase; font-size: .62rem; letter-spacing: .06em; }
.favorite-button { position: absolute; top: 3px; right: 2px; --color: white; --background: rgba(0,0,0,.5); --border-radius: 50%; }
ion-card-content { padding: 12px; }
ion-card-title { font-size: 1rem; font-weight: 700; }
.meta { color: var(--ion-color-medium); font-size: .8rem; margin: 5px 0 12px; }
.meta span { color: var(--ion-color-primary); margin: 0 3px; }
.rating-row { display: flex; align-items: center; font-size: .82rem; color: var(--ion-color-light); }
.star { color: #f4ba45; margin-right: 4px; }.spacer { flex: 1; }.view-label { color: var(--ion-color-medium); font-size: .7rem; }
</style>
