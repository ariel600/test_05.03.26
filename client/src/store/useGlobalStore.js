import { create } from "zustand"

export const useGlobalStore = create((set) => ({
    movies: [],
    isLoading: false,
    error: null,
    searchQuery: "",
    seatSelections: {},
    setMovies: movies => set({ movies }),
    setSearchQuery: searchQuery => set({ searchQuery }),
    setLoading: isLoading => set({ isLoading }),
    setError: error => set({ error }),
}))