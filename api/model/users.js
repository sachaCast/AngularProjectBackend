let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UsersSchema = Schema({
    user: String,
    password: String
});

module.exports = mongoose.model('users', UsersSchema);
