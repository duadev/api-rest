const { Router } = require('express');
const express = require('express');
const router = express.Router();
const userSchema = require('../models/user');

//Post - Create a new user endpoint
router.post('/users', (req, res) => {
    const user = userSchema(req.body);

    user
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));

});

//Get - Get all users endpoint
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));

});

//Get - Get a single user endpoint
router.get('/users/:id', (req, res) => {
    userSchema
        .findById(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// update a user endpoint
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, edad, apellido, email } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { nombre, apellido, edad, email } })
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// delete a user endpoint
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});



module.exports = router;