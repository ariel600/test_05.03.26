import { useEffect } from 'react'
import { useGlobalStore } from '../store/useGlobalStore'
import { getMovies } from '../api/moviesApi'
import { Link } from 'react-router'

export default function Movies() {

    const { movies, setMovies, setLoading, setError } = useGlobalStore()

    useEffect(() => {
        const fatchMovies = async () => {
            setLoading(true)
            setError(null)
            try {
                const data = await getMovies()
                setMovies(data)
            } catch (error) {
                setError(error.message)
            }
            setLoading(false)
        }
        fatchMovies()
    }, [])

    return (
        <div className='mapCard'>
            {movies?.map((movie) => {
                return (
                    <div key={movie.id} className='card'>
                        <div className='top'>
                            <img src={movie.posterUrl} alt="" />
                            <h2>{movie.title}</h2>
                        </div>
                        <div className='info'>
                            <p>Year</p>
                            <p>{movie.year}</p>
                            <p>Runtime</p>
                            <p>{movie.tuntime}</p>
                            <p>Genre</p>
                            <p>{movie.genres}</p>
                            <p>Language</p>
                            <p>{movie.language}</p>
                        </div>
                        <Link to={`movies/${movie.id}`} >Select Seats</Link>
                    </div>
                )
            })}
        </div>
    )
}