const express = require('express');
const db = require('./utils/db-connection');
const createTables = require('./utils/create-tables');

const app = express();

app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');

// Mount routes
app.use('/users', userRoutes);
app.use('/buses', busRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Bus Booking System');
});

// Start server after database and tables are ready
const startServer = async () => {
    try {
        await db.query('SELECT 1');

        console.log('Database connected successfully');

        await createTables();

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (err) {
        console.error('Application startup failed:', err.message);
        process.exit(1);
    }
};

startServer();