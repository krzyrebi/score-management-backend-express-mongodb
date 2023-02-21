const express = require('express')
const router = express.Router()
const actions = require('../controllers/controllers')

router.get('/api/games', actions.getAllGames);
router.get('/api/games/:id', actions.getGame)
router.post('/api/games', actions.addGame);
router.put('/api/games/:id', actions.updateGame)
router.delete('/api/games/:id', actions.deleteGame)

module.exports = router;