const { Schema, model } = require('../connection');

const ToolSchema = new Schema({
    name: { type : String, required: true },
    title : { type : String, required: true },
    category : { type : String, required: true },
    price: { type : Number, required: true},
    features : { type : String, required: true },
    description: { type : String}
  //  image : { type: String, required: true },
    // createdAt: { type: Date, default: Date.now }
});

module.exports = model('tool', ToolSchema);