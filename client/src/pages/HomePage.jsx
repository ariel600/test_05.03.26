import React from 'react'
import { getMovies } from '../api/moviesApi'
import Search from '../components/Search'
import Movies from '../components/Movies'

export default function HomePage() {
    const movies = getMovies().then()
    return (
        <div>
            <Search />
            <Movies />
        </div>
    )
}
