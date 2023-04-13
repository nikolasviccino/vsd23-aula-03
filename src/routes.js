const { Router } = require('express')

const { createCart } = require('./controllers') 

const routes = Router()

routes.post('/cart', createCart)




module.exports = routes 