const express = require('express');
const router = express.Router();
const db = require('../db');

// Listar
router.get('/', (req, res) => {
    db.query("SELECT * FROM produtos", (err, results) => {
        if (err) return res.json(err);
        res.json(results);
    });
});

// Cadastrar
router.post('/', (req, res) => {
    const { nome, descricao, preco } = req.body;
    
    db.query(
        "INSERT INTO produtos (nome, descricao, preco) VALUES (?, ?, ?)",
        [nome, descricao, preco],
        (err, result) => {
            if (err) return res.json(err);
            res.json({ msg: "Produto cadastrado!" });
        }
    );
});

module.exports = router;