const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type : String,
        required: true
    }
})

module.exports = mongoose.model("User", userSchema) 