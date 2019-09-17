const mongoose = require('mongoose')

//Schema - Object Constructor Function
const Schema = mongoose.Schema
const ProductSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    units:{
        type: Number,
        required: true,
    },
    location:{
        type: String,
        required: true
    },
    note:{
        type: String,
        default: null
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    brand:{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    type:{
        type: Schema.Types.ObjectId,
        ref: 'Type',
        required: true
    },
    delivery:{
        type: Date,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
