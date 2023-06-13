const express = require('express');

const router = express.Router();

//define the routes
//create user
router.post('/users', (req, res) => {
    res.send('Create user route :)');
});

module.exports = router;