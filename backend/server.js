const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//Middlewares

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Import Routes
const feedRoutes = require('./routes/questions');

//Use routes

app.use('/questions', feedRoutes);

//Database connection

mongoose.connect(
    process.env.DB_Connection,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}
    )
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Server connection    

const PORT = process.env.PORT || 4040;        

app.listen(PORT , console.log(`Server started on port ${PORT}`));
