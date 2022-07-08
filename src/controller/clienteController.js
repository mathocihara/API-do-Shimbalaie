const Cliente = require('../model/clienteModel')
const ClienteDAO = require('../DAO/clienteDAO.js')
const bd = require('../infra/sqlite-db');

const cliente = (app, bd) => {

    const DAOcliente  = new ClienteDAO(bd)
    app.post('/cliente ', (req, res) => {
        const body = req.body
        const ClienteDado = new cliente (body.nome, body.email, body.cpf, body.endereço)
        const data = async () => {
            try {
                const cliente = await DAOcliente .inserirCliente(ClienteDado)
                res.send(cliente)
            } catch (error) {
                res.send(error)
            }
        }
        data()
    })

    app.get('/cliente ', (req, res) => {
        const data = async () => {
            try {
                const cliente = await DAOcliente .listarCliente ()
                res.send(cliente)
            } catch (error) {
                res.send(error)
            }
        }
        data()
    })

    app.get('/cliente /:id', (req, res) => {
        const data = async () => {
            try {
                const fornecedor = await DAOcliente.listarClienteID(req.params.id)
                res.send(cliente)
            } catch (error) {
                res.send(error)
            }
        }
        data()
    })

    app.put('/cliente/:id', (req, res) => {
        const body = req.body
        const id = req.params.id
        const params = [body.nome, body.email, body.cpf, body.endereço, id]
        const data = async () => {
            try {
                const cliente = await DAOcliente.alterarCliente(params)
                res.send(cliente)
            } catch (error) {
                res.send(error)
            }
        }
        data()
    })

    app.delete('/cliente/:id', (req, res) => {
        const id = req.params.id
        const data = async () => {
            try {
                const Cliente = await DAOcliente.deletaCliente(id)
                res.send(Cliente)
            } catch (error) {
                res.send(error)
            }
        }
        data()
    })
}

module.exports = cliente