const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database-prod.db'); 


const CREATETABLE = ` CREATE TABLE IF NOT EXISTS "PRODUTO"(
        "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
        "NOME" varchar(200),
        "MARCA" vachar (200),
        "FORNECEDOR" varchar(200), 
        "ESTOQUE" varchar(200), 
        "VALOR" varchar(200)
        )`;

const incluindoProduto = `
 INSERT INTO PRODUTO ( ID, NOME, MARCA, FORNECEDOR, ESTOQUE, VALOR)
VALUES 
    (1, 'gin', 'Bulldog', 'zeDistruidora', '100L', 'R$70')
    (2, 'cerveja', 'Bohemia', 'cervejinhaboaDistribuidora', '1000L', 'R$10')
    (3, 'Tequila', 'paris','cavalheirosDistribuidora', '100L', 'R$15')
`

function createP() {
    db.run(CREATETABLE, (error) => {
        if (error) console.log("Erro ao criar tabela");
    })
}

function insertP() {
    db.run(incluindoProduto, (error)=> {
        if (error) console.log("Erro ao incluir produtos na tabela", error);
    });

}

db.serialize(()=> {
    createP();
    insertP();
});