const Brand = require('../models/brand')

//list brand to every one
module.exports.list = (req,res) => {
    Brand.find().sort({createdAt: -1})
    .then((brands) => {
        res.json(brands)
    })
    .catch((err) => {
        res.send(err)
    })
}

//post brands by user only
module.exports.create = (req,res) =>{
    const {user} = req
    const body = req.body
    const brand = new Brand(body)
    brand.user = user._id
    brand.save()
        .then((brands) => {
            res.json(brands)
        })
        .catch((err) => {
            res.json(err)
        })

}

//edit brands by user only
module.exports.update =  (req, res) => {
    const id = req.params.id
    const body = req.body
    Brand.findOneAndUpdate({
        user: req.user._id,
        _id: id
    }, { $set: body }, {new: true, runValidators: true})
    .then((brand) => {
        if(!brand){
            res.json({})
        }
        res.json(brand)
    })
    .catch((err) => {
        res.json(err)
    })
}

//delete brands by user only
module.exports.destroy = (req, res) => {
    const id = req.params.id
    Brand.findOneAndDelete({
        user: req.user._id,
        _id:id})
    .then((brand) => {
        res.json(brand)
    })
    .catch((err) => {
        res.json(err)
    })
}