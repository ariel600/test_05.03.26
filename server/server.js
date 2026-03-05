import express from "express";
import cors from "cors"
import { readJson } from "./db/connect.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.json({ ok: true }))
app.get("/api/movies", async (req, res) => {
    try {
        const data = await readJson("./db/data.json")
        const result = data.map((item) => {
            return {
                id: item.imdbID,
                title: item.Title,
                year: item.Year,
                rating: item.imdbRating,
                runtime: item.Runtime,
                genres: item.Genre.split(", "),
                overview: item.Plot,
                posterUrl: item.Poster
            }
        })
        return res.json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.mesage })
    }
})

app.listen(3000, () => {
    console.log("server runing in http://localhost:3000");
});