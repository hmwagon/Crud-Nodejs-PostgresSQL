const {Pool} = require('pg');

const pool = new Pool({
    host: 'postgres-database-nodejs-app-do-user-7159621-0.b.db.ondigitalocean.com',
    user: 'doadmin',
    password: 'u2ry6yw5aw6h32x0',
    database: 'RestApi',
    port: '25060',
    ssl: 'require',
});

// const pool = new Pool({
//     host: 'localhost',
//     user: 'miguel',
//     password: 'sami2345',
//     database: 'nodeapi',
//     port: '5432'
// });

module.exports = pool;