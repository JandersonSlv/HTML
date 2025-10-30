const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql2');

const app = express();

// Configurações básicas
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));


// Conexão com banco
const connection = mysql.createConnection({
    host: 'localhost', // Seu host (geralmente locahost)
    user: 'root', // Seu usuário do MySQL
    password: 'cimatec', // Sua senha do MySQL
    database: 'aula2910' // O nome do banco de dados
});


connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar no MySQL:', err.message);
        return;
    }
    console.log('Conexão com MySQL estabelecida com sucesso!');
    //connection.end();
});


// Rota principal (página do formulário)
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Rota para receber o POST do formulário
app.post('/salvar', (req, res) => {
    const {nome, email, telefone} = req.body;
    const sql = 'INSERT INTO usuarios (nome, email, telefone)VALUES (?, ?, ?)';
    connection.query(sql, [nome, email, telefone], (err) => {
        if (err) {
            console.error('Erro ao inserir dados:', err.message);
            return res.send('❌ Erro ao salvar no banco.');
        }
        res.send('✅ Dados salvos com sucesso!');
    });
});


// Iniciar o servidor
app.listen(3031, () => console.log('Servidor rodando em http://localhost:3031'));