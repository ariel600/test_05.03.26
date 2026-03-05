export async function getMovies() {
    try {
        const data = await fetch("http://localhost:3000/api/movies", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).json()
        return data
    } catch (error) {
        console.error(error.message)
    }
}