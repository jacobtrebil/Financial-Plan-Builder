const mongoose = require('mongoose');

export async function connectToDatabase() {
try {
    mongoose.connect('mongodb://localhost:27017/fpbdatabase', { useUnifiedTopology: true, useNewUrlParser: true }, function(){console.log(mongoose.connection.readyState);});
  } catch (error) {
    handleError(error);
  }
}