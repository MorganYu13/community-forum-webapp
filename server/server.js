const express = require('express'); 
const app = express(); 

const bodyparse = require('body-parser'); 
const cookie = require('cookie-parser');


const connectDB = require('./database/connectDB'); 
const checkData = require('./database/checkData'); 
const insertData = require('./database/insertData');


connectDB(); //to connect to DB 

const port = 5000; 

app.use(express.static("../client/src")); //making our express host the server interanally, used instead of Apache for XAMPP 
app.use(bodyparse.json()); //registering middleware 

app.post("/api/login",(req,res) => {
    checkData(req.body).then(isValid => {
        if (isValid) {
            
            res.cookie("username",req.body.username);
            res.status(200).send({});
        }
        else{
            res.status(401).send({}); 
        }
    });
});


app.post("/api/signup",(req,res) => {
    insertData(req.body);
})

app.listen(port, () => console.log('Listening on port 5000'));