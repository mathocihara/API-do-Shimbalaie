class PedidoDAO {
    constructor(bd) {
        this.bd = bd;
    }

    listaPedido() {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM PEDIDO`, (error, results) => {
                if(error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }

    listaPedidoID(id) {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM PEDIDO WHERE ID = ${id}`, (error, results) => {
                if(error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }

}