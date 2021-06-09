const express = require('express')
const controller = require('./controller')
const router = express.Router()

router.get('/api/users/all', controller.getAllUsers)

router.post('/api/users/register', controller.registerUser)

router.post('/api/users/login', controller.login)

router.post('/api/users/login', controller.logout)

router.get('/api/user/read-cookies', controller.readCookies)

module.exports = router