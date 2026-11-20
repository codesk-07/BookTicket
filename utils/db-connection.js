

// const {Sequelize} =require('sequelize');
// const sequilze = new Sequelize('bus_booking_system','root',"Password@123",{
//     host: 'localhost',
//     dialect: 'mysql',
//     logging:'false'
// });

// // (async()=>{
// //     try {
// //         await sequilze.authenticate();
// //         console.log("connection has been made");
// //     } catch (error) {
// //         console.log(err);
// //     }
// // })();

// module.exports= sequilze;






const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bus_booking_system', 'root', 'Password@123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;









// const mysql = require('mysql2/promise');
// require('dotenv').config();

// const db = mysql.createPool({
//     host: process.env.host,
//     user: process.env.user,
//     password: process.env.password,
//     database: process.env.database,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit:0
// });

// module.exports = db;