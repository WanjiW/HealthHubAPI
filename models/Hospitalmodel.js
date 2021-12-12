import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

//Create a DB Connection.

const Hospital=sequelize.define('hospital',{
Hosital_Id:{
    autoincrement:true,
    type:Sequelize.INTEGER,
    allowNull:true,
    primaryKey:true

},
Hospital_Name:{
    type:Sequelize.STRING(255),
    allowNull:false,

},Hospital_Contact:{
    type:Sequelize.STRING(255),
    allowNull:false,

},Hospital_Location:{
    type:Sequelize.STRING(100),
    allowNull:false,

},No_of_Beds:{
    type:Sequelize.INTEGER(100),
    allowNull:false,

},Hospital_Department:{
    type:Sequelize.STRING(30),
    allowNull:false,

}

},{
    sequelize,
    tableName:'hospital',
    timestamps:false,
    indexes:[{
        name:"PRIMARY",
        unique:true,
        fields:[
            {name:"Hospital_Id"}
        ]
    }]
})

export default Hospital