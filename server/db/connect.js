import fs from "fs/promises";

export async function readJson(path) {
    try {
        const data = await fs.readFile(path, "utf-8");
        return JSON.parse(data)
    } catch (error) {
        console.error(error.message)
        throw error.message
    }
}