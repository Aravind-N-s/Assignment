const express = require ('express')
const router = express.Router()
const productController = require('../api/controllers/productController')
const {authenticateUser} = require('../api/middleware/authentication')

router.get('/products',authenticateUser, productController.list)
router.get('/products/:id',authenticateUser, productController.show)
router.post('/products',authenticateUser, productController.create)
router.put('/products/:id',authenticateUser, productController.update)
router.delete('/products/:id',authenticateUser, productController.destroy)

module.exports = router