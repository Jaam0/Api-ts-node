import { DataTypes } from 'sequelize';
import db from '../database/connection';

const User = db.define('tbl_users',{
    name : {
        type:DataTypes.STRING
    },
    email: {
        type:DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    },
});

export default User;