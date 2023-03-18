import express from "express";
import { createUser, genPass, getAllUsers,getUserByName } from "../helper.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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
    const { username , password} = req.body
    const userFromDB = await getUserByName(username)

    if(userFromDB){
      const storedPassword = userFromDB.password;
      const isPasswordMatch = await bcrypt.compare(password , storedPassword)
      if(isPasswordMatch){
        res.status(400).send({"message":"User Already Exists"})
      }
      else{
        res.status(400).send({"message":"Username Not Available"})
      }
    }
    else if(password.length<8){
      res.status(400).send({"message":"Password must be atleast 8 characters"})
    }
    else{
    const hashedPassword =  await genPass(password)
    const users = await createUser(username , hashedPassword)
    res.send({"message":"Successful Signup",users:users}) 
    }   
});

router.post("/login", express.json(), async (req, res) => {
    const { username , password } = req.body

  const userFromDB = await getUserByName(username) 

  if(!userFromDB){
    res.status(400).send({"message":"Invalid Credentials"})
  }
  else {
    const storedPassword = userFromDB.password;
    const isPasswordMatch = await bcrypt.compare(password , storedPassword)
    if(isPasswordMatch){
      const token = jwt.sign({id: userFromDB._id}, process.env.SECRET_KEY)
      res.header({"x-auth-token":token})
      res.send({"message":"Successful Login", token:token})
    }
    else
    {
      res.send({"message":"Invalid Credentials"})
    } 
  }  
});

export const userRouter = router