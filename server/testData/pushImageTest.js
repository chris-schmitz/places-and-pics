let MongoClient = require('mongodb').MongoClient
let mongo = require('mongodb')
let co = require('co')
let path = require('path')
let assert = require('assert')

let url = "mongodb://localhost:27017/placesandpics"

let req = {
    file: {filename: "testname.png"},
    body: {locationId: "577f1664c51199627f534500"}
}

co(function*(){
    let imagePath = `images/${req.file.filename}`
    let newImage = {src: imagePath, date: new Date()}

    let db = yield MongoClient.connect(url)
    let locations = db.collection('locations')

    let targetId = new mongo.ObjectID(req.body.locationId);

    let updatedLocation = yield locations.update({_id: targetId},{"$push": {images: newImage }})
    console.log('updated location: ', updatedLocation)

    db.close()
}).catch((error) => {
    console.log(JSON.stringify(error))
    db.close()
})

