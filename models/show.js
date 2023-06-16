let mongoose = require('mongoose')
let Schema = mongoose.Schema

let ShowSchema = Schema ({
  name: String,
  episodes: Number,
  cast: [{name: String, role: String}]
})

module.exports = mongoose.model('Show',ShowSchema, 'show')