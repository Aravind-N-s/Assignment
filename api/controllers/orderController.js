const Order = require('../models/order')
module.exports.list = (req,res) => {
    const {user} = req
    Order.find({
        user:user._id
    }).sort({createdAt: -1})
    .then((orders) => {
        res.json(orders)
    })
    .catch((err) => {
        res.json(err)
    })
}

//post orders
module.exports.create = (req,res) =>{
    const {user} = req
    const body = req.body
    const order = new Order(body)
    order.user = user._id
    order.save()
        .then((orders) => {
            res.json(orders)
        })
        .catch((err) => {
            res.json(err)
        })

}

//show one order
module.exports.show = (req,res) => {
    const id = req.params.id
    Order.find({
        user:req.user._id,
        _id: id
    }).populate('email')
    .then((order) => {
        if(!order){
            res.json({})
        }
        res.json(order)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.update =  (req, res) => {
    const id = req.params.id
    const body = req.body
    Order.findOneAndUpdate({
        user: req.user._id,
        _id: id
    }, { $set: body }, {new: true, runValidators: true})
    .then((order) => {
        if(!order){
            res.json({})
        }
        res.json(order)
    })
    .catch((err) => {
        res.json(err)
    })
}

//delete a order
module.exports.destroy = (req, res) => {
    const id = req.params.id
    Order.findOneAndDelete({
        user: req.user._id,
        _id:id})
    .then((order) => {
        res.json(order)
    })
    .catch((err) => {
        res.json(err)
    })
}