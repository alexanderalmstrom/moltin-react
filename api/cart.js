const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

router.get('/', (req, res, next) => {
  res.status(200).send("Cart api endpoint!")
})

router.post('/add', (req, res, next) => {
  res.status(200).json(req.body)
})

app.use('/cart', router)
app.use('/.netlify/functions/cart', router)

module.exports = app
module.exports.handler = serverless(app)