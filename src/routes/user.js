const express = require('express');
const userSchema = require('../models/user');
const user = require('../models/user');

const router = express.Router();

//define the routes
//create user
router.post('/users', (req, res) => {
    //Create a new user
    const user = userSchema(req.body);
    //Save the user info in the db
    user
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: error}));
});

//get all users
router.post('/getUsers', (req, res) => {
    //Find all the users in BD
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: error}));
});

//get a user
router.post('/getUsers/:id', (req, res) => {
    //Obtain the id from params
    const { id } = req.params;
    //Find it by his id
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json({message: error}));
});

//Update user
router.put('/getUsers/:id', (req, res) => {
    //Obtain the id from params
    const { id } = req.params;
    //Obtain the new data for user
    const {name, age, email} = req.body;
    //Find it by his id
    userSchema
        .updateOne({ _id:id }, { $set: {name, age, email} }) //first {} is the user condition, second {} the new data
        .then((data) => res.json(data))
        .catch((err) => res.json({message: error}));
});

//Delete user
router.delete('/deleteUser/:id', (req, res) => {
    //Obtain the id from params
    const { id } = req.params;
    //Delete the user
    userSchema
        .deleteMany({_id: id})
        .then((data) => res.json(data))
        .catch((err) => res.json({message: error}));
});

module.exports = router;