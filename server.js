var express = require('express')
var app = express()
var cors = require('cors')
var transactionsData = require('./resources/transactions');
var assetsData = require('./resources/assets');

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/transactions', (req, res) => {
    res.send(transactionsData)
})

app.get('/assets', (req, res) => {
    res.send(assetsData)
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})