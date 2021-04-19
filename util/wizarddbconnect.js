const mongoose = require('mongoose');

const handleError = (error) => {
  log.error('Error connecting', error)
}

mongoose.connect('mongodb://localhost:27017/fpbdatabase').catch(error => handleError(error))

const db = mongoose.connection

module.exports = db