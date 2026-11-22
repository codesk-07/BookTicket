const User = require("./user");
const Booking = require('./booking');
const Payment = require("./payment");
const Bus = require("./bus");

User.hasMany(Booking, { foreignKey: 'user_id' });
Booking.belongsTo(User, { foreignKey: 'user_id' });


Bus.hasMany(Booking,{foreignKey:'bus_id'});
Booking.belongsTo(Bus,{foreignKey:'bus_id'});



module.exports = {
    Booking,
    User,
    Bus,
    Payment
}