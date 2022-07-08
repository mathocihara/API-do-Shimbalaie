const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('database-prod.db'); 


 process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;