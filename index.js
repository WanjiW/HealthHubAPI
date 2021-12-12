import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routers/index.js";
import cors from "cors";


const app=express();

dotenv.config()
const port=process.env.PORT;


app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(router);

 app.get('/patient/:id', function (req, res, next) {
     res.json({ msg: 'This is CORS-enabled for all origins!' })
 })
app.get('/adminRouter/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})
app.get('/hospital/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})
app.get('/appointment/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})
//app.get('/router/:id', function (req, res, next) {
 //   res.json({ msg: 'This is CORS-enabled for all origins!' })
//})



app.listen(port,()=>{
    console.log(`Our HealthHub API is now available on port${port}`)
})