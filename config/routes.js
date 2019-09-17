const express = require ('express')
const router = express.Router()
const productController = require('../api/controllers/productController')
const brandController = require('../api/controllers/brandController')
const typeController = require('../api/controllers/typeController')
const {authenticateUser} = require('../api/middleware/authentication')

router.get('/orders',authenticateUser, productController.list)
router.get('/orders/:id',authenticateUser, productController.show)
router.post('/orders',authenticateUser, productController.create)
router.put('/orders/:id',authenticateUser, productController.update)
router.delete('/orders/:id',authenticateUser, productController.destroy)

router.get('/brands', brandController.list)
// router.get('/brands/:id',authenticateUser, brandController.show)
router.post('/brands',authenticateUser, brandController.create)
router.put('/brands/:id',authenticateUser, brandController.update)
router.delete('/brands/:id',authenticateUser, brandController.destroy)

router.get('/type', typeController.list)
// router.get('/type/:id',authenticateUser, typeController.show)
router.post('/type',authenticateUser, typeController.create)
router.put('/type/:id',authenticateUser, typeController.update)
router.delete('/type/:id',authenticateUser, typeController.destroy)

module.exports = router