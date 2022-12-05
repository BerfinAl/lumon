const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Profession: String,
    Address: String,
    Education: String,
    Gender: {
        type: String,
        enum: ['Female', 'Male'],
    }
})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee