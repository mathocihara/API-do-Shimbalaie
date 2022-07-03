const express = require('express')
const app = express();

const bd = require('./infra/sqlite-db')
const fornecedor = require('./controller/fornecedorController')

app.use(express.json())
fornecedor(app, bd)

app.listen(3030, () => {console.log('Rodando servidor na porta 3030')})