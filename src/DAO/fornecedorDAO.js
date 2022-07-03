class FornecedorDAO {
    constructor(bd) {
        this.bd = bd;
    }

    listarFornecedor() {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM FORNECEDOR`, (error, results) => {
                if(error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }

    listarFornecedorID(id) {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM FORNECEDOR WHERE ID = ${id}`, (error, results) => {
                if(error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }

    inserirFornecedor(NovoFornecedor) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO FORNECEDOR (NOME , CNPJ , EMAIL , ENDEREÇO) VALUES (?,?,?,?)`, [NovoFornecedor.nome, NovoFornecedor.cnpj, NovoFornecedor.email, NovoFornecedor.endereço],(error) => {
                if(error) {
                    reject(error)
                } else {
                    resolve('INSERIDO COM SUCESSO')
                }
            })
        })
    }

    alterarFornecedor(params) {
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE FORNECEDOR SET NOME = ?, CNPJ = ?, EMAIL = ?, ENDEREÇO = ? WHERE ID = ?`, params, (error) => {
                if(error) {
                    reject(error)
                } else {
                    resolve('ALTERADO COM SUCESSO')
                }
            })
        })

    }

    deletaFornecedor(id) {
        return new Promise((resolve, reject) => {
            this.bd.all(`DELETE FROM FORNECEDOR WHERE ID = ${id}`, (error, results) => {
                if(error) {
                    reject(error)
                } else {
                    resolve("DELETADO COM SUCESSO")
                }
            })
        })
    }
}

module.exports = FornecedorDAO