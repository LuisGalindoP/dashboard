const mongoose = require('mongoose');

const dataTestSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, "Add an id"],
        minlength: [4, "Minimum length is 4"],
    },

    amount: {
        type: Number,
        required: [true, "Add an amount"],
    }
}, {timestamps: true});

const dataTest = mongoose.model("dataTest", dataTestSchema);

module.exports = dataTest;