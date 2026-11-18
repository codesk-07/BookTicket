const db = require('./db-connection');

const createTables = async () => {
    const usersTable = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE
        )
    `;

    const busesTable = `
        CREATE TABLE IF NOT EXISTS buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            bus_name VARCHAR(100) NOT NULL,
            source VARCHAR(100) NOT NULL,
            destination VARCHAR(100) NOT NULL,
            total_seats INT NOT NULL,
            available_seats INT NOT NULL
        )
    `;

    await db.execute(usersTable);
    await db.execute(busesTable);

    console.log('Users and buses tables are ready');
};

module.exports = createTables;