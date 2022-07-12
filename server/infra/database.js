const pgp = require('pg-promise')();

const db = pgp({
    user: 'root',
    password: 'root',
    host: 'localhost',
    port: '5432',
    database: 'blog'
});

module.exports = db;