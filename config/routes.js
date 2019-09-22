const express = require ('express')
const router = express.Router()
const orderController = require('../api/controllers/orderController')
const brandController = require('../api/controllers/brandController')
const typeController = require('../api/controllers/typeController')
const {authenticateUser} = require('../api/middleware/authentication')

router.get('/orders',authenticateUser, orderController.list)
router.post('/orders',orderController.create)
router.put('/orders/:id',authenticateUser, orderController.update)

router.get('/brands', brandController.list)
router.post('/brands',authenticateUser, brandController.create)
router.put('/brands/:id',authenticateUser, brandController.update)
router.delete('/brands/:id',authenticateUser, brandController.destroy)

router.get('/type', typeController.list)
router.post('/type',authenticateUser, typeController.create)
router.put('/type/:id',authenticateUser, typeController.update)
router.delete('/type/:id',authenticateUser, typeController.destroy)

module.exports = router