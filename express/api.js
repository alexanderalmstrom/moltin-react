// api.js

const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

router.use('*', (req, res, next) => {
  console.log('Someting is happening')
  next()
})

router.post('/cart/add', (req, res) => {
  console.log(req.body)

  res.status(200).json({ message: `${req.body.product} added to cart!` })
})

app.use('/api', router)
app.use('/.netlify/functions/api', router)

module.exports = app
module.exports.handler = serverless(app)