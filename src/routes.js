const { Router } = require('express')

const { hello1, hello2 } = require('./controllers') 

const routes = Router()

routes.get('/hello', hello1)

routes.get('/hello2', hello2)

  module.exports = routes 