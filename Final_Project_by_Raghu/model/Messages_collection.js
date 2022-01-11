const mongoose = require('mongoose')
const Schema = mongoose.Schema

let MessagesSchema = new Schema({
    from:{
        type:String,
        required:true,
        max:100
    },
    to:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true
    }
})
//export module
module.exports = mongoose.model('Messages',MessagesSchema)