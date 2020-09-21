const pool = require('./conexion');

const getIndexUser = async (req, res) => {
    const responde = await pool.query('SELECT * FROM users');
    res.json(responde.rows);
};

module.exports = {
    getIndexUser
}