import Hospital from "../models/Hospitalmodel.js";



//Add a Hospital
 export async function addHospital(req,res){
      try{
          let hospital=await Hospital.create(req.body);
          if(hospital){
              res.status(200).json({
                  success:true,
                  data:hospital
              })
          }else{
            res.status(200).json({
                success:true,
                message:"Hospital could not be added successfully"
            })

          }
      }catch (err){
          console.log(err);
      res.status(500).json({
          
          success:false,
          message:"Opps!Something is wrong"
      })
      }
 }
//View a Hospital
export async function ViewHospital(req,res){
    try{
        let allhospitals=await Hospital.findAll({where:{Hosital_Id:req.params.id}});
        if (allhospitals){
            res.status(200).json({
                success:true,
                message:'Hospitals records retrived successfully',
                data:allhospitals
            })
        }else{
          res.json({
           success:true,
           message:'No member records found'
          })  
        }
    }catch(err){
       res.status(500).json({
         
           success:false,
           message:"Opps!Something is wrong"
       })

    }
    
}

//View all Hospitals
export async function  ViewAllHospital(req,res){
     try{
         let allhospitals=await Hospital.findAll();
         if (allhospitals){
             res.status(200).json({
                 success:true,
                 message:'Hospitals records retrived successfully',
                 data:allhospitals
             })
         }else{
           res.json({
            success:true,
            message:'No member records found'
           })  
         }
     }catch(err){
        res.status(500).json({
          
            success:false,
            message:"Opps!Something is wrong"
        })

     }
}
//Update Hospital Record
export async function  UpdateHospital(req,res){
    try{
        let updatehospital = await Hospital.update(req.body, {where: {Hosital_Id: req.params.id}})
        if (updatehospital){
            res.json({ 
                success: true,
                message: "Feature has been changed",
                data: updatehospital
            })
        } else{
            res.json({
                success: true,
                message: "Feature Was not changed"
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
//Delete a Hospital
export async function  deleteHospital(req,res){
    try{
        let theHospital = await Hospital.destroy({where: {Hosital_Id: req.params.id}});
        if (theHospital){
            res.json({
                success: true,
                message: "Hospital has been deleted",
                data: theHospital
            })
        } else{
            res.json({
                success: true,
                message: "Hospital was not deleted"
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