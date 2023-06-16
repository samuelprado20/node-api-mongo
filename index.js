let mongoose = require('mongoose')
const app = require('./app')

mongoose.Promise = global.Promise
mongoose.connect('mongodb:localhost:27017/msdb')
  .then(() => {
    console.log('Database connected successfully')

    app.listen(app.get('port'), () => {
      console.log(`Server running at http://localhost:${app.get('port')}`)
    })
  })
  .catch(err => console.error(err))