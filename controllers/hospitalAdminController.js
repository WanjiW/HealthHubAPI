import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Appointment from "../models/appointmentsModel.js";
import Admin from "../models/hospitalAdminModel.js";

dotenv.config()

//sign up
export async function signUp (req, res){
    try{
        bcrypt.hash(req.body.H_Password,10).then(async(hash)=>{
            let userobj={
                Admin_Contact: req.body.Admin_Contact,
                H_Password: hash,
                Admin_Name: req.body.Admin_Name
            }
            let userAD = await Admin.create(userobj);
        if (userAD){
            res.status(200).json({
                message:"Admin-User created successfully",
                success:true,
                data: userAD
            })
        }else{
            res.status(200).json({
                message:"Admin-User could not be created successfully",
                Sucess: true
            })
        }
             
        });
        
    } catch(err){
        console.log(err)
        res.status(500).json({
            success: false,
            message:"Oops! Something is wrong"
        })
        
    }
    
}

//login
export async function logIn (req, res) {
    //Get a user with their contact
    //Ensure that their password is correct
    //Create a JWT for them. (For Authenticating Other API Requests)
    try {
        let user = await Admin.findOne({ where: {Admin_Contact: req.body.Admin_Contact}})
        if (!user) {
            return res.status(401).json({
                status: false,
                message: "Authentication Failed: Admin-User with email address not found."
            })
        }
        bcrypt.compare(req.body.H_Password, user.H_Password).then(response => {
            if (!response) {
                return res.status(401).json({
                    status: false,
                    message: "Authentication Failed: Incorrect password."
                })
            }
            let authToken = jwt.sign({Admin_Contact: user.Admin_Contact, AdminID: user.AdminID},
                process.env.AUTH_KEY, { expiresIn: "1h" });
            return res.status(200).json({
                status: true,
                message: "Admin-User authentication successful",
                user: { Admin_Name: user.Admin_Name, Admin_Contact: user.Admin_Contact, AdminID: user.AdminID},
                token: authToken,
                expiresIn: 3600
            })
        })

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