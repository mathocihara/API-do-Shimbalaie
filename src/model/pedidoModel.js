class Pedido {
    constructor(id, data, valor, status, cliente, produtos) {
        this.id = id;
        this.data = data;
        this.valor = valor;
        this.status = status;
        this.cliente = cliente;
        this.produtos = produtos;
    }
}

module.exports = Pedido;