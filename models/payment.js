const{DataTypes} = require('sequelize');
const sequeliz = require('../utils/db-connection');

const Payment = sequeliz.define('Payment' ,
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        booking_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        amount:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        status:{
            type:DataTypes.STRING,
            allowNull:false
        
        }
    },
    {
      tableName: 'Payment',
    timestamps: false

    });
module.exports = Payment;