import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routers/index.js"
import cors from "cors";
const app=express();

dotenv.config()
const port=process.env.PORT || 3003;


app.get("/",(req,res)=>{
    res.send("Hello World")
})


// app.use(express.json());
// app.use(bodyParser.json());
// app.use(router);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(router);

app.get('/routes/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.get('/payments/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.get('/bills/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.get('/members/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.get('/premises/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})



app.listen(port,()=>{
    console.log(`Our HealthHub API is now available on port ${port}`)
})


// mysql://b1b54bd34f9e32:a7ce2840@us-cdbr-east-04.cleardb.com/heroku_54d38be9c38696b?reconnect=true