'use strict'

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('services/moviesData.json')
const db = low(adapter)
const _ = require('underscore')

exports.getSearch = (options, callback) => {
  try {
    const search = options.search
    let movies = []

    if (search){
      db._.mixin({
        search: function(movies) {
          return _.filter(movies, function(movie){ return movie.Title.toLowerCase().includes(search.toLowerCase());});
        }
      })

      movies = db.get('movies').search().value()
    } else {
      movies = db.get('movies')
    }

    return callback(null, movies)
  } catch (error) {
    __logger.error('movieServices->getSearch: Error get search', error)
    return callback(error, null)
  }
}

exports.getOne = (id, callback) => {
  try {
    const movie = db.get('movies').find({imdbID: id}).value();

    if (!movie) {
      const error = new Error('It seems that the movie you are looking for does not exist!');
      __logger.error('movieServices->getOne: Error get one', error);
      return callback(error, null);
    }

    return callback(null, movie);
  } catch (error){
    __logger.error('movieServices->getOne: Error get one', error);
    return callback(error, null);
  }
}
