require('dotenv/config') 
const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema
const userSchema = new Schema ({
    username:{
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: function(value){
                return validator.isEmail(value)
            },
            message: function(){
                return 'Invalid Email Format'
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128
    },
    location:{
        type: String
        // required: true
    },
    tokens:[{
        token:{
            type: String
        },
        createdAt:{
            type: Date,
            default: Date.now
        }
    }] 
})

//pre hooks
userSchema.pre('save', function(next){
    const user = this
    //if admin password is set then user is set as delivery agent
    if(user.isNew){
        bcryptjs.genSalt(10)
        .then(salt =>{
            bcryptjs.hash(user.password, salt)
            .then(encrpytedPassword =>{
                user.password = encrpytedPassword
                next()
            })
        })
    }else{
        next()
    }   
})

//own static model
userSchema.statics.findByCredentials = function(email, password){
    const User = this
    return User.findOne({email})
        .then(user =>{
            if(!user){
                return Promise.reject({errors:'Invalid E-mail/Password'})
            }
            return bcryptjs.compare(password, user.password)
                    .then(result =>{
                        if(result){
                            return Promise.resolve(user)
                        }else {
                            return Promise.reject({errors:'Invalid E-mail/Password'})
                        }
                    })
        }) 
        .catch(err =>{
            return Promise.reject(err)
        })
}

userSchema.statics.findByToken = function(token){
    const User = this
    let tokenData
    try{
        tokenData = jwt.verify(token,'jwt@123')
    }catch(err){
        return Promise.reject(err)
    }
    return User.findOne({
        _id: tokenData._id,
        'tokens.token': token
    })
}

//own  instance methods
userSchema.methods.generateToken = function(){
    const user = this
    const tokenData = {
        _id:user._id,
        username: user.username,
        createdAt: Number(new Date())
    }
    const token = jwt.sign(tokenData, 'jwt@123')
    user.tokens.push({
        token
    })
    return user.save()
    .then(user => {
        return Promise.resolve(token)
    })
    .catch(err =>{
        return Promise.reject(err)
    })
}

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}