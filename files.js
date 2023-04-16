const mongoose = require("mongoose");

const files = mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    filename: {
        type: String,
        required: true,
    },
    savedfilename: {
        type: String,
        required: true,
    },
    filetype: {
        type: String,
        required: true,
    },
    filepath: {
        type: String,
        required: true,
    },
    filesize: {
        type: Number,
        default: 0,
    },
    visibleToEveryone: {
        type: Boolean,
        default: true,
    },
    sharewith: {
        type: Array,
        default: [],
    },
}, {timestamps: true});

module.exports = mongoose.model("Files", files)