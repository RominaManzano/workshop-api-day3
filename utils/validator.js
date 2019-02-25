'use strict'

const validatorEmail = require("email-validator");

exports.isValidPassword = (password) => {
	if (password.length < 6 || password.length > 15) {
		return false
	} else {
		return true
	}
}

exports.isNullOrEmpty = (string) => {
	if ((string === undefined) || (!string) || (string === "")) {
		return true
	} else {
		return false
	}
}

exports.isNullOrUndefined = (object) => {
	if ((typeof object === "undefined") || (!object)) {
		return true
	} else {
		return false
	}
}

exports.isUndefined = (object) => {
	if (object === undefined) {
		return true
	} else {
		return false
	}
}

exports.isEmpty = (object) => {
	if (!Object.keys(object).length) {
		return true
	} else {
		return false
	}
}

exports.isBooleanNullOrUndefined = (object) => {
	if ((typeof object === "undefined") || (object === null)) {
		return true
	} else {
		return false
	}
}

exports.isValidEmail = (email) => {
	return validatorEmail.validate(email)
}