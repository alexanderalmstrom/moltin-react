// server.js

const path = require('path')
const express = require('express')

const app = require('./app/')

app.use(express.static(path.resolve(process.cwd(), 'public')))

app.listen(5000, () => {
  console.log("Listening on port 5000")
})
