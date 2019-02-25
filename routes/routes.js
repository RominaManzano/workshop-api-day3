'use strict'

const responder = require('helpers/response.helper')

// Require api-docs routes
const index = require('routes/index')

// Require routes
const moviesRoutes = require('routes/v1/movies.routes')
const contactRoutes = require('routes/v1/contact.routes');

module.exports = function (app) {
	// App routes
	app.use('/v1/movies', moviesRoutes)
	app.use('/v1/contact', contactRoutes)

	app.use(responder.notFound)
	app.use(responder.error)
}
