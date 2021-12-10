import express from "express";
import { addPatient,ViewPatient,ViewAllPatients , UpdatePatient ,deletePatient } from "../Controllers/PatientsController.js";
import { authenticate } from "../middlewares/auth.js";
const PatientRouter=express.Router();
//Get a Patient
PatientRouter.get("/",authenticate,ViewAllPatients);
PatientRouter.get("/:id",authenticate,ViewPatient);
PatientRouter.post("/",authenticate,addPatient);
PatientRouter.put("/",authenticate,UpdatePatient);
PatientRouter.delete("/:id",authenticate,deletePatient);




 

export default PatientRouter;