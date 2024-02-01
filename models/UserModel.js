import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";

const User = db.define('users', {
    name: DataTypes.STRING(255),
    email: DataTypes.STRING(20),
    phone: DataTypes.STRING(50),
    password: DataTypes.STRING(255)
}, {
    freezeTableName: true,
})

export default User



