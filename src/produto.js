const express = require('express');
const app = express();

app.use(express.json()) 

const bdsqlite = require ('./infra/sqlite-prod-db')
const produto = require('./controller/produtoController');
produto(app, bdsqlite)





app.listen(3030, () => {
    console.log('Rodando na porta 3200')

    
}) 
