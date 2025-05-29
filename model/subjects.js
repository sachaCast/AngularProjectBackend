let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SubjectsSchema = Schema({
    subject: String,
    teacher: String
});

module.exports = mongoose.model('subjects', SubjectsSchema);
