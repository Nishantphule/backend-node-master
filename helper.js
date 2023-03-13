import { ObjectId } from 'mongodb';
import { client } from "./index.js";
import bcrypt from 'bcrypt'

// BOOKS
export async function createBook(newBooks) {
    return await client
        .db("b40-b39-we")
        .collection("books")
        .insertMany(newBooks);
}
export async function deleteBookById(id) {
    return await client
        .db("b40-b39-we")
        .collection("books")
        .deleteOne({  _id:new ObjectId(id) });
}
export async function getBookById(id) {
    return await client
        .db("b40-b39-we")
        .collection("books")
        .findOne({ _id: new ObjectId(id) });
}
export async function getAllBooks(req) {
    return await client
        .db("b40-b39-we")
        .collection("books")
        .find(req.query)
        .toArray();
}
export async function updateBook(id, data) {
    return await client.db("b40-b39-we")
        .collection("books")
        .updateOne({ _id:new ObjectId(id) }, { $set: data });
}

 

// USERS
export async function genPass(password) {
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)
    return hashedPass
}

// console.log(genPass("passwoed@123"))

export async function createUser(username, hashedPassword) {
    return await client
        .db("b40-b39-we")
        .collection("users")
        .insertOne({ username: username, hashedPassword: hashedPassword });
}

export async function getAllUsers(req) {
    return await client
        .db("b40-b39-we")
        .collection("users")
        .find(req.query)
        .toArray();
}



// MOVIES
export async function updateMovie(id, data) {
    return await client.db("b39we")
        .collection("movies")
        .updateOne({ _id:new ObjectId(id) }, { $set: data });
}

export async function deleteMovieById(id) {
    return await client.db("b39we").collection("movies").deleteOne({ _id:new ObjectId(id) });
}

export async function createMovie(data) {
    return await client.db("b39we").collection("movies").insertMany(data);
}

export async function getMovieById(id) {
    return await client.db("b39we").collection("movies").findOne({ _id:new ObjectId(id) });
}

export async function getAllMovies() {
    return await client.db("b39we").collection("movies").find({}).toArray();
}