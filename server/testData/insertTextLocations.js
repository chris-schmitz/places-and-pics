let mongo = require('mongodb')
let MongoClient = mongo.MongoClient
let assert = require('assert')
let co = require('co')

let url = "mongodb://localhost:27017/placesandpics"

co(function*(){
    let testData = require('./locations.js')
    let db = yield MongoClient.connect(url)
    let locations = db.collection('locations')

    let cleared = yield locations.remove({})
    let inserted = yield locations.insertMany(testData)

    console.log(inserted)
}).catch((err) => {
    console.log(JSON.stringify(err))
})