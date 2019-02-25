'use strict'

const messages = require('catalogs/messages')
const responder = require('helpers/response.helper')
const movieServices = require('services/movie.services')

exports.getAll = (req, res, next) => {
	const options = {
		search: req.query.search || null,
	}

	movieServices.getSearch(options, (error, data) => {
		if (error) {
			__logger.error('getAll: Error retrieving movies', error)
			return next(error);
		}

		return responder.respondData(res, data);
	})
}

exports.getOneById = async (req, res, next) => {
	const id = req.params.id

	if (!id) {
		return responder.respondBadRequest(res, messages.ID_REQUIRED)
	}

	movieServices.getOne(id, (error, data) => {
		if (error) {
			__logger.error(`getOneById: Error getting movie for ID ${id}`, error)
			return next(error);
		}

		return responder.respondData(res, data);
	})
}
