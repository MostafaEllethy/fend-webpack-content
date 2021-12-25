var path = require('path')
const express = require('express')
var cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(cors({
    origin: 'http://localhost:8080'
}))

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
