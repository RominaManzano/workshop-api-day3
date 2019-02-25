'use strict'

const low = require('lowdb')
const Moment = require('moment')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('services/contactData.json')
const db = low(adapter)
const _ = require('underscore')

exports.create = (body, callback) => {
  try {
    const today = Moment();

    body.date = today;

    db.defaults({ contacts: [] })
      .write()

    db.get('contacts')
      .push(body)
      .write()

    return callback(null, body)
  } catch(error) {
    __logger.error('contactServices->create: Error creating contact', error)
    return callback(error, null)
  }
}
