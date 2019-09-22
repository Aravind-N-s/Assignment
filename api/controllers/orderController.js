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
    const body = req.body
    const order = new Order(body)
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
    Order.find({_id: id})
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
    Order.findByIdAndUpdate({
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