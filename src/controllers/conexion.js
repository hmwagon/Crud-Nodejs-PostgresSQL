const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'miguel',
    password: 'sami2345',
    database: 'nodeapi',
    port: '5432'
});

module.exports = pool;