const validator = require('utils/validator');

exports.validateRegisterRequest = (bodyFields) => {

	if (validator.isNullOrEmpty(bodyFields.name)) {
		return false
	}

	if (validator.isNullOrEmpty(bodyFields.email)) {
		return false
	}

	if (validator.isNullOrEmpty(bodyFields.message)) {
		return false
	}

	return true
}