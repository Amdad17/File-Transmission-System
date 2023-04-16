const mongoose = require("mongoose");

const users = mongoose.Schema({
    name : {
        type: String,
        required: false,
    },
    email : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
}, {timestamps: true});

module.exports = mongoose.model("Users", users)