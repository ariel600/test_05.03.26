export async function getMovies() {
    try {
        const data = await fetch("http://localhost:3000/api/movies")
        return data.json()
    } catch (error) {
        console.error(error.message)
    }
}