
const Bus = require('../models/bus');
const { Op } = require('sequelize');

// POST /buses
const addBus = async (req, res) => {
    try {


        const {
            
            source,
            destination,
            total_seats,
            available_seats
        } = req.body;


        if (
        
            !source ||
            !destination ||
            total_seats == null ||
            available_seats == null
        ) {
            return res.status(400).json({
                message: 'All bus fields are required'
            });
        }

        const bus = await Bus.create({
            source,
            destination,
            total_seats,
            available_seats
        });

        return res.status(201).json({
            message: 'Bus added successfully',
            bus
        });

    } catch (error) {
        console.log(error.message);

        return res.status(500).json({
            message: 'Unable to add bus'
        });
    }
};

// GET /buses/available/:seats
const getAvailableBuses = async (req, res) => {
    try {
        const seats = Number(req.params.seats);

        if (!Number.isInteger(seats) || seats < 0) {
            return res.status(400).json({
                message: 'Seats must be a valid non-negative integer'
            });
        }

        const buses = await Bus.findAll({
            where: {
                available_seats: {
                    [Op.gt]: seats
                }
            }
        });

        return res.status(200).json(buses);

    } catch (error) {
        console.log(error.message);

        return res.status(500).json({
            message: 'Error fetching buses'
        });
    }
};

module.exports = {
    addBus,
    getAvailableBuses
};
















// const db = require('../utils/db-connection');

// // POST /buses
// const addBus = async (req, res) => {
//     try {
//         const {
//             bus_name,
//             source,
//             destination,
//             total_seats,
//             available_seats
//         } = req.body;

//         if (
//             !bus_name ||
//             !source ||
//             !destination ||
//             total_seats == null ||
//             available_seats == null
//         ) {
//             return res.status(400).json({
//                 message: 'Please provide all bus details'
//             });
//         }

//         if (
//             !Number.isInteger(total_seats) ||
//             !Number.isInteger(available_seats) ||
//             total_seats <= 0 ||
//             available_seats < 0 ||
//             available_seats > total_seats
//         ) {
//             return res.status(400).json({
//                 message: 'Invalid seat information'
//             });
//         }

//         const insertQuery = `
//             INSERT INTO buses
//             (bus_name, source, destination, total_seats, available_seats)
//             VALUES (?, ?, ?, ?, ?)
//         `;

//         const [result] = await db.execute(insertQuery, [
//             bus_name,
//             source,
//             destination,
//             total_seats,
//             available_seats
//         ]);

//         return res.status(201).json({
//             message: 'Bus added successfully',
//             busId: result.insertId
//         });

//     } catch (err) {
//         console.log(err.message);

//         return res.status(500).json({
//             message: 'Error adding bus',
//             error: err.message
//         });
//     }
// };


// // GET /buses/available/:seats
// const getAvailableBuses = async (req, res) => {
//     try {
//         const seats = Number(req.params.seats);

//         if (!Number.isInteger(seats) || seats < 0) {
//             return res.status(400).json({
//                 message: 'Please provide a valid seat number'
//             });
//         }

//         const selectQuery = `
//             SELECT * FROM buses
//             WHERE available_seats > ?
//         `;

//         const [buses] = await db.execute(selectQuery, [seats]);

//         return res.status(200).json(buses);

//     } catch (err) {
//         console.log(err.message);

//         return res.status(500).json({
//             message: 'Error fetching buses'
//         });
//     }
// };

// module.exports = {
//     addBus,
//     getAvailableBuses
// };