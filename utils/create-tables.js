

// const {Sequelize , DataTypes} = require("sequelize");
// const sequelize = require("../utils/db-connection");

// const createUserTables =  sequelize.define(
//     'users',
//     {
//         id:{
//             type:DataTypes.INTEGER,
//             primaryKey:true,
//             autoIncrement:true,
//             allowNull:false
//         },
//         name:{
//             type:DataTypes.STRING,
//             allowNull:false
//         },
//         email:{
//             type:DataTypes.STRING,
//             allowNull:false
//         }

//     }
   
// )
// const createbusesTable = sequelize.define(
//     'buses',
//     {
//         id:{
//              type:DataTypes.INTEGER,
//             primaryKey:true,
//             autoIncrement:true,
//             allowNull:false
//         },
//         source:{
//                   type:DataTypes.STRING,
//             allowNull:false
//         },
//         destination:{
//           type:DataTypes.STRING,
//             allowNull:false
//         },
//         total_seats:{
//             type:DataTypes.INTEGER,
//             allowNull:false
//         },
//            available_seats:{
//             type:DataTypes.INTEGER,
//             allowNull:false
//         }



//     }
// )


// module.exports={
//     createUserTables,createbusesTable
// }
















// // const db = require('./db-connection');

// // const createTables = async () => {
// //     const usersTable = `
// //         CREATE TABLE IF NOT EXISTS users (
// //             id INT AUTO_INCREMENT PRIMARY KEY,
// //             name VARCHAR(100) NOT NULL,
// //             email VARCHAR(100) NOT NULL UNIQUE
// //         )
// //     `;

// //     const busesTable = `
// //         CREATE TABLE IF NOT EXISTS buses (
// //             id INT AUTO_INCREMENT PRIMARY KEY,
// //             bus_name VARCHAR(100) NOT NULL,
// //             source VARCHAR(100) NOT NULL,
// //             destination VARCHAR(100) NOT NULL,
// //             total_seats INT NOT NULL,
// //             available_seats INT NOT NULL
// //         )
// //     `;

// //     await db.execute(usersTable);
// //     await db.execute(busesTable);

// //     console.log('Users and buses tables are ready');
// // };

// //module.exports = createTables;