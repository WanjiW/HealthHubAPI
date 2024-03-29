import express from "express";
import {createAppt,viewAllAppointments, deleteAppointment, acceptAppointment} from "../controllers/appointmentsController.js";  //accept an appointment
import { authenticate } from "../middlewares/auth.js";
const appointmentRouter = express.Router();

appointmentRouter.post('/',authenticate,createAppt)

//view all appts
appointmentRouter.get('/', authenticate,  viewAllAppointments)   //are we using auth here?

//delete appt
appointmentRouter.delete('/:id', authenticate,    deleteAppointment)

//accept appt
appointmentRouter.put('/:id',authenticate, acceptAppointment)

export default appointmentRouter;