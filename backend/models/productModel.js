const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    features: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String, required: true }

});

module.exports = model('product', mySchema);