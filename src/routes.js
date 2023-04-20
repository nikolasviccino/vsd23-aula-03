const { Router } = require('express')

const { createCart, getListOfCart, createUserCart } = require('./controllers') 

const routes = Router()

routes.post('/cart', createCart)

routes.get('/cart', getListOfCart)

routes.post('/cart/user-cart', createUserCart)

module.exports = routes 