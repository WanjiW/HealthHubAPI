import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Appointment = sequelize.define('appointment', {

    Appointment_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER(255),
        allowNull: false,
        primaryKey: true
    },

    Hospital_Id: {
        type: Sequelize.INTEGER(255),
        allowNull: false
    },

    Appointment_Date: {
        type: Sequelize.INTEGER(255),
        allowNull: false
    },

    Appointment_Status: {
        type: Sequelize.STRING(20),
        allowNull: false
    },

    Patient_ID: {
        type: Sequelize.INTEGER(255),
        allowNull: false
    }

}, {

    sequelize,
    tableName: 'appointments',
    timestamps: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "Appointment_id" },
            ]
        },
    ]

});

export default Appointment;
