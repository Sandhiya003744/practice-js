const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,   
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

});

const Myself = mongoose.model("Myself", schema);
module.exports = Myself;