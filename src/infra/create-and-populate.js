const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');

const FORNECEDOR_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FORNECEDOR" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "CNPJ" varchar(14),
    "EMAIL" varchar(64),
    "ENDEREÇO" varchar(80)
  );`;

const ADD_FORNECEDOR_DATA = `
INSERT INTO FORNECEDOR (ID, NOME, CNPJ, EMAIL, ENDEREÇO)
VALUES 
    (1, 'Eugênio Oliveira', '48031663000108', 'eugenio.oliveira@bol.com.br', 'Rua Antônio Rossafa Peres'),
    (2, 'Olívia Ribeiro', '34838691000119', 'olivia.ribeiro@gmail.com', 'Rua Doutor Jarbas Martins Viana'),
    (3, 'Mirtes Faria Lima', '62423068000130', 'mirtes_fl@yahoo.com', 'Praça Galiano Jacomossi')
`

function criaTabelaF() {
    db.run(FORNECEDOR_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de fornecedor");
    });
}


function populaTabelaF() {
    db.run(ADD_FORNECEDOR_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de fornecedor");
    });
}

db.serialize( ()=> {
    criaTabelaF();
    populaTabelaF();
});

const PEDIDO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PEDIDO" (
    'ID' INTEGER PRIMARY KEY AUTOINCREMENT,
    'data' DATE,
    'valor' NUMERIC(10,2),
    'status' varchar(20),
    'produtos' varchar(200),
    'cliente_id' FOREIGN KEY REFERENCES 'CLIENTE'('ID')
);`;

function criaTabelaP() {
    db.run(PEDIDO_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de pedido");
    });
}

const ADD_PEDIDO_DATA = `
INSERT INTO PEDIDO (ID, data, valor, status, produtos, cliente_id)
VALUES
    (1, '2020-01-01', 100.00, 'Pago', 'X-coxinha, Batata Frita, Cerveja Artesanal', 1),
    (2, '2020-01-02', 200.00, 'Pago', 'Combo duplo de hamburguer, 2 coquinha, Batata Frita G', 2),
    (3, '2020-01-03', 300.00, 'Pago', 'Double Chopp, Batata Frita com Cheddar, Litrão de Skol', 3)
`

function populateTabelaP() {
    db.run(ADD_PEDIDO_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de pedido");
    });
}

db.serialize( ()=> {
    criaTabelaP();
    populateTabelaP();
}