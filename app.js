//Dependencies 

const api_fishes = require('./routes/pg_fishDetails_routes')
require('./utils/dbpg');
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

//******************************************** */


const app = express();
app.use(express.static(path.join(__dirname, 'build')));
const corsOptions = {
    origin: [
        "https://gluby.herokuapp.com/"
    ]
};

// Middleware
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

//Routing 

app.use('/api', api_fishes);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


//Llamada a puerto

app.listen((5000), () => {
    console.log(`Servidor corriendo`)
})