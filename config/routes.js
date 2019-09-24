//all routes are listed here so they can be modular and can be located
const express = require ('express')
const router = express.Router()
const orderController = require('../api/controllers/orderController')
const brandController = require('../api/controllers/brandController')
const typeController = require('../api/controllers/typeController')
const {authenticateUser} = require('../api/middleware/authentication') //middleware to check if the user information is provided


router.get('/orders',authenticateUser, orderController.list) //middleware here so any user can view the order for dispatching the order
router.post('/orders',orderController.create)  // no middleware here so any user can create the order
router.put('/orders/:id',authenticateUser, orderController.update) //used to set delivery as complete
//deleting the order is set up when order is delivered

router.get('/brands', brandController.list)
router.post('/brands',authenticateUser, brandController.create)
router.put('/brands/:id',authenticateUser, brandController.update)
router.delete('/brands/:id',authenticateUser, brandController.destroy)

router.get('/type', typeController.list)
router.post('/type',authenticateUser, typeController.create)
router.put('/type/:id',authenticateUser, typeController.update)
router.delete('/type/:id',authenticateUser, typeController.destroy)

module.exports = router