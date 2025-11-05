const express = require('express');
const router = express.Router();
const db = require('../db');

// Criar produto
router.post('/', (req, res) => {
    const { nome, descricao, preco } = req.body;
    const query = "INSERT INTO produtos (nome, descricao, preco) VALUES (?, ?, ?)";
    db.query(query, [nome, descricao, preco], (err, result) => {
        if(err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Produto cadastrado!', id: result.insertId });
    });
});

// Listar produtos
router.get('/', (req, res) => {
    db.query("SELECT * FROM produtos", (err, results) => {
        if(err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Buscar produto por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM produtos WHERE id = ?", [id], (err, result) => {
        if(err) return res.status(500).json({ error: err.message });
        res.json(result[0]);
    });
});

// Atualizar produto
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco } = req.body;
    db.query(
        "UPDATE produtos SET nome = ?, descricao = ?, preco = ? WHERE id = ?",
        [nome, descricao, preco, id],
        (err) => {
            if(err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Produto atualizado!' });
        }
    );
});

// Deletar produto
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM produtos WHERE id = ?", [id], (err) => {
        if(err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Produto deletado!' });
    });
});

module.exports = router;
