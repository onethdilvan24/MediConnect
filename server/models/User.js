const e = require('express');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:string,
    email:string,
    password:string,
    id:string,
    
})

const User = mongoose.model('User', UserSchema);
module.exports = UserModel;