<template>
  <ion-page><ion-header><ion-toolbar><ion-title>Watchlist App</ion-title><ion-button slot="end" fill="clear" @click="router.push('/tabs/profile')"><ion-icon slot="icon-only" :icon="personCircleOutline" /></ion-button></ion-toolbar></ion-header>
    <ion-content><main class="page-shell">
      <section v-if="featured" class="hero"><div class="hero-copy"><p class="eyebrow">Featured tonight</p><h1>{{ featured.title }}</h1><p>{{ featured.genre }} · {{ featured.releaseYear }} · ★ {{ featured.rating }}</p><ion-button @click="selectMovie(featured)">View details</ion-button></div><img :src="featured.poster" :alt="featured.title" /></section><section v-else class="empty-hero"><h1>Your watchlist is empty</h1><p>Add a movie from Discover to start building your collection.</p><ion-button @click="router.push('/tabs/discover')">Discover movies</ion-button></section>
      <section class="section"><div class="section-heading"><h2>Trending now</h2><ion-button fill="clear" size="small" @click="router.push('/tabs/discover')">See all</ion-button></div><div class="horizontal-list"><MovieCard v-for="movie in movies.slice(0, 4)" :key="movie.id" :movie="movie" @select="selectMovie" @favorite="toggleFavorite" /></div></section>
      <section class="section"><div class="section-heading"><h2>My watchlist</h2><ion-button fill="clear" size="small" @click="router.push('/tabs/watchlist')">See all</ion-button></div><div v-if="watchlistMovies.length" class="horizontal-list"><MovieCard v-for="movie in watchlistMovies.slice(0, 4)" :key="movie.id" :movie="movie" @select="selectMovie" @favorite="toggleFavorite" /></div><div v-else class="empty-inline">Your watchlist is ready for its first movie.</div></section>
      <section class="section"><div class="section-heading"><h2>Recently watched</h2></div><div class="horizontal-list"><MovieCard v-for="movie in watchedMovies.slice(0, 4)" :key="movie.id" :movie="movie" @select="selectMovie" @favorite="toggleFavorite" /></div></section>
    </main></ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { personCircleOutline } from 'ionicons/icons'
import { useRouter } from 'vue-router'
import MovieCard from '../../components/MovieCard.vue'
import { useMovieStore } from '../../stores/movieStore'
import type { Movie } from '../../types/movie'
const router = useRouter(); const store = useMovieStore(); const { movies, watchedMovies, watchlistMovies, toggleFavorite } = store
const featured = movies.value[1] || movies.value[0]
function selectMovie(movie: Movie) { router.push(`/movie/${movie.id}`) }
</script>
<style scoped>
.page-shell { max-width: 1100px; margin: auto; padding: 20px 16px 32px; }.hero, .empty-hero { min-height: 280px; border-radius: 22px; overflow: hidden; position: relative; display: flex; align-items: end; padding: 24px; background: linear-gradient(135deg, #25121a, #101014 70%); }.empty-hero { display: grid; align-content: center; justify-items: start; background: var(--surface-card); border: 1px dashed var(--surface-border); }.empty-hero h1 { margin: 0 0 8px; }.empty-hero p { color: var(--ion-color-medium); }.hero img { display: none; }.hero-copy { max-width: 70%; }.eyebrow { color: #ed4966; text-transform: uppercase; font-size: .7rem; font-weight: 700; letter-spacing: .1em; }.hero h1 { font-size: clamp(2rem, 9vw, 4rem); margin: 8px 0; line-height: 1; }.hero p { color: #d1d1d7; }.section { margin-top: 28px; }.section-heading { display: flex; align-items: center; justify-content: space-between; }.section h2 { font-size: 1.25rem; margin: 0 0 12px; }.horizontal-list { display: grid; grid-auto-flow: column; grid-auto-columns: 155px; gap: 12px; overflow-x: auto; padding-bottom: 8px; }.horizontal-list::-webkit-scrollbar { display: none; }.empty-inline { color: var(--ion-color-medium); background: var(--surface-card); border: 1px dashed var(--surface-border); padding: 24px; border-radius: 14px; }
</style>
