const db = require('../utils/db-connection');

// POST /buses
const addBus = async (req, res) => {
    try {
        const {
            bus_name,
            source,
            destination,
            total_seats,
            available_seats
        } = req.body;

        if (
            !bus_name ||
            !source ||
            !destination ||
            total_seats == null ||
            available_seats == null
        ) {
            return res.status(400).json({
                message: 'Please provide all bus details'
            });
        }

        if (
            !Number.isInteger(total_seats) ||
            !Number.isInteger(available_seats) ||
            total_seats <= 0 ||
            available_seats < 0 ||
            available_seats > total_seats
        ) {
            return res.status(400).json({
                message: 'Invalid seat information'
            });
        }

        const insertQuery = `
            INSERT INTO buses
            (bus_name, source, destination, total_seats, available_seats)
            VALUES (?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(insertQuery, [
            bus_name,
            source,
            destination,
            total_seats,
            available_seats
        ]);

        return res.status(201).json({
            message: 'Bus added successfully',
            busId: result.insertId
        });

    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            message: 'Error adding bus',
            error: err.message
        });
    }
};


// GET /buses/available/:seats
const getAvailableBuses = async (req, res) => {
    try {
        const seats = Number(req.params.seats);

        if (!Number.isInteger(seats) || seats < 0) {
            return res.status(400).json({
                message: 'Please provide a valid seat number'
            });
        }

        const selectQuery = `
            SELECT * FROM buses
            WHERE available_seats > ?
        `;

        const [buses] = await db.execute(selectQuery, [seats]);

        return res.status(200).json(buses);

    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            message: 'Error fetching buses'
        });
    }
};

module.exports = {
    addBus,
    getAvailableBuses
};