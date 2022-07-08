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
        const body = req.body;
        const novoProduto = new Produtos(body.id, body.nome, body.marca, body.fornecedor, body.estoque, body.valor)
        const data = async () => {
            try {
                const produto = await DAOProduto.CadastarProdutos(novoProduto);
                res.status(200).send(produto)
            } catch (error) {
                res.status(404).send(error)
            }
        }
        data();

    })
    //alterar produto
    app.put('/produto/:id', (req, res) => {
        const body = req.body
        const id = req.params.id
        const params = [body.nome, body.marca, body.fornecedor, body.estoque, body.valor, id]
        const data = async () => {
            try {
                const produto = await DAOProduto.AlterarProduto(params)
                res.send(produto)
            } catch (error) {
                res.send(error)
            }
        }
        data();
    })

    //deletar produto
    app.delete('/produto/:id', (req, res) => {
        const id = req.params.id
        const data = async () => {
            try {
                const produto = await DAOProduto.DeletarProduto(id);
                res.status(200).send(produto)
            } catch (error) {
                res.status(404).send(error)
            }
        }
        data();
    })

}
module.exports = produto;