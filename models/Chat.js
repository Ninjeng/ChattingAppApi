const mongoose = require('mongoose');
const ChatSchema = new mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    msgReciver:{
        type:String,
        required:true
    },

    msgSender:{
        type:String,
        required:true
    }
});
module.exports= mongoose.model('Chat',ChatSchema);
