let Show = require('../models/show')

const controller = {
  getShows: function (req, res) {
    Show.find({}).exec()
      .then(showsList => {
        if (!showsList) return res.status(404).send({message: "No data found"})
        return res.status(200).json(showsList)
      })
      .catch(err => res.status(500).send({message: `Error: ${err}`}))
  },
  getShow: function (req, res) {
    let showId = req.params.id
    if (showId == null) return res.status(404).send({message: "show not found"})

    Show.findById(showId).exec()
      .then(data => {
        if (!data) return res.status(404).send({message: "Show not found"})
        return res.status(200).json(data)
      })
      .catch(err => res.status(500).send({message: `Internal error-> ${err}`}))
  }
}

module.exports = controller