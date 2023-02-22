const db = require('mongoose');
const bcrypt = require('bcrypt');

let userSchema = new db.Schema({
    firstName : {
        require : true,
        type : String
    },

    lastName : {
        require : true,
        type : String
    },

    email : {
        require : true,
        type : String,
        unique : true
    },
    password : {
        require : true,
        type : String,
    },
}).pre('save', async function (next){
    var password = this.password;

    next();
});

module.exports = db.model('Users', userSchema)