const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const produtosRouter = require('./routes/produtos');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/produtos', produtosRouter);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
