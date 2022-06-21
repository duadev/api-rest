const { Router } = require('express');
const express = require('express');
const router = express.Router();

//Create a new user
router.post('/users', (req, res) => {
    res.send('Create user success');

});

module.exports = router;