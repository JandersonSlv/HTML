// Conexão com banco
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost', // Seu host (geralmente locahost)
    user: 'root', // Seu usuário do MySQL
    password: 'Janderson10', // Sua senha do MySQL
    database: 'techstore' // O nome do banco de dados
});


connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar no MySQL:', err.message);
        return;
    }
    console.log('Conexão com MySQL estabelecida com sucesso!');

});

module.exports = connection;