const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    status: String,
    createdAt: Date,
})

module.exports = mongoose.model('User', userSchema)