import { client } from "./index.js";

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
        .deleteOne({ id: id });
}
export async function getBookById(id) {
    return await client
        .db("b40-b39-we")
        .collection("books")
        .findOne({ id: id });
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
        .updateOne({ id: id }, { $set: data });
}
