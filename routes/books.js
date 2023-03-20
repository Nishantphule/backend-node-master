import { getAllBooks, getBookById, deleteBookById, createBook,updateBook } from "../helper.js";
import express from "express";
import { auth } from "../middleware/auth.js";


const router = express.Router();

//get all books
router.get("/",auth, async (req, res) => {
    const { language, rating } = req.query;
    // console.log(req.query, language);
    if (req.query.rating) {
        req.query.rating = +req.query.rating;
    }
    const books = await getAllBooks(req);
    res.send(books);
});

//get books by ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const book = await getBookById(id);
    book ? res.send(book) : res.status(404).send({ message: "No Book found" });
});

//delete book ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const book = await deleteBookById(id);
    res.send(book);
});

//add books
router.post("/",auth, express.json(), async (req, res) => {
    const newBooks = req.body;
    console.log(newBooks);
    const result = await createBook(newBooks);
    res.send(result);
});

//update books
router.put("/:id", express.json(), async function (request, response) {
    const { id } = request.params
    const data = request.body;

    const book = await updateBook(id, data)

    book.matchedCount > 0
        ? book.modifiedCount > 0
            ? response.send({ message: "Book Updated Successfully with id: " + id })
            : response.status(404).send({ message: "Already has the same content" })
        : response.status(404).send({ message: "Book not found" })
});

export const bookRouter = router


