'use strict'

const messages = require('catalogs/messages')
const IOLogger = require('middleware/IOlogger.middleware')

const respond = (res, response) => {
	IOLogger.output(res, response)
	res.send(response)
}

exports.respondData = (res, data) => {
	let response = {}
	response.status = true
	response.data = data
	response.message
	res.status(200)

	respond(res, response)
}

exports.respondDataSDK = (res, data, msg) => {
	let response = {}
	response.status = true
	response.data = data
	response.message = msg
	res.status(200)

	respond(res, response)
}

exports.respondMessage = (res, message) => {
	let response = {}
	response.status = true
	response.message = message
	res.status(200)

	respond(res, response)
}

exports.respondBadRequest = (res, message) => {
	let response = {}
	response.status = false
	response.message = message ? message : messages.BAD_REQUEST
	res.status(400)

	respond(res, response)
}

exports.respondUnauthorized = (res, message) => {
	let response = {}
	response.status = false
	response.message = message ? message : messages.UNAUTHORIZED
	res.status(401)

	respond(res, response)
}

exports.respondForbidden = (res) => {
	let response = {}
	response.status = false
	response.message = messages.FORBIDDEN
	res.status(403)

	respond(res, response)
}

exports.respondNotFound = (res) => {
	let response = {}
	response.status = false
	response.message = messages.NOT_FOUND
	res.status(404)

	respond(res, response)
}


exports.notFound = (req, res, next) => {
	let response = {}
	response.status = false
	response.message = messages.URL_NOT_FOUND
	res.status(404)

	respond(res, response)
}

exports.error = (err, req, res, next) => {
	let response = {}
	response.status = false
	response.message = err.message
	res.status(err.status || 500)

	respond(res, response)
}
