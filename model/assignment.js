let mongoose = require('mongoose');
const subjects = require('./subjects');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    author: String,
    dueDate: Date,
    name: String,
    grade: String,
    submitted: Boolean,
    note: String,
    subject: String,
    teacher: String,
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
