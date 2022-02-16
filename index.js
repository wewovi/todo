const express = require('express');
const mongoose = require('mongoose');
const Dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoute');
const app = express();
Dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('successfully connected to mongoDb');
}).catch((err)=>{
    console.log(err);
})

app.use('/todo', todoRoutes);


const port = process.env.PORT || 1002;
app.listen(port, ()=>{
    console.log("connected to port $port")
});