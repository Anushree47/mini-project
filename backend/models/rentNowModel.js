const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    product: { type: Types.ObjectId, ref: "product" },
    fullName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: Number,
        required: true,
    },
    address:
    {
        type: String,
        required: true
    },
    category:
    {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    }
});
module.exports = model('rentNow', mySchema);