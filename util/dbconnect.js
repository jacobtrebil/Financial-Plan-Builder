

const mongoose = require('mongoose');

export default async function connectToDatabase() {
try {
    mongoose.connect('mongodb://localhost:27017/fpbdatabase', { useUnifiedTopology: true, useNewUrlParser: true }, function(){console.log(mongoose.connection.readyState);});
  } catch (error) {
    handleError(error);
  }

  const db = mongoose.connection

  const dbReady = new Promise((resolve) => {
    db.once('open', async () => {
      resolve()
    })
  })

  await dbReady;

  return db;
}

/* const createAccount = async () => {
  await dbReady
  const result = await Account.create({...})
} */ 
// Add this after Schema