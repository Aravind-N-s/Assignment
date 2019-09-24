const Type = require('../models/type')
//show type in all types
module.exports.list = (req,res) => {
    Type.find().sort({createdAt: -1})
    .then((types) => {
        res.json(types)
    })
    .catch((err) => {
        res.json(err)
    })
}

//post types
module.exports.create = (req,res) =>{
    const {user} = req
    const body = req.body
    const product = new Type(body)
    product.user = user._id
    product.save()
        .then((types) => {
            res.json(types)
        })
        .catch((err) => {
            res.json(err)
        })

}

//show one type
module.exports.show = (req,res) => {
    const id = req.params.id
    Type.find({
        user:req.user._id,
        _id: id
    }).populate('email')
    .then((type) => {
        if(!type){
            res.json({})
        }
        res.json(type)
    })
    .catch((err) => {
        res.json(err)
    })
}
//update a specific type
module.exports.update =  (req, res) => {
    const id = req.params.id
    const body = req.body
    Type.findOneAndUpdate({
        user: req.user._id,
        _id: id
    }, { $set: body }, {new: true, runValidators: true})
    .then((type) => {
        if(!type){
            res.json({})
        }
        res.json(type)
    })
    .catch((err) => {
        res.json(err)
    })
}

//delete a type
module.exports.destroy = (req, res) => {
    const id = req.params.id
    Type.findOneAndDelete({
        user: req.user._id,
        _id:id})
    .then((type) => {
        res.json(type)
    })
    .catch((err) => {
        res.json(err)
    })
}