// api.js

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
  res.status(200).send("Hello api!")
})

router.post('/say/hello', (req, res, next) => {
  if (!req.body || !req.body.name) {
    res.status(500).send("Please enter your name!")
    return
  }

  res.status(200).send(`Hello ${req.body.name}!`)
})

app.use('/api', router)
app.use('/.netlify/functions/api', router)

module.exports = app
module.exports.handler = serverless(app)