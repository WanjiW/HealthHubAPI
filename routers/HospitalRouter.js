import express from "express";
import { addHospital,ViewAllHospital,ViewHospital,UpdateHospital,deleteHospital } from "../Controllers/HospitalController.js";
import { authenticate } from "../middlewares/auth.js";

const HopsitalRouter=express.Router();

//Add a hospital           hospital/
HopsitalRouter.post("/",authenticate,addHospital );


//View a hospital         hospital/:id
HopsitalRouter.get("/:id",authenticate,ViewHospital);


//View all hospitals       hospital/
HopsitalRouter.get("/",authenticate,ViewAllHospital);


//Update Hospital record  hospital/:id
HopsitalRouter.put("/",authenticate, UpdateHospital);


//Delete a hospital       hospital/:id  
HopsitalRouter.delete("/:id",authenticate,deleteHospital);


export default HopsitalRouter;