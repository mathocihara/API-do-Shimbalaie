const {
    Body
} = require('node-fetch');
const Produtos = require('../model/produtoModel')

const produto = (app, bdsqlite) => {

    //puxar produto
    app.get('/produto', (req, res) => {
        bdsqlite.all(`SELECT * FROM PRODUTO`, (error, resultado) => {
            if (error) res.status(404).json(error);
            else res.status(200).json(resultado)
        })

    })

    //puxar produto por parametro
    app.get('/produto/:id', (req, res) => {
        bdsqlite.all(`SELECT * FROM PRODUTO WHERE id= ${req.params.id}`, (error, resultado) => {
            if (error) res.status(404).json(error);
            else res.status(200).json(resultado)
        })

    })
    //Rota para castrar produto
    app.post('/produto', (req, res) => {
        body = req.body;
        console.log(body);
        const novoProduto = new Produtos(body.id, body.nome, body.marca, body.fornecedor, body.estoque, body.valor)
        console.log(novoProduto);
        bdsqlite.run(
            `INSERT INTO PRODUTO (ID, NOME, MARCA, FORNECEDOR, ESTOQUE, VALOR)
             VALUES(?, ?, ?, ?, ?, ?)`,
            [novoProduto.id, novoProduto.nome, novoProduto.marca, novoProduto.fornecedor, novoProduto.estoque, novoProduto.valor],
            (error) => {
                if (error) res.status(404).json(error);
                else res.status(200).json('PRODUTO INSERIDO COM SUCESSO ')

            })
    })
    //alterar produto
    app.put('/produto/:id', (req, res) => {
        const body = req.body;
        const id = req.params.id;
        bdsqlite.all(`SELECT * FROM PRODUTO WHERE id = ${id}`, (error, resultado) => {
            if (error) res.status(404).json(error);
            else {
                const ProdutoDadoAntigo = resultado;
                const produtoAtualizado = new Produtos(
                    body.id || ProdutoDadoAntigo[0].ID,
                    body.nome || ProdutoDadoAntigo[0].NOME,
                    body.marca || ProdutoDadoAntigo[0].MARCA,
                    body.fornecedor || ProdutoDadoAntigo[0].FORNECEDOR,
                    body.estoque || ProdutoDadoAntigo[0].ESTOQUE,
                    body.valor || ProdutoDadoAntigo[0].VALOR)
                    console.log(produtoAtualizado);
                bdsqlite.run(` 
        UPDATE PRODUTO
        SET  NOME =?, MARCA = ?, FORNECEDOR = ?, ESTOQUE = ?, VALOR = ? WHERE ID=?`,
                    [ produtoAtualizado.nome, produtoAtualizado.marca, produtoAtualizado.fornecedor, produtoAtualizado.estoque, produtoAtualizado.valor, produtoAtualizado.id],
                    
                    (error) => {
                        if (error) res.status(404).json(error.message);
                        else res.status(200).json('Produto alterado')

                    })
            }

        })
    })
    //deletar produto
    app.delete('/produto/:id', (req, res) => {
        bdsqlite.run(`DELETE  FROM PRODUTO WHERE id= ${req.params.id}`, (error) => {
            if (error) res.status(404).json(error);
            else res.status(200).json('Produto Deletado')
        })
    })

}
module.exports = produto;