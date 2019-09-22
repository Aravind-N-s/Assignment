const Order = require('../models/order')
//get all orders
module.exports.list = (req,res) => {
    Order.find().populate('type',['name']).populate('brand',['name']).sort({createdAt: -1})
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

//update one order
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
//can link to delivery schema to set as dispatched

//delete can be set when delivery is confirmed