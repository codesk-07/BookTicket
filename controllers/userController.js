const db = require('../utils/db-connection');

// POST /users
const addUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: 'Name and email are required'
            });
        }

        const insertQuery = `
            INSERT INTO users (name, email)
            VALUES (?, ?)
        `;

        const [result] = await db.execute(insertQuery, [name, email]);

        return res.status(201).json({
            message: 'User added successfully',
            userId: result.insertId
        });

    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            message: 'Error adding user',
            error: err.message
        });
    }
};


// GET /users
const getUsers = async (req, res) => {
    try {
        const selectQuery = 'SELECT * FROM users';

        const [users] = await db.execute(selectQuery);

        return res.status(200).json(users);

    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            message: 'Error fetching users'
        });
    }
};

module.exports = {
    addUser,
    getUsers
};