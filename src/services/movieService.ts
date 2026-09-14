import { get, ref, set } from 'firebase/database'
import { database } from '../firebase'
import type { Movie } from '../types/movie'

const moviesReference = database ? ref(database, 'movies') : undefined

export async function loadMovies(): Promise<Movie[]> {
  if (!moviesReference) return []

  const snapshot = await get(moviesReference)
  if (!snapshot.exists()) return []

  return Object.values(snapshot.val() as Record<string, Movie>)
}

export function saveMovies(movies: Movie[]): Promise<void> {
  if (!moviesReference) return Promise.resolve()

  return set(moviesReference, Object.fromEntries(movies.map((movie) => [movie.id, movie])))
}
