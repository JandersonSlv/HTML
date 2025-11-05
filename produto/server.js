const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const produtosRouter = require('./routes/produtos');

app.use(bodyParser.json());
app.use('/produtos', produtosRouter);
app.use(express.static(path.join(__dirname, 'public'))); // serve arquivos estáticos

app.listen(4400, () => {
    console.log('Servidor rodando na porta 4400');
});
