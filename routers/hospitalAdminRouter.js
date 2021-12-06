import express from "express";
import { addAdmin, deleteAdmin, viewAdmin, viewAllAdmin, viewAllAppointments, deleteAppointment, acceptAppointment} from "../controllers/hospitalAdminController.js";
const adminRouter = express.Router();

//view an admin
adminRouter.get('/:id', viewAdmin)

//view all admin
adminRouter.get('/', viewAllAdmin)

//add hospital admin user
adminRouter.post('/', addAdmin)

//delete hospital admin user
adminRouter.delete('/:id', deleteAdmin)

//view all appts
adminRouter.get('/:id', viewAllAppointments)

//delete appt
adminRouter.delete('/:id', deleteAppointment)

//accept appt
adminRouter.put('/:id', acceptAppointment)  //update so status goes from pending -> accepted

export default adminRouter;
