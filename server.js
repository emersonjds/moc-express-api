const restify = require('restify');
const cors = require('cors');
const porta = 3000
const bodyParser = require('body-parser')
const servidor = restify.createServer()
const transactionsData = require('./resources/transactions');
const assetsData = require('./resources/assets');

servidor.use(restify.plugins.bodyParser({ "params": true })); servidor.use(cors.actual);

servidor.get('/transactions', (req, res) => {
    res.send(transactionsData);
});

servidor.get('/assets', (req, res) => {
    res.send(assetsData);
})

servidor.listen(porta, () => {
    console.log(`Servidor de pé em http://localhost:${porta}`)
    console.log('Pra derrubar o servidor: ctrl + c')
});