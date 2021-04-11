const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'
// const mongoose = require('mongoose')

const dbName = 'fpbdatabase'
let db
const url = 'mongodb://127.0.0.1:27017';

MongoClient.connect(url, { useNewUrlParser: true}, (err, client) => {
    if (err) return console.log(err)

    db = client.db(dbName)
    console.log(`Connected MongoDB: ${url}`)
    console.log(`Database: ${dbName}`)
})

/* mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

let mongoose = require('mongoose');

db = mongoose.connect('mongodb://localhost/fpbdatabase');

console.log(`MongoDB Connected: ${url}`); */