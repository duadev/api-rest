const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/users');

const colors = require('colors');

dotenv.config();
const app = express();
const port = process.env.PORT || 3500;

//Middleware
app.use(express.json());
app.use('/api', userRoutes);

//routes for the app
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Mongodb connection
mongoose
    .connect(
        process.env.MONGODB_URI)
    .then(() => console.log('mongodb connected successfully'.yellow))
    .catch(err => console.log(err));

app.listen(port, () => console.log(`Server app listening on port ${port}`.cyan));
