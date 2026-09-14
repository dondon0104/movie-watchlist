export type MovieStatus = 'Watched' | 'Not Watched'

export interface Movie {
  id: string
  title: string
  genre: string
  releaseYear: number
  rating: number
  status: MovieStatus
  poster: string
  description: string
  director: string
  cast: string[]
  runtime: number
  trailerUrl: string
  createdAt: string
  favorite: boolean
  personalRating?: number
  review?: string
  watchedAt?: string
}

export type MovieDraft = Omit<Movie, 'id' | 'createdAt' | 'favorite'>
