const Produtos = require('../model/produtoModel')
const ProdutoDAO = require('../DAO/produtoDAO')

const produto = (app, bdsqlite) => {

    const DAOProduto = new ProdutoDAO(bdsqlite);

    //puxar produto
    app.get('/produto', (req, res) => {
        const data = async () => {
            try {
                const produto = await DAOProduto.listarProdutos();
                res.status(200).json(produto)
            } catch (error) {
                res.status(404).json(error)
            }
        }
        data();

    })

    //puxar produto por parametro
    app.get('/produto/:id', (req, res) => {
        const data = async () => {
            try {
                const produto = await DAOProduto.listarProdutosID(req.params.id);
                res.status(200).json(produto)
            } catch (error) {
                res.status(404).json(error)
            }
        }
        data();

    })
    //Rota para castrar produto
    app.post('/produto', (req, res) => {
        body = req.body;
        const novoProduto = new Produtos(body.id, body.nome, body.marca, body.fornecedor, body.estoque, body.valor)
        const data = async () => {
            try {
                const produto = await DAOProduto.CadastarProdutos(novoProduto);
                res.status(200).json(produto)
            } catch (error) {
                res.status(404).json(error)
            }
        }
        data();

    })
    //alterar produto
    app.put('/produto/:id', (req, res) => {
         body = req.body;
         id = req.params.id;
        const data = async() => {
            try {
                const ProdutoDadoAntigo = await DAOProduto.listarProdutosID(id);
                const ProdutoAtualizado = new Produtos(
                    // body.id || ProdutoDadoAntigo[0].ID,
                    body.nome || ProdutoDadoAntigo[0].NOME,
                    body.marca || ProdutoDadoAntigo[0].MARCA,
                    body.fornecedor || ProdutoDadoAntigo[0].FORNECEDOR,
                    body.estoque || ProdutoDadoAntigo[0].ESTOQUE,
                    body.valor || ProdutoDadoAntigo[0].VALOR)
                    console.log(ProdutoAtualizado);
                const parametro = [ProdutoAtualizado.nome, 
                    ProdutoAtualizado.marca, 
                    ProdutoAtualizado.fornecedor,
                    ProdutoAtualizado.estoque,
                    ProdutoAtualizado.valor, 
                    ProdutoAtualizado.id]
                    console.log(parametro);
                const produto = await DAOProduto.AlterarProduto(parametro);
                res.status(200).json(produto)
            } catch (error) { 
                res.status(404).json(error)
            }
        }
        data();
    })

    //deletar produto
    app.delete('/produto/:id', (req, res) => {
        const data = async () => {
            try {
                const produto = await DAOProduto.DeletarProduto(req.params.id);
                res.status(200).json(produto)
            } catch (error) {
                res.status(404).json(error)
            }
        }
        data();
    })

}
module.exports = produto;