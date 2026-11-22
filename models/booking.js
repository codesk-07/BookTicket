const {DataTypes} = require('sequelize');
const sequeliz = require('../utils/db-connection');

const Booking = sequeliz.define('Booking',{
    
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    bus_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    seats_booked:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},
{
      tableName: 'Booking',
    timestamps: false
});
module.exports= Booking;