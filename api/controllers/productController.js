const Product = require('../models/product')
module.exports.list = (req,res) => {
    const {user} = req
    Product.find({
        user:user._id
    }).sort({createdAt: -1})
    .then((products) => {
        res.json(products)
    })
    .catch((err) => {
        res.json(err)
    })
}

//post products
module.exports.create = (req,res) =>{
    const {user} = req
    const body = req.body
    const product = new Product(body)
    product.user = user._id
    product.save()
        .then((products) => {
            res.json(products)
        })
        .catch((err) => {
            res.json(err)
        })

}

//show one product
module.exports.show = (req,res) => {
    const id = req.params.id
    Product.find({
        user:req.user._id,
        _id: id
    }).populate('email')
    .then((product) => {
        if(!product){
            res.json({})
        }
        res.json(product)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.update =  (req, res) => {
    const id = req.params.id
    const body = req.body
    Product.findOneAndUpdate({
        user: req.user._id,
        _id: id
    }, { $set: body }, {new: true, runValidators: true})
    .then((product) => {
        if(!product){
            res.json({})
        }
        res.json(product)
    })
    .catch((err) => {
        res.json(err)
    })
}

//delete a product
module.exports.destroy = (req, res) => {
    const id = req.params.id
    Product.findOneAndDelete({
        user: req.user._id,
        _id:id})
    .then((product) => {
        res.json(product)
    })
    .catch((err) => {
        res.json(err)
    })
}