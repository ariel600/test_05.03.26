import React from 'react'
import { getMovies } from '../api/moviesApi'

export default function Movies() {
    const data = getMovies().then()
  return (
    <div>
    </div>
  )
}
