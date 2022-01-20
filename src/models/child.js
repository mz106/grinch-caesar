
const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");


// const childSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     isNaughty: {
//         type: Boolean,
//         required: true
//     }
// });

// const Child = mongoose.model("children", childSchema)

const Child = mongoose.model("children", {
    name: String,
    isNaughty: Boolean
});

module.exports = Child;