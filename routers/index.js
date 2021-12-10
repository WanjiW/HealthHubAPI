import express from "express";
import HopsitalRouter from "./HospitalRouter.js";
import PatientRouter from "./PatientsRouter.js";
import adminRouter from "./hospitalAdminRouter.js";
import appointmentRouter from "./appointmentsRouter.js";
import recordsRouter from "./recordsRouter.js";
import usersRouter from "./usersRouter.js";


const router = express.Router();


router.use("/hospital", HopsitalRouter);
router.use("/patient", PatientRouter);
router.use("/admin", adminRouter);
router.use("/appointment", appointmentRouter);
router.use("/record", recordsRouter);
router.use("/users",usersRouter);


export default router;