import express from "express";
import {viewRecord, viewAllRecords, createRecord, deleteRecord} from "../controllers/recordsController.js";
const recordsRouter = express.Router();

//view one record
recordsRouter.get('/:id', viewRecord)

//view records
recordsRouter.get('/', viewAllRecords)

//crate a record
recordsRouter.post('/', createRecord)

//delete records
recordsRouter.delete('/:id', deleteRecord)


export default recordsRouter;