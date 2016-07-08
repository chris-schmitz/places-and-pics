let fs = require('fs')
let path = require('path')
let express = require('express')
let app = express()
let http = require('http').Server(app)
let io = require('socket.io')(http)
let webroot = path.resolve(__dirname, '../public')
let multer = require('multer')
let upload = multer({dest: 'public/images/'})

let MongoClient = require('mongodb').MongoClient
let assert = require('assert')
let url = 'mongodb://localhost:27017/placesandpics'
let co = require('co')


app.use(express.static('public'))
let PORT = 3000


app.get('/', (req,res) => {
    res.sendFile(`${webroot}/app.html`)
})

io.on('connection', (socket) => {
    console.log('Socket.io user connected')
    socket.on('newimage', function (msg){
        // io.emit('newimageadded', msg)
    })
})

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

app.post('/images', upload.single('file'), (req, res) => {
    co(function*(){
        let path = `images/${req.file.filename}`
        let newImage = {src: path, date: new Date()}
        console.log(newImage, req.body.locationId)

        let db = yield MongoClient.connect(url)
        let updated = yield db.collection('locations').update({_id: `ObjectId(${req.body.locationId})`},{"$push": {images: newImage }})
        // assert.equal(1, updated.matchCount)
        // assert.equal(1, update.modifiedCount)

        io.emit('newimage', { path: path, locationId: req.body.locationId})
        res.json({status: 'ok', message: 'File successfully added.'})
    }).catch((error) => {
        console.log(error)
        io.emit('error.newimage', {message: 'There was an error when attempting to save the file to the location.'})
        res.json({status: 'error'})
    })
})


http.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})