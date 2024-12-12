const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    address: { type: String, required: true },
    item: { type: String, default: 'unknown' },
    duration: { type: String, default: 'unknown' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('rentNow', mySchema);