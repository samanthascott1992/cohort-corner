const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    category: { type: String, required: true },
    subject: { type: String, required: true },
    url: { type: String, required: true },
    synopsis: String,
    date: { type: Date, default: Date.now }
});

const Link = mongoose.model("Link", linkSchema);

module.exports = Link;


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// let Todo = new Schema({
//     todo_description: {
//         type: String
//     },
//     todo_responsible: {
//         type: String
//     },
//     todo_priority: {
//         type: String
//     },
//     todo_completed: {
//         type: Boolean
//     }
// });
// module.exports = mongoose.model('Cohort', Cohort);