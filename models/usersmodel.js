import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

//Create a DB Connection.

const User=sequelize.define('users',{
User_id:{
    autoincrement:true,
    type:Sequelize.INTEGER,
    allowNull:true,
    primaryKey:true

},
fullname:{
    type:Sequelize.STRING(255),
    allowNull:false,

},emailaddress:{
    type:Sequelize.STRING(255),
    allowNull:false,

},password:{
    type:Sequelize.STRING(255),
    allowNull:false,

} 

},{
    sequelize,
    tableName:'users',
    timestamps:false,
    indexes:[{
        name:"PRIMARY",
        unique:true,
        fields:[
            {name:"User_id"}
        ]
    }]
})

export default User;