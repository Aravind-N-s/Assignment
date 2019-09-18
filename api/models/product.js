const mongoose = require('mongoose')
const validator = require('validator')
//Schema - Object Constructor Function
const Schema = mongoose.Schema
const ProductSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        validate:{
            validator: function(value){
                return validator.isEmail(value)
            },
            message: function(){
                return 'Invalid Email Format'
            }
        }
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
    brand:{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    location:{
        type: String,
        required: true
    },
    type:{
        type: Schema.Types.ObjectId,
        ref: 'Type',
        required: true
    },
    delivery:{
        type: Date,
        required: false
    },
    hasKids:{
        type: Boolean,
        default: false
    },
    phoneNo: {
        type: Number,
        required: true,
        unique: true,
        validate:{
            validator: function(value){
                return validator.isMobilePhone(value[en-IN])
            },
            message: function(){
                return 'Invalid Email Format'
            }
        },
        maxLength:10
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
