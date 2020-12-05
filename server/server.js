const express = require('express'); 
const app = express(); 
const connectDB = require('./database/db');


connectDB(); //to connect to DB 

const port = 5000; 

app.use(express.static("../client/src"));

app.listen(port, () => console.log('Listening on port 5000')); 