const { Router } = require('express')
const ShowController = require('../controllers/show')

const router = Router()

router.get('/', ShowController.getShows)
router.get('/:id?', ShowController.getShow)
router.post('/save-show', ShowController.saveShow)
router.put('/edit-show/:id?', ShowController.updateShow)
router.delete('/delete-show/:id?', ShowController.deleteShow)

module.exports = router