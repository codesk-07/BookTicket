const {DataTypes} = require('sequelize')
const sequeliz = require('../utils/db-connection'

)
const Bus = sequeliz.define('Bus',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    source:{
        type:DataTypes.STRING,
        allowNull:false
    },
    destination:{
        type:DataTypes.STRING,
        allowNull:false
    },
    total_seat:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    available_seat:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},
{
      tableName: 'buses',
    timestamps: false
   })

   module.exports = Bus;