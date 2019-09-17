const mongoose = require('mongoose')

//Schema - Object Constructor Function
const Schema = mongoose.Schema
const TypeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const Type = mongoose.model('Type', TypeSchema)

module.exports = Type
