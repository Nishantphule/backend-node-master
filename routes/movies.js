import express from "express";
import { getAllMovies,getMovieById,createMovie,deleteMovieById,updateMovie } from "../helper.js";
const router = express.Router();

// get all movies
router.get("/movies", async function (request, response) {
    const movies = await getAllMovies()
    response.send(movies);
});


// get movies by id
router.get("/movies/:id", async function (request, response) {
    const { id } = request.params
    const movie = await getMovieById(id)
    movie
        ? response.send(movie)
        : response.status(404).send({ message: "Movie not found" })
});


// create movie 
router.post("/movies", express.json(), async function (request, response) {
    const data = request.body;
    const result = await createMovie(data)
    response.send(result)
});


// delete movie by Id
router.delete("/movies/:id", async function (request, response) {
    const { id } = request.params
    const movie = await deleteMovieById(id);
    movie.deletedCount > 0
        ? response.send({ message: "Movie Deleted Successfully" })
        : response.status(404).send({ message: "Movie not found" })
});


// Update movie by id
router.put("/movies/:id", express.json(), async function (request, response) {
    const { id } = request.params
    const data = request.body;

    const movie = await updateMovie(id, data)

    movie.matchedCount > 0
        ? movie.modifiedCount > 0
            ? response.send({ message: "Movie Updated Successfully with id: " + id })
            : response.status(404).send({ message: "Already has the same content" })
        : response.status(404).send({ message: "Movie not found" })
});


export const movieRouter = router


