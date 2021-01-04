// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Define route

const userRouter = require('./routes/userRoutes');

// Put express application in app variable
// Define port for web server to listen on

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use('', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});