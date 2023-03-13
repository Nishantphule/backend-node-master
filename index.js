// const express = require("express"); // 3rd party package
// const { MongoClient } = require("mongodb");
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { bookRouter } from "./routes/books.js";
import { userRouter } from "./routes/users.js";
import bcrypt from 'bcrypt'

dotenv.config();
// console.log(process.env)
const app = express();
const PORT = process.env.PORT;
// req => what is the req we sent to Server
// res => what we receive for the req we sent to server

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is Connected");
  return client;
}

export const client = await createConnection();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello Everyone🥳🥳🥳🥳");
});


app.use("/books", bookRouter)
app.use("/users", userRouter)

app.listen(PORT, () => console.log("Server started on PORT ", PORT));



export async function genPass(password){
  const salt = await bcrypt.genSalt(10)
  const hashedPass = await bcrypt.hash(password,salt)
  return hashedPass
}

// console.log(genPass("passwoed@123"))


export async function createUser(username,hashedPassword) {
  return await client
      .db("b40-b39-we")
      .collection("users")
      .insertOne({username:username,hashedPassword:hashedPassword});
}

export async function getAllUsers(req) {
  return await client
      .db("b40-b39-we")
      .collection("users")
      .find(req.query)
      .toArray();
}