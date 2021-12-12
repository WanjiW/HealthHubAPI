import express from "express";
import { addAdmin, deleteAdmin, viewAdmin, viewAllAdmin, viewAllAppointments, deleteAppointment, acceptAppointment} from "../controllers/hospitalAdminController.js";
import { authenticate } from "../middlewares/auth.js";
const adminRouter = express.Router();

//view an admin
adminRouter.get('/:id', authenticate, viewAdmin)

//view all admin
adminRouter.get('/', authenticate,viewAllAdmin)

//add hospital admin user
adminRouter.post('/', authenticate,addAdmin)

//delete hospital admin user
adminRouter.delete('/:id',authenticate, deleteAdmin)

//view all appts
adminRouter.get('/:id',authenticate, viewAllAppointments)

//delete appt
adminRouter.delete('/:id',authenticate, deleteAppointment)

//accept appt
adminRouter.put('/:id', authenticate,acceptAppointment)  //update so status goes from pending -> accepted

export default adminRouter;
