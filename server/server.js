let fs = require('fs')
let path = require('path')
let express = require('express')
let app = express()
let http = require('http').Server(app)
let io = require('socket.io')(http)
let webroot = path.resolve(__dirname, '../public')
let multer = require('multer')
let upload = multer({dest: 'public/images/'})

let mongo = require('mongodb')
let MongoClient = mongo.MongoClient
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
        io.emit('newimageadded', msg)
    })
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
        let targetId = new mongo.ObjectID(req.body.locationId)
        let updated = yield db.collection('locations').update({_id: targetId},{"$push": {images: newImage }})
        assert.equal(1, updated.result.nModified)

        db.close()
        io.emit('newimage', { path: path, locationId: req.body.locationId})
        res.json({status: 'ok', message: 'File successfully added.'})
    }).catch((error) => {
        console.log(error)
        db.close()
        io.emit('error.newimage', {message: 'There was an error when attempting to save the file to the location.'})
        res.json({status: 'error'})
    })
})


http.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})