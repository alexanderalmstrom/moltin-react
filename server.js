// server.js

const path = require('path')
const express = require('express')

const server = require('./server/api')

server.use(express.static(path.resolve(process.cwd(), 'public')))

server.listen(5000, () => {
  console.log("Listening on port 5000")
})
