const mongoose=require('mongoose');

//User Schema
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

const Userdb = mongoose.model('userdb', userSchema);
module.exports = Userdb;