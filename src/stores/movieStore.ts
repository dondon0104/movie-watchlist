import { computed, ref } from 'vue'
import { loadMovies, saveMovies } from '../services/movieService'
import type { Movie, MovieDraft } from '../types/movie'

const movies = ref<Movie[]>(loadMovies())

export function useMovieStore() {
  const watchedMovies = computed(() => movies.value.filter((movie) => movie.status === 'Watched'))
  const watchlistMovies = computed(() => movies.value.filter((movie) => movie.status === 'Not Watched'))
  const favoriteMovies = computed(() => movies.value.filter((movie) => movie.favorite))

  function persist() { saveMovies(movies.value) }
  function addMovie(draft: MovieDraft) {
    movies.value.unshift({ ...draft, id: crypto.randomUUID(), createdAt: new Date().toISOString(), favorite: false })
    persist()
  }
  function updateMovie(id: string, changes: Partial<Movie>) {
    const movie = movies.value.find((item) => item.id === id)
    if (movie) Object.assign(movie, changes)
    persist()
  }
  function removeMovie(id: string) { movies.value = movies.value.filter((movie) => movie.id !== id); persist() }
  function toggleFavorite(movie: Movie) { updateMovie(movie.id, { favorite: !movie.favorite }) }
  function toggleWatched(movie: Movie) {
    const watched = movie.status !== 'Watched'
    updateMovie(movie.id, { status: watched ? 'Watched' : 'Not Watched', watchedAt: watched ? new Date().toISOString() : undefined })
  }
  return { movies, watchedMovies, watchlistMovies, favoriteMovies, addMovie, updateMovie, removeMovie, toggleFavorite, toggleWatched }
}
