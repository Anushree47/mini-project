// const { Schema, model } = require('../connection');

// const mySchema = new Schema({
//     name: String,
//     email: { type: String, unique: true },
//     address: { type: String, required: true },
//     item: { type: String, default: 'unknown' },
//     duration: { type: String, default: 'unknown' },
//     createdAt: { type: Date, default: Date.now }
// });



const { default: mongoose } = require('mongoose');
const { Schema, model } = require('../connection');

const mySchema = new Schema({
    Name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required:true,
    },

    phoneNumber: {
        type: Number,
        required: true,
    },
    address:
     { type: String, 
    required: true
 },
    category:
     { type: String, 
    required: true
 },

    duration: {
        type: Number,
        required: true,
    },
    totalAmnt: {
        type: Number,
        required: true,
    },

    toolId: {type: mongoose.Schema.Types.ObjectId, ref: 'tools', required: true},

    submittedAt: {
        type:Date,
        default: Date.now,
    },

    
    
});
module.exports = model('rentNow', mySchema);