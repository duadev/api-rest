# api-rest
Create api rest with stactk mern mongo db, express Js, mongoose

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/users');


dotenv.config();
const app = express();
const port = process.env.PORT || 3500;

//Middleware
app.use('/api', userRoutes);

//routes for the app
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Mongodb connection
mongoose
.connect(
    process.env.MONGODB_URI)
    .then(() => console.log('mongodb connected successfully'))
    .catch(err => console.log(err));

app.listen(port, () => console.log(`Server app listening on port ${port}!`));
