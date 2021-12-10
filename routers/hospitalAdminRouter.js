import express from "express";
import { viewAllAppointments, deleteAppointment, acceptAppointment,addAdmin,viewAdmin,viewAllAdmin,deleteAdmin} from "../controllers/hospitalAdminController.js";
import { authenticate } from "../middlewares/auth.js";
//import { authenticate } from "../middlewares/auth.js";
const adminRouter = express.Router();

//signup
//adminRouter.post('/', authenticate, signUp)

//login
//adminRouter.post('/login', logIn)

//view all appts
adminRouter.get('/',authenticate, viewAllAppointments)    

//deleting An Admin
adminRouter.get('/:id', authenticate,deleteAdmin)    

//delete appt
adminRouter.delete('/:id',authenticate, deleteAppointment)

//accept appt
adminRouter.put('/:id',authenticate, acceptAppointment)   
// Add an Admin
adminRouter.post('/', authenticate,  addAdmin)

//View an Admin
adminRouter.get('/:id', authenticate,viewAdmin)

//view all admin
adminRouter.get('/', authenticate,viewAllAdmin)

export default adminRouter;
