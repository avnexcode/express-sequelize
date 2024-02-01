import { Sequelize } from "sequelize";
const db = new Sequelize('prot_prot', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db