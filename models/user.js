const {DataTypes} = require('sequelize');
const sequeliz = require('../utils/db-connection');

const User = sequeliz.define('User',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
    },
    {
       tableName: 'users',
    timestamps: false
});
module.exports = User;