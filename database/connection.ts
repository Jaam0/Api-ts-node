import { Sequelize } from "sequelize";


const db = new Sequelize('ts_node_db','root','password',{
    host: 'localhost',
    dialect: 'mysql',
    // logging:false
});

export default db;