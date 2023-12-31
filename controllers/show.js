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
  },
  saveShow: function (req, res) {
    let show = new Show()
    const {name, episodes, cast} = req.body
    if (name && episodes) {
      show.name = name
      show.episodes = episodes
      show.cast = null
      
      show.save()
        .then(storedShow => {
          storedShow
            ? res.status(200).json({show: storedShow})
            : res.status(404).send({message: "Error saving the document"})
        })
        .catch(error => res.status(500).send({message: "Error while saving the document"}))
    } else {
      return res.status(400).send({message: "Data is not right"})
    }
  },
  updateShow: function (req, res) {
    let showId = req.params.id
    let update = req.body

    Show.findByIdAndUpdate(showId, update, {returnDocument: 'after'})
      .then(updatedShow => {
        if(!updatedShow) return res.status(404).send({message: "The document does not exist"})
        return res.status(200).send({show: updatedShow})
      })
      .catch(error => res.status(500).send({message: `Error while updating ${error}`}))
  },
  deleteShow: function (req, res) {
    let showId = req.params.id

    Show.findByIdAndRemove(showId)
      .then(removedShow => {
        if (!removedShow) return res.status(404).send({message: "The show does not exist"})
        return res.status(200).send({show: removedShow})
      })
      .catch(err => res.status(500).send({message: "Error while deleting"}))
  }
}

module.exports = controller