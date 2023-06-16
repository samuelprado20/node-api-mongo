const express = require('express')

const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middleware
app.use(express.json())
app.use(express.urlencoded())
// routes
app.use('/api/shows', show_routes)

module.exports = app