const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(helmet());
app.use(compression());
//Middlewares

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import Routes
const feedRoutes = require("./routes/questions");

//Use routes

app.use("/questions", feedRoutes);

//Database connection
/*const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ntrwp.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`;*/

mongoose
  .connect(
    "mongodb+srv://mrudul:1203@cluster0-2nil5.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//Server connection

const PORT = process.env.PORT || 4040;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
