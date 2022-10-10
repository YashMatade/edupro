var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
    trainerid: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imagepath: { type: String, required: true },
    mrp: { type: String, required: true },
    price: { type: String, required: true },
});

var Course = mongoose.model("courses",schema);
module.exports = Course;