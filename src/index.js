//server code
const express = require('express');
//mongoose allows work with mongo db
const mongoose = require('mongoose');
//allows access to customisable env variables
require('dotenv').config();

//Import the routes
const userRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT || 9000;

//Middlware
app.use(express.json()); //Allows to read the json objects from request
app.use('/api', userRoutes);

//routes
app.get('/', (req, res) => {
    res.send('Welcome to my api :)');
})

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to mongodb atlas'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('Server online on port: ', port));