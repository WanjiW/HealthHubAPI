import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routers/index.js"
const app=express();

dotenv.config()
const port=process.env.PORT || 3000;


app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use(express.json());
app.use(bodyParser.json());
app.use(router);

app.listen(port,()=>{
    console.log(`Our HealthHub API is now available on port ${port}`)
})


// mysql://b1b54bd34f9e32:a7ce2840@us-cdbr-east-04.cleardb.com/heroku_54d38be9c38696b?reconnect=true