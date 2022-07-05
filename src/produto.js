const express = require('express');
const app = express();



const bdsqlite = require ('./infra/sqlite-prod-db')
const produto = require('./controller/produtoController');
produto(app, bdsqlite)


app.use(express.json())


app.listen(3200, () => {
    console.log('Rodando na porta 3200')

    
}) 
