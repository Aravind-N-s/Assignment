const mongoose = require('mongoose')

//Schema - Object Constructor Function
const Schema = mongoose.Schema
const BrandSchema = new Schema({
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

const Brand = mongoose.model('Brand', BrandSchema)

module.exports = Brand
