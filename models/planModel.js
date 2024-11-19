
const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    validity: { type: Number, required: true }, // validity in days
}, {
    timestamps: true
});

module.exports = mongoose.model('Plan', planSchema);
