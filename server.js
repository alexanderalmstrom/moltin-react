// server.js

require('dotenv').config()

const path = require('path')
const express = require('express')

const server = require('./express/api')

server.use(express.static(path.resolve(process.cwd(), 'public')))

server.listen(5000, () => {
  console.log("Listening on port 5000")
})
