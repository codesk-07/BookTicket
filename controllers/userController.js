// //const { createUserTables } = require('../utils/create-tables');
// const db = require('../utils/db-connection');
// const createUserTables = require('../utils/create-tables')


const User = require('../models/user'); 
// POST /users
const addUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        

        if (!name || !email) {
            return res.status(400).json({
                message: 'Name and email are required'
            });
        }


       const user = await User.create({
        name,
        email
       });
       return res.status(201).json({
            message: 'User added successfully',
            user
        });

    }
    catch(error){
           console.log(error.message);

        return res.status(500).json({
            message: 'Unable to add user'
        });
    }
    }


    //     const insertQuery = `
    //         INSERT INTO users (name, email)
    //         VALUES (?, ?)
    //     `;

    //     const [result] = await db.execute(insertQuery, [name, email]);

    //     return res.status(201).json({
    //         message: 'User added successfully',
    //         userId: result.insertId
    //     });

    // } catch (err) {
    //     console.log(err.message);

    //     return res.status(500).json({
    //         message: 'Error adding user',
    //         error: err.message
    //     });
    
    



// GET /users
const getUsers = async (req, res) => {
    try {
         
        const users = await User.findAll();

        return res.status(200).json(users);

        // const selectQuery = 'SELECT * FROM users';

        // const [users] = await db.execute(selectQuery);

       // return res.status(200).json(users);

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