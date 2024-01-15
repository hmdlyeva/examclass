const router = require('express').Router()
const controllers = require('../controller/controllers')

router.get('/users', controllers.getAllUsers)
router.delete('/users/:id', controllers.deleteUser)
router.post('/users', controllers.postUser)


module.exports = router