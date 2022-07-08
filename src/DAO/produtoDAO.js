class ProdutoDao {
    constructor(bd) {
        this.bd = bd;
    }
    listarProdutos() {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM PRODUTO`, (error, resultado) => {
                if (error) reject(error);
                else resolve(resultado)
            })
        })
    }
    listarProdutosID(id) {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM PRODUTO WHERE id= ${id}`, (error, resultado) => {
                if (error) reject(error);
                else resolve(resultado)
            })
        })
    }
    CadastarProdutos(Produto) {
        return new Promise((resolve, reject) => {
            this.bd.run(
                `INSERT INTO PRODUTO (ID, NOME, MARCA, FORNECEDOR, ESTOQUE, VALOR)
                 VALUES(?, ?, ?, ?, ?, ?)`,
                [Produto.id, Produto.nome, Produto.marca, Produto.fornecedor, Produto.estoque, Produto.valor],
                (error) => {
                    if (error) reject(error);
                    else resolve('PRODUTO INSERIDO COM SUCESSO ')

                })
        })
    }
    AlterarProduto(ProdutoAtualizado) {
        return new Promise((resolve, reject) => {
            this.bd.run(` 
                 UPDATE PRODUTO
                    SET  NOME = ?, MARCA = ?, FORNECEDOR = ?, ESTOQUE = ?, VALOR = ? WHERE ID=?`,
                ProdutoAtualizado, 
                (error) => {
                    if (error) reject(error);
                    else resolve('Produto alterado')
 
            })
        })
    }
    DeletarProduto(id) {
        return new Promise((resolve, reject) => {
                this.bd.run(`DELETE  FROM PRODUTO WHERE id= ${id}`, (error) => {
                    if (error) reject(error);
                    else resolve('Produto Deletado')
                })

            })

        }
    }
    module.exports = ProdutoDao