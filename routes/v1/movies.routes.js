const express = require('express')
const router = express.Router()

const moviesController = require('controllers/movies.controller')

router.get('/', moviesController.getAll)
router.get('/:id', moviesController.getOneById)

module.exports = router
