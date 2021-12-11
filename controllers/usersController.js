import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import User from "../models/usersmodel.js";


dotenv.config();
//Add a User
export async function addUser(req, res) {
    try {
        bcrypt.hash(req.body.password, 10).then(async (hash) => {
            let userObj = {
                fullname: req.body.fullname,
                emailaddress: req.body.emailaddress,
                password: hash
            }
            let user = await User.create(userObj);
            if (user) {
                res.status(200).json({
                    success: true,
                    data: user
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: "User could not be added successfully"
                })

            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({

            success: false,
            message: "Opps.....Something is wrong"
        })
    }
}


//View A User
export async function ViewUser(req, res) {
    try {
        let users = await User.findAll({ where: { User_Id: req.params.id } });
        if (users) {
            res.status(200).json({
                success: true,
                message: 'User Records retrieved Sucessfully',
                data: users
            })
        } else {
            res.json({
                success: true,
                message: 'No User records found'
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({

            success: false,
            message: "Opps!Something is wrong"
        })

    }

}

//View All Users
export async function ViewAllUsers(req, res) {
    try {
        let allusers = await User.findAll();
        if (allusers) {
            res.status(200).json({
                success: true,
                message: 'User records retrived successfully',
                data: allusers
            })
        } else {
            res.json({
                success: true,
                message: 'No user records found'
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({

            success: false,
            message: "Opps.....Something is wrong"
        })

    }
}

//SignIn
export async function SignIn(req, res) {
    //Get a user With email Address
    //Ensure that their password is correct
    //Create a JWT for them.(For Authenticating Other API requests)
    try {
        let user = await User.findOne({where:{ emailaddress: req.body.emailaddress} })
            if (!user) {
                return res.status(401).json({
                    status: false,
                    message: "Authentication failed:User with email address not found"
                })
            }
             bcrypt.compare(req.body.password, user.password).then(response => {
            if (!response) {
                return res.status(401).json({
                    status: false,
                    message: "Authentication failed:Incorrect Password"
                })

            }
            let authToken = jwt.sign({ emailaddress: user.emailaddress, User_id: user.User_id }, process.env.AUTH_KEY, { expiresIn: "1hr" });
            return res.status(200).json({
                status: true,
                message: "User authentication successful",
                user: { fullname: user.fullname, emailaddress: user.emailaddress, User_id: user.User_id },
                token: authToken,
                expiresIn: 3600
            })
        })

    }
    catch (err) {
        console.log(err)
        res.status(500).json({

            success: false,
            message: "Opps!Something is wrong"
        })
    }

}

