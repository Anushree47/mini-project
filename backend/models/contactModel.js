const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    message : { type: String, required: true },
    city: { type: String, default: 'unknown' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('contact', mySchema);