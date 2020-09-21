const {Router} = require('express');
const router = Router();
const { getIndexUser } = require('../controllers/index.controller');
const { getUsers, getUserByID, createUser, updateUserByID, deleteUserByID } = require('../controllers/user.controller');


router.get('/', getIndexUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserByID);
router.post('/users', createUser);
router.put('/users/:id', updateUserByID);
router.delete('/users/:id', deleteUserByID);


module.exports = router;