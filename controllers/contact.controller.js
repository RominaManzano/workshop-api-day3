'use strict'

const messages = require('catalogs/messages')
const contactHelper = require('helpers/contact.helper')
const responder = require('helpers/response.helper')
const contactServices = require('services/contact.services')

exports.create = async (req, res, next) => {
	const body = req.body

	if (!contactHelper.validateRegisterRequest(body)) {
		__logger.error('Los campos name, email y message son requeridos')
		return responder.respondBadRequest(res, messages.MISSING_FIELDS);
	}

	contactServices.create(body, (error, data) => {
		if (error) {
			__logger.error('create: Error creating contact', error)
			return next(error);
		}

		return responder.respondData(res, data);
	})
}
