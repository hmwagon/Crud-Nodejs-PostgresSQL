const pool = require('./conexion');

const getUsers = async (req, res) => {
    const responde = await pool.query('SELECT * FROM users');
    res.json(responde.rows);
};
const getUserByID = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};
const createUser = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response);
    res.json({
        mensaje: 'ok'
    });
};
const updateUserByID = async (req, res) => {
    const id = req.params.id;
    const { name, email} = req.body;
    const response = await pool.query('UPDATE users SET name = $2, email = $3 WHERE id = $1', [id, name, email]);
    res.json({
        mensaje: 'ok',
        body: response
    });
};
const deleteUserByID = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json({
        mensaje: 'ok',
        body: response
    });
};
module.exports = {
    getUsers,
    getUserByID,
    createUser,
    updateUserByID,
    deleteUserByID
}