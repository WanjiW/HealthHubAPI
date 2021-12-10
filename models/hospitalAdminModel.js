import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Admin = sequelize.define('hospital_ admin', {

    AdminID: {
        autoIncrement: true,
        type: Sequelize.INTEGER(255),
        allowNull: false,
        primaryKey: true
    },

    Admin_Name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    Admin_Contact: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    H_Password: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    User_Type: {
        type: Sequelize.STRING(10),
        allowNull: false
    },

    Hospital_Id: {
        type: Sequelize.INTEGER(255),
        allowNull: false
    }

}, {

    sequelize,
    tableName: 'hospital_ admin',
    timestamps: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "AdminID" },
            ]
        },
    ]

});

export default Admin;