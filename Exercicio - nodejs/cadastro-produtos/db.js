// Conexão com banco de dados MySQL
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',       
    password: 'Janderson10',   
    database: 'produtos' 
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});

module.exports = connection; // Exporta a conexão para uso em outros arquivos