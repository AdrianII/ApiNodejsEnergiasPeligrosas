
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const {routes} = require('./routes/index');

app.use(cors());
app.use("/api",routes);

const PORT = process.env.PORT || 3000;

app.get('/test', (req, res) => {
    res.send({dato: 'hola mundo'})
});

app.listen(PORT, () => console.log('api escuchando en el puerto ' + PORT));