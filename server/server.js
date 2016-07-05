let express = require('express')
let app = express()
// note that setting this means the public directory will be accessible as the web root
// and the index.html file will be loaded directly, i.e. there's no need for an
// app.get('/',...) route
app.use(express.static('public'))
let PORT = 3000


let MongoClient = require('mongodb').MongoClient
let assert = require('assert')
let url = 'mongodb://localhost:27017/placesandpics'
let co = require('co')

app.post('/inserttestdata', (req,res) => {
    co(function*(){
        let db = yield MongoClient.connect(url)
        console.log('Connected to mongo server')
        let locations = require('./testData/locations.js')
        let result = yield db.collection('locations').insertMany(locations)
        assert.equal(4, result.insertedCount)
        db.close()
        console.log('Data inserted into Mongo')
    }).catch((error) => {
        console.log(error.stack)
    })
    res.send('Test data inserted successfully')
})


app.get('/locations', (req, res) => {

    co(function*(){
        let db = yield MongoClient.connect(url)
        let locations = yield db.collection('locations').find({}).toArray()
        db.close()
        res.json({locations})
    }).catch((error) => {
        console.log(error.stack)
    })

})

app.post('/images', (req, res) => {
    res.json({ test: "worked"})
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})