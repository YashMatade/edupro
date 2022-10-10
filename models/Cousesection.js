var mongoose = require("mongoose");
var Schema = mongoose.Schema

var schema = new Schema({
    courseid: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    srno: {
        type: Number,
        required: true
    }
});

var Cousesection = mongoose.model("cousesections", schema);

module.exports = Cousesection;
