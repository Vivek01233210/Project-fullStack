// require('dotenv').config({path: './env'})  // outdated and old method to import .env

import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: http://localhost:${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Mongo db connection failed !!!", error)
})








/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express()

// IIFE(Immediately invoked function expressions)
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error: ", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("Error: ", error)
        throw error;
    }
})()
*/

