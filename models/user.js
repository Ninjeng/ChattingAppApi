const mongoose = require('mongoose');
const User = mongoose.Schema({
    studentId:{
        type: String,
        required: true
    },
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    batch:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model('User',User);