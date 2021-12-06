import express from "express";
import {signUp, logIn, viewAllAppointments, deleteAppointment, acceptAppointment} from "../controllers/hospitalAdminController.js";
import { authenticate } from "../middlewares/auth.js";
const adminRouter = express.Router();

//signup
adminRouter.post('/', authenticate, signUp) // are we using auth here?

//login
adminRouter.post('/login', logIn)

//view all appts
adminRouter.get('/:id', viewAllAppointments)

//delete appt
adminRouter.delete('/:id', deleteAppointment)

//accept appt
adminRouter.put('/:id', acceptAppointment)  //update so status goes from pending -> accepted

export default adminRouter;
