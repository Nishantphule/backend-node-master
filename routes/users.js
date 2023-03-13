import express from "express";
import { createUser, genPass, getAllUsers } from "../index.js";

const router = express.Router();


//get all users
router.get("/", async (req, res) => {
    const { language, rating } = req.query;
    console.log(req.query, language);
    if (req.query.rating) {
        req.query.rating = +req.query.rating;
    }
    const books = await getAllUsers(req);
    res.send(books);
});

// create user
router.post("/signup", express.json(), async (req, res) => {
    const {username,password} = req.body;
    console.log(username,password);
    const hashedPassword = await genPass(password);
    const result = await createUser(username,hashedPassword)
    res.send(result);
});

export const userRouter = router