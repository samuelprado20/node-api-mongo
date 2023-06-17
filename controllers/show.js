let Show = require('../models/show')

const controller = {
  getShows: function (req, res) {
    Show.find({}).exec()
      .then(showsList => {
        if (!showsList) return res.status(404).send({message: "No data found"})
        console.log(showsList)
        return res.status(200).json(showsList)
      })
      .catch(err => res.status(500).send({message: `Error: ${err}`}))
  }
}

module.exports = controller