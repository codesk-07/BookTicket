
const express = require('express');
const sequelize = require('./utils/db-connection');

const app = express();

app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');
require("./models");

// Mount routes
app.use('/users', userRoutes);
app.use('/buses', busRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Bus Booking System');
});

const PORT = 3000;

// Start server after database and tables are ready
const startServer = async () => {
    try {
        await sequelize.authenticate();

        console.log('Database connection established');

        await sequelize.sync();

        console.log('Models synchronized');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error('Application startup failed:', error.message);
    }
};

startServer();




// const express = require('express');
// const db = require('./utils/db-connection');
// const createTables = require('./utils/create-tables');

// const app = express();

// app.use(express.json());

// // Import routes
// const userRoutes = require('./routes/userRoutes');
// const busRoutes = require('./routes/busRoutes');

// // Mount routes
// app.use('/users', userRoutes);
// app.use('/buses', busRoutes);

// app.get('/', (req, res) => {
//     res.send('Welcome to Bus Booking System');
// });

// // Start server after database and tables are ready




// db.sync({force:true}).then(()=>{
//     app.listen(3000,(err)=>{
//         console.log("server is runing");
//     })
// }).catch((err)=>{
//     console.log(err);
// })
// // const startServer = async () => {
// //     try {
// //         await db.query('SELECT 1');

// //         console.log('Database connected successfully');

// //         await createTables();

// //         const PORT = process.env.PORT || 3000;

// //         app.listen(PORT, () => {
// //             console.log(`Server is running on port ${PORT}`);
// //         });

// //     } catch (err) {
// //         console.error('Application startup failed:', err.message);
// //         process.exit(1);
// //     }
// // };

// // startServer();