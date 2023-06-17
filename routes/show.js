const { Router } = require('express')
const ShowController = require('../controllers/show')

const router = Router()

router.get('/', ShowController.getShows)
router.get('/:id?', ShowController.getShow)

module.exports = router