const express = require('express')
const show_routes = require('./routes/show')

const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use('/api/shows', show_routes)

module.exports = app