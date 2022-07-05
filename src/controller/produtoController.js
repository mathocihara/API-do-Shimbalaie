const Produtos = require('../model/produtoModel')

const produto = (app, bdsqlite) => {

    //puxar produto
    app.get('/produto', (req, res) => {
        bdsqlite.all(`SELECT * FROM PRODUTO`, (error, resultado)=>{
            if(error) res.status(404).json(error);
            else res.status(200).json(resultado)
        })
        
    })

    //puxar livro por parametro
    app.get('/produto/:id', (req, res) => {
        bdsqlite.all(`SELECT * FROM PRODUTO WHERE id= ${req.params.id}`, (error, resultado)=>{
            if(error) res.status(404).json(error);
            else res.status(200).json(resultado)
        })
        
    })
    //Rota para castrar produto
    app.post('/produto', (req, res) => {
        bory = req.bory;
        const novoProduto = new Produtos( bory.id, bory.nome, bory.marca, bory.fornecedor, bory.estoque, bory.valor)
        console.log(novoProduto);
        bdsqlite.run(
            `INSERT INTO PRODUTO (id, nome, marca, fornecedor, estoque, valor)
             VALUES('', '', '', '', '', '')`, 
             [novoProduto.id, novoProduto.nome, novoProduto.marca, novoProduto.fornecedor, novoProduto.estoque, novoProduto.valor],
             (error)=>{
        if(error) res.status(404).json(error);
         else res.status(200).json('PRODUTO INSERIDO COM SUCESSO ')

        }) 
      })
    //alterar produto
    app.put('/produto', (req, res) => {
        bory = req.bory;
        id = req.params.id;
        bdsqlite.all(`SELECT * FROM PRODUTO WHERE id = ${id}`,(error, resultado)=>{
        if(error) res.status(404).json(error);
         else res.status(200).json('Produto Deletado')
        })
        const  produtoAtualizado = new Produtos( bory.id, bory.nome, bory.marca, bory.fornecedor, bory.estoque, bory.valor)
        bdsqlite.run(`
        UPDATE LIVRO
        SET nome =?, marca = ?, fornecedor = ?, estoque = ?, valor = ?`,
        [produtoAtualizado.id, produtoAtualizado.nome, produtoAtualizado.marca, produtoAtualizado.fornecedor, produtoAtualizado.estoque, produtoAtualizado.valor],
        (error)=>{
            if(error) res.status(404).json(error);
         else res.status(200).json('Produto Deletado')
            
        })
    })
    //deletar produto
    app.delete('/produto/:1', (req, res) => {
        bdsqlite.run(`DELETE  *FROM PRODUTO WHERE id= ${req.params.id}`, (error)=>{
        if(error) res.status(404).json(error);
         else res.status(200).json('Produto Deletado')
        })
    })

}
module.exports = produto;