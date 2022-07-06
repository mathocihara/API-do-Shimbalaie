const Fornecedor = require('../model/fornecedorModel')
const FornecedorDAO = require('../DAO/fornecedorDAO')
const bd = require('../infra/sqlite-db');

const fornecedor = (app, bd) => {

    const DAOfornecedor = new FornecedorDAO(bd)
    app.post('/fornecedor', (req, res) => {
        const body = req.body
        const data = async () => {
            try {
                const FornecedorDado = new Fornecedor(body.nome, body.cnpj, body.email, body.endereço)
                const fornecedor = await DAOfornecedor.inserirFornecedor(FornecedorDado)
                res.send(fornecedor)
            } catch (error) {
                res.status(400).send(error.message)
            }
        }
        data()
    })

    app.get('/fornecedor', (req, res) => {
        const data = async () => {
            try {
                const fornecedor = await DAOfornecedor.listarFornecedor()
                res.send(fornecedor)
            } catch (error) {
                res.send(error)
            }
        }
        data()
    })

    app.get('/fornecedor/:id', (req, res) => {
        const data = async () => {
            try {
                const fornecedor = await DAOfornecedor.listarFornecedorID(req.params.id)
                res.send(fornecedor)
            } catch (error) {
                res.send(error)
            }
        }
        data()
    })

    app.put('/fornecedor/:id', (req, res) => {
        const body = req.body
        const id = req.params.id
        const params = [body.nome, body.cnpj, body.email, body.endereço, id]
        const data = async () => {
            try {
                const fornecedor = await DAOfornecedor.alterarFornecedor(params)
                res.send(fornecedor)
            } catch (error) {
                res.send(error)
            }
        }
        data()
    })

    app.delete('/fornecedor/:id', (req, res) => {
        const id = req.params.id
        const data = async () => {
            try {
                const Fornecedor = await DAOfornecedor.deletaFornecedor(id)
                res.send(Fornecedor)
            } catch (error) {
                res.send(error)
            }
        }
        data()
    })
}

module.exports = fornecedor