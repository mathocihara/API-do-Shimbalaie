
// mudar o formato de importação
import sqlite from 'sqlite3';
const sqlite3 = sqlite.verbose();
const db = new sqlite3.Database('./src/infra/database.db');

const CREATE = `CREATE TABLE IF NOT EXISTS "FUNCIONARIO"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,  
  "primeiroNome" varchar(64),
  "segundoNome" varchar(64),
  "sobreNome" varchar(64),
  "cargo" varchar(64),
  "ativo" varchar(64),
  "status" varchar(64)
);`;

const INSERT = `INSERT INTO FUNCIONARIO (id, primeiroNome,segundoNome,sobreNome,cargo,ativo,status) 
VALUES ( 1, "matheus", "yukio", "hocihara", "garçom", "sim", "trabalhando"),
( 2, "kassi", "Façanha", " ", "gerente", "sim", "folga"),
( 3, "lucas", "Brenner", "Souza", "dono", "não", "trabalhando"),
( 4, "leandro", "Felix", "Indigno", "Lavador de prato", "sim", "trabalhando")
`;

function create(){
db.run(CREATE, (error) =>{
  if(error) console.log('erro ao criar tabela', error)
})
}

function insert(){
db.run( INSERT, (error) =>{
  if(error) console.log('erro ao inserir na tabela', error)
})
}

db.serialize(()=>{
    create();
    insert();
})





export default db;