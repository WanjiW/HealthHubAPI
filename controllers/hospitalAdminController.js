import dotenv from "dotenv";
import Appointment from "../models/appointmentsModel.js";
import Admin from "../models/hospitalAdminModel.js";

dotenv.config()

//add an admin (create admin user)
export async function addAdmin(req, res) {
    try {
        let admin = await Admin.create(req.body);
        if (admin) {
            res.status(200).json({
                success: true,
                data: admin,
                message: "Admin-user added successfully"
            })
        } else {
            res.status(200).json({
                success: false,
                message: "Admin-user not added successfully"
            })

        }
    } catch (err) {
        console.log(err);
        res.status(500).json({

            success: false,
            message: "Oops! Something is wrong"
        })
    }
}

//view an admin
export async function viewAdmin(req,res){
    try{
        let anAdmin = await Admin.findAll({where: {AdminID: req.params.id}});
        if (anAdmin){
            res.status(200).json({
                success:true,
                message:"Admin-user retrieved successfully",
                data: anAdmin
            })}else{
                res.json({
                    success:true,
                    message:"Admin-user could not be retrieved"
                })
            }
    }catch(err){
        if (err){
            res.json({
                success:false,
                message:"Oops! Something is wrong"
            })

        }

    }
    
}


//view all admin
export async function viewAllAdmin(req,res){
    try{
        let allAdmin = await Admin.findAll();
        if (allAdmin){
            res.status(200).json({
                success:true,
                message:"Admin list retrieved successfully",
                data: allAdmin
            })}else{
                res.json({
                    success:true,
                    message:"Admin list could not be retrieved"
                })
            }
    }catch(err){
        if (err){
            res.json({
                success:false,
                message:"Oops! Something is wrong"
            })

        }

    }
    
}

//delete an admin
export async function deleteAdmin(req, res) {
    try {
        let specificAdmin = await Admin.destroy({where: {AdminID: req.params.id}});
        if (specificAdmin) {
            res.json({
                success: true,
                message: "Admin-user has been deleted",
                data: specificAdmin
            })
        } else {
            res.json({
                success: true,
                message: "Admin-user could not be deleted"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oops! Something is wrong"
        })
    }
}

//view all appointments for the hospital, using Hospital_id
export async function viewAllAppointments (req,res){
    try{
        let allAppts = await Appointment.findAll({where: {Hospital_id: req.params.id}});
        if (allAppts){
            res.status(200).json({
                success:true,
                message:"Appointment list retrieved successfully",
                data: allAppts
            })}else{
                res.json({
                    success:true,
                    message:"Appointment list could not be retrieved"
                })
            }
    }catch(err){
        if (err){
            res.json({
                success:false,
                message:"Oops! Something is wrong"
            })

        }

    }
    
}

//delete an appointment (id required)
export async function deleteAppointment(req, res) {
    try {
        let specificAppt = await Appointment.destroy({ where: {Appointment_id: req.params.id}});
        if (specificAppt) {
            res.json({
                success: true,
                message: "Appointment has been deleted",
                data: specificAppt
            })
        } else {
            res.json({
                success: true,
                message: "Appointment could not be deleted"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oops! Something is wrong"
        })
    }
}


//accept an appointment (id required)(status can be changed to accepted or declined)
export async function acceptAppointment(req, res) {
    try {
        let acceptAppt = await Appointment.update(req.body, {where: { Appointment_id: req.params.id}})
        if (acceptAppt) {
            res.json({
                success: true,
                message: "Appointment status changed",
                data: acceptAppt
            })
        } else {
            res.json({
                success: true,
                message: "Appointment status not changed - issue!"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oops! Something is wrong"
        })
    }
}