var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser')

//Url's data
var transactionsData = require('./resources/transactions');
var assetsData = require('./resources/assets');
var statuses = require('./resources/statuses');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('start')
})

app.get('/transactions', (req, res) => {
    res.send(transactionsData)
})

app.get('/transactions/statuses', (req, res) => {
    res.send(statuses)
})

app.get('/assets', (req, res) => {
    res.send(assetsData)
})

app.post('/xablau', (req, res) => {
    var corpo = req.body;
    res.send(console.log(corpo.name))
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})