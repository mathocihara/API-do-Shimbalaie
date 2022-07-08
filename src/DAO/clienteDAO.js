class ClienteDAO {
    constructor(bd) {
        this.bd = bd;
    }

    listarCliente() {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM CLIENTE`, (error, results) => {
                if(error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }

    listarClienteID(id) {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM CLIENTE WHERE ID = ${id}`, (error, results) => {
                if(error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }

    inserirCLIENTE(NovoCliente) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO Cliente (NOME , EMAIL, CPF, ENDEREÇO) VALUES (?,?,?,?)`, [NovoCliente.nome, NovoCliente.email, NovoCliente.cpf, NovoCliente.endereço],(error) => {
                if(error) {
                    reject(error)
                } else {
                    resolve('INSERIDO COM SUCESSO')
                }
            })
        })
    }

    alterarCliente(params) {
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE CLIENTE SET NOME = ?, EMAIL = ?, CPF = ?, ENDEREÇO = ? WHERE ID = ?`, params, (error) => {
                if(error) {
                    reject(error)
                } else {
                    resolve('ALTERADO COM SUCESSO')
                }
            })
        })

    }

    deletaCliente(id) {
        return new Promise((resolve, reject) => {
            this.bd.all(`DELETE FROM CLIENTE WHERE ID = ${id}`, (error, results) => {
                if(error) {
                    reject(error)
                } else {
                    resolve("DELETADO COM SUCESSO")
                }
            })
        })
    }
}

module.exports = ClienteDAO