// server.js

const path = require('path')
const express = require('express')
const http = require('http')

const apiCart = require('./api/cart')

const app = express()
const server = http.createServer(app)

app.use(apiCart)

app.use(express.static(path.resolve(process.cwd(), 'public')))

server.listen(5000, () => {
  console.log("Listening on port %s", server.address().port)
})
