'use strict';

const moment = require('moment');

exports.getCurrentTime = () => {
	return moment().unix();
}