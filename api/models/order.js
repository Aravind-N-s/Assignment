const mongoose = require('mongoose')
const validator = require('validator')
//Schema - Object Constructor Function
const Schema = mongoose.Schema
const OrderSchema = new Schema({
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
    phoneNo: {
        type: String,
        required: true,
        unique: true,
        maxLength:10,
        validate:{
            validator: function(value){
                return validator.isMobilePhone(value)
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
    note:{
        type: String,
        default: null
    },
    brand:[{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    }],
    type:[{
        type: Schema.Types.ObjectId,
        ref: 'Type',
        required: true
    }],
    location:{
        latitude:{
            type: Number,
            required: true
        },
        longitude:{
            type: Number,
            required:true
        }
    },
    delivery:{
        type: Boolean,
        default: false
    },
    hasKids:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order
