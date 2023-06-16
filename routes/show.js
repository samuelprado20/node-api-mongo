const { Router } = require('express')
const ShowController = require('../controllers/show')

const router = Router()

router.get('/', ShowController.getShows)

module.exports = router