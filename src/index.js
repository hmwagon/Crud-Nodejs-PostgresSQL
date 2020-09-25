const express = require('express');
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Rutas
app.use(require('./routes/index'));


app.listen(process.env.PORT || port);
console.log('Server on port 3000');