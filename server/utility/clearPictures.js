let MongoClient = require('mongodb').MongoClient
let mongo = require('mongodb')
let co = require('co')
let path = require('path')
let assert = require('assert')

let url = "mongodb://localhost:27017/placesandpics"


co(function*(){
    let db = yield MongoClient.connect(url)
    let locations = db.collection('locations')

    let updated = yield locations.updateMany({},{"$set": {images: [] }})
    assert.equal(1, updated.result.ok)

    db.close()
}).catch((error) => {
    console.log(JSON.stringify(error))
    db.close()
})

