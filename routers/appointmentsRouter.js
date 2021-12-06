import express from "express";
import {createAppt, viewAppointment, viewAllAppointments, deleteAppointment, acceptAppointment} from "../controllers/appointmentsController.js";  //accept an appointment
const appointmentRouter = express.Router();


//add an appt
appointmentRouter.post('/', createAppt)

//view an appt
appointmentRouter.get('/:id', viewAppointment)

//view all appts
appointmentRouter.get('/', viewAllAppointments)   //are we using auth here?

//delete appt
appointmentRouter.delete('/:id', deleteAppointment)

//accept appt
appointmentRouter.put('/:id', acceptAppointment)

export default appointmentRouter;