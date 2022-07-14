import sqlite from 'sqlite3';
const sqlite3 = sqlite.verbose();
const db = new sqlite3.Database('./src/infra/database.db');


//Processamento de sinal
const sqlites = process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

export default db;