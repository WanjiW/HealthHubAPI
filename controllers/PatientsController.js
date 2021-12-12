import Patient from "../models/Patientsmodel.js"
 

//Add a Patient
export async function addPatient(req,res){
    try{
        let patient=await Patient.create(req.body);
        if(patient){
            res.status(200).json({
                success:true,
                data:patient
            })
        }else{
          res.status(200).json({
              success:true,
              message:"Patient could not be added successfully"
          })

        }
    }catch (err){
        console.log(err);
    res.status(500).json({
        
        success:false,
        message:"Opps.....Something is wrong"
    })
    }
}

      
//View A Patient
export async function ViewPatient(req,res){
    try{
        let Patients=await Patient.findAll({where:{Patients_Id:req.params.id}});
        if (Patients){
            res.status(200).json({
                success:true,
                message:'Patients Records retrieved Sucessfully',
                data:Patients
            })
        }else{
          res.json({
           success:true,
           message:'No member records found'
          })  
        }
    }catch(err){
        console.log(err)
       res.status(500).json({
         
           success:false,
           message:"Opps!Something is wrong"
       })

    }
    
}

//View All patient
export async function ViewAllPatients(req,res){
    try{
        let allpatients=await Patient.findAll();
        if (allpatients){
            res.status(200).json({
                success:true,
                message:'Patients records retrived successfully',
                data:allpatients
            })
        }else{
          res.json({
           success:true,
           message:'No Patient records found'
          })  
        }
    }catch(err){
        console.log(err)
       res.status(500).json({
         
           success:false,
           message:"Opps.....Something is wrong"
       })

    }
}


//Update Patient
export async function  UpdatePatient(req,res){
    try{
        let updatepatient = await Patient.update(req.body, {where: {Patients_Id: req.params.id}})
        if (updatepatient){
            res.json({ 
                success: true,
                message: "Feature has been changed",
                data: updatepatient
            })
        } else{
            res.json({
                success: true,
                message: "Patient was not updated"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "ooops!......Something is wrong" 
        })
    }   
}
//Delete a patient
export async function  deletePatient(req,res){
    try{
        let thePatient = await Patient.destroy({where: {Patients_Id: req.params.id}});
        if (thePatient){
            res.json({
                success: true,
                message: "Patients Records deleted Successfully",
                data: thePatient
            })
        } else{
            res.json({
                success: true,
                message: "Patients record was not deleted"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something is wrong" 
        })
    }
}

