const bd = require('../infra/sqlite-db')
const fornecedor = (app, bd) => {
    
    app.post('/fornecedor', (req, res) => {
        res.send('Rota principal')
    })

    app.get('/fornecedor', (req, res) => {
        bd.all(`SELECT * FROM FORNECEDOR`, (error, results) => {
            if(error) {
                res.send(error)
            } else {
                res.send(results)
            }
        })
    })

    app.put('/fornecedor', (req, res) => {
    res.send('Rota principal')
    })

    app.delete('/fornecedor', (req, res) => {
        res.send('Rota principal')
    })
    
}

module.exports = fornecedor