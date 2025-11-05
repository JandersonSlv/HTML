const express = require("express");
const router = express.Router();
const connection = require("../db");

// Rota para salvar produto
router.post("/salvar", (req, res) => {
    const { nome, descricao, preco, estoque } = req.body;

    console.log("📩 Recebendo novo produto:");
    console.log(req.body);

    const query = "INSERT INTO produtos (nome, descricao, preco, estoque) VALUES (?, ?, ?, ?)";
    connection.query(query, [nome, descricao, preco, estoque], (err, results) => {
        if (err) {
            console.log("❌ Erro ao inserir produto:", err);
            return res.status(500).send("Erro ao cadastrar produto");
        }

        console.log(`✅ Produto cadastrado! ID: ${results.insertId}`);

        res.send(`
            <p>✅ Produto cadastrado com sucesso!</p>
            <a href="/">Cadastrar outro</a> |
            <a href="/busca">Ir para busca</a>
        `);
    });
});

// Rota para buscar produtos por nome (usada pelo busca.html)
router.get("/api/buscar", (req, res) => {
    const nome = req.query.nome || "";

    console.log(`🔍 Buscando produtos com nome parecido com: ${nome}`);

    const query = "SELECT * FROM produtos WHERE nome LIKE ?";
    connection.query(query, [`%${nome}%`], (err, results) => {
        if (err) {
            console.log("❌ Erro ao buscar produtos:", err);
            return res.status(500).json({ error: "Erro ao buscar produtos" });
        }

        console.log(`📦 Encontrados: ${results.length} produtos`);
        res.json(results);
    });
});

// Rota para retornar todos os produtos (opcional para testes)
router.get("/produtos", (req, res) => {
    connection.query("SELECT * FROM produtos", (err, results) => {
        if (err) return res.status(500).json({ error: "Erro ao consultar" });

        res.json(results);
    });
});

module.exports = router;