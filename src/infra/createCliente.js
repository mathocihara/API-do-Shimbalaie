const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');

const CLIENTE = `
CREATE TABLE IF NOT EXISTS "CLIENTE" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "CPF" varchar(19),   
    "ENDEREÇO" varchar(80)
  );`;

const ADD_CLIENTE_DATA = `
INSERT INTO FORNECEDOR (ID, NOME, EMAIL, CPF, ENDEREÇO)
VALUES 
    (1, 'Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '48031663000108', 'Rua Antônio Rossafa Peres'),
    (2, 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '34838691000119', 'Rua Doutor Jarbas Martins Viana'),
    (3, 'Mirtes Faria Lima',  'mirtes_fl@yahoo.com', '62423068000130', 'Praça Galiano Jacomossi')
`

function criaTabelaF() {
    db.run(CLIENTE, (error)=> {
       if (error) console.log("Erro ao criar tabela de cliente");
    });
}


function populaTabelaF() {
    db.run(ADD_CLIENTE_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de cliente");
    });
}

db.serialize( ()=> {
    criaTabelaF();
    populaTabelaF();
});