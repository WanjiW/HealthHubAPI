import express from "express";
import { addPatient,ViewPatient,ViewAllPatients , UpdatePatient ,deletePatient } from "../Controllers/PatientsController.js";

const PatientRouter=express.Router();
//Add a patient
PatientRouter.post("/", addPatient );
//View a patient
PatientRouter.get("/:id",ViewPatient);
//View All Patients
PatientRouter.get("/",ViewAllPatients);
//Update A patient
PatientRouter.put("/:id",UpdatePatient);
//Delete A patient
PatientRouter.delete("/:id",deletePatient);


export default PatientRouter;