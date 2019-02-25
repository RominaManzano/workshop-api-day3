'use strict';

const input = (req, res, next) => {
  __logger.info('## Req URL: ' + req.originalUrl)
  __logger.info('## Req HEADERS: ' + JSON.stringify(req.headers))
  __logger.info('## Req BODY: ' + JSON.stringify(req.body))
  next()
}

const output = (res, body = {}) => {
  __logger.info('## Res STATUS: ' + res.statusCode)
  __logger.info('## Res BODY: ' + JSON.stringify(body))
}

exports.input = input
exports.output = output