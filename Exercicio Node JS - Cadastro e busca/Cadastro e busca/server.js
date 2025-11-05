const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Servir arquivos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rotas de produtos
const rotasProdutos = require('./routes/produtos');
app.use('/', rotasProdutos);

// Rotas de páginas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/busca', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'busca.html'));
});

// Iniciar servidor
app.listen(3000, () => {
    console.log("🚀 Servidor rodando em http://localhost:3000");
});
