import express from "express";
import { addHospital, ViewAllHospital, ViewHospital, UpdateHospital, deleteHospital } from "../Controllers/HospitalController.js";

const HopsitalRouter = express.Router();

//Add a hospital           hospital/
HopsitalRouter.post("/", addHospital);


//View a hospital         hospital/:id
HopsitalRouter.get("/:id", ViewHospital);


//View all hospitals       hospital/
HopsitalRouter.get("/", ViewAllHospital);


//Update Hospital record  hospital/:id
HopsitalRouter.put("/:id", UpdateHospital);


//Delete a hospital       hospital/:id  
HopsitalRouter.delete("/:id", deleteHospital);


export default HopsitalRouter;