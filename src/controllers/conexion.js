const {Pool} = require('pg');

// const pool = new Pool({
//     host: 'db-postgresql-fra1-31832-do-user-7159621-0.b.db.ondigitalocean.com',
//     user: 'doadmin',
//     password: 'zf32vd2hp5u675nx',
//     database: 'api',
//     port: '25060',
//     ssl: 'require',
// });

const pool = new Pool({
    host: 'localhost',
    user: 'miguel',
    password: 'sami2345',
    database: 'nodeapi',
    port: '5432'
});

module.exports = pool;